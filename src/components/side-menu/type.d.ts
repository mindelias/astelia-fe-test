interface NavItemGroupProps {
  items: {
    title: string;
    url: string;
    icon: string; // Icon name matching the `iconMap`
  }[];
  isCollapsed: boolean; // State for collapsed/expanded behavior
  currentPath: string; // Pass the current path explicitly
}
