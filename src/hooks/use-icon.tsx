import { getIcon } from "@/utils/icon-map";

// Hook to retrieve an icon by name from the static icon map
export const useIcon = (name: string): string | null => {
  const icon = getIcon(name as keyof typeof getIcon); // Type-safe access
  return icon || null;
};
