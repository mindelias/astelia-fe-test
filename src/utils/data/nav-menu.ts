import { Activity, AlertTriangle, FileText, HelpCircle, Send, Server, Settings } from "lucide-react"

 // const menuItems = [
  //   { name: "Dashboard", icon: LayoutDashboard, route: "/dashboard" },
  //   { name: "Alerts", icon: AlertTriangle, route: "/alerts" },
  //   { name: "Assets", icon: Server, route: "/assets" },
  //   { name: "Network", icon: Activity, route: "/network" },
  //   { name: "Risk Analysis", icon: FileText, route: "/risk-analysis" },
  //   { name: "Tools", icon: Tools, route: "/tools" },
  //   { name: "Reports", icon: FileText, route: "/reports" },
  //   { name: "Settings", icon: Settings, route: "/settings" },
  //   { name: "Account", icon: User, route: "/account" },
  // ];
  

  export const menu = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/",
        icon: "dashboard",
      },
      {
        title: "Alerts",
        url: "/alerts",
        icon: "alerts",
      },
      {
        title: "Assets",
        url: "/assets",
        icon: "assets",
      },
      {
        title: "Network",
        url: "/network",
        icon: "network",
      },
      {
        title: "Risk Analysis",
        url: "/risk-analysis",
        icon: "riskAnalysis",
      },
      {
        title: "Tools",
        url: "/tools",
        icon: "tools",
      },
      {
        title: "Reports",
        url: "/reports",
        icon: "reports",
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/settings",
        icon: "settings",
      },
      {
        title: "Account",
        url: "/account",
        icon: "account",
      },
    ],
  };
  

