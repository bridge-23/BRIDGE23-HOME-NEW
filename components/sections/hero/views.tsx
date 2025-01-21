import { CheckSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from 'react'
import { TabKey } from '@/components/sections/hero-section'
import SidebarNav from './sidebar-nav'
import { ChatPanel } from './chat-panel'
import { HeroHeader } from './hero-header'

interface ChatGroup {
  id: string
  name: string
  source: 'telegram' | 'whatsapp' | 'x'
  members: number
  lastMessage: string
  lastActivity: string
}

const mockGroups: ChatGroup[] = [
  {
    id: '1',
    name: 'AI Developers Hub',
    source: 'telegram',
    members: 1250000,
    lastMessage: 'Check out this new LLM paper! The results are quite impressive...',
    lastActivity: '2 min ago'
  },
  {
    id: '2',
    name: 'Bridge23 Community',
    source: 'whatsapp',
    members: 38500,
    lastMessage: 'Anyone tried the new feature? I found some interesting use cases...',
    lastActivity: '5 min ago'
  },
  {
    id: '3',
    name: 'Tech Updates',
    source: 'x',
    members: 2100000,
    lastMessage: 'Breaking: New AI breakthrough in natural language processing...',
    lastActivity: '12 min ago'
  }
]

const sourceIcons = {
  telegram: {
    src: '/social/telegram/TelegramLogo.png',
    bgColor: 'bg-[#2AABEE]',
    iconClass: 'w-4 h-4'
  },
  whatsapp: {
    src: '/social/whatsapp/WhatsApp-Logo.svg',
    bgColor: 'bg-[#25D366]',
    iconClass: 'w-4 h-4'
  },
  x: {
    src: '/social/x/X-logo.svg',
    bgColor: 'bg-black',
    iconClass: 'w-3.5 h-3.5'
  }
}

const sourceColors = {
  telegram: 'bg-blue-100 text-blue-800',
  whatsapp: 'bg-green-100 text-green-800',
  x: 'bg-gray-100 text-gray-800'
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
                  image: "/team/Wira.JPG",
                  name: "Wira",
                  task: "Create release note",
                  description: "Detailed informaition for security release"
                },
                {
                  image: "/bridge23/Centurio.png",
                  name: "Agent Centurio",
                  task: "Draft for Roadmap on sprint 8",
                  description: "Take info from Seva for sprint 8 and CMO"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#F4F4F8] flex items-center justify-center overflow-hidden p-[2px] border border-[#4262FF]/10 transition-transform duration-200 group-hover:scale-105">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover rounded-full" />
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
                <p className="text-sm md:text-[15px] text-[#333333] leading-[22px]">Centurio make deep research for Atlasian integration</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-[#4262FF] animate-pulse">✨</span>
                <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]">Seva make blueprint for new feature</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-[#4262FF] animate-pulse">✨</span>
                <p className="text-sm md:text-[15px] text-[#1C1B1B] leading-[22px]">Seva and Wira make proposal for new feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export function GroupsView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#11141A]">Groups</h3>
          <p className="text-[#807E96] text-sm">Manage your connected chat groups from different platforms</p>
        </div>
        <Button 
          className="mt-4 sm:mt-0 bg-[#FF5C35] text-white hover:bg-[#E54E2B]"
          size="sm"
        >
          Add New Group
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockGroups.map((group) => (
          <Card 
            key={group.id} 
            className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <div className={`relative w-8 h-8 rounded-full overflow-hidden ${sourceIcons[group.source].bgColor} flex items-center justify-center`}>
                  <Image
                    src={sourceIcons[group.source].src}
                    alt={group.source}
                    width={24}
                    height={24}
                    className={`${sourceIcons[group.source].iconClass} brightness-0 invert`}
                  />
                </div>
                <div>
                  <CardTitle className="text-sm font-medium">
                    {group.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">
                      via {group.source.charAt(0).toUpperCase() + group.source.slice(1)}
                    </p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground hidden xs:block">
                      {formatMemberCount(group.members)} members
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge 
                  variant="secondary" 
                  className={`${sourceColors[group.source]} text-xs px-2 py-0.5`}
                >
                  {formatMemberCount(group.members)}
                </Badge>
                <span className="text-[10px] text-muted-foreground hidden sm:block">
                  members
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <CardDescription className="mt-2 line-clamp-2 text-sm">
                  {group.lastMessage}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-muted-foreground">
                      {group.lastActivity}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
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
            <div className={`mx-auto w-12 h-12 rounded-full ${sourceIcons.telegram.bgColor} flex items-center justify-center`}>
              <Image
                src={sourceIcons.telegram.src}
                alt="Add groups"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">No groups yet</h3>
              <p className="text-sm text-muted-foreground">
                Start by connecting your first chat group
              </p>
            </div>
            <Button 
              className="bg-[#FF5C35] text-white hover:bg-[#E54E2B]"
              size="sm"
            >
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
                dueDate: "Today"
              },
              {
                task: "Schedule team meeting for next week",
                status: "Pending",
                dueDate: "Tomorrow"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-4 md:p-5 border-2 border-[rgba(182,182,209,0.32)] rounded-[32px] space-y-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50/50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-[#4262FF]" />
                    <p className="font-medium text-sm md:text-[15px] text-[#333333]">{item.task}</p>
                  </div>
                  <Badge variant="secondary" className="bg-[#F4F4F8] text-[#4262FF] text-xs">
                    {item.dueDate}
                  </Badge>
                </div>
                <p className="text-sm md:text-[15px] text-[#807E96] px-1">{item.status}</p>
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
              <Button className="bg-[#4262FF] text-white hover:bg-[#3251EE] transition-colors">Create New Automation</Button>
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
              <p className="text-[#807E96] text-sm md:text-[15px]">Analytics and insights for your projects and teams.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card className="p-3 border border-[rgba(182,182,209,0.15)] rounded-2xl bg-[#F4F4F8]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Total Tasks</p>
                    <Badge variant="secondary" className="bg-white text-[#4262FF]">24</Badge>
                  </div>
                </Card>
                <Card className="p-3 border border-[rgba(182,182,209,0.15)] rounded-2xl bg-[#F4F4F8]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Completed</p>
                    <Badge variant="secondary" className="bg-white text-[#4262FF]">18</Badge>
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
  const [activeTab, setActiveTab] = useState<TabKey>('Home');

  const tabComponents = {
    Home: HomeView,
    Groups: GroupsView,
    'Action Items': ActionItemsView,
    Automations: AutomationsView,
    Insights: InsightsView,
  };

  const ActiveComponent = tabComponents[activeTab];

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
  );
}

