import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import LogoMarquee from "@/components/LogoMarquee";
import { BentoGrid } from "@/components/bentogrid";
import { DomainChecker } from "@/components/domain-checker";
import { BetaBanner } from "@/components/betabanner";
import { TeamSection } from "@/components/team-section";
import { ProjectBentoGrid } from "@/components/project-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <LogoMarquee />
      <BentoGrid />
      <TeamSection />
      <ProjectBentoGrid />
      <DomainChecker />
      <BetaBanner />
      <Footer />
    </main>
  );
}
