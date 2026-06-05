import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, XCircle, Eye } from "lucide-react";
"use client";

export default function CourseApprovals() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">Course Approvals</h1>
        <div className="grid gap-6">
          {[1, 2].map(i => (
            <Card key={i}>
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 bg-elite-primary-100 rounded-lg"></div>
                  <div>
                    <h3 className="font-bold">Advanced Machine Learning</h3>
                    <p className="text-xs text-elite-primary-500">Submitted by Zainab Yusuf • 2h ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Eye size={16} className="mr-2" /> Preview</Button>
                  <Button variant="outline" size="sm" className="text-elite-error border-elite-error/20"><XCircle size={16} className="mr-2" /> Reject</Button>
                  <Button variant="primary" size="sm" className="bg-elite-success border-none"><CheckCircle2 size={16} className="mr-2" /> Approve</Button>
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
