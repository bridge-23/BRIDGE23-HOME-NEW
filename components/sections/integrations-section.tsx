import { Card, CardContent } from "@/components/ui/card"

const integrations = [
  {
    name: "Telegram",
    description: "Connect your Telegram channels and groups.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-FGIX7UGoQJU0wFzxoPXqqTj8CRLaCH.png" alt="Telegram" className="w-8 h-8 object-contain" />
  },
  {
    name: "WhatsApp",
    description: "Integrate with WhatsApp Business API.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital_Glyph_Green-zwr46kNJoscHskA4cTo5Qxt77u84uE.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
  },
  {
    name: "Slack",
    description: "Send messages and updates to Slack channels.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slack_icon_2019.svg-MEHSDVfvsOloBVGjcHerLDm2TklfjG.png" alt="Slack" className="w-8 h-8 object-contain" />
  },
  {
    name: "Discord",
    description: "Manage Discord communities efficiently.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discord-logo-discord-icon-transparent-free-png-NUXZ6BU0eT0FyHAxqN7LB6L3v0v1li.webp" alt="Discord" className="w-8 h-8 object-contain" />
  },
  {
    name: "Notion",
    description: "Sync notes and documents with Notion workspace.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notion_app_logo-R3FpxQAKmXTfxqGamZW9O96iJRgjHz.png" alt="Notion" className="w-8 h-8 object-contain" />
  },
  {
    name: "Zapier",
    description: "Connect with thousands of other apps.",
    icon: <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zapier_icon_146029-PkzVMtt3TabcHSP5oapA3LvJZCkMO7.webp" alt="Zapier" className="w-8 h-8 object-contain" />
  }
]

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Connect your favorite apps</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Integrate with the tools your team already uses and love.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.name} className="border border-[rgba(188,188,204,0.15)] rounded-[20px] shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">{integration.icon}</div>
                  <div>
                    <h3 className="font-bold text-[18px] leading-[20px] text-[#141925] mb-1">{integration.name}</h3>
                    <p className="text-[17px] leading-7 tracking-[-0.01em] text-[#4A5361]">{integration.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

