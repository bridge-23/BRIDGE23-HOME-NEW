import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { StartFreeButton } from "@/components/ui/start-free-button"

export function HeroHeader() {
  return (
    <div className="py-2 md:py-2 lg:py-10">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-6 md:mb-8 lg:mb-10">
            Superior AI Agents for Team Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12">
            Automate your planning and task execution
        </p>
        <StartFreeButton />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16">
        {/* <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl md:text-2xl font-bold text-gray-900">400</span>
          <span className="text-sm md:text-base">MAU beta v.15.0</span>
        </div>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" /> */}
        <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl md:text-2xl font-bold text-gray-900">3,300+</span>
          <span className="text-sm md:text-base">Total Users</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8">
        <a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Image
            src="/partners/ICP/ICP-Logo.png"
            alt="ICP Logo"
            width={80}
            height={28}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
        <a href="https://www.iex.ec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Image
            src="/partners/iExec/iExec-Logo.png"
            alt="iExec Logo"
            width={80}
            height={28}
            className="object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </a>
        <div className="h-4 w-px bg-gray-300 hidden sm:block" />
        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-sm md:text-base font-medium"> Triple Hackathon Champion</span>
        </div>
      </div>
    </div>
  )
}
