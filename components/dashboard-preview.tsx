import { Card } from "@/components/ui/card"

export function DashboardPreview() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <Card className="rounded-xl overflow-hidden shadow-2xl border-0">
          <img 
            src={`https://sjc.microlink.io/hcW1WGOx7dCH3pPtGTheJ0vj-vsI7sokNvuvcPVRmo581OxtU2B9yZ8-MCHm_yyXYaPE-yuxbBGt7FYI6GCv7w.jpeg`}
            alt="AI Assistant Dashboard Interface"
            className="w-full h-auto"
          />
        </Card>
      </div>
    </div>
  )
}

