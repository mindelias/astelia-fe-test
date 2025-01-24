"use client";

import * as React from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type CollapsibleCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  moreDescription?: string;
};

export function CollapsibleCards({
  icon,
  title,
  subtitle,
  description,
  moreDescription,
}: CollapsibleCardProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card
        className="cursor-pointer space-y-2 p-4 transition-colors hover:bg-muted"
        // Make the entire card clickable to toggle
        onClick={() => setOpen(!open)}
      >
        {/* TITLE ROW */}
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold leading-6 text-[#030229]/70">
            {title}
          </h3>
        </div>

        {/* TOP CONTENT (always visible) */}
        <div className="flex items-center justify-between gap-2 bg-primary-foreground p-2">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 flex-1 items-center justify-center rounded-full bg-blue-100">
              {icon /* e.g. <Server /> from lucide-react */}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-900">
                {subtitle ?? "Server"}
              </span>
              <span className="text-[10px] text-gray-500">
                {subtitle ?? "Server"}
              </span>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="h-14 w-[1px] bg-gray-400"
          />
          <div className="w-[50%] truncate text-[13px] font-normal text-gray-900 sm:whitespace-break-spaces">
            {description ?? "Lorem ipsum dolor sit amet consectetur."}
          </div>
        </div>

        {/* Collapsible content (only if open) */}
        <CollapsibleContent>
          <p className="my-4 font-sans text-[15px] font-normal capitalize text-gray-700">
            {moreDescription ??
              "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna"}
          </p>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
