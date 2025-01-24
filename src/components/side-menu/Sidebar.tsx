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
    <Sidebar collapsible="icon" className="my-4 rounded-md">
      {/* Sidebar Header */}
      <SidebarHeader className="relative">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="">
              <div className=" ">
                {/* Full Logo when expanded */}

                {!isCollapsed ? (
                  <Image
                    src={Logo as string}
                    alt="Logo"
                    // width={50}
                    // height={50}
                    className="h-25 w-25"
                  />
                ) : (
                  // Collapsed Logo
                  <Image
                    src={CollapsedLogo as string}
                    alt="Logo"
                    width={20}
                    height={20}
                    // className="h-auto w-auto"
                  />
                )}
              </div>
            </SidebarMenuButton>
            {/* <div className="absolute -right-5 top-0">
              <CustomTrigger />
            </div> */}
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
        {/* <NavItemGroup
          items={menu.navSecondary}
          isCollapsed={isCollapsed}
          currentPath={pathname}
        /> */}
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <NavItemGroup
          items={menu.navSecondary}
          isCollapsed={isCollapsed}
          currentPath={pathname}
        />
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
      {/* <SidebarRail >
        <Image
          src={CollapsedLogo as string}
          alt="Logo"
          width={20}
          height={20}
          className="h-auto w-auto"
        />
      </SidebarRail> */}
    </Sidebar>
  );
}
