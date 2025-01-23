// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
//   } from "@/components/ui/sidebar";
//   import { Command } from "lucide-react";
// import { NavItemGroup } from "./NavItemGroup";
// import { menu } from "@/utils/data/nav-menu";

//   export function AppSidebar() {
//     return (
//       <Sidebar>
//         <SidebarHeader>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton size="lg" asChild>
//                 <a href="#">
//                   <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                     <Command className="size-4" />
//                   </div>
//                   <div className="grid flex-1 text-left text-sm leading-tight">
//                     <span className="truncate font-semibold">Acme Inc</span>
//                     <span className="truncate text-xs">Enterprise</span>
//                   </div>
//                 </a>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarHeader>
//         <SidebarContent>
//           <NavItemGroup items={menu.navMain} />
//           <NavItemGroup items={menu.navSecondary} />
//         </SidebarContent>
//         <SidebarFooter>

//         </SidebarFooter>
//       </Sidebar>
//     );
//   }

"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavItemGroup } from "./NavItemGroup";
import { menu } from "@/utils/data/nav-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Logo from "@/assets/full-logo.svg";
import CollapsedLogo from "@/assets/logo.svg";
import Image from "next/image";
import { PersonStanding } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed"; // Use sidebar state to track collapsed/expanded

  return (
    <Sidebar collapsible="icon">
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex items-center justify-between px-4 py-2">
                {/* Full Logo when expanded */}

                {!isCollapsed ? (
                  <Image
                    src={Logo as string}
                    alt="Logo"
                    width={150}
                    height={50}
                    className="h-auto w-auto"
                  />
                ) : (
                  // Collapsed Logo
                  <Image
                    src={CollapsedLogo as string}
                    alt="Logo"
                    width={20}
                    height={20}
                    className="h-auto w-auto"
                  />
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <NavItemGroup
          items={menu.navMain}
          isCollapsed={isCollapsed}
          currentPath={pathname}
        />
        <NavItemGroup
          items={menu.navSecondary}
          isCollapsed={isCollapsed}
          currentPath={pathname}
        />
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        {!isCollapsed && (
          <div className="flex items-center px-4 py-2">
            <PersonStanding className="mr-2 h-6 w-6" />
            <div>
              <p className="text-sm font-medium">Lorem Ipsum</p>
              <p className="text-xs text-muted">User Profile</p>
            </div>
          </div>
        )}
      </SidebarFooter>
      <SidebarRail>
        <Image
          src={CollapsedLogo as string}
          alt="Logo"
          width={20}
          height={20}
          className="h-auto w-auto"
        />
      </SidebarRail>
    </Sidebar>
  );
}
