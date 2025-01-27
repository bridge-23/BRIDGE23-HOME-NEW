import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const integrations = [
  {
    name: "Telegram",
    description: "Add Agents to your Telegram channels and groups.",
    icon: "/social/telegram/Telegram-Logo.svg"
  },
  {
    name: "WhatsApp",
    description: "Add Agents to your WhatsApp channels or groups.",
    icon: "/social/whatsapp/WhatsApp-Logo.png"
  },
  {
    name: "Slack",
    description: "Add Agents to your Slack channels.",
    icon: "/social/Slack-Logo.png"
  },
  {
    name: "Discord",
    description: "Add Agents to your Discord communities.",
    icon: "/integrations/Discord-logo.png"
  },
  {
    name: "Notion",
    description: "Add Agents to your Notion workspaces.",
    icon: "/integrations/Notion-logo.png"
  },
  {
    name: "Zapier",
    description: "Connect with thousands of other apps.",
    icon: "/integrations/Zapier-logo.png"
  }
]

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Connect your favorite apps</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
           Integrate AI Agents into familiar platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration) => (
            <Card key={integration.name} className="border border-[rgba(188,188,204,0.15)] rounded-[20px] bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg shrink-0">
                    <Image 
                      src={integration.icon}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
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

