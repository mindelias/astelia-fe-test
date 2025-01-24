import { metaDataItems } from "@/utils/data/dashboard";
import React from "react";

export function MetaData() {
  return (
    <div className="flex flex-col gap-2 border-t pt-3">
      {metaDataItems.map((item, index) => (
        <div
          key={index}
          className="mb-3 flex  justify-between lg:justify-start lg:gap-10"
        >
          <span className="text-[15px] font-bold text-slate-700">
            {item.title}
          </span>
          {item.extra ? (
            <span className="text-green-700">✓ Yes</span>
          ) : (
            <span className="font-sans text-[15px] truncate font-normal text-gray-700">
              {item.date}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
