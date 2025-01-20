'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <nav className="space-y-3">
              <Link href="/pricing" className="block text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/releases" className="block text-gray-600 hover:text-gray-900">
                Releases
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/affiliates" className="block text-gray-600 hover:text-gray-900">
                Affiliates
              </Link>
              <Link href="/desktop" className="block text-gray-600 hover:text-gray-900">
                Bridge23 for desktop
              </Link>
            </nav>
          </div>

          {/* Middle Column - Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Stay updated</h3>
            <p className="text-gray-600">Subscribe to our newsletter for updates and news.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <nav className="space-y-3">
              <a 
                href="mailto:support@bridge23.app" 
                className="block text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </a>
              <Link href="/security" className="block text-gray-600 hover:text-gray-900">
                Security
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </nav>
            <div className="flex gap-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-transparent"
              >
                <a 
                  href="https://twitter.com/bridge23ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Image 
                    src="/social/x/X-logo.svg" 
                    alt="X (formerly Twitter)"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                  <span className="sr-only">X (formerly Twitter)</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-transparent"
              >
                <a 
                  href="https://linkedin.com/company/bridge23inc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Image 
                    src="/social/linkedin/LI-Logo.svg" 
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Bridge23 AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

