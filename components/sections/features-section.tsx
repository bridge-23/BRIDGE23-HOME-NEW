import { Bot, MessageSquare, Zap, Users } from 'lucide-react'
import { Feature } from "@/types/features"
import { FeatureCard } from "../features/feature-card"

const features: Feature[] = [
  {
    title: "Meticulous, organized conversations",
    description: "Your AI assistant helps maintain clear, organized communication across all channels.",
    icon: MessageSquare,
    image: "/features/organized-conversations-demo.svg"
  },
  {
    title: "Accurate, assigned tasks",
    description: "Never miss a follow-up again. Tasks are automatically assigned and tracked.",
    icon: Bot,
    image: "/features/task-assignment-demo.svg"
  },
  {
    title: "Automate your workflow",
    description: "Easily keep your apps in sync and save hours with AI-powered automation.",
    icon: Zap,
    image: "/features/automation-workflow-demo.svg"
  },
  {
    title: "Find key moments, instantly",
    description: "Search through conversations with AI-powered search that understands context.",
    icon: Users,
    image: "/features/search-demo.svg"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-center mb-12">
          Get the most out of every meeting
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

