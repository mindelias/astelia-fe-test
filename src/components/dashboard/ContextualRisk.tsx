import { Card } from "../ui/card";

export function ContextualRisk() {
    return (
     <Card className="p-4 min-w-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Contextual Risk
        </h2>
        <div className="flex justify-center items-center">
          <div className="relative">
            <svg className="w-24 h-24">
              <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#ef4444" strokeWidth="8" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold">2</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  