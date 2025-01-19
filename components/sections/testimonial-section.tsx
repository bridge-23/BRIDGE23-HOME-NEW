import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-none shadow-xl">
          <CardContent className="p-12 text-center">
            <p className="text-2xl md:text-3xl font-medium italic mb-8">
              "Genuinely, this AI assistant is one of my favorite tools. Love it so much—not sure how I managed team communication without it. I feel{" "}
              <span className="text-[#FF5C35]">10X more productive</span> with it. Seriously, it's awesome!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-gray-600">Product Lead, TechCorp</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

