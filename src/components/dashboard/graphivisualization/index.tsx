// "use client"

// import { ReactFlow, Background, Position } from "@xyflow/react"
// import { CustomNode } from "./CustomNode"
// import { ShieldAlert, Users, Server } from "lucide-react"

// // Register your node type
// const nodeTypes = {
//   custom: CustomNode,

// }

// // Example node data that roughly matches your design
// const defaultNodes = [
//   {
//     id: "1",
//     // “Loremipsumm” on the left
//     position: { x: 50, y: 200 },
//     type: "custom",
//     data: {
//       label: "Loremipsumm",
//       ip: "FW", // in your screenshot
//       icon: (
//         <div className="relative flex">
//           {/* big red icon */}
//           <ShieldAlert className="text-red-500 w-6 h-6" />
//           {/* purple “users” icon - you could absolutely position
//               this absolutely, for example:
//           */}
//           <Users className="w-4 h-4 text-purple-600 absolute -top-2 -right-3" />
//         </div>
//       ),
//     },
//   },
//   {
//     id: "2",
//     // the middle “Loremipsu” node
//     position: { x: 300, y: 200 },
//     type: "custom",
//     data: {
//       label: "Loremipsu",
//       icon: <Server className="text-blue-500 w-6 h-6" />,
//     },
//   },
//   {
//     id: "3",
//     position: { x: 500, y: 200 },
//     type: "custom",
//     data: {
//       label: "Loremipsu",
//       icon: <Server className="text-blue-500 w-6 h-6" />,
//     },
//   },
//   {
//     id: "4",
//     // top branch
//     position: { x: 700, y: 80 },
//     type: "custom",
//     data: {
//       label: "Loremipsumdolorsit",
//       ip: "192.168.1.1",
//       icon: <ShieldAlert className="text-red-500 w-6 h-6" />,
//     },
//   },
//   {
//     id: "5",
//     // bottom branch
//     position: { x: 700, y: 320 },
//     type: "custom",
//     data: {
//       label: "Loremipsumdolorsit002",
//       ip: "192.168.1.2",
//       icon: <ShieldAlert className="text-red-500 w-6 h-6" />,
//     },
//   },
// ]

// // Edges connecting them
// const defaultEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e2-3", source: "2", target: "3" },
//   { id: "e3-4", source: "3", target: "4" },
//   { id: "e3-5", source: "3", target: "5" },
// ]

// export function GraphVisualization() {
//   return (
//     <div className="w-full h-[400px]">
//       <ReactFlow
//         nodeTypes={nodeTypes}
//         defaultNodes={defaultNodes}
//         defaultEdges={defaultEdges}
//         fitView
//         fitViewOptions={{ padding: 0.2 }}
//       >
//         {/* Optional background or minimap */}
//         <Background />
//       </ReactFlow>
//     </div>
//   )
// }

"use client";

import { ReactFlow, Background, Position } from "@xyflow/react";
import { CircularNode } from "./CircularEdgeNode";
import {
  ShieldAlert,
  Users,
  Server,
  VenetianMask as Vernetian,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";

const nodeTypes = {
  circular: CircularNode,
};

// Our example nodes:
const defaultNodes = [
  {
    // Pink bubble on the left
    id: "loremipsumm",
    position: { x: 100, y: 200 },
    type: "circular",
    data: {
      label: "Loremipsumm",
      subLabel: "FW",
      bgColor: "bg-red-50", // or however you want that soft pink
      icon: <Vernetian className="h-6 w-6 text-red-500" />,
      overlayIcon: <Users className="h-4 w-4" />,
      overlayBg: "bg-purple-500",
    },
  },
  {
    // Middle bubble #1
    id: "loremipsu-1",
    position: { x: 350, y: 200 },
    type: "circular",
    data: {
      label: "Loremipsu",
      bgColor: "bg-blue-100",
      icon: <Server className="h-5 w-5 text-blue-500" />,
    },
  },
  {
    // Middle bubble #2
    id: "loremipsu-2",
    position: { x: 520, y: 200 },
    type: "circular",
    data: {
      label: "Loremipsu",
      bgColor: "bg-blue-100",
      icon: <Server className="h-5 w-5 text-blue-500" />,
    },
  },
  {
    // Right-top bubble
    id: "loremipsumdolorsit",
    position: { x: 700, y: 80 },
    type: "circular",
    data: {
      label: "Loremipsumdolorsit",
      subLabel: "192.168.1.1",
      bgColor: "bg-blue-100",
      icon: <Server className="h-5 w-5 text-blue-500" />,
      // Red overlay icon (like a shield with X)
      overlayIcon: <ShieldAlert className="h-3 w-3" />,
      overlayBg: "bg-red-500",
    },
  },
  {
    // Right-bottom bubble
    id: "loremipsumdolorsit002",
    position: { x: 700, y: 320 },
    type: "circular",
    data: {
      label: "Loremipsumdolorsit002",
      subLabel: "192.168.1.2",
      bgColor: "bg-blue-100",
      icon: <Server className="h-5 w-5 text-blue-500" />,
      overlayIcon: <ShieldAlert className="h-3 w-3" />,
      overlayBg: "bg-red-500",
    },
  },
];

// Edges
const defaultEdges = [
  { id: "e1-2", source: "loremipsumm", target: "loremipsu-1" },
  { id: "e2-3", source: "loremipsu-1", target: "loremipsu-2" },
  { id: "e3-4", source: "loremipsu-2", target: "loremipsumdolorsit" },
  { id: "e3-5", source: "loremipsu-2", target: "loremipsumdolorsit002" },
];

export function GraphVisualization() {
  return (
    <div className="w-full ">
      <p className="mb-5 text-sm font-semibold text-green-700 md:text-lg">
        Lorem Lorem Lorem
      </p>
      <div className="h-[380px] w-full rounded-md bg-primary-foreground">
        <div className="h-[318px] w-full ">
          <ReactFlow
            nodeTypes={nodeTypes}
            defaultNodes={defaultNodes}
            defaultEdges={defaultEdges}
            fitView
            // fitViewOptions={{ padding: 0.2 }}
          >
            {/* If you want a plain background, either omit <Background> 
            or use variant="dots" with a near-white color. */}
            <Background color="#FAFAFA" size={1} />
          </ReactFlow>
        </div>

        <Separator className="h-[1px] w-full" />
        <div className="flex gap-5 p-5">
          <div className="flex items-center space-x-1">
            <Avatar className="flex h-7 w-7 items-center justify-center bg-red-500 text-center">
              <ShieldAlert className="h-5 w-5 text-white" />
            </Avatar>
            <span className="text-red-500">Lorem</span>
          </div>
          <div className="flex items-center space-x-1">
            <Avatar className="flex h-7 w-7 items-center justify-center bg-orange-500 text-center">
              <ShieldAlert className="h-5 w-5 text-white" />
            </Avatar>
            <span className="text-orange-500">Lorem</span>
          </div>
          <div className="flex items-center space-x-1">
            <Avatar className="flex h-7 w-7 items-center justify-center bg-green-500 text-center">
              <ShieldAlert className="h-5 w-5 text-white" />
            </Avatar>
            <span className="text-green-500">Lorem</span>
          </div>
        </div>
      </div>

      {/* Example "legend" along the bottom (like your red/orange/green icons).
          You can absolutely place real nodes, but a simple inline row might do. */}
    </div>
  );
}
