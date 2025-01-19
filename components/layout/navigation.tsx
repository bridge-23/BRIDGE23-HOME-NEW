"use client"

import { useState } from 'react'
import { NavLink } from "@/components/ui/nav-link"
import { NavItem } from "@/types/navigation"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileMenuButton from "@/components/ui/MobileMenuButton"

const navItems: NavItem[] = [
  { href: "/releases", label: "Releases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "https://beta.bridge23.app/", label: "Log in" },
  { href: "https://beta.bridge23.app/", label: "Sign up", isButton: true },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#FF5C35]">Bridge23</Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -2).map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
            <NavLink {...navItems[3]} />
            <NavLink {...navItems[4]} />
          </div>
          <MobileMenuButton onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden shadow-lg border-t">
          <div className="max-w-full mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mb-auto">
              {navItems.slice(0, -2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-4 py-4">
              <Button
                variant="outline"
                className="w-full h-14 text-lg bg-[#1E1E1E] text-white hover:bg-[#2D2D2D] rounded-full"
                onClick={() => {
                  window.location.href = "https://beta.bridge23.app/";
                  setIsMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button
                className="w-full h-14 text-lg bg-[#FF5C35] text-white hover:bg-[#E54E2B] rounded-full"
                onClick={() => {
                  window.location.href = "https://beta.bridge23.app/";
                  setIsMenuOpen(false);
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

