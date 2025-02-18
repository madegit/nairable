'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-5 space-y-6 pr-0 md:pr-20">
            <Link href="/" className="inline-block">
              <Image
                src="/Nairable2.png"
                alt="Nairable"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 max-w-md">
              Limitless Possibilities for Every Business.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 rounded-xl text-sm md:text-md border-white/20 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit"
                className="bg-[#00FF85] rounded-xl py-5 text-md font-bold tracking-tighter text-black hover:bg-[#00FF85]/90"
              >
                Subscribe
              </Button>
            </form>
          </div>

          

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-md md:text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm md:text-md text-gray-300 hover:text-[#00FF85] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm md:text-md text-gray-300 hover:text-[#00FF85] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm md:text-md text-gray-300 hover:text-[#00FF85] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-md md:text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/nairable" 
                className="text-gray-300 hover:text-[#00FF85] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://twitter.com/nairable/" 
                className="text-gray-300 hover:text-[#00FF85] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://instagram.com/nairabledotcom" 
                className="text-gray-300 hover:text-[#00FF85] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://github.com/madegit/nairable" 
                className="text-gray-300 hover:text-[#00FF85] transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm md:text-md">&copy; 2025 Nairable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

