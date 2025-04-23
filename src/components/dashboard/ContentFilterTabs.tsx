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
    <div className="flex flex-wrap ml-5 gap-2 mb-6">
      {filters.map(({ label, count }) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-indigo-950 text-white border-primary"
                : "bg-muted text-muted-foreground hover:bg-primary/10"
            )}
          >
            <span>{label}</span>
            <span
              className={cn(
                "text-xs font-semibold",
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
