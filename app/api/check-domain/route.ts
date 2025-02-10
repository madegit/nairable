import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const domain = searchParams.get("domain")

  if (!domain) {
    return NextResponse.json({ error: "Domain parameter is required" }, { status: 400 })
  }

  const apiKey = process.env.WHOISXML_API_KEY
  if (!apiKey) {
    console.error("WHOISXML_API_KEY is not set")
    return NextResponse.json({ error: "API key is not configured" }, { status: 500 })
  }

  const apiUrl = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domain}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    return NextResponse.json({
      available: data.DomainInfo.domainAvailability === "AVAILABLE",
      domainName: data.DomainInfo.domainName,
    })
  } catch (error) {
    console.error("Error checking domain availability:", error)
    return NextResponse.json({ error: "Failed to check domain availability" }, { status: 500 })
  }
}

