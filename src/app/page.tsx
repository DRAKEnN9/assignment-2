"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import ContentFilterTabs from "@/components/dashboard/ContentFilterTabs";
import { StoryGrid } from "@/components/dashboard/StoryGrid";
import { StoryToolbar } from "@/components/dashboard/StoryToolbar";

export default function Home() {
  return (
    <DashboardLayout>
      <StoryToolbar onAdd={() => console.log("Add new Story")} />
      <ContentFilterTabs />
      <StoryGrid />
    </DashboardLayout>
  );
}
