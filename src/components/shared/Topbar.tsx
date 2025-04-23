// src/components/shared/Topbar.tsx
"use client";

import { Menu, ArrowLeft, ChevronDown } from "lucide-react";
import Image from "next/image";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="flex z-10 items-center h-[74px] justify-between px-4 shadow-lg bg-white">
      {/* Left section */}
      <div className="flex items-center gap-4 flex-1">
        <button
          className="md:hidden p-2 rounded hover:bg-muted transition-colors"
          onClick={onToggleSidebar}
        >
          <Menu size={24} />
        </button>
        <button className="hidden md:flex p-2 rounded hover:bg-muted transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold">Stories</h1>
      </div>

      {/* Right: profile card */}
      <div className="flex items-center flex-shrink-0 ml-2 md:ml-0 md:mr-8">
        <div className="flex items-center gap-3 bg-gray-50 border border-indigo-50 rounded-2xl px-2 md:px-4 py-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <Image
              src="/avatars/a66e3c587b925507a17595d38b9654c3a4847f76.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-sm object-cover"
            />
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs text-indigo-950">Welcome back,</p>
            <p className="text-sm font-semibold text-indigo-950">
              Akshita Patel
            </p>
          </div>
          <ChevronDown size={22} className="text-indigo-950 md:ml-20 ml-2" />
        </div>
      </div>
    </header>
  );
}
