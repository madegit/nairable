import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import  LogoMarquee  from '@/components/LogoMarquee'
import { BentoGrid } from '@/components/bentogrid'
import { BetaBanner } from '@/components/betabanner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <LogoMarquee />
      <BentoGrid />
      <BetaBanner />
      <Footer />
    </main>
  )
}

