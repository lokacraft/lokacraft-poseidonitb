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
  const displayName = user && user.displayName ? user.displayName : "Admin";
  const avatar = user && user.photoURL ? user.photoURL : "/https://github.com/shadcn.png";
  const data = {
    user: {
      name: displayName,
      email: email,
      avatar: avatar,
    },
    teams: [
      {
        name: "POSEIDON ITB",
        logo: GalleryVerticalEnd,
        plan: "Badan  Semi Otonom",
      },
    ],
    navMain: [
      {
        title: "Artikel",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "List Artikel",
            url: "/admin/article/",
          },
          {
            title: "Kategori",
            url: "/admin/category/",
          },
        ],
      },
      {
        title: "Author",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "List Author",
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
            title: "List Pilar",
            url: "/admin/pilar/",
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
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
