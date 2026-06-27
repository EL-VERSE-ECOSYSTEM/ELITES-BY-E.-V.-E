import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "accent";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-elite-primary-600 text-white hover:bg-elite-primary-700",
      secondary: "bg-elite-primary-100 text-elite-primary-900 hover:bg-elite-primary-200",
      outline: "border-2 border-elite-primary-600 text-elite-primary-600 hover:bg-elite-primary-50",
      ghost: "text-elite-primary-600 hover:bg-elite-primary-50",
      danger: "bg-elite-error text-white hover:bg-red-600",
      accent: "bg-elite-accent-500 text-white hover:bg-elite-accent-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg font-bold",
      icon: "h-10 w-10 p-2" };

    if (asChild && props.children) {
        const child = React.Children.only(props.children) as React.ReactElement<{className?: string, children?: React.ReactNode}>;
        return React.cloneElement(child, {
            className: cn(
                "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-primary-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                variants[variant],
                sizes[size],
                className,
                child.props.className
            ) });
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-primary-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
