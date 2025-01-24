"use client"

import { Handle, Position } from "@xyflow/react"
import { cn } from "@/lib/utils" // or your own utility for merging classes
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"


export function CustomNode({ data }: { data: NodeData }) {
  const {
    label = "Loremipsu",
    subLabel, // e.g. "FW" or "192.168.1.1"
    icon,
    overlayIcon,
    tooltipText,
    bgColor = "bg-pink-100",
    textColor = "text-gray-800",
    overlayBg = "bg-purple-500",
  } = data

  return (
    <Tooltip>
    {/* The “trigger” is our node's main circle + label */}
    <TooltipTrigger asChild>
      <div className="relative flex flex-col items-center pointer-events-auto">
        <div
          className={cn(
            "relative w-14 h-14 rounded-full flex items-center justify-center",
            bgColor
          )}
        >
          {icon}

          {overlayIcon && (
            <div
              className={cn(
                "absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-white",
                overlayBg
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

        {/* React Flow handles (optional) */}
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

    {/* The actual tooltip content */}
    <TooltipContent>
      <p className="text-sm">{tooltipText}</p>
    </TooltipContent>
  </Tooltip>
  )
}
