import { Card, CardContent } from "@/components/ui/card"
import { Feature } from "@/types/features"

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="overflow-hidden border-none shadow-xl">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 h-full">
          <div className="p-8 flex flex-col justify-center">
            <div className="rounded-lg w-12 h-12 bg-[#FF5C35]/10 flex items-center justify-center text-[#FF5C35] mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
            <img
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

