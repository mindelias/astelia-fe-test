const iconMap: Record<string, string> = {
  dashboard: "/icons/dashboard.svg",
  alerts: "/icons/alerts.svg",
  assets: "/icons/assets.svg",
  network: "/icons/network.svg",
  riskAnalysis: "/icons/risk-analysis.svg",
  tools: "/icons/tools.svg",
  reports: "/icons/reports.svg",
  settings: "/icons/settings.svg",
  account: "/icons/account.svg",
  collapse: "/icons/collapse.svg",
  expand: "/icons/expand.svg",
};

export const getIcon = (name: keyof typeof iconMap): string => {
  if (!iconMap[name]) {
    console.error(`Icon "${name}" not found in icon map`);
    return "";
  }
  return iconMap[name] ;
};

// export const useIcon = (name: string): string | null => {
//   const icon = getIcon(name as keyof typeof getIcon);
//   return icon || null;
// };
