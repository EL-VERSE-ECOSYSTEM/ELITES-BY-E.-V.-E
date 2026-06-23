
"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";

export default function BlogPostDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white dark:bg-elite-primary-950">
        <div className="container mx-auto px-4 max-w-4xl">
           <Badge variant="accent">TECH TRENDS</Badge>
           <h1 className="text-4xl font-bold mt-4">The African Tech Revolution</h1>
           <p className="mt-6 text-lg">{"Africa has the world's youngest population. This demographic dividend is now being leveraged through technology."}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
