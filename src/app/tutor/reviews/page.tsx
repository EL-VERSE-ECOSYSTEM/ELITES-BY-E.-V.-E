"use client";

import { MobileBottomNav from "@/components/layout/MobileBottomNav";, Card, CardContent from "@/components/ui/Card"; } from "lucide-react";

export default function TutorReviews() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">Student Reviews</h1>
        <div className="grid gap-6">
          {[1, 2, 3].map(i => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-xs">S{i}</div>
                    <div>
                      <h3 className="font-bold">Student {i}</h3>
                      <p className="text-xs text-elite-primary-400">on Next.js 15 Masterclass</p>
                    </div>
                  </div>
                  <div className="flex text-elite-accent-500">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-sm">This course was amazing! The tutor really knows his stuff.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
