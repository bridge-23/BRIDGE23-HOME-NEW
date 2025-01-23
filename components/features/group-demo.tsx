import { MessageSquare } from 'lucide-react'

export function GroupDemo() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
          </div>
          <span className="text-base md:text-lg font-semibold">Engineering Team {'->'} Product Team</span>
        </div>
        <div className="space-y-4">
          <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
            <h4 className="text-gray-600 mb-2 md:mb-3 text-sm md:text-base">Overview</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2">
                <p className="text-xs md:text-sm text-gray-700">+ Team achieved 85% completion rate on Q4 goals</p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-xs md:text-sm text-gray-700">+ Draft for Q1 roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 