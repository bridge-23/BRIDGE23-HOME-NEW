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
      monthly: "20.83",
      yearly: "16.67"
    },
    buttonText: "Start for free",
    features: [
      { description: "Meticulous notes, action items, and transcription for unlimited meetings" },
      { description: "AI-powered search across all your meetings" },
      { description: "Use the meeting assistant to ask questions about your meetings or do writing tasks" },
      { description: "Record in-person meetings and import audio/video recordings" },
      { description: "Video and audio playback" },
      { description: "Easily integrate with Slack, Notion, HubSpot, Salesforce, Attio, Linear, monday.com, Zapier, and more" },
      { description: "Generate custom insights with AI" },
      { description: "Automatically send out emails to meeting invitees with notes and action items" },
    ]
  },
  {
    name: "Team",
    description: "Perfect for collaborative teams",
    price: {
      monthly: "25",
      yearly: "20"
    },
    buttonText: "Start for free",
    isPopular: true,
    features: [
      { description: "Everything in Individual plan" },
      { description: "Share meetings with your team" },
      { description: "AI-powered search across all meetings you have access to" },
      { description: "Team-wide automations to generate insights with AI and integrate with other apps" },
      { description: "Unlimited, free viewers—team members you can share meetings with" },
      { description: "Custom data retention settings for your team" },
      { description: "Slack huddles support" },
      { description: "Meeting participant name and image customization" },
      { description: "Collaborate with comments inline on meeting transcripts to share thoughts on calls" },
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
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-4">
          Try it 7 days <span className="text-[#FF5C35]">for free</span>.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-8 md:mb-12">
          Subscribe if you love it.
        </h2>

        <div className="flex flex-col items-center gap-2 mb-8 md:mb-16">
          <Tabs defaultValue="monthly" value={billingPeriod} onValueChange={handlePeriodChange} className="w-[300px]">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200 p-1 rounded-lg">
              <TabsTrigger 
                value="monthly" 
                className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger 
                value="yearly"
                className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {billingPeriod === 'monthly' && (
            <span className="text-sm italic text-gray-600">
              Get two months free in the yearly plan
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

