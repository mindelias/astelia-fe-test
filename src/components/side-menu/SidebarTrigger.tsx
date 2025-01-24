// "use client"

// import { Button } from "@/components/ui/button"
// import { useSidebar } from "@/components/ui/sidebar"
// import Image from "next/image"

// // If you're using an SVG file in your "assets" folder:
// import CollapseIcon from "@/assets/collapse.svg"

// export function CustomTrigger() {
//   const { toggleSidebar } = useSidebar()

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={toggleSidebar}
//       aria-label="Toggle sidebar"

//     >
//       {/* If you want an image-based icon: */}
//       <Image
//         src={CollapseIcon as string}
//         alt="Collapse Icon"
//         className="h-6 w-6"
//       />
//       {/* Optional: <span className="sr-only">Toggle Sidebar</span> */}
//     </Button>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { ArrowLeft, Car, ChevronLeft, ChevronRight, PanelLeft, PanelRight } from "lucide-react"

// Example icons
// PanelLeft can represent “expanded,” PanelRight can represent “collapsed”

export function CustomTrigger() {
  const { toggleSidebar,  state } = useSidebar()

  return (
    <Button
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
      variant="ghost" 
      className="
        h-6 w-6
        p-0 
        bg-green-700 
        hover:bg-green-600 
        rounded-full 
        flex 
        items-center 
        justify-center
      "
    >
      {state === "expanded" ? (
        <ChevronLeft className="text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white" />
      )}
    </Button>
  )
}
