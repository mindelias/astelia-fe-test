import { SidebarFooter } from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { NavItemGroup } from "./NavItemGroup"; // or your path

export function CustomSidebarFooter({
  menu,
  isCollapsed,
  pathname,
}: {
  menu: {
    navSecondary: {
      title: string;
      url: string;
      icon: string;
    }[];
  };
  isCollapsed: boolean;
  pathname: string;
}) {
  return (
    <SidebarFooter className=" ">
      {/* Secondary nav items (Settings, Account, etc.) */}
      <NavItemGroup
        items={menu.navSecondary}
        isCollapsed={isCollapsed}
        currentPath={pathname}
      />

      {/* User info & logout button */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* If expanded, show avatar + name + subtitle */}
        {!isCollapsed ? (
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/user.png" alt="User Avatar" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm font-medium text-foreground">Lorem</p>
              <p className="text-xs text-muted-foreground">User Profile</p>
            </div>
          </div>
        ) : (
          /* If collapsed, just show the avatar (or icon). */
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.png" alt="User Avatar" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        )}

        {/* Logout icon button */}
        {!isCollapsed && (
          <Button variant="ghost" size="icon" aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </Button>
        )}
      </div>
    </SidebarFooter>
  );
}
