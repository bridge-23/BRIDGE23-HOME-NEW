'use client'

import { Card } from "@/components/ui/card"
import { useState } from 'react'
import { HeroHeader } from "./hero/hero-header"
import  SidebarNav from "@/components/sections/hero/sidebar-nav"
import { ChatPanel } from "./hero/chat-panel"
import { HomeView, GroupsView, ActionItemsView, AutomationsView, InsightsView } from "./hero/views"

const tabComponents = {
  Home: HomeView,
  Groups: GroupsView,
  'Action Items': ActionItemsView,
  Automations: AutomationsView,
  Insights: InsightsView,
}

export type TabKey = keyof typeof tabComponents;

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('Home')

  const ActiveComponent = tabComponents[activeTab]

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-16 md:pt-32 pb-8 md:pb-16">
      <div className="container mx-auto px-4">
        <HeroHeader />
        <div className="flex flex-col lg:flex-row gap-6 border rounded-[44px] p-4 md:p-6 bg-white/40 backdrop-blur-sm shadow-lg">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 lg:shrink-0 mb-6 lg:mb-0">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-2 md:p-4 h-full">
              <SidebarNav activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Card className="p-4 md:p-6 bg-white rounded-[32px] shadow-[0_0_20px_0_rgb(236,236,241)]">
              <ActiveComponent />
            </Card>
          </div>

          {/* Right Chat Panel */}
          <div className="w-full lg:w-64 lg:shrink-0 mt-6 lg:mt-0">
            <ChatPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

