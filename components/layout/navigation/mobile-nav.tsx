import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavItem } from "@/types/navigation"

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden shadow-lg border-t">
      <div className="max-w-full mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 mb-auto">
          {navItems.slice(0, -2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-medium text-gray-900 hover:text-gray-600"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <Button
            variant="outline"
            className="w-full h-14 text-lg bg-black text-white hover:bg-[#FF5C35] rounded-full"
            onClick={() => {
              window.location.href = "https://beta.bridge23.app/";
              onClose();
            }}
          >
            Login
          </Button>
          <Button
            className="w-full h-14 text-lg bg-[#FF5C35] text-white hover:bg-black rounded-full"
            onClick={() => {
              window.location.href = "https://beta.bridge23.app/";
              onClose();
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
} 