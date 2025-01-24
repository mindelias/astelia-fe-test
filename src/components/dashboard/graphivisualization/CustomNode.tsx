"use client"
import { Handle, Position } from "@xyflow/react"


type CustomNodeProps = {
  data: {
    label: string
    ip?: string
    icon?: React.ReactNode
    color?: string
  }
}

export function CustomNode({ data }:  CustomNodeProps) {
  // data might have: data.icon, data.label, data.ip, data.color, etc.
  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-md border shadow-sm bg-white"
      style={{ width: 140 }}
    >
      {/* If you have an icon, you can show it here */}
      <div className="mb-1">
        {data.icon /* e.g. <SomeLucideIcon className="text-red-500" /> */}
      </div>
      <div className="font-semibold text-gray-800">
        {data.label}
      </div>
      {/* If you have an IP or sub-label */}
      {data.ip && (
        <div className="text-xs text-gray-500">{data.ip}</div>
      )}

      {/* You can position handles as needed.
          For a simple left-to-right flow, you might do only left+right */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-blue-400"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-blue-400"
      />
    </div>
  )
}
