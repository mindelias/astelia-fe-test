 "use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Server, ChevronLeft, ChevronRight } from "lucide-react"

export function AssetAndContextualRisk() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-6">
      {/* Left card (Assets table) */}
      <Card className="mt-5">
        {/* Header row: “Asset” + “Contextual Risk” */}
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Asset</CardTitle>
          <CardTitle className="text-sm font-medium">
            Contextual Risk
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <Carousel>
            <CarouselContent>
              {/* Row 1 */}
              <CarouselItem>
                <div className="flex items-center justify-between px-4 py-3 border-t first:border-t-0">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Server className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-foreground">
                        Loremipsumdolorsit
                      </span>
                      <span className="text-xs text-foreground/70">
                        192.168.1.1
                      </span>
                    </div>
                  </div>
                  <Badge variant="destructive" className="text-sm bg--red-100 text-red-800">
                    Critical
                  </Badge>
                </div>
              </CarouselItem>

              {/* Row 2 */}
              <CarouselItem>
                <div className="flex items-center justify-between px-4 py-3 border-t">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Server className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-foreground">
                        Loremipsumdolorsit002
                      </span>
                      <span className="text-xs text-foreground/70">
                        192.168.1.2
                      </span>
                    </div>
                  </div>
                  <Badge variant="destructive" className="text-sm">
                    Critical
                  </Badge>
                </div>
              </CarouselItem>
            </CarouselContent>

            {/* Pagination / arrows */}
            <div className="flex items-center justify-between px-4 py-2 border-t relative">
              <CarouselPrevious className=" left-5 translate-y-1 bottom-[-200px]">
                <ChevronLeft className="h-1 w-1" />
              </CarouselPrevious>
              <span className="text-xs absolute left-1/2 -translate-x-1/2 translate-y-5 text-center text-foreground/70">
                Showing 1-2 of 2
              </span>
              <CarouselNext className="right-5 translate-y-1 bottom-[-20px]">
                <ChevronRight className="h-1 w-1" />
              </CarouselNext>
            </div>
          </Carousel>
        </CardContent>
      </Card>

      {/* Right card (Contextual Risk) */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Contextual Risk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-8">
            {/* Legend */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                <span>2 Critical</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                <span>0 High</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-500" />
                <span>0 Medium</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span>0 Low</span>
              </div>
            </div>

            {/* Big circular “2” ring */}
            <div className="relative">
              {/* The ring border */}
              <div className="h-24 w-24 rounded-full border-[10px] border-red-500" />
              {/* Centered number */}
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-foreground">
                2
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
