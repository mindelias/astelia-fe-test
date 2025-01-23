import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function GraphNodePopover({ label }: { label: string }) {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="p-2 bg-blue-500 text-white rounded">{label}</div>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm text-gray-600">{label} Details</p>
      </PopoverContent>
    </Popover>
  );
}
