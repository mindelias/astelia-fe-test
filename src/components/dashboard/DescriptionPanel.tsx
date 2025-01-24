 

"use client";
import * as React from "react";
import { ChevronsUpDown, Server } from "lucide-react";

// shadcn/UI imports
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Import your reusable card
import { CollapsibleCard } from "./CollapsibleCard";

export function DescriptionPanel() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Example data to feed into the collapsible cards
  const items = [
    {
      title: "Lorem P",
      subtitle: "Server",
      icon: <Server className="h-5 w-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
    {
      title: "Lorem S",
      subtitle: "Server",
      icon: <Server className="h-5 w-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
    {
      title: "Lorem T",
      subtitle: "Server",
      icon: <Server className="h-5 w-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
  ];

  return (
     
      <section className="w-full space-y-6 ">
        {/* Top: Description */}
        <div>
          <h2 className="text-xl font-semibold text-green-700">Description</h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque
            gravida nibh et magna faucibus. Dui commodo ut metus amet egestas
            habitant viverra. Quisque fusce senectus facilisis non diam leo
            nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla
            vestibulum.
          </p>
        </div>

        {/* Extra section */}
        {/* Visible on desktop; collapsed on mobile */}
        <div className="hidden md:block">
          <h3 className="text-md font-medium text-green-700">Extra</h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames
            egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id
            ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet
            gravida integer velit felis. Eu consectetur interdum auctor sed
            aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque
            commodo lectus. Lectus ipsum velit purus viverra vulputate viverra
            in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis
            netus. Amet mus in vel etiam. Interdum habitant congue massa in
            etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem
            suspendisse.
          </p>
          {/* Etc. */}
        </div>

        {/* On smaller screens, we wrap “Extra” in a Collapsible */}
        <div className="block md:hidden">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-end">
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm">
                  See More
                  <ChevronsUpDown className="ml-1 h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-2 space-y-2">
              <h3 className="text-md font-medium text-green-700">Extra</h3>
              <p className="text-sm leading-6 text-foreground/80">
                Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
                fames…
              </p>
              {/* Etc. */}
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Rows of metadata */}
        <div className="space-y-1 border-t pt-3">
          <div className="mb-3 flex items-center justify-between lg:justify-start lg:gap-10  ">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-light text-gray-700">
              10/19/2017
            </span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-thin text-slate-700">
              Ut
            </span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-thin text-slate-700">
              Eros
            </span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="text-green-700">✓ Yes</span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-thin text-slate-700">
              Sit
            </span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-thin text-slate-700">
              Lorem Ipsum Dolor
            </span>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-slate-700">
              Lorem Ipsum Dolor
            </span>
            <span className="font-sans text-[15px] font-thin text-slate-700">
              Lorem Ipsum Dolor
            </span>
          </div>
        </div>

        {/* Header for collapsible cards */}
        <div className="border-t pt-2">
          <h3 className="mb-4 text-[15px] font-semibold text-slate-700">
            Lorem Ipsum Dolor Sit
          </h3>
          <div className="space-y-4">
            {items.map((item) => (
              <CollapsibleCard
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
