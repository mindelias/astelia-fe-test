"use client"

import * as React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils" // Typical ShadCN helper for conditional classes
import { Separator } from "@radix-ui/react-separator"

type CollapsibleCardProps = {
  icon: React.ReactNode
  title: string
  subtitle?: string
  description?: string
  moreDescription?: string
}

export function CollapsibleCard({
  icon,
  title,
  subtitle,
  description,
  moreDescription,
}: CollapsibleCardProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card
        className="p-4 space-y-2 cursor-pointer transition-colors hover:bg-muted"
        // Make the entire card clickable to toggle
        onClick={() => setOpen(!open)}
      >
        {/* TITLE ROW */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* TOP CONTENT (always visible) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
            {icon /* e.g. <Server /> from lucide-react */}
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <span className="font-medium text-sm text-gray-900">
              {subtitle ?? "Server"}
            </span>
            <span className="text-[10px] text-gray-500">
              {subtitle ?? "Server"}
            </span>
            {/* Vertical bar or some subtle border */}
            {/* If you have a vertical divider between the icon block and the text,
                you can do something like: */}
                {/* <Separator orientation="vertical" className="bg-gray-900" /> */}
          </div>
          <div className="border-l  border-gray-400 h-20 mx-3"></div>
          <div className="text-sm text-gray-900">
            {description ?? "Lorem ipsum dolor sit amet consectetur."}
          </div>
        </div>

        {/* Collapsible content (only if open) */}
        <CollapsibleContent>
          <p className="my-4 text-[15px] leading-6 capitalize text-gray-700">
            {moreDescription ??
              "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna."}
          </p>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
