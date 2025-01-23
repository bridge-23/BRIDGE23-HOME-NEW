import { type LucideIcon } from 'lucide-react'

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
  gradient?: string
  demoComponent?: React.ReactNode
}

