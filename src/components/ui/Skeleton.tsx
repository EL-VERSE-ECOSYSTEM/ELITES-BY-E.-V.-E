
interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-elite-primary-100 dark:bg-elite-primary-900/50",
        className
      )}
    />
  );
}
