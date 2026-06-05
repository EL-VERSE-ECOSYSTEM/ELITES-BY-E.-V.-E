"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Flag, Trash2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";


export default function ContentReview() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">Content Review Queue</h1>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <Card key={i}>
              <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                   <div className="flex items-center gap-2">
                      <Flag size={14} className="text-elite-error" />
                      <span className="text-xs font-bold text-elite-error uppercase">Flagged Comment</span>
                   </div>
                   <p className="text-sm italic">"This is a sample flagged comment content that needs review."</p>
                </div>
                <div className="flex gap-2">
                   <Button variant="outline" size="sm" className="text-elite-error"><Trash2 size={16} /></Button>
                   <Button variant="primary" size="sm" className="bg-elite-success border-none"><CheckCircle size={16} /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
