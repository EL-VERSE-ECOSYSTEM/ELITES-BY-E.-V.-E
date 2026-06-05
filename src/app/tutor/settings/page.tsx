import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
"use client";

export default function TutorSettings() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-8">
        <h1 className="text-3xl font-bold font-space-grotesk mb-8">Tutor Settings</h1>
        <Card className="max-w-2xl">
          <CardContent className="p-8 space-y-6">
            <Input label="Display Name" defaultValue="David Mensah" />
            <Input label="Expertise" defaultValue="Senior Full Stack Engineer" />
            <div className="space-y-1.5">
               <label className="text-sm font-medium">Bio</label>
               <textarea className="w-full p-4 border rounded-xl" rows={4} defaultValue="Expert in Next.js and Cloud Architecture..." />
            </div>
            <Button variant="accent" className="w-full">Update Professional Profile</Button>
          </CardContent>
        </Card>
      </div>
      <MobileBottomNav />
    </div>
  );
}
