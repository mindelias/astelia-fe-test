"use client";

import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils"; // or your own utility for merging classes
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CustomNode({ data }: { data: NodeData }) {
  const {
    label = "Loremipsu",
    subLabel,
    icon,
    overlayIcon,
    tooltipText,
    bgColor = "bg-pink-100",
    textColor = "text-gray-800",
    overlayBg = "bg-purple-500",
  } = data;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="pointer-events-auto relative flex flex-col items-center">
          <div
            className={cn(
              "relative flex h-14 w-14 items-center justify-center rounded-full",
              bgColor,
            )}
          >
            {icon}

            {overlayIcon && (
              <div
                className={cn(
                  "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-white",
                  overlayBg,
                )}
                style={{ fontSize: "10px" }}
              >
                {overlayIcon}
              </div>
            )}

            {subLabel && (
              <div
                className="absolute bottom-0 text-xs text-white"
                style={{ transform: "translateY(110%)" }}
              >
                {subLabel}
              </div>
            )}
          </div>
          {/* Label below the circle */}
          <div className={cn("mt-2 text-sm font-medium", textColor)}>
            {label}
          </div>

          {/* React Flow handles */}
          <Handle
            type="target"
            position={Position.Left}
            style={{ opacity: 0 }}
          />
          <Handle
            type="source"
            position={Position.Right}
            style={{ opacity: 0 }}
          />
        </div>
      </TooltipTrigger>

      {/* tooltip content */}
      <TooltipContent>
        <p className="text-sm">{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
