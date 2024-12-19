import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function NavHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/70 backdrop-blur-md tracking-tight">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/Nairable.png" 
              alt="Nairable Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-gray-600">Home</Link>
            <Link href="/about" className="text-sm hover:text-gray-600">About</Link>
            <Link href="/gallery" className="text-sm hover:text-gray-600">Gallery</Link>
            <Link href="/team" className="text-sm hover:text-gray-600">Team</Link>
            <Link href="/member" className="text-sm hover:text-gray-600">Member</Link>
          </div>
        </div>
        <Button variant="outline" className="bg-transparent rounded-xl text-black border-black hover:bg-gray-800 px-3 py-1 md:px-4 md:py-2">
          Contact us
        </Button>
      </nav>
    </header>
  )
}

