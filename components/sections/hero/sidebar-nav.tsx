import { FC } from 'react';
import { Home, Clock, CheckSquare, Settings, HelpCircle } from 'lucide-react';
import { TabKey } from '@/components/sections/hero-section';

interface SidebarNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const navItems: { icon: any; label: TabKey }[] = [
  { icon: Home, label: "Home" },
  { icon: Clock, label: "Groups" },
  { icon: CheckSquare, label: "Action Items" },
  { icon: Settings, label: "Automations" },
  { icon: HelpCircle, label: "Insights" },
]

const SidebarNav: FC<SidebarNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="space-y-1">
      {navItems.map(({ icon: Icon, label }) => (
        <a
          key={label}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onTabChange(label)
          }}
          className={`flex items-center gap-2 p-1 md:p-2 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
            activeTab === label
              ? "bg-[rgba(188,188,204,0.15)] text-[#333333] border-2 border-white"
              : "text-[rgba(26,23,59,0.7)] hover:bg-gray-100"
          }`}
        >
          <span className={`${activeTab === label ? "" : "opacity-70"}`}>
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}

export default SidebarNav;

