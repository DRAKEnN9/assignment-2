"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", count: 4500 },
  { label: "Draft", count: 1203 },
  { label: "Pending", count: 890 },
  { label: "Published", count: 2432 },
  { label: "Archived", count: 320 },
];

export function ContentFilterTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:overflow-visible ml-2 md:ml-5 gap-3 mb-6 px-4 md:px-0">
      {filters.map(({ label, count }) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium transition-colors flex-shrink-0",
              isActive
                ? "bg-indigo-950 text-white border-primary"
                : "bg-muted text-muted-foreground hover:bg-primary/10"
            )}
          >
            <span className="whitespace-nowrap">{label}</span>
            <span
              className={cn(
                "text-xs font-semibold whitespace-nowrap",
                isActive ? "text-white" : "text-slate-400"
              )}
            >
              ({count.toLocaleString()})
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ContentFilterTabs;
