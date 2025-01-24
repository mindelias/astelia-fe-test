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
import { Card } from "../ui/card";
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
        isCollapsed ? "!w-20 px-2" : "px-4",
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
                    className=""
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
      {/* <SidebarFooter>
        <NavItemGroup
          items={menu.navSecondary}
          isCollapsed={isCollapsed}
          currentPath={pathname}
        />

        <div className="flex items-center px-4 py-2">
          <PersonStanding className="mr-2 h-6 w-6" />
          <div>
            <p className="text-sm font-medium">Lorem Ipsum</p>
            <p className="text-xs text-muted">User Profile</p>
          </div>
        </div>
      </SidebarFooter> */}
            <CustomSidebarFooter menu={menu} isCollapsed={isCollapsed} pathname={pathname} />

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
    // </div>
  );
}
