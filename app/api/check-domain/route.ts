import { NextResponse } from "next/server"

interface WhoisResponse {
  DomainInfo?: {
    domainName?: string
    domainAvailability?: string
  }
  ErrorMessage?: string
}

function isValidDomain(domain: string): boolean {
  const domainRegex = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/
  return domainRegex.test(domain)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let domain = searchParams.get("domain")

  if (!domain) {
    return NextResponse.json({ error: "Domain parameter is required" }, { status: 400 })
  }

  if (!domain.includes(".")) {
    if (isValidDomain(domain)) {
      domain += ".com"
    } else {
      return NextResponse.json({ error: "Invalid domain format" }, { status: 400 })
    }
  }

  const apiKey = process.env.WHOISXML_API_KEY
  if (!apiKey) {
    console.error("WHOISXML_API_KEY is not set")
    return NextResponse.json({ error: "API key is not configured" }, { status: 500 })
  }

  const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domain}`

  try {
    const response = await fetch(apiUrl)
    const data: WhoisResponse = await response.json()

    console.log("API Response for domain:", domain, JSON.stringify(data, null, 2))

    if (!data || !data.DomainInfo) {
      console.error("Invalid API response:", data)
      return NextResponse.json(
        {
          error: "Invalid response from domain availability service",
        },
        { status: 500 },
      )
    }

    if (data.ErrorMessage) {
      console.error("API Error:", data.ErrorMessage)
      return NextResponse.json(
        {
          error: data.ErrorMessage,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      available: data.DomainInfo.domainAvailability === "AVAILABLE",
      domainName: data.DomainInfo.domainName || domain,
    })
  } catch (error) {
    console.error("Error checking domain availability:", error)
    return NextResponse.json(
      {
        error: "Failed to check domain availability",
      },
      { status: 500 },
    )
  }
}

