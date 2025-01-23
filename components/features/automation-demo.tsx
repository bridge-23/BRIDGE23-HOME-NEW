import { Zap } from 'lucide-react'
import Image from "next/image"

interface FlowProps {
  trigger: {
    text: string
    bgColor: string
    textColor: string
  }
  action: string
  targetApp: {
    icon: string
    alt: string
    bgColor: string
    invert?: boolean
    border?: boolean
  }
}

function Flow({ trigger, action, targetApp }: FlowProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 md:p-4">
      <div className="flex gap-2 mb-2 md:mb-3">
        <span className="px-2 py-1 bg-amber-100 rounded text-xs text-amber-700">When</span>
        <span className={`px-2 py-1 ${trigger.bgColor} rounded text-xs ${trigger.textColor}`}>{trigger.text}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-lg flex items-center justify-center">
          <Image
            src="/bridge23/Agent.png"
            alt="Bridge23 Agent"
            width={16}
            height={16}
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
        </div>
        <span className="text-gray-400">→</span>
        <div className={`w-6 h-6 md:w-8 md:h-8 ${targetApp.bgColor} rounded-lg flex items-center justify-center ${targetApp.border ? 'border-2 border-gray-200' : ''}`}>
          <Image
            src={targetApp.icon}
            alt={targetApp.alt}
            width={16}
            height={16}
            className={`w-4 h-4 md:w-5 md:h-5 object-contain ${targetApp.invert ? 'brightness-0 invert' : ''}`}
          />
        </div>
        <span className="text-xs md:text-sm">{action}</span>
      </div>
    </div>
  )
}

export function AutomationDemo() {
  const flows: FlowProps[] = [
    {
      trigger: {
        text: "New task created",
        bgColor: "bg-blue-100",
        textColor: "text-blue-700"
      },
      action: "Notify team in WhatsApp",
      targetApp: {
        icon: "/social/whatsapp/WhatsApp-Logo.png",
        alt: "WhatsApp",
        bgColor: "bg-[#25D366]",
        invert: true
      }
    },
    {
      trigger: {
        text: "Task completed",
        bgColor: "bg-purple-100",
        textColor: "text-purple-700"
      },
      action: "Update status in Slack",
      targetApp: {
        icon: "/social/Slack-Logo.png",
        alt: "Slack",
        bgColor: "bg-black",
        invert: true
      }
    },
    {
      trigger: {
        text: "Daily at 9 AM",
        bgColor: "bg-green-100",
        textColor: "text-green-700"
      },
      action: "Sync tasks with Notion",
      targetApp: {
        icon: "/integrations/Notion-logo.png",
        alt: "Notion",
        bgColor: "bg-white",
        border: true
      }
    }
  ]

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
          </div>
          <span className="text-base md:text-lg font-semibold">Automation Flow</span>
        </div>

        <div className="space-y-3 md:space-y-4">
          {flows.map((flow, index) => (
            <Flow key={index} {...flow} />
          ))}
        </div>
      </div>
    </div>
  )
} 