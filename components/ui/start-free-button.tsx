import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function StartFreeButton() {
  return (
    <Link href="https://beta.bridge23.app/">
      <Button className="bg-[#FF5C35] text-white hover:bg-gray-800 h-12 px-8 text-lg transition-all duration-200 transform hover:scale-105">
        Start for free
      </Button>
    </Link>
  )
} 