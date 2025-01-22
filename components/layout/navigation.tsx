"use client"

import { useState } from 'react'
import Link from "next/link"
import { NavItem } from "@/types/navigation"
import MobileMenuButton from "@/components/ui/MobileMenuButton"
import { DesktopNav } from "./navigation/desktop-nav"
import { MobileNav } from "./navigation/mobile-nav"

const navItems: NavItem[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/releases", label: "Releases" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "https://beta.bridge23.app/", label: "Log in" },
  { href: "https://beta.bridge23.app/", label: "Sign up", isButton: true },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-black">Bridge23</Link>
          <DesktopNav navItems={navItems} />
          <MobileMenuButton onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      <MobileNav 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </nav>
  )
}

