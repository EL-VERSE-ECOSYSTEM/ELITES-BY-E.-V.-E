import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
  showValue?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  indicatorClassName,
  showValue = false,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="w-full">
      {showValue && (
        <div className="flex justify-between text-xs font-medium mb-1">
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div
        className={cn(
          "h-2 w-full overflow-hidden rounded-full bg-elite-primary-100 dark:bg-elite-primary-900",
          className
        )}
      >
        <div
          className={cn(
            "h-full bg-gradient-to-r from-elite-primary-500 to-elite-primary-300 transition-all duration-500 ease-in-out",
            indicatorClassName
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
