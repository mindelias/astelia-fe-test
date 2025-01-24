 import * as React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getIcon } from "@/utils/icon-map";


export function NavItemGroup({ items, isCollapsed, currentPath, ...props }: NavItemGroupProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-1 px-2">
          {items.map((item) => {
            const icon = getIcon(item.icon);
            const isActive = currentPath === item.url;

            return (
              <SidebarMenuItem key={item.title} className="relative group">
                <SidebarMenuButton
                  asChild
                  size="sm"
                  className={cn(
                    "flex items-center gap-3 py-5 font-normal px-5 rounded-md transition-all text-[15px]",
                    isActive
                      ? "bg-green-50 rounded-md text-gray-600  "
                      : "text-gray-700 hover:bg-gray-100  hover:text-gray-800",
                    isCollapsed && "justify-center"
                  )}
                >
                  <Link href={item.url}>
                    {icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={icon}
                        alt={item.title}
                        className="w-6 h-6 group-hover:scale-110  transition-transform"
                      />
                    )}
                    {!isCollapsed && <span className="ml-3">{item.title}</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
