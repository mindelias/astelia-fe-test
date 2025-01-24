"use client";

import { ReactFlow, Background } from "@xyflow/react";
import { CustomNode } from "./CustomNode";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { defaultEdges, defaultNodes } from "@/utils/data/graphnodes";
import { ShieldAlert } from "lucide-react";

const nodeTypes = {
  circular: CustomNode,
};

export function GraphVisualization() {
  return (
    <div className="w-full">
      <p className="mb-5 text-sm font-semibold text-green-700 md:text-lg">
        Lorem Lorem Lorem
      </p>
      <div className="h-[380px] w-full rounded-md bg-primary-foreground">
        <div className="h-[318px] w-full">
          <ReactFlow
            nodeTypes={nodeTypes}
            defaultNodes={defaultNodes}
            defaultEdges={defaultEdges}
            fitView
            // fitViewOptions={{ padding: 0.2 }}
          >
            <Background color="#FAFAFA" size={1} />
          </ReactFlow>
        </div>

        <Separator className="h-[1px] w-full" />
        {/* TODO: Replace with real data */}
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
    </div>
  );
}
