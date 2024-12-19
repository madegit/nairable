import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import  LogoMarquee  from '@/components/LogoMarquee'
import { TopGainers } from '@/components/top-gainers'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <LogoMarquee />
      <TopGainers />
      <Footer />
    </main>
  )
}

