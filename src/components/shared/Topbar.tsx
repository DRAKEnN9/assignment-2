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
      {/* Left: mobile menu + back arrow + title */}
      <div className="flex items-center gap-4">
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
      <div className="flex items-center mr-8">
        <div className="flex items-center gap-3 bg-gray-50 border border-indigo-50 rounded-2xl px-4 py-2">
          {/* Avatar with purple background */}
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <Image
              src="/avatars/a66e3c587b925507a17595d38b9654c3a4847f76.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-sm object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <p className="text-xs text-indigo-950">Welcome back,</p>
            <p className="text-sm font-semibold text-indigo-950">
              Akshita Patel
            </p>
          </div>

          {/* Chevron */}
          <ChevronDown size={22} className="text-indigo-950 ml-20" />
        </div>
      </div>
    </header>
  );
}
