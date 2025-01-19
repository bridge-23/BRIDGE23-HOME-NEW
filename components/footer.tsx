import Link from "next/link"
import { Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Right Column */}
          <div className="space-y-4">
            <nav className="space-y-3">
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
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
              <a 
                href="https://twitter.com/bridge23ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://linkedin.com/company/bridge23inc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
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

