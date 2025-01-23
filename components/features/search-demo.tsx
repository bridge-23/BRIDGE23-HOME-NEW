import { Users } from 'lucide-react'

interface SearchResultProps {
  title: string
  time: string
  source: string
}

function SearchResult({ title, time, source }: SearchResultProps) {
  return (
    <div className="p-2 md:p-3 bg-green-50/50 rounded-lg">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs md:text-sm font-medium">{title}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-xs text-gray-600">Found in {source}</p>
    </div>
  )
}

export function SearchDemo() {
  const results: SearchResultProps[] = [
    {
      title: "Meeting with Design team",
      time: "2 days ago",
      source: "conversations"
    },
    {
      title: "Project timeline discussion",
      time: "1 week ago",
      source: "tasks"
    }
  ]

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
          </div>
          <span className="text-base md:text-lg font-semibold">Search</span>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in conversations..."
              className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>
          <div className="space-y-2 md:space-y-3">
            {results.map((result, index) => (
              <SearchResult key={index} {...result} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 