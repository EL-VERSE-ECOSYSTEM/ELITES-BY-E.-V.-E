import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-elite-off-white dark:bg-elite-dark-bg p-6 text-center space-y-8">
      <div className="text-9xl font-black font-space-grotesk text-elite-blue-deep/10 dark:text-white/10 absolute inset-0 flex items-center justify-center -z-10 select-none">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">Page Not Found</h1>
        <p className="text-elite-slate-gray dark:text-elite-light-gray max-w-md">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      </div>
      <Button asChild size="lg" className="gradient-button border-none">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
