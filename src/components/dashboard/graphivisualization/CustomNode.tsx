"use client"

import { Handle, Position } from "@xyflow/react"
import { cn } from "@/lib/utils" // or your own utility for merging classes

type NodeData = {
  label?: string
  subLabel?: string
  icon?: JSX.Element
  overlayIcon?: JSX.Element
  bgColor?: string
  textColor?: string
  overlayBg?: string
}

export function CustomNode({ data }: { data: NodeData }) {
  const {
    label = "Loremipsu",
    subLabel, // e.g. "FW" or "192.168.1.1"
    icon,
    overlayIcon,
    bgColor = "bg-pink-100",
    textColor = "text-gray-800",
    overlayBg = "bg-purple-500",
  } = data

  return (
    <div className="relative flex flex-col items-center">
      {/* Circle for the main node */}
      <div className={cn("relative w-14 h-14 rounded-full flex items-center justify-center", bgColor)}>
        {/* The main icon in the center */}
        {icon}

        {/* Overlay icon in a mini bubble (if needed) */}
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

        {/* If you want a small sub-label *inside* the circle (e.g. "FW" in white) */}
        {subLabel && (
          <div className="absolute bottom-0 text-xs text-white" style={{ transform: "translateY(110%)" }}>
            {subLabel}
          </div>
        )}
      </div>

      {/* Label below the circle */}
      <div className={cn("mt-2 text-sm font-medium", textColor)}>
        {label}
      </div>

      {/* We typically hide React Flow handles if you want a “flow” with just edges.
          But if you do want them: */}
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  )
}
