"use client"

import { useState } from 'react'
import { NavLink } from "@/components/ui/nav-link"
import { NavItem } from "@/types/navigation"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#FF5C35]">Bridge23</Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -2).map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
            <NavLink {...navItems[3]} />
            <NavLink {...navItems[4]} />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
            
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col">
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
              <div className="space-y-4 py-8">
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
        </div>
      )}
    </nav>
  )
}

