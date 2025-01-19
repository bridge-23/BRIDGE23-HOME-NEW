'use client'

import { Card } from "@/components/ui/card"
import { useState } from 'react'
import { HeroHeader } from "./hero/hero-header"
import { SidebarNav } from "./hero/sidebar-nav"
import { ChatPanel } from "./hero/chat-panel"
import { HomeView, GroupsView, ActionItemsView, AutomationsView, InsightsView } from "./hero/views"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('Home')

  const tabComponents = {
    Home: HomeView,
    Groups: GroupsView,
    'Action Items': ActionItemsView,
    Automations: AutomationsView,
    Insights: InsightsView,
  }

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
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#11141A] tracking-tight">Marketing sync</h2>
                <div className="flex flex-col space-y-4">
                  <h3 className="text-sm font-bold text-[#807E96]">Action Items</h3>
                  <div className="space-y-4">
                    {[
                      {
                        image: "https://framerusercontent.com/images/RcsjmjTCZ5pJkS41DWAOYwaxvc.png",
                        name: "Nick White",
                        task: "Send product launch media kit",
                        description: "Send prepared media kit to Natalie at New York Times."
                      },
                      {
                        image: "https://framerusercontent.com/images/EkRkGmh0Z9kaBYzrZ6HVy0qWH28.png",
                        name: "Emma Ford",
                        task: "Confirm campaign color choices",
                        description: "Review ad mockups and confirm primary colors with Nick."
                      }
                    ].map((item, index) => (
                      <Card key={index} className="p-3 md:p-4 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-[34px] h-[34px] rounded-full bg-[#F4F4F8] flex items-center justify-center">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-5 h-5" />
                          </div>
                          <p className="font-medium text-sm md:text-[15px] text-[#333333]">{item.name}</p>
                        </div>
                        <p className="font-semibold text-sm md:text-[15px] text-[#141825]">{item.task}</p>
                        <p className="text-sm md:text-[15px] text-[#807E96]">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                  <div className="space-y-4 mt-6">
                    <h3 className="text-sm font-bold text-[#807E96]">Overview</h3>
                    <p className="text-sm md:text-[15px] text-[#333333] leading-[22px]">Emma and Nick finalized planning for the upcoming launch on Friday</p>
                    <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]"><span className="font-bold">$28,000</span> was agreed on as month one budget for paid ads</p>
                    <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]"><span className="font-bold">$28,000</span> was agreed on as month one budget for paid ads</p>
                    <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]"><span className="font-bold">$28,000</span> was agreed on as month one budget for paid ads</p>
                    <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]"><span className="font-bold">$28,000</span> was agreed on as month one budget for paid ads</p>
                  </div>
                </div>
              </div>
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

