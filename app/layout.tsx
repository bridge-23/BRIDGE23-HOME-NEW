import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bridge23.app'),
  title: 'Bridge23 - Superior Team and Community Management',
  description: 'Automated planning and task execution for teams and communities. AI-powered meeting assistant that helps maintain clear, organized communication across all channels.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ]
  },
  keywords: 'team management, community management, AI assistant, meeting automation, task management, AI Agent, AI Agent for teams, AI Agent for communities',
  openGraph: {
    title: 'Bridge23 - Superior Team and Community Management',
    description: 'Automated planning and task execution for teams and communities',
    url: 'https://www.bridge23.app',
    siteName: 'Bridge23',
    images: [{
      url: '/bridge23/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Bridge23 - AI-powered team and community management platform',
      type: 'image/png',
    }],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'og:image': 'https://www.bridge23.app/bridge23/og-image.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridge23 - Superior Team and Community Management',
    description: 'Automated planning and task execution for teams and communities',
    creator: '@bridge23ai',
    images: ['/bridge23/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <Navigation />
          <main className="pt-16 md:pt-20 flex-1">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}

