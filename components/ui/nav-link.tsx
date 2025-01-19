import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavItem } from "@/types/navigation"

export function NavLink({ href, label, isButton }: NavItem) {
  if (isButton) {
    return (
      <Link href={href}>
        <Button className="bg-[#1E1E1E] text-white hover:bg-[#2D2D2D]">
          {label}
        </Button>
      </Link>
    )
  }

  return (
    <Link href={href} className="text-gray-600 hover:text-gray-900">
      {label}
    </Link>
  )
}

