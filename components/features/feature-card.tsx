import { Card, CardContent } from "@/components/ui/card"
import { Feature } from "@/types/features"
import { StartFreeButton } from "../ui/start-free-button"
import Image from "next/image"

const gradients = {
  conversations: "from-blue-50 to-indigo-50",
  tasks: "from-emerald-50 to-teal-50",
  workflow: "from-amber-50 to-orange-50",
  search: "from-rose-50 to-pink-50"
}

export function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const gradientKeys = Object.keys(gradients)
  const gradient = gradients[gradientKeys[index % gradientKeys.length] as keyof typeof gradients]

  return (
    <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 h-full">
          <div className="p-8 flex flex-col justify-center">
            <div className={`rounded-lg w-12 h-12 bg-opacity-10 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 ${
              index === 0 ? "bg-blue-500 text-blue-500" :
              index === 1 ? "bg-emerald-500 text-emerald-500" :
              index === 2 ? "bg-amber-500 text-amber-500" :
              "bg-rose-500 text-rose-500"
            }`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-8">{feature.description}</p>
            <div className="flex justify-center">
              <StartFreeButton />
            </div>
          </div>
          <div className={`bg-gradient-to-br ${gradient} p-8 flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
            <Image 
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

