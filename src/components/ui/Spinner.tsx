
interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Spinner({ size = "md", className }: SpinnerProps) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-elite-primary-200 border-t-elite-primary-600 dark:border-elite-primary-800 dark:border-t-elite-primary-400",
        sizes[size],
        className
      )}
    />
  );
}
