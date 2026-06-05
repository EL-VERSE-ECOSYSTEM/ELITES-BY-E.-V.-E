import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { MessageSquare, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
"use client";

export default function TutorCommunity() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-space-grotesk">Tutor Community</h1>
          <Button variant="accent"><Plus size={18} className="mr-2" /> New Discussion</Button>
        </div>
        <div className="grid gap-6">
          {[1, 2].map(i => (
            <Card key={i} className="hover:border-elite-primary-300 transition-all cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How to handle complex React state in tutorials?</h3>
                <p className="text-sm text-elite-primary-500 mb-4">Sharing my best practices for teaching Redux and Context API...</p>
                <div className="flex items-center gap-6 text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Users size={12} /> 24 Tutors</span>
                  <span className="flex items-center gap-1"><MessageSquare size={12} /> 12 Replies</span>
                  <span>Active 5m ago</span>
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
