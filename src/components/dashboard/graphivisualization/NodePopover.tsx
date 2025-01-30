 import { Badge } from "@/components/ui/badge";
import React from "react";

export const NodePopover: React.FC<PopoverProps> = ({
  label,
  subLabel,
  headerText,
  headerDetails,
  details,
  config,
}) => {
  const { titleColor, subtitleColor, badgeColor, headerBg, headerTextColor } = config;

  return (
    <div className="px-3">
      {/* Header */}
      {/* <div
        className={`flex items-center justify-between rounded-t p-2 ${headerBg} ${headerTextColor}`}
      >
        <p className="text-sm font-semibold">{headerText}</p>
        <div>{headerDetails}</div>
      </div> */}

      {/* Title */}
      <p className={`mt-3 text-base font-semibold ${titleColor}`}>{label? label : ""}</p>
      {/* {subLabel && <p className={`text-sm ${subtitleColor}`}>{subLabel}</p>} */}

      {/* Details */}
      <div className="mt-3 flex flex-col gap-2">
        {details.map((group: DetailsGroup, groupIndex) => (
          <div key={`group-${groupIndex}`} className="flex items-center gap-2 flex-wrap">

            {group.map((detail: string | React.ReactNode, detailIndex: number) => {
              if (typeof detail === "string") {
                // Render badge for strings
                return (
                  <Badge
                    key={`detail-${groupIndex}-${detailIndex}`}
                    className={`rounded px-2 py-1 text-xs min-w-20 font-semibold sm:block xl:text-[13px] ${badgeColor}`}
                  >
                    {detail}
                  </Badge>
                );
              } else if (React.isValidElement(detail)) {
                // Render icons or custom elements
                return <div key={`icon-${groupIndex}-${detailIndex}`}>{detail}</div>;
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
