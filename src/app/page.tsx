"use client";

import "@xyflow/react/dist/style.css";

import React from "react";
import { DescriptionPanel } from "@/components/dashboard/descriptionpanel/DescriptionPanel";
import { GraphVisualization } from "@/components/dashboard/graphivisualization";
import { Card } from "@/components/ui/card";
import { AssetAndContextualRisk } from "@/components/dashboard/asset-contextual-risk/AssetAndContextualRisk";

export default function Dashboard() {
  return (
    <div className="mx-5 grid max-h-[calc(100vh-2rem)] grid-cols-1 gap-6 p-2 lg:grid-cols-12 lg:px-4 lg:py-6">
      {/* Left Panel (Description) */}
      <Card className="max-h-[calc(100vh-3rem)] overflow-scroll p-5 scrollbar-hide md:col-span-5 xl:col-span-4">
        <DescriptionPanel />

        <div className="hidden sm:block space-y-6 lg:hidden">
          <GraphVisualization />
        </div>

        <div className="block space-y-6 lg:hidden">
          <AssetAndContextualRisk />
        </div>
      </Card>

      {/* Center Panel (Graph) */}
      <Card className="hidden max-h-[calc(100vh-4rem)] space-y-6 overflow-scroll p-5 scrollbar-hide md:col-span-7 lg:block xl:col-span-8">
        <GraphVisualization />

        <div className="hidden lg:block">
          <AssetAndContextualRisk />
        </div>
      </Card>
    </div>
  );
}
