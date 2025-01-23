 
// import * as React from "react";
// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { getIcon} from "@/utils/icon-map";

// interface NavItemGroupProps {
//   items: {
//     title: string;
//     url: string;
//     icon: string; // Icon name matching the `iconMap`
//   }[];
//   isCollapsed: boolean; // State for collapsed/expanded behavior
//   currentPath: string; // Pass the current path explicitly
// }

// export function NavItemGroup({ items, isCollapsed, currentPath, ...props }: NavItemGroupProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
//   return (
//     <SidebarGroup {...props}>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {items.map((item) => {
//             const icon = getIcon(item.icon); // Fetch icon from the static map
//             const isActive = currentPath === item.url; // Active state based on `currentPath`

//             return (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton asChild size="sm">
//                   <Link
//                     href={item.url}
//                     className={cn(
//                       "flex items-center p-2 rounded-md hover:bg-sidebar-hover",
//                       isActive && "bg-sidebar-active text-sidebar-active-foreground",
//                       isCollapsed && "justify-center"
//                     )}
//                   >
//                     {icon && (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img
//                         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//                         src={icon}
//                         alt={item.title}
//                         className="w-6 h-6"
//                       />
//                     )}
//                     {!isCollapsed && <span className="ml-3">{item.title}</span>}
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             );
//           })}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   );
// }
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

interface NavItemGroupProps {
  items: {
    title: string;
    url: string;
    icon: string; // Icon name matching the `iconMap`
  }[];
  isCollapsed: boolean; // State for collapsed/expanded behavior
  currentPath: string; // Pass the current path explicitly
}

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
                    "flex items-center gap-3 p-2 rounded-md transition-all",
                    isActive
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800",
                    isCollapsed && "justify-center"
                  )}
                >
                  <Link href={item.url}>
                    {icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={icon}
                        alt={item.title}
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
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
