import Link from "next/link"
import { NavLink } from "@/components/ui/nav-link"
import { NavItem } from "@/types/navigation"

export function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.slice(0, -2).map((item) => (
        <NavLink key={item.label} {...item} />
      ))}
      <NavLink {...navItems[3]} />
      <NavLink {...navItems[4]} />
    </div>
  )
} 