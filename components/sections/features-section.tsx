import { Bot, MessageSquare, Zap, Users } from 'lucide-react'
import { Feature } from "@/types/features"
import { FeatureCard } from "../features/feature-card"

const features: Feature[] = [
  {
    title: "Meticulous, organized conversations",
    description: "Your AI assistant helps maintain clear, organized communication across all channels.",
    icon: MessageSquare,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EZRx0C0jmZx6nkvaH1uFndBRTIPYTa.png"
  },
  {
    title: "Accurate, assigned tasks",
    description: "Never miss a follow-up again. Tasks are automatically assigned and tracked.",
    icon: Bot,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-pjrUJXpqCRXEGCK7hEPSgV7WwjAq5t.png"
  },
  {
    title: "Automate your workflow",
    description: "Easily keep your apps in sync and save hours with AI-powered automation.",
    icon: Zap,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mAx1hZc2sqSLXsekAs2Lvt1TVBsb6Z.png"
  },
  {
    title: "Find key moments, instantly",
    description: "Search through conversations with AI-powered search that understands context.",
    icon: Users,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-tstpp6JP97hlg8sPyXA7UOiFuKSKZH.png"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

