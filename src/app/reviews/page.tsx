"use client";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Star } from "lucide-react";

export default function MyReviews() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">My Reviews</h1>
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold">Next.js 15 Masterclass</h3>
                    <p className="text-sm text-elite-primary-500">Reviewed on Feb 12, 2024</p>
                  </div>
                  <div className="flex text-elite-accent-500">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-sm">Great course! Really helped me understand the new App Router features.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}