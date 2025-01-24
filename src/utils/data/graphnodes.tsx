import {
  ShieldAlert,
  Users,
  Server,
  VenetianMask as Vernetian,
} from "lucide-react";
 
// Nodes
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
  
  export { defaultNodes, defaultEdges };