"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/material/admin/nav-main"
import { NavProjects } from "@/components/material/admin/nav-projects"
import { NavUser } from "@/components/material/admin/nav-user"
import { TeamSwitcher } from "@/components/material/admin/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUser } from "@/lib/Auth"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useUser();
  
  const email = user && user.email ? user.email : "guest@example.com";
  const displayName = user && user.displayName ? user.displayName : "Guest";
  const avatar = user && user.photoURL ? user.photoURL : "/https://github.com/shadcn.png";
  const data = {
    user: {
      name: displayName,
      email: email,
      avatar: avatar,
    },
    teams: [
      {
        name: "hmo triton itb",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
    ],
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: BookOpen,
        isActive: true,
        items: [
          {
            title: "dashboard",
            url: "/admin/dashboard/",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
        ],
      },
      {
        title: "Artikel",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "Tambah Baru",
            url: "/admin/article/create",
          },
          {
            title: "Artikel",
            url: "/admin/article/",
          },
          {
            title: "Kategori",
            url: "/admin/category/",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Author",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "author",
            url: "/admin/author/",
          },
        ],
      },
      {
        title: "Pilar",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "pilar",
            url: "/admin/pilar/",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
