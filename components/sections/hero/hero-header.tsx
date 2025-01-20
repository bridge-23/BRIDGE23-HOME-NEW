import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { StartFreeButton } from "@/components/ui/start-free-button"

export function HeroHeader() {
  return (
    <div className="py-2 md:py-2 lg:py-10">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-6 md:mb-8 lg:mb-10">
            Superior Team and Community Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12">
            Automated planning and task execution for teams and communities
        </p>
        <StartFreeButton />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16">
        <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl md:text-2xl font-bold text-gray-900">400</span>
          <span className="text-sm md:text-base">MAU beta v.15.0</span>
        </div>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
        <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl md:text-2xl font-bold text-gray-900">3,300+</span>
          <span className="text-sm md:text-base">Total Users</span>
        </div>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
        <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl md:text-2xl font-bold text-gray-900">$180K</span>
          <span className="text-sm md:text-base">Funds Secured</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8">
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/X%20Dev%20Updates%20%20(3)-fVFePGGQDbUrixB9HaJaM1slkQg58p.png"
            alt="DFINITY Foundation Logo"
            className="h-6 md:h-7 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
          />
          <span className="text-sm md:text-base font-medium">DFINITY - IExec Grant Recipient</span>
        </div>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-sm md:text-base font-medium">🏆 Triple Hackathon Champion</span>
        </div>
      </div>
    </div>
  )
}
