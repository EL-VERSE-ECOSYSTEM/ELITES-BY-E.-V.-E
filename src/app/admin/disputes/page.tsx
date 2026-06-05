"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { AlertTriangle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";


export default function DisputeResolution() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">Dispute Resolution</h1>
        <div className="space-y-4">
          <Card className="border-l-4 border-l-elite-warning">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-elite-warning" />
                <div>
                  <h3 className="font-bold">Payment Dispute: #DSP-2024-01</h3>
                  <p className="text-sm text-elite-primary-500">Student John Doe vs Tutor David Mensah</p>
                </div>
              </div>
              <Button variant="primary" size="sm">Review Case</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
