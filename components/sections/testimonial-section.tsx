"use client"

import { Testimonial } from "@/types/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Bridge23's AI Assistant Prometheus has revolutionized our development workflow. The intelligent code suggestions and real-time debugging capabilities have increased our team's productivity by 300%. It's like having a senior developer available 24/7.",
    name: "Dr. Emily Chen",
    title: "CTO",
    company: "TechVision Labs",
    image: "/testimonials/emily-chen.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "As a startup founder, time is incredibly precious. Prometheus has been a game-changer for our development team. Its ability to understand complex codebases and suggest optimizations has cut our development time in half.",
    name: "Marcus Rodriguez",
    title: "Founder & CEO",
    company: "InnovateTech",
    image: "/testimonials/marcus-rodriguez.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "The natural language processing capabilities of Prometheus are unmatched. It understands context perfectly and provides solutions that are not just technically sound but also align with our business logic. A must-have tool for modern development teams.",
    name: "Sarah Williams",
    title: "Lead Developer",
    company: "CloudScale Solutions",
    image: "/testimonials/sarah-williams.jpg",
    rating: 5
  },
  {
    id: 4,
    quote: "Prometheus has transformed how we approach code reviews and documentation. Its ability to explain complex code patterns and suggest improvements has significantly enhanced our team's learning curve and code quality.",
    name: "Dr. James Park",
    title: "VP of Engineering",
    company: "DataFlow Systems",
    image: "/testimonials/james-park.jpg",
    rating: 5
  }
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Trusted by Leading Tech Teams
          </h2>
          <p className="text-xl text-gray-600">
            Discover how Bridge23's AI Assistant Prometheus is transforming development workflows
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-gray-100">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.title} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselNext className="h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

