import { Card } from "@/components/ui/card"
import Image from "next/image"

const releases = [
  {
    date: "January 9, 2025",
    title: "Dev Update v.0.14.4",
    description: "Full-screen View in Telegram mini-app, Advanced Web Search Tool enhancements,iExec Data Protector Tool integration",
  },
  {
    date: "December 24, 2024",
    title: "Enhanced memory: from 50 to 500 messages",
    description: "Dev Update v.0.14.3 is Live! Enhanced memory: from 50 to 500 messages, New agent settings: personal & group modes, Improved web search tool, Upcoming: Boost memory to 5,000 messages per response, iExec data protector tool, Chat credits for verified portfolio data, Agentic Team: Advanced group management and task assignment features",
  }
]

export default function ReleasesPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#141925] mb-4">
            Releases
          </h1>
          <p className="text-lg md:text-xl text-[#4A5361]">
            What's new in Bridge23. Learn about the latest product features and improvements.
          </p>
        </div>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <Card key={index} className="p-6 md:p-8 bg-white rounded-3xl">
              <time className="text-sm text-[#4A5361] font-medium">
                {release.date}
              </time>
              <h2 className="text-xl md:text-2xl font-bold text-[#141925] mt-2 mb-4">
                {release.title}
              </h2>
              <p className="text-base md:text-lg text-[#4A5361]">
                {release.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

