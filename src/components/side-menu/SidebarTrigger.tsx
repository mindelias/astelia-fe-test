
"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar, state } = useSidebar();

  return (
    <Button
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      variant="ghost"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 p-0 hover:bg-green-600"
    >
      {state === "expanded" ? (
        <ChevronLeft className="text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white" />
      )}
    </Button>
  );
}
