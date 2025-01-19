import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-4">
          Earn <span className="text-[#FF5C35]">30%</span> commission as an affiliate
        </h1>
        <p className="text-lg md:text-xl text-[#4A5361] mb-8">
          Get <span className="font-semibold">$75+ per customer</span> referred.
        </p>
        <Link href="https://beta.bridge23.app/">
          <Button 
            className="bg-[#FF5C35] text-white hover:bg-[#E54E2B] h-12 px-8 text-lg rounded-full"
          >
            Register now
          </Button>
        </Link>
      </div>
    </div>
  )
}

