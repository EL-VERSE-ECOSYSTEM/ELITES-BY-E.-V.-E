"use client";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Globe, Save } from "lucide-react";

export default function AvailabilitySettings() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-space-grotesk">Availability Settings</h1>
          <Button variant="accent"><Save size={18} className="mr-2" /> Save Schedule</Button>
        </div>
        <Card className="max-w-4xl">
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center gap-4 p-4 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-xl mb-6">
              <Globe className="text-elite-primary-600" />
              <div className="text-sm font-medium">Timezone: Africa/Lagos (GMT+1)</div>
            </div>
            <div className="space-y-4">
              {days.map(day => (
                <div key={day} className="flex items-center justify-between py-4 border-b border-elite-primary-50 last:border-0">
                  <div className="font-bold w-32">{day}</div>
                  <div className="flex gap-4 items-center">
                    <input type="time" defaultValue="09:00" className="p-2 border rounded-lg" />
                    <span>to</span>
                    <input type="time" defaultValue="17:00" className="p-2 border rounded-lg" />
                  </div>
                  <button className="text-elite-primary-600 font-bold text-sm">Add Slot</button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <MobileBottomNav />
    </div>
  );
}