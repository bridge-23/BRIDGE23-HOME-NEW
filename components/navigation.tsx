import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#FF5C35]">
            Bridge23
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/releases" className="text-gray-600 hover:text-gray-900">
              Releases
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/affiliates" className="text-gray-600 hover:text-gray-900">
              Affiliates
            </Link>
            <Link href="https://beta.bridge23.app/" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link href="https://beta.bridge23.app/">
              <Button className="bg-[#1E1E1E] text-white hover:bg-[#2D2D2D]">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

