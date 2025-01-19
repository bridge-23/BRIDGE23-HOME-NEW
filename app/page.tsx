import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { GrantsSection } from "@/components/sections/grants-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <TestimonialSection />
      <GrantsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}