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
      primary: "bg-elite-purple text-white hover:bg-elite-purple/90",
      secondary: "bg-elite-blue-deep text-white hover:bg-elite-blue-deep/90",
      outline: "border-2 border-elite-border-gray bg-white text-elite-dark-blue hover:bg-elite-off-white dark:bg-transparent dark:text-white dark:border-elite-dark-border",
      ghost: "bg-transparent text-elite-purple hover:bg-elite-purple/10",
      danger: "bg-elite-error text-white hover:bg-red-700",
      accent: "bg-elite-violet-soft text-white hover:bg-elite-violet-soft/90 shadow-lg hover:shadow-xl",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs font-black uppercase tracking-widest",
      md: "h-11 px-6 text-sm font-black uppercase tracking-widest",
      lg: "h-14 px-8 text-base font-black uppercase tracking-widest",
      icon: "h-10 w-10 p-2 rounded-xl",
    };

    if (asChild && props.children) {
        const child = React.Children.only(props.children) as React.ReactElement<{className?: string, children?: React.ReactNode}>;
        return React.cloneElement(child, {
            className: cn(
                "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-violet-soft disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
                variants[variant],
                sizes[size],
                className,
                child.props.className
            ),
        });
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-violet-soft disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95",
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
