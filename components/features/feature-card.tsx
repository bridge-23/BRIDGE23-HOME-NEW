import { Card, CardContent } from "@/components/ui/card"
import { Feature } from "@/types/features"
import { StartFreeButton } from "../ui/start-free-button"

const gradients = {
  conversations: "from-blue-50 to-indigo-50",
  tasks: "from-emerald-50 to-teal-50",
  workflow: "from-amber-50 to-orange-50",
  search: "from-rose-50 to-pink-50"
}

export function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const gradientKeys = Object.keys(gradients)
  const gradient = feature.gradient || gradients[gradientKeys[index % gradientKeys.length] as keyof typeof gradients]

  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 max-w-[1200px] mx-auto">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 h-full min-h-[500px]">
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <div className={`rounded-lg w-14 h-14 bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110 ${
              index === 0 ? "bg-blue-500 text-blue-500" :
              index === 1 ? "bg-emerald-500 text-emerald-500" :
              index === 2 ? "bg-amber-500 text-amber-500" :
              "bg-rose-500 text-rose-500"
            }`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
            <p className="text-gray-600 text-lg mb-10">{feature.description}</p>
            <div className="flex justify-start">
              <StartFreeButton />
            </div>
          </div>
          <div className={`bg-gradient-to-br ${gradient} p-8 lg:p-12 flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
            {feature.demoComponent}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

