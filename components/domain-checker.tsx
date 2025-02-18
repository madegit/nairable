"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUpRight, Search, Sparkles } from "lucide-react"

const domainExtensions = [".com", ".net", ".org", ".io", ".co", ".app"]

export const DomainChecker = () => {
  const [domain, setDomain] = useState("")
  const [result, setResult] = useState<null | { available: boolean; domainName: string }>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loadingMessage, setLoadingMessage] = useState("")

  const loadingMessages = [
    "Scanning the digital universe...",
    "Consulting the domain oracles...",
    "Pinging servers across galaxies...",
    "Decoding the matrix of domains...",
    "Asking AI for its opinion...",
  ]

  const getRandomLoadingMessage = useCallback(() => {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
  }, [])

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingMessage(getRandomLoadingMessage())
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [loading, getRandomLoadingMessage])

  useEffect(() => {
    if (domain.length > 2) {
      const newSuggestions = domainExtensions.map((ext) => `${domain}${ext}`).filter((d) => d !== domain)
      setSuggestions(newSuggestions)
    } else {
      setSuggestions([])
    }
  }, [domain])

  const checkDomain = async (domainToCheck: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/check-domain?domain=${encodeURIComponent(domainToCheck)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to check domain availability")
      }

      setResult(data)
    } catch (error) {
      console.error("Error checking domain:", error)
      setError("Oops! Our digital compass got a bit confused. Let&apos;s try again!")
    } finally {
      setLoading(false)
    }
  }

  const getAvailabilityMessage = () => {
    if (!result) return null
    if (result.available) {
      return (
        <div className="text-green-600 font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span>Woohoo! {result.domainName} is all yours for the taking!</span>
        </div>
      )
    } else {
      return (
        <div className="text-amber-600 font-semibold">
          <p>Aw, snap! {result.domainName} is already taken.</p>
          <p className="text-sm mt-2">
            But don&apos;t worry, great minds think alike! Try one of these creative alternatives:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>add &apos;get&apos; or &apos;try&apos; before your name</li>
            <li>use &apos;hq&apos; or &apos;app&apos; at the end</li>
            <li>try a different domain extension</li>
          </ul>
        </div>
      )
    }
  }

  return (
    <div className="max-w-3xl  m-5 md:mx-10 p-8 bg-[#E6F3FF] rounded-3xl">
      <h2 className="text-4xl font-bold tracking-tighter leading-tight mb-4">Discover Your Digital Identity</h2>
      <p className="text-gray-600 text-md tracking-tight mb-6">
        Let&apos;s find that perfect domain that screams &apos;you&apos;! Ready to make your mark on the web?
      </p>
      <div className="relative tracking-tight flex-grow mb-4">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter your brilliant business name"
          className="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-black focus:outline-none transition-all duration-300 ease-in-out"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 bg-white" />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => checkDomain(suggestion)}
            className="bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            {suggestion}
          </button>
        ))}
      </div>
      <button
        onClick={() => checkDomain(domain)}
        disabled={loading || !domain}
        className="bg-black text-white px-6 mt-[-20] tracking-tight py-2.5 rounded-xl inline-flex items-center gap-2 disabled:bg-gray-400 mb-4"
      >
        {loading ? "Checking..." : "Check Domain"}
        <ArrowUpRight className="w-5 h-5" />
      </button>
      {loading && <div className="text-blue-600 animate-pulse">{loadingMessage}</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {result && getAvailabilityMessage()}
    </div>
  )
}

