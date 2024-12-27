import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronRight,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { title } from "process"
import { CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible"
import ResponsiveNavLink from "./ResponsiveNavLink"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],


  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: PieChart,
      isActive: false,

    },

    {
      title: "Jobs",
      url: "job.index",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Jobs",

          url: "jobs.index",
        },
        {
          title: "applications",
          url: "applications.index",
        },
        {
          title: "Companies",
          url: "companies.index",
        },
        {
          title: "Categories",

          url: "categories.index",
        },

      ],
    },


  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <h1>dk</h1>
        <SidebarMenuItem>
          <SidebarMenuButton>click</SidebarMenuButton>
        </SidebarMenuItem>
        {/* <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip='sd'>

              <span>sdsd</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              afsdf
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
