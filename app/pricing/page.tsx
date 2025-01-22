'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import { PricingCard } from "@/components/pricing/pricing-card"
import { PricingPlan } from "@/types/pricing"

const plans: PricingPlan[] = [
  {
    name: "Individual",
    description: "Ideal for solo creators and independent professionals",
    price: {
      monthly: "20.00",
      yearly: "14.00"
    },
    buttonText: "Start for free",
    features: [
      { description: "Meticulous notes, action items, and summary for unlimited groups" },
      { description: "AI-powered search across all your groups" },
      { description: "Use the group assistant to ask questions about your groups or do writing tasks" },
      { description: "Record in-person meetings and import audio/video recordings" },
      { description: "Video and audio playback" },
      { description: "Easily integrate with Slack, Notion, HubSpot, Salesforce, Attio, Linear, monday.com, Zapier, and more" },
      { description: "Generate custom insights with AI" },
    ]
  },
  {
    name: "Team",
    description: "Perfect for collaborative teams",
    price: {
      monthly: "25.00",
      yearly: "20.00"
    },
    buttonText: "Start for free",
    isPopular: true,
    features: [
      { description: "Everything in Individual plan" },
      { description: "Share groups with your team" },
      { description: "AI-powered search across all groups you have access to" },
      { description: "Team-wide automations to generate insights with AI and integrate with other apps" },
      { description: "Unlimited, free viewers—team members you can share groups with" },
      { description: "Custom data retention settings for your team" },
      { description: "Slack huddles support" },
    ]
  },
  {
    name: "Enterprise",
    description: "Talk to us to help your organization adopt Bridge23",
    price: {
      monthly: "Custom",
      yearly: "Custom"
    },
    buttonText: "Contact sales",
    isDark: true,
    features: [
      { description: "Everything in Team plan" },
      { description: "Priority support" },
      { description: "Onboarding and automation support" },
      { description: "Advanced security controls" },
    ]
  }
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const handlePeriodChange = (value: string) => {
    setBillingPeriod(value as 'monthly' | 'yearly')
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-4">
          Try it 7 days <span className="text-[#FF5C35]">for free</span>.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-8 md:mb-12">
          Subscribe if you love it.
        </h2>

        <div className="flex flex-col items-center gap-2 mb-8 md:mb-16">
          <Tabs defaultValue="monthly" value={billingPeriod} onValueChange={handlePeriodChange} className="w-full max-w-[300px]">
            <TabsList className="grid w-full grid-cols-2 p-1 rounded-full bg-[#F8F8FB]">
              <TabsTrigger 
                value="monthly" 
                className="rounded-full px-6 py-2.5 text-sm font-medium text-[#11141A] data-[state=active]:bg-white data-[state=active]:text-[#11141A] data-[state=active]:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger 
                value="yearly"
                className="rounded-full px-6 py-2.5 text-sm font-medium text-[#11141A] data-[state=active]:bg-white data-[state=active]:text-[#11141A] data-[state=active]:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {billingPeriod === 'yearly' && (
            <span className="text-sm text-[#4262FF]">
              Get two months free
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

