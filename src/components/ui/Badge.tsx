import { cn } from "@/lib/utils";
import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "error" | "info" | "primary" | "accent";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const variants = {
    primary: "bg-elite-primary-100 text-elite-primary-700 dark:bg-elite-primary-900 dark:text-elite-primary-300",
    success: "bg-elite-success/10 text-elite-success border border-elite-success/20",
    warning: "bg-elite-warning/10 text-elite-warning border border-elite-warning/20",
    error: "bg-elite-error/10 text-elite-error border border-elite-error/20",
    info: "bg-elite-info/10 text-elite-info border border-elite-info/20",
    accent: "bg-elite-accent-500 text-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
