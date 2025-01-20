'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from 'lucide-react'
import { useState } from 'react'

export function ChatPanel() {
  const [activeChatTab, setActiveChatTab] = useState('assistant')

  return (
    <Card className="p-4 md:p-6 h-full flex flex-col bg-white rounded-3xl border-[rgba(182,182,209,0.15)]">
      <Tabs value={activeChatTab} onValueChange={setActiveChatTab} className="w-full mb-4 md:mb-6 flex-shrink-0">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="assistant">Assistant</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4 flex-grow overflow-y-auto">
        {activeChatTab === 'assistant' ? (
          <AssistantView />
        ) : (
          <PeopleView />
        )}
      </div>

      <div className="mt-4 relative flex-shrink-0">
        <input
          type="text"
          placeholder="Ask a question..."
          className="w-full p-2 md:p-3 pr-10 md:pr-12 rounded-lg border border-[rgba(182,182,209,0.15)] bg-white text-sm"
        />
        <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4262FF] text-white rounded-lg">
          <Search className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
      </div>
    </Card>
  )
}

function AssistantView() {
  return (
    <>
      <div className="bg-white rounded-lg border border-[rgba(182,182,209,0.15)] p-2 md:p-3">
        <p className="text-xs md:text-sm text-[#333333]">What Elon Musk say we should use?</p>
      </div>
      <div className="bg-[#F4F4F8] rounded-lg p-2 md:p-3">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <svg width="12" height="15" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0L0 4.5V13.5L7.5 18L15 13.5V4.5L7.5 0ZM13.5 12.63L7.5 16.38L1.5 12.63V5.37L7.5 1.62L13.5 5.37V12.63Z" fill="black"/>
          </svg>
          <p className="text-xs md:text-sm font-medium">Assistant</p>
        </div>
        <p className="text-xs md:text-sm text-[#333333]">Elon Musk suggested the <span className="font-semibold">use mind.</span></p>
      </div>
    </>
  )
}

function PeopleView() {
  return (
    <>
      <div className="bg-white rounded-lg border border-[rgba(182,182,209,0.15)] p-2 md:p-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-semibold text-xs md:text-sm">
            EF
          </div>
          <p className="text-xs md:text-sm font-medium"> Donald Trump</p>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-[rgba(182,182,209,0.15)] p-2 md:p-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-semibold text-xs md:text-sm">
            NW
          </div>
            <p className="text-xs md:text-sm font-medium">Elon Musk</p>
        </div>
      </div>
    </>
  )
}

