// src/components/app-sidebar.tsx
"use client";

import * as React from "react";
import {
  BookCopy,
  LayoutDashboard,
  Settings,
  Users,
  ClipboardPen,
} from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

// This is our actual data for ExamIQ
const navData = {
  user: {
    name: "Admin", // This should come from your auth provider
    email: "examcell@fcrit.ac.in",
    avatar: "/avatars/admin.png", // A default admin avatar
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true, // This should be dynamic based on the current route
    },
    {
      title: "Exam Tasks",
      url: "/dashboard/tasks",
      icon: ClipboardPen,
    },
    {
      title: "Question Bank",
      url: "/dashboard/questions",
      icon: BookCopy,
    },
    {
      title: "Teachers",
      url: "/dashboard/teachers",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h2 className="text-lg font-semibold tracking-tight text-sidebar-foreground">
          ExamIQ
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {navData.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}