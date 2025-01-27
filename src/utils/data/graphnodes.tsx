import { Badge } from "@/components/ui/badge";
import {
  ShieldAlert,
  Users,
  Server,
  VenetianMask as Vernetian,
} from "lucide-react";


const defaultNodes = [
  {
    // Pink bubble on the left
    // TODO : extract all commonn  components into a separate and reusable  component
    id: "loremipsumm",
    position: { x: 100, y: 200 },
    type: "circular",
    data: {
      label: "Loremipsumm",
      subLabel: "FW",
      bgColor: "bg-red-100",
      icon: <Vernetian className="h-6 w-6 text-red-500" />,
      overlayIcon: <Users className="h-4 w-4" />,
      overlayBg: "bg-purple-500",
      tooltipText: "Lorem Ipsum Dolor Sit",
      details: [
        ["Lorem ipsum dolor sit"],
        ["1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4"],
        ["1.2.3.4", "1.2.3.4", "1.2.3.4"],
        [
          <Badge className="font-semibold font-sans bg-purple-100 text-purple-500">
            Lorem: 1.2.3.4
          </Badge>
        ]

      ],
      configKey: "critical",
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
      tooltipText: "",
      details: [
        [
          <div key={"loremipsum"} className="flex items-center gap-2">
            <div
              key="loremipsum"
              className="flex h-12 w-12 flex-1 items-center justify-center rounded-full bg-blue-100"
            >
              <Server className="h-5 w-5 text-blue-500" />
            </div>
            ,
            <p className="text-[12px] text-gray-700" key="loremipsum">
              {" "}
              Loremipsu
            </p>
          </div>,
        ],

        [
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Lorem: Loremipsum Loremipsum
          </p>,

          "1.2.3.4",
        ],
        [
          "1.2.3.4",
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Loremipsum
          </p>,
          "1.2.3.4",
          "1.2.3.4",
        ],
      ],
      configKey: "info",
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
      tooltipText: "",
      details: [
        [
          <div key={"loremipsum11"} className="flex items-center gap-2">
            <div
              key="loremipsum"
              className="flex h-12 w-12 flex-1 items-center justify-center rounded-full bg-blue-100"
            >
              <Server className="h-5 w-5 text-blue-500" />
            </div>
            ,
            <p className="text-[12px] text-gray-700" key="loremipsum">
              {" "}
              Loremipsu
            </p>
          </div>,
        ],

        [
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Lorem: Loremipsum Loremipsum
          </p>,

          "1.2.3.4",
        ],
        [
          "1.2.3.4",
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Loremipsum
          </p>,
          "1.2.3.4",
          "1.2.3.4",
        ],
      ],
      configKey: "info",
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
      overlayIcon: <ShieldAlert className="h-3 w-3" />,
      overlayBg: "bg-red-500",
      tooltipText: "",
      details: [
        [
          <div key={"loremipsum113"} className="flex items-center gap-2">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <Server className="relative h-5 w-5 text-blue-500" />
            </div>

            <p className="text-[12px] text-gray-700"> Loremipsudolorsit</p>
            <div className="absolute left-[56px] top-4 flex items-center justify-center rounded-full text-white">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                <ShieldAlert className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>,
        ],

        [
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Lorem: Loremipsum
          </p>,

          <Badge className="bg-yellow-50 font-sans text-[15px] font-semibold text-yellow-400">
            Lorem"ipsum"
          </Badge>,
        ],
        [
          <p
            className="font-sans text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Loremipsum:
          </p>,

          <Badge className="bg-blue-50 font-sans text-[13px] font-semibold text-blue-500">
            1234,5678
          </Badge>,
        ],
      ],
      configKey: "critical",
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
      tooltipText: "",
      details: [
        [
          <div key={"loremipsum114"} className="flex items-center gap-2">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <Server className="relative h-5 w-5 text-blue-500" />
            </div>

            <p className="text-[12px] text-gray-700"> Loremipsudolorsit</p>
            <div className="absolute left-[56px] top-4 flex items-center justify-center rounded-full text-white">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                <ShieldAlert className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>,
        ],

        [
          <p
            className="text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Lorem: Loremipsum
          </p>,

          <Badge className="bg-yellow-50 font-sans text-[15px] font-semibold text-yellow-400">
            Lorem"ipsum"
          </Badge>,
        ],
        [
          <p
            className="font-sans text-[15px] font-semibold text-gray-700"
            key="loremipsum"
          >
            Loremipsum:
          </p>,

          <Badge className="bg-blue-50 font-sans text-[13px] font-semibold text-blue-500">
            1234,5678
          </Badge>,
        ],
      ],
      configKey: "critical",
    },
  },
];

const popoverConfig = {
  default: {
    textColor: "text-gray-800",
    badgeColor: "bg-blue-100 text-blue-500",
    titleColor: "text-gray-800",
    subtitleColor: "text-gray-500",
    headerBg: "bg-gray-100",
    headerTextColor: "text-gray-800",
  },
  critical: {
    textColor: "text-red-500",
    badgeColor: "bg-red-50 text-red-500",
    titleColor: "text-red-500",
    subtitleColor: "text-gray-500",
    headerBg: "bg-red-50",
    headerTextColor: "text-red-500",
  },
  info: {
    textColor: "text-purple-500",
    badgeColor: "bg-purple-100 text-purple-500",
    titleColor: "text-purple-500",
    subtitleColor: "text-gray-500",
    headerBg: "bg-purple-50",
    headerTextColor: "text-purple-500",
  },
  warning: {
    textColor: "text-yellow-500",
    badgeColor: "bg-yellow-100 text-yellow-500",
    titleColor: "text-yellow-500",
    subtitleColor: "text-gray-500",
    headerBg: "bg-yellow-50",
    headerTextColor: "text-yellow-500",
  },
};

// Edges
const defaultEdges = [
  { id: "e1-2", source: "loremipsumm", target: "loremipsu-1" },
  { id: "e2-3", source: "loremipsu-1", target: "loremipsu-2" },
  { id: "e3-4", source: "loremipsu-2", target: "loremipsumdolorsit" },
  { id: "e3-5", source: "loremipsu-2", target: "loremipsumdolorsit002" },
];

export { defaultNodes, defaultEdges, popoverConfig };
