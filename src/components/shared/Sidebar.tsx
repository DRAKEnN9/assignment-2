"use client";

import {
  Home,
  Settings,
  File,
  User,
  Users,
  Computer,
  ChartColumnIncreasing,
  Youtube,
  Settings2,
  Bell,
  SquarePlay,
  Headset,
  X,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Content", icon: File, href: "/" },
  { name: "User", icon: User, href: "/user" },
  { name: "Task", icon: Users, href: "/task" },
  { name: "App/Web", icon: Computer, href: "/App/Web" },
  { name: "Analytics", icon: ChartColumnIncreasing, href: "/analytics" },
  { name: "Media", icon: SquarePlay, href: "/media" },
  { name: "Customize", icon: Settings2, href: "/customize" },
  { name: "Notification", icon: Bell, href: "/notification" },
  { name: "Subscription", icon: Youtube, href: "/subscription" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-64
          h-screen flex flex-col overflow-hidden
        `}
      >
        {/* Header */}
        <div className="p-4 flex-shrink-0">
          <div className="flex justify-end md:hidden mb-4">
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4">
          <nav className="flex flex-col gap-1.5 pb-3 ml-5 mt-4 md:mt-20">
            {navItems.map(({ name, icon: Icon, href }) => {
              const isActive = activeItem === href;
              return (
                <button
                  key={name}
                  onClick={() => {
                    setActiveItem(href);
                    onClose();
                  }}
                  className={`flex items-center w-full p-2 py-3 rounded-sm transition-colors ${
                    isActive
                      ? "bg-indigo-950 text-white"
                      : "hover:bg-muted text-gray-700"
                  }`}
                  title={name}
                >
                  <Icon size={21.5} />
                  <span className="ml-4 text-sm">{name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Fixed Footer */}
        <div className="p-4 flex-shrink-0">
          <div className="ml-4 mb-6">
            <Link
              href="/contact-support"
              className="flex items-center gap-3 p-3 rounded-sm bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              <Headset size={20} className="text-indigo-950" />
              <span className="text-[14px] font-medium text-indigo-950">
                Contact Support
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
