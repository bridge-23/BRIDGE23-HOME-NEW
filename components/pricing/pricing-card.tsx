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
    <Card className={`relative ${plan.isDark ? 'bg-[#141925] text-white' : 'bg-white'} rounded-3xl`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          Popular
        </div>
      )}
      <CardHeader className="pb-8 pt-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className={plan.isDark ? "text-gray-300" : "text-gray-600"}>
          {plan.description}
        </p>
        <div className="mt-4 text-3xl font-bold">
          ${billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}/month
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Link href="https://beta.bridge23.app/" className="w-full">
          <Button 
            className={`w-full ${
              plan.isDark 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-[#FF5C35] hover:bg-[#E54E2B]'
            } text-white rounded-full py-6`}
          >
            {plan.buttonText}
          </Button>
        </Link>
        <ul className="space-y-4 text-left">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className={`w-5 h-5 mt-1 ${plan.isDark ? 'text-white' : 'text-[#FF5C35]'}`} />
              <span>{feature.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

