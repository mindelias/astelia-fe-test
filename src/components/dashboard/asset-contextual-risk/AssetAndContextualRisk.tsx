"use client";

import { RiskSummary } from "./RiskSummary";
import { ContextualRisk } from "./ContextualRisk";

export function AssetAndContextualRisk() {
   
  return (
    <div className="grid grid-cols-1 gap-6 space-y-6 xl:grid-cols-2">
      {/* Left card (Assets table) */}
      <RiskSummary />

      {/* Right card (Contextual Risk) */}
     <ContextualRisk />
    </div>
  );
}
