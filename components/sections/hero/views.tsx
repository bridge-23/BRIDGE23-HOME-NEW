import { CheckSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HomeView() {
  // HomeView implementation (unchanged)
}

export function GroupsView() {
  // GroupsView implementation (unchanged)
}

export function ActionItemsView() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#11141A]">Action Items</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-[#FF5C35]" />
          <span>Review product launch materials</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-[#FF5C35]" />
          <span>Schedule team meeting for next week</span>
        </div>
      </div>
    </div>
  )
}

export function AutomationsView() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#11141A]">Automations</h3>
      <p className="text-[#807E96]">Set up workflows to automate your tasks.</p>
      <Button className="bg-[#FF5C35] text-white hover:bg-[#E54E2B]">Create New Automation</Button>
    </div>
  )
}

export function InsightsView() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#11141A]">Insights</h3>
      <p className="text-[#807E96]">Analytics and insights for your projects and teams.</p>
      {/* Add charts or analytics components here */}
    </div>
  )
}

