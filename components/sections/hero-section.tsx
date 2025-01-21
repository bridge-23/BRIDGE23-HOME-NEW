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
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8 md:pt-32 pb-4 md:pb-16">
      <div className="container mx-auto px-2 md:px-4">
        <HeroHeader />
        <div className="flex flex-col lg:flex-row gap-3 border rounded-[24px] md:rounded-[44px] p-2 md:p-4 bg-white/40 backdrop-blur-sm shadow-lg lg:h-[600px] max-w-[1200px] mx-auto">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 lg:shrink-0 min-h-[120px] lg:h-full mb-2 lg:mb-0">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 p-2 md:p-4 h-full">
              <SidebarNav activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 min-h-[300px] lg:min-h-0">
            <Card className="p-2 md:p-4 bg-white rounded-[20px] md:rounded-[32px] shadow-[0_0_20px_0_rgb(236,236,241)] h-full overflow-auto">
              <ActiveComponent />
            </Card>
          </div>
          {/* Right Chat Panel */}
          <div className="w-full lg:w-64 lg:shrink-0 min-h-[300px] lg:h-full mt-2 lg:mt-0">
            <ChatPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

