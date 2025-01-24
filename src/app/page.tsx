"use client";

import "@xyflow/react/dist/style.css";

import React from "react";
import { DescriptionPanel } from "@/components/dashboard/DescriptionPanel";
import { GraphVisualization } from "@/components/dashboard/graphivisualization";
// import { GraphVisualization } from "@/components/dashboard/GraphVisualization";
import { RiskSummary } from "@/components/dashboard/RiskSummary";
import { ContextualRisk } from "@/components/dashboard/ContextualRisk";
import { Card } from "@/components/ui/card";
import { AssetAndContextualRisk } from "@/components/dashboard/KeyValueList";

export default function Dashboard() {
  return (
    <div className="grid max-h-[calc(100vh-4rem)] grid-cols-1 gap-6 p-6 lg:grid-cols-12">
      {/* Left Panel (Description) */}
      <Card className="max-h-[calc(100vh-6rem)] overflow-scroll p-5 scrollbar-hide md:col-span-4">
        <DescriptionPanel />
        <div className="block space-y-6 lg:hidden">
          <AssetAndContextualRisk />
        </div>
      </Card>

      {/* Center Panel (Graph) */}
      <Card className="space-y-6 p-5  hidden lg:block md:col-span-8 max-h-[calc(100vh-7rem)] overflow-scroll scrollbar-hide ">
        <GraphVisualization />
        {/* <div className="hidden  lg:grid  md:grid-cols-2 md:gap-6">
          <RiskSummary />
          <ContextualRisk />
        </div> */}
        {/* Here we replace your old RiskSummary / ContextualRisk with our new component */}
        <div className="hidden lg:block">
          <AssetAndContextualRisk />
        </div>
      </Card>

      {/* Right Panel (Risk widgets) */}
      {/* <div className="lg:hidden block space-y-6 md:col-span-3">
        <RiskSummary />
        <ContextualRisk />
      </div> */}
      {/* On smaller screens, show the new component instead of in the card above */}
      {/* <div className="block space-y-6 md:col-span-3 lg:hidden">
        <AssetAndContextualRisk />
      </div> */}
    </div>
  );
}
