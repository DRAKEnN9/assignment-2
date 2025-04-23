// src/components/layouts/DashboardLayout.tsx
"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "../shared/Sidebar";
import { Topbar } from "../shared/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar: static on md+, sliding drawer on small */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar gets a toggle button on mobile */}
        <Topbar onToggleSidebar={() => setSidebarOpen((o) => !o)} />

        <main className="flex-1 overflow-y-auto p-4 ">{children}</main>
      </div>
    </div>
  );
}
