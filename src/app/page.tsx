"use client";

// import React, { useState } from "react";
// import { ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { Button } from "@/components/ui/button";

// const initialNodes = [
//   { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
//   { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// export default function HomePage() {
//   const [count, setCount] = useState(0);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
//       <h1 className="p-4 text-2xl font-bold">Your Code should be here</h1>
//       <div className="flex flex-col items-center justify-center">
//         <p>count is: {count}</p>
//         <Button onClick={() => setCount(count + 1)}>Click me</Button>
//       </div>
//       <div style={{ width: "50vw", height: "50vh" }}>
//         <ReactFlow nodes={initialNodes} edges={initialEdges} />
//       </div>
//     </main>
//   );
// }

import React from "react";
import { DescriptionPanel } from "@/components/dashboard/DescriptionPanel";
import { GraphVisualization } from "@/components/dashboard/GraphVisualization";
import { RiskSummary } from "@/components/dashboard/RiskSummary";
import { ContextualRisk } from "@/components/dashboard/ContextualRisk";

export default function Dashboard() {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-6
        p-6
        max-h-[calc(100vh-4rem)]
        overflow-scroll
        scrollbar-hide

      "
    >
      {/* Left Panel (Description) */}
      <div className="md:col-span-4">
        <DescriptionPanel />
      </div>

      {/* Center Panel (Graph) */}
      <div className="md:col-span-5">
        <GraphVisualization />
      </div>

      {/* Right Panel (Risk widgets) */}
      <div className="md:col-span-3 space-y-6">
        <RiskSummary />
        <ContextualRisk />
      </div>
    </div>
  );
}