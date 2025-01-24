import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from 'lucide-react'
import Link from 'next/link'
import { PricingPlan } from "@/types/pricing"

interface PricingCardProps {
  plan: PricingPlan
  billingPeriod: 'monthly' | 'yearly'
}

export function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  return (
    <div className={`flex flex-col h-full p-8 rounded-3xl shadow-lg text-left ${plan.isDark ? 'bg-[#141925] text-white' : 'bg-white'}`}>
      {/* Header - Fixed Height */}
      <div className="h-[120px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-left">{plan.name}</h3>
          {plan.isPopular && (
            <span className="px-3 py-1 text-sm font-medium text-[#4262FF] bg-[#EEF1FF] rounded-full flex-shrink-0">
              Popular
            </span>
          )}
        </div>
        <p className={`text-base text-left ${plan.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {plan.description}
        </p>
      </div>

      {/* Pricing - Fixed Height */}
      <div className="h-[100px]">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-left">
            {plan.price[billingPeriod] === "Custom" ? "" : "$"}
            {plan.price[billingPeriod]}
          </span>
          {plan.price[billingPeriod] !== "Custom" && (
            <span className={`text-left ${plan.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              / month
            </span>
          )}
        </div>
        {billingPeriod === 'yearly' && plan.price[billingPeriod] !== "Custom" && (
          <p className="text-sm text-[#4262FF] mt-2 text-left">
            Save ${((Number(plan.price.monthly) - Number(plan.price.yearly)) * 12).toFixed(2)} a year
          </p>
        )}
      </div>

      {/* Features - Flex Grow */}
      <div className="flex-grow min-h-[300px]">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className={`w-5 h-5 mt-1 flex-shrink-0 ${plan.isDark ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={`text-sm text-left ${plan.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button - Fixed Height */}
      <div className="h-[60px] mt-8">
        <button
          className={`w-full h-full rounded-2xl font-medium transition-colors
            ${plan.isDark 
              ? 'bg-white text-[#141925] hover:bg-gray-100' 
              : 'bg-[#141925] text-white hover:bg-[#2D3443]'}`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  )
}

