import { CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import type { TabKey } from "@/components/sections/hero-section"
import SidebarNav from "./sidebar-nav"
import { ChatPanel } from "./chat-panel"
import { HeroHeader } from "./hero-header"

interface ChatGroup {
  id: string
  name: string
  source: "telegram" | "whatsapp" | "x" | "discord"
  members: number
  lastMessage: string
  lastActivity: string
}

const mockGroups: ChatGroup[] = [
  {
    id: "1",
    name: "AI Developers Hub",
    source: "telegram",
    members: 1250000,
    lastMessage: "Check out this new LLM paper! The results are quite impressive...",
    lastActivity: "2 min ago",
  },
  {
    id: "2",
    name: "Bridge23 Community",
    source: "whatsapp",
    members: 38500,
    lastMessage: "Anyone tried the new feature? I found some interesting use cases...",
    lastActivity: "5 min ago",
  },
  {
    id: "3",
    name: "Tech Updates",
    source: "x",
    members: 2100000,
    lastMessage: "Breaking: New AI breakthrough in natural language processing...",
    lastActivity: "12 min ago",
  },
  {
    id: "4",
    name: "Bridge23 Discord",
    source: "discord",
    members: 85000,
    lastMessage: "New feature announcement: Bridge23 now supports Discord integration!",
    lastActivity: "1 min ago",
  },
]

const sourceIcons = {
  telegram: {
    src: '/social/telegram/TelegramLogo.png',
    bgColor: 'bg-[#2AABEE]',
    iconClass: 'w-full h-full object-contain'
  },
  whatsapp: {
    src: "/social/whatsapp/WhatsApp-Logo.png",
    bgColor: "bg-[#25D366]",
    iconClass: "w-full h-full object-contain",
  },
  x: {
    src: "/social/x/X-logo.svg",
    bgColor: "bg-black",
    iconClass: "w-full h-full object-contain",
  },
  discord: {
    src: "/social/discord/Discord-logo.png",
    bgColor: "bg-[#5865F2]",
    iconClass: "w-full h-full object-contain",
  },
}

const sourceColors = {
  telegram: "bg-blue-100 text-blue-800",
  whatsapp: "bg-green-100 text-green-800",
  x: "bg-gray-100 text-gray-800",
  discord: "bg-purple-100 text-purple-800",
}

const formatMemberCount = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return count.toLocaleString()
}

export function HomeView() {
  return (
    <div className="space-y-6 p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#11141A] tracking-tight"> Discord Group Sprint 7 </h2>
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#807E96] mb-4">Summary</h3>
          <div className="space-y-3">
            {[
              {
                image: "/team/Wira.png",
                name: "Wira",
                task: "Create release note",
                description: "Detailed informaition for security release",
              },
              {
                image: "/bridge23/Centurio.png",
                name: "Agent Centurio",
                task: "Draft for Roadmap on sprint 8",
                description: "Take info from Seva for sprint 8 and CMO",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#F4F4F8] flex items-center justify-center overflow-hidden p-[2px] border border-[#4262FF]/10 transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={42}
                      height={42}
                      className="w-full h-full object-cover rounded-full"
                      priority
                      onError={(e) => {
                        // @ts-ignore
                        e.target.src = "/bridge23/Agent.png"
                      }}
                    />
                  </div>
                  <p className="font-medium text-sm md:text-[15px] text-[#333333]">{item.name}</p>
                </div>
                <p className="font-semibold text-sm md:text-[15px] text-[#141825] px-1">{item.task}</p>
                <p className="text-sm md:text-[15px] text-[#807E96] px-1">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#807E96] mb-4">Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-[#4262FF] animate-pulse">✨</span>
              <p className="text-sm md:text-[15px] text-[#333333] leading-[22px]">
                Centurio make deep research for Atlasian integration
              </p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-[#4262FF] animate-pulse">✨</span>
              <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]">
                Seva make blueprint for new feature
              </p>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-[#4262FF] animate-pulse">✨</span>
              <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]">
                Seva and Wira make proposal for new feature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GroupsView() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#11141A]">Groups</h3>
          <p className="text-[#807E96] text-sm">Manage your connected chat groups from different platforms</p>
        </div>
        <Button 
          className="mt-6 sm:mt-0 bg-[#FF5C35] text-white hover:bg-[#E54E2B]"
          size="sm"
        >
          Add New Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {mockGroups.map((group) => (
          <Card
            key={group.id}
            className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-2 rounded-[24px] overflow-hidden group"
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4 relative">
              <div className="flex items-start space-x-4 min-w-0">
                <div
                  className={`relative w-12 h-12 shrink-0 rounded-xl overflow-hidden ${sourceIcons[group.source].bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Image
                    src={sourceIcons[group.source].src || "/placeholder.svg"}
                    alt={group.source}
                    width={28}
                    height={28}
                    className={`${sourceIcons[group.source].iconClass} brightness-0 invert p-2`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold truncate pr-2 group-hover:text-[#4262FF] transition-colors duration-200">
                      {group.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={`${sourceColors[group.source]} text-xs px-3 py-1 rounded-full font-medium ml-2`}
                    >
                      {formatMemberCount(group.members)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-muted-foreground">
                      via {group.source.charAt(0).toUpperCase() + group.source.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="space-y-4">
                <CardDescription className="mt-2 line-clamp-2 text-sm text-[#666] group-hover:text-[#333] transition-colors duration-200">
                  {group.lastMessage}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">{group.lastActivity}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs font-medium hover:bg-[#4262FF] hover:text-white transition-colors duration-200 rounded-full px-4"
                  >
                    View Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state for when there are no groups */}
      {mockGroups.length === 0 && (
        <Card className="p-8 text-center">
          <div className="space-y-4">
            <div
              className={`mx-auto w-12 h-12 rounded-full ${sourceIcons.telegram.bgColor} flex items-center justify-center`}
            >
              <Image
                src={sourceIcons.telegram.src || "/placeholder.svg"}
                alt="Add groups"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">No groups yet</h3>
              <p className="text-sm text-muted-foreground">Start by connecting your first chat group</p>
            </div>
            <Button className="bg-[#FF5C35] text-white hover:bg-[#E54E2B]" size="sm">
              Connect Group
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}

export function ActionItemsView() {
  return (
    <div className="space-y-6 p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#11141A] tracking-tight">Action Items</h2>
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#807E96] mb-4">Tasks</h3>
          <div className="space-y-3">
            {[
              {
                task: "Review product launch materials",
                status: "In Progress",
                dueDate: "Today",
                priority: "High",
              },
              {
                task: "Schedule team meeting for next week",
                status: "Pending",
                dueDate: "Tomorrow",
                priority: "Medium",
              },
              {
                task: "Update API documentation",
                status: "Not Started",
                dueDate: "Next Week",
                priority: "Low",
              },
              {
                task: "Review pull requests",
                status: "In Progress",
                dueDate: "Today",
                priority: "High",
              },
              {
                task: "Prepare sprint retrospective",
                status: "Not Started",
                dueDate: "Friday",
                priority: "Medium",
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="group p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3 
                hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50/50 cursor-pointer
                hover:border-[#4262FF]/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-[#4262FF] group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3" />
                    <p className="font-medium text-sm md:text-[15px] text-[#333333] group-hover:text-[#4262FF] transition-colors duration-300">
                      {item.task}
                    </p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-[#F4F4F8] text-[#4262FF] text-xs group-hover:bg-[#4262FF] group-hover:text-white transition-all duration-300 
                    ${item.dueDate === 'Today' ? 'animate-pulse' : ''}`}
                  >
                    {item.dueDate}
                  </Badge>
                </div>
                <div className="flex justify-between items-center px-1">
                  <p className="text-sm md:text-[15px] text-[#807E96] group-hover:text-[#666] transition-colors duration-300">
                    {item.status}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      item.priority === 'High' ? 'text-red-500 bg-red-50' :
                      item.priority === 'Medium' ? 'text-yellow-500 bg-yellow-50' :
                      'text-green-500 bg-green-50'
                    } group-hover:opacity-100 opacity-70 transition-opacity duration-300`}
                  >
                    {item.priority}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function AutomationsView() {
  return (
    <div className="space-y-6 p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#11141A] tracking-tight">Automations</h2>
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#807E96] mb-4">Workflows</h3>
          <div className="space-y-3">
            <Card className="p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3">
              <p className="text-[#807E96] text-sm md:text-[15px]">Set up workflows to automate your tasks.</p>
              <Button className="bg-[#4262FF] text-white hover:bg-[#3251EE] transition-colors">
                Create New Automation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InsightsView() {
  return (
    <div className="space-y-6 p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#11141A] tracking-tight">Insights</h2>
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#807E96] mb-4">Analytics</h3>
          <div className="space-y-3">
            <Card className="p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3">
              <p className="text-[#807E96] text-sm md:text-[15px]">
                Analytics and insights for your projects and teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card className="p-3 border border-[rgba(182,182,209,0.15)] rounded-2xl bg-[#F4F4F8]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Total Tasks</p>
                    <Badge variant="secondary" className="bg-white text-[#4262FF]">
                      24
                    </Badge>
                  </div>
                </Card>
                <Card className="p-3 border border-[rgba(182,182,209,0.15)] rounded-2xl bg-[#F4F4F8]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Completed</p>
                    <Badge variant="secondary" className="bg-white text-[#4262FF]">
                      18
                    </Badge>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Home")

  const tabComponents = {
    Home: HomeView,
    Groups: GroupsView,
    "Action Items": ActionItemsView,
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

