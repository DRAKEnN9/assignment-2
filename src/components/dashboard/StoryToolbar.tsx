// src/components/dashboard/StoryToolbar.tsx
"use client";

import { useState } from "react";
import { Search, Filter, CalendarDays, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface StoryToolbarProps {
  onAdd: () => void;
}

export function StoryToolbar({ onAdd }: StoryToolbarProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
      {/* Main toolbar */}
      <div className="mx-3 my-2 p-3 z-10 bg-white rounded-lg flex items-center">
        {/* Spacer */}
        <div className="flex-1" />

        {/* On small screens: only the search icon */}
        <button
          className="md:hidden p-2 sm:mr-5 max-sm:mr-5 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileSearchOpen((o) => !o)}
        >
          {mobileSearchOpen ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* On md+: inline search + calendar + filter */}
        <div className="hidden md:flex items-center gap-3 mr-18">
          {/* Search field */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <Input
              type="text"
              placeholder="Search"
              className="w-full lg:w-82 placeholder:text-slate-400 pl-10 pr-4 h-10 rounded-sm border border-slate-400"
            />
          </div>

          {/* Calendar button */}
          <button className="p-2 border rounded-lg bg-indigo-50 hover:bg-muted transition-colors">
            <CalendarDays size={20} className="text-indigo-950" />
          </button>

          {/* Filter button */}
          <button className="p-2 border rounded-lg bg-indigo-50 hover:bg-muted transition-colors">
            <Filter size={20} className="text-indigo-950" />
          </button>
        </div>

        {/* Add New Story */}
        <button
          onClick={onAdd}
          className="ml-auto whitespace-nowrap bg-indigo-950 text-white px-4 py-2 rounded-lg hover:bg-indigo-900 transition"
        >
          Add New Story
        </button>
      </div>

      {/* Mobile-only sliding search panel */}
      <div
        className={`md:hidden mx-4 mb-2 overflow-hidden transition-all duration-300 ${
          mobileSearchOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 bg-white rounded-lg flex items-center gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <Input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 h-10 rounded-sm border placeholder:text-slate-400 border-slate-400"
            />
          </div>
          <button className="p-2 border rounded-lg bg-indigo-50 hover:bg-muted transition-colors">
            <CalendarDays size={20} className="text-indigo-950" />
          </button>
          <button className="p-2 border rounded-lg bg-indigo-50 hover:bg-muted transition-colors">
            <Filter size={20} className="text-indigo-950" />
          </button>
        </div>
      </div>
    </>
  );
}
