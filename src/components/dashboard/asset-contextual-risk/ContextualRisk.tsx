import { assetsAndContextualRiskItems } from "@/utils/data/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";

export function ContextualRisk() {
  return (
    <Card className="mt-5">
      <CardHeader className="p-3 px-4">
        <CardTitle className="font-sans text-[13px] font-normal text-gray-400">
          Contextual Risk
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex items-center justify-between space-x-8 space-y-10">
          {/* Legend */}
          <div className="space-y-2 text-sm">
            {assetsAndContextualRiskItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${item.badgeBgDark}`}
                />
                <span>{item.risk}</span>
              </div>
            ))}
          </div>

          {/* Big circular “2” ring */}
          <div className="relative">
            {/* The ring border */}
            <div className="h-28 w-28 rounded-full border-[6px] border-red-500" />
            {/* Centered number */}
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-foreground">
              2
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
