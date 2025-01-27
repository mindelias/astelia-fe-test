"use client";

import React from "react";
const IconMap = {
  dashboard: React.lazy(() => import("@/assets/icons/dashboard.svg")),
  alerts: React.lazy(() => import("@/assets/icons/alerts.svg")),
  assets: React.lazy(() => import("@/assets/icons/assets.svg")),
  account: React.lazy(() => import("@/assets/icons/account.svg")),
  settings: React.lazy(() => import("@/assets/icons/settings.svg")),
  network: React.lazy(() => import("@/assets/icons/network.svg")),
  riskAnalysis: React.lazy(() => import("@/assets/icons/risk-analysis.svg")),
  tools: React.lazy(() => import("@/assets/icons/tools.svg")),
  reports: React.lazy(() => import("@/assets/icons/reports.svg")),
};
interface IconProps {
  name: string;
  className?: string;
}
type IconName = keyof typeof IconMap;
export function Icon({ name, className }: IconProps) {
  const Component = IconMap[name as IconName] as React.ComponentType<{
    className?: string;
  }>;

  if (!Component) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Component className={className} />
    </React.Suspense>
  );
}
