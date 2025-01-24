"use client";
import * as React from "react";
import { ChevronsUpDown, Server } from "lucide-react";

// shadcn/UI imports
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Import your reusable card
import { CollapsibleCards } from "./CollapsibleCards";
import { MetaData } from "./MetaData";
import {
  descriptionPanelContent,
  descriptionPanelItems,
} from "@/utils/data/dashboard";

export function DescriptionPanel() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Example data to feed into the collapsible cards

  return (
    <section className="w-full space-y-6">
      {/* Top: Description */}
      <div>
        <h2 className="text-xl font-semibold text-green-700">Description</h2>
        <p className="mt-2 text-xs md:text-[13px] font-normal leading-6 text-gray-700">
          {descriptionPanelContent.topDescription}
        </p>
      </div>

      {/* Extra section */}
      {/* Visible on desktop; collapsed on mobile */}
      <div className="hidden md:block">
        <h3 className="text-md font-medium text-green-700">Extra</h3>
        <p className="mt-2 text-xs sm:text-[13px] font-normal leading-6 text-gray-700">
          {descriptionPanelContent.extra}
        </p>
        {/* Etc. */}
      </div>

      {/* On smaller screens, we wrap “Extra” in a Collapsible */}
      <div className="block md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-center ">
            <CollapsibleTrigger asChild>
              <Button variant="default" size="sm" className="bg-green-700">
                See More
                <ChevronsUpDown className="ml-1 h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2 space-y-2">
            <h3 className="text-md font-medium text-green-700">Extra</h3>
            <p className="mt-2 text-xs sm:text-[13px]font-normal leading-6 text-gray-700">
              {descriptionPanelContent.extra}
            </p>
            {/* Etc. */}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Rows of metadata */}
      <MetaData />

      {/* Header for collapsible cards */}
      <div className="border-t pt-2">
        <h3 className="mb-4 text-[15px] font-semibold text-slate-700">
          Lorem Ipsum Dolor Sit
        </h3>
        <div className="space-y-4">
          {descriptionPanelItems.map((item) => (
            <CollapsibleCards
              key={item.title}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              moreDescription={item.moreDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
