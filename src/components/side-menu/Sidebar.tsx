"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavItemGroup } from "./NavItemGroup";
import { menu } from "@/utils/data/nav-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Logo from "@/assets/full-logo.svg";
import CollapsedLogo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { CustomSidebarFooter } from "./CustomSidebarFooter";

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed"; // Use sidebar state to track collapsed/expanded

  return (
    // <div className="relative my-4  ">
    <Sidebar
      collapsible="icon"
      className={cn(
        "rounded-md transition-all duration-300",
        isCollapsed ? "!w-20 px-2" : "px-1",
      )}
    >
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="">
              <div className=" ">
                {/* Full Logo when expanded */}

                {!isCollapsed ? (
                  <Logo  className="h-28 w-28" />
                ) : (
                  // Collapsed Logo
                  <CollapsedLogo width={20} height={20} className="" />
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
      </SidebarContent>

      {/* Sidebar Footer */}
      <CustomSidebarFooter
        menu={menu}
        isCollapsed={isCollapsed}
        pathname={pathname}
        
      />
    </Sidebar>
  );
}
