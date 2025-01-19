import { Button } from "@/components/ui/button"
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Try it <span className="text-[#FF5C35]">free</span> for 7 days.{" "}
          <span className="block">Subscribe if you love it.</span>
        </h2>
        <Link href="https://beta.bridge23.app/">
          <Button className="bg-[#FF5C35] text-white hover:bg-[#E54E2B] h-12 px-8 text-lg">
            Start for free
          </Button>
        </Link>
      </div>
    </section>
  )
}

