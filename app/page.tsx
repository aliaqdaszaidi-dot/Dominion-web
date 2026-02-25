import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { JoinSection } from "@/components/join-section"
import { CommunitySection } from "@/components/community-section"
import { FactionsSection } from "@/components/factions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FactionsSection />
      <CommunitySection />
      <JoinSection />
      <Footer />
    </main>
  )
}
