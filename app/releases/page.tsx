import { Card } from "@/components/ui/card"
import Image from "next/image"

const releases = [
  {
    date: "January 15, 2025",
    title: "Open meeting calendar event",
    description: "You can now open a meeting's calendar event in Google Calendar or Microsoft Outlook by right-clicking or selecting ... on the meeting. This makes it easy to quickly view or edit the calendar event details.",
  },
  {
    date: "January 13, 2025",
    title: "Improvements to the meetings page",
    description: "We've updated the meetings page to make it easier to navigate your meetings. You'll now see profile pictures of the invitees next to each meeting, along with colour-coded tags to help differentiate meeting types. To see the full date and time of a meeting, simply hover over the date on the right side.",
  }
]

export default function ReleasesPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
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

