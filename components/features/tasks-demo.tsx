import Image from "next/image"

interface TaskProps {
  title: string
  tag: {
    text: string
    bgColor: string
    textColor: string
  }
  dueDate: {
    text: string
    color: string
  }
  assignee: {
    initial: string
    name: string
    gradientFrom: string
    gradientTo: string
  }
}

function Task({ title, tag, dueDate, assignee }: TaskProps) {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-2 md:p-3 rounded-lg transition-colors">
      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-300 rounded-md group-hover:border-gray-400 flex items-center justify-center">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-transparent rounded-sm group-hover:bg-gray-200"></div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-medium text-gray-900">{title}</span>
            <span className={`px-2 py-1 ${tag.bgColor} rounded text-xs ${tag.textColor}`}>{tag.text}</span>
          </div>
          <span className={`text-xs ${dueDate.color}`}>{dueDate.text}</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-${assignee.gradientFrom} to-${assignee.gradientTo} flex items-center justify-center text-[10px] text-white font-medium`}>
            {assignee.initial}
          </div>
          <p className="text-xs text-gray-500">{assignee.name}</p>
        </div>
      </div>
    </div>
  )
}

export function TasksDemo() {
  const tasks: TaskProps[] = [
    {
      title: "Review design mockups",
      tag: {
        text: "Design",
        bgColor: "bg-purple-100",
        textColor: "text-purple-700"
      },
      dueDate: {
        text: "Due today",
        color: "text-red-500"
      },
      assignee: {
        initial: "S",
        name: "Seva",
        gradientFrom: "purple-400",
        gradientTo: "pink-400"
      }
    },
    {
      title: "Update documentation",
      tag: {
        text: "Dev",
        bgColor: "bg-blue-100",
        textColor: "text-blue-700"
      },
      dueDate: {
        text: "Tomorrow",
        color: "text-orange-500"
      },
      assignee: {
        initial: "M",
        name: "Ichiro",
        gradientFrom: "blue-400",
        gradientTo: "cyan-400"
      }
    },
    {
      title: "Prepare Q1 report",
      tag: {
        text: "Planning",
        bgColor: "bg-green-100",
        textColor: "text-green-700"
      },
      dueDate: {
        text: "Next week",
        color: "text-gray-500"
      },
      assignee: {
        initial: "A",
        name: "Mau",
        gradientFrom: "green-400",
        gradientTo: "emerald-400"
      }
    }
  ]

  return (
    <div className="relative h-[280px] md:h-[320px] w-full max-w-[600px] mx-auto">
      <div className="w-full max-w-[400px] mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Image
              src="/integrations/Notion-logo.png"
              alt="Notion"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
            />
            <span className="text-base md:text-lg font-semibold">Team Tasks</span>
          </div>

          <div className="space-y-3 md:space-y-4">
            {tasks.map((task, index) => (
              <Task key={index} {...task} />
            ))}
          </div>
        </div>

        {/* Stacked Cards Effect */}
        <div className="absolute right-0 top-0 -z-10">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F8F9FD] rounded-3xl"></div>
          <div className="absolute top-2 -right-2 w-24 h-24 md:w-32 md:h-32 bg-[#F1F3F9] rounded-3xl -z-20"></div>
        </div>
      </div>
    </div>
  )
} 