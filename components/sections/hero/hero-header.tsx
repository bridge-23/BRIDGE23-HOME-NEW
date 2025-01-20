import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function HeroHeader() {
  return (
    <div className="text-center mb-8 md:mb-16">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-4 md:mb-6">
           Superior Team and Community Management
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
      Agentic planning and task execution for teams and communities
      </p>
      <Link href="https://beta.bridge23.app/">
        <Button className="bg-[#FF5C35] text-white hover:bg-[#E54E2B] h-10 md:h-12 px-6 md:px-8 text-base md:text-lg">
          Start for free
        </Button>
      </Link>
    </div>
  )
}

