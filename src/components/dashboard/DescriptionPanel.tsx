//  "use client"
// import * as React from "react"
// import { ChevronsUpDown } from "lucide-react"

// // shadcn/UI imports
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import {
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
// } from "@/components/ui/collapsible"

// export function DescriptionPanel() {
//   const [isOpen, setIsOpen] = React.useState(false)

//   return (
//     <Card className="p-4">
//       {/* “Description” heading + summary */}
//       <h2 className="text-xl font-semibold">Description</h2>
//       <p className="mt-2 text-sm leading-6">
//         Lorem ipsum dolor sit amet consectetur. Aenean sodales…
//       </p>

//       {/* On desktop, show the “Extra” content fully. */}
//       <div className="hidden md:block mt-4">
//         <h3 className="text-md font-medium">Extra</h3>
//         <p className="mt-2 text-sm leading-6">
//           Lorem ipsum dolor sit amet consectetur. Tempus a id
//           adipiscing fames egestas…
//         </p>
//         {/* etc. */}
//       </div>

//       {/* On mobile/tablet, collapse the “Extra” section behind “See More”. */}
//       <div className="block md:hidden mt-4">
//         <Collapsible open={isOpen} onOpenChange={setIsOpen}>
//           <div className="flex items-center justify-end">
//             <CollapsibleTrigger asChild>
//               <Button variant="outline" size="sm">
//                 See More
//                 <ChevronsUpDown className="ml-1 h-4 w-4" />
//               </Button>
//             </CollapsibleTrigger>
//           </div>
//           <CollapsibleContent className="mt-2 space-y-2">
//             <h3 className="text-md font-medium">Extra</h3>
//             <p className="text-sm leading-6">
//               Lorem ipsum dolor sit amet consectetur. Tempus a id
//               adipiscing fames…
//             </p>
//             {/* etc. */}
//           </CollapsibleContent>
//         </Collapsible>
//       </div>
//     </Card>
//   )
// }

"use client"
import * as React from "react"
import { ChevronsUpDown, Server } from "lucide-react"

// shadcn/UI imports
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

// Import your reusable card
import { CollapsibleCard } from "./CollapsibleCard"

export function DescriptionPanel() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Example data to feed into the collapsible cards
  const items = [
    {
      title: "Lorem P",
      subtitle: "Server",
      icon: <Server className="w-5 h-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
    {
      title: "Lorem S",
      subtitle: "Server",
      icon: <Server className="w-5 h-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
    {
      title: "Lorem T",
      subtitle: "Server",
      icon: <Server className="w-5 h-5 text-[#1873DE]" />,
      description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
      moreDescription: "Nunc Vitae Tortor Convallis Vitae Arcu. Magna.",
    },
  ]

  return (
    <Card className="p-4 space-y-6 max-w-sm">
      {/* Top: Description */}
      <div>
        <h2 className="text-xl font-semibold text-green-700">Description</h2>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Aenean sodales…
        </p>
      </div>

      {/* Extra section */}
      {/* Visible on desktop; collapsed on mobile */}
      <div className="hidden md:block">
        <h3 className="text-md font-medium text-green-700">Extra</h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempus a id
          adipiscing fames egestas…
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
              Lorem ipsum dolor sit amet consectetur. Tempus a id
              adipiscing fames…
            </p>
            {/* Etc. */}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Rows of metadata */}
      <div className="space-y-1 pt-3 border-t">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[15px] text-slate-700 ">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">10/19/2017</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[15px] text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">Ut</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[15px] text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">Eros</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-green-700">✓ Yes</span>
        </div>
        <div className="flex items-center justify-between mb-3 ">
          <span className="font-semibold text-[15px] text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">Sit</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[15px] text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">Lorem Ipsum Dolor</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[15px] text-slate-700">Lorem Ipsum Dolor</span>
          <span className="text-slate-700 text-[15px] font-sans font-thin">Lorem Ipsum Dolor</span>
        </div>
      </div>

      {/* Header for collapsible cards */}
      <div className="pt-2 border-t">
        <h3 className="font-semibold text-[15px] text-slate-700 mb-4">
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
    </Card>
  )
}

