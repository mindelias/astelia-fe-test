type CarouselItemProps = {
  tile: string;
  ip: string;
  risk: string;
  badgeBg: string;
  badgeTextColor: string;
};

type NodeData = {
    label?: string
    subLabel?: string
    icon?: JSX.Element
    overlayIcon?: JSX.Element
    bgColor?: string
    textColor?: string
    overlayBg?: string
    tooltipText?: string
    details?: string[]
    headerDetails?: React.ReactNode
    configKey?: string
    tooltipPosition?: "top" | "bottom"
  }
  
  type TPopoverConfig = {
    titleColor: string;
    subtitleColor: string;
    badgeColor: string;
    headerBg: string;
    headerTextColor: string;
  };
  
  interface PopoverProps {
    label: string;
    subLabel?: string;
    headerText: string;
    headerDetails: React.ReactNode;
    details: string[];
    config:  TPopoverConfig
  }
  
  