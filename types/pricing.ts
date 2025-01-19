export interface PricingFeature {
  description: string
}

export interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: string
    yearly: string
  }
  features: PricingFeature[]
  buttonText: string
  isPopular?: boolean
  isDark?: boolean
}

