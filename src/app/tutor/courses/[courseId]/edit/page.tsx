"use client";
import { Sidebar } from "@/components/layout/Sidebar";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ChevronLeft, GripVertical, Plus, Save, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CourseEditor() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild><Link href="/tutor/courses"><ChevronLeft size={20} /></Link></Button>
              <h1 className="text-xl font-bold font-space-grotesk">Edit Course: Next.js 15 Masterclass</h1>
           </div>
           <Button variant="accent"><Save size={18} className="mr-2" /> Save Changes</Button>
        </header>
        <main className="p-8 max-w-5xl mx-auto w-full space-y-8">
            <Card>
                <CardHeader><CardTitle>General Info</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <Input label="Title" defaultValue="Next.js 15 Masterclass" />
                    <textarea className="w-full p-4 border rounded-xl" defaultValue="Master the latest version of Next.js..." rows={4} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle>Curriculum</CardTitle>
                    <Button variant="outline" size="sm"><Plus size={16} /> Add Module</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[1, 2].map(i => (
                        <div key={i} className="p-4 border rounded-xl flex items-center gap-4">
                            <GripVertical className="text-gray-400" />
                            <span className="font-bold flex-1">Module {i}: Advanced Concepts</span>
                            <Button variant="ghost" size="icon" className="text-elite-error"><Trash2 size={16} /></Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}