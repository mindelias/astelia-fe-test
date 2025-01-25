import React from "react";
import { ChevronLeft, ChevronRight, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../ui/carousel";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { assetsAndContextualRiskItems } from "@/utils/data/dashboard";
import { chunkArray } from "@/utils/helper";


export function RiskSummary() {
  const chunkedAssets = React.useMemo(() => {
    return chunkArray(assetsAndContextualRiskItems, 2)
  }, [])
   
  const CarouselItemRow = ({ data }: { data: CarouselItemProps }) => {
    return (
      <div className="flex items-center justify-between border-t px-4 py-3 first:border-t-0">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Server className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm  truncate font-medium text-foreground">
              {data.tile}
            </span>
            <span className="text-[10px]  text-gray-500">{data.ip}</span>
          </div>
        </div>
        <Badge
          className={`rounded-2xl hidden sm:block  text-xs font-semibold  xl:text-[13px] ${data.badgeBg} ${data.badgeTextColor}`}
        >
          {data.risk}
        </Badge>
        
      </div>
    );
  };
  return (
    <Card className="relative mt-5">
      {/* Header row: “Asset” + “Contextual Risk” */}
      <CardHeader className="flex flex-row items-center justify-between p-2 px-4">
        <CardTitle className="font-sans text-[13px] font-normal text-gray-400">
          Assets
        </CardTitle>
        <CardTitle className="font-sans text-[13px] font-normal text-gray-400">
          Contextual Risk
        </CardTitle>
      </CardHeader>
      <Separator />

      <CardContent className="p-0">
        <Carousel>
          <CarouselContent>
            {/* Row 1 */}
             {chunkedAssets.map((chunk, idx) => (
              <CarouselItem key={idx}>
                {chunk.map((item) => (
                  <CarouselItemRow key={item.tile} data={item} />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Pagination / arrows */}
          <div className="relative pb-6">
            <div className="flex items-center justify-between border-t px-4 py-2">
              <CarouselPrevious className="left-5 -translate-y-4">
                <ChevronLeft className="h-1 w-1" />
              </CarouselPrevious>
              <span className="absolute left-[40%] top-2 text-xs text-gray-500">
                Showing 1-2 of 2
              </span>
              <CarouselNext className="right-5 -translate-y-4">
                <ChevronRight className="h-1 w-1" />
              </CarouselNext>
            </div>
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
