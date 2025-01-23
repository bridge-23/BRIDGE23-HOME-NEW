import { Bot, MessageSquare, Zap, Users } from 'lucide-react'
import { Feature } from "@/types/features"
import { FeatureCard } from '../features/feature-card'
import { GroupDemo } from '../features/group-demo'
import { TasksDemo } from '../features/tasks-demo'
import { AutomationDemo } from '../features/automation-demo'
import { SearchDemo } from '../features/search-demo'

const features: Feature[] = [
  {
    title: "Meticulous, organized groups",
    description: "Your AI assistant helps maintain clear, organized communication across all groups.",
    icon: MessageSquare,
    demoComponent: <GroupDemo />
  },
  {
    title: "Accurate, assigned tasks",
    description: "Never miss a follow-up again. Tasks are automatically assigned and tracked.",
    icon: Bot,
    demoComponent: <TasksDemo />
  },
  {
    title: "Automate your workflow",
    description: "Easily keep your apps in sync and save hours with AI-powered automation.",
    icon: Zap,
    demoComponent: <AutomationDemo />
  },
  {
    title: "Find key moments, instantly",
    description: "Search through groups with AI-powered search that understands context.",
    icon: Users,
    demoComponent: <SearchDemo />
  }
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

