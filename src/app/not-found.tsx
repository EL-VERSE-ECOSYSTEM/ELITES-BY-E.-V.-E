import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-elite-primary-50 dark:bg-elite-primary-950 p-6 text-center space-y-8">
      <div className="text-9xl font-black font-space-grotesk text-elite-primary-900/10 dark:text-white/10 absolute inset-0 flex items-center justify-center -z-10 select-none">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-space-grotesk">Page Not Found</h1>
        <p className="text-elite-primary-500 max-w-md">Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.</p>
      </div>
      <Button asChild variant="accent" size="lg">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
