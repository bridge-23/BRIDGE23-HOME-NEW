import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bridge23 - AI Assistant Platform',
  description: 'Your all-in-one AI assistant for conversations and community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="pt-16 md:pt-20 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
