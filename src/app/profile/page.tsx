"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MapPin, Calendar, Award, BookOpen, CheckCircle2, Github, Linkedin, Twitter, Globe, Edit3 } from "lucide-react";
import Link from "next/link";


export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-grow pb-24">
          <div className="h-48 bg-elite-primary-950 relative">
             <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                <div className="w-32 h-32 rounded-3xl bg-elite-primary-100 border-4 border-white dark:border-elite-primary-950 flex items-center justify-center font-bold text-4xl">JD</div>
                <div className="pb-4">
                   <h1 className="text-3xl font-bold font-space-grotesk text-white">John Doe</h1>
                   <p className="text-elite-primary-400 font-medium">Full Stack Developer | ELITES ID: ELT-8824-JD</p>
                </div>
             </div>
             <div className="absolute bottom-4 right-8">
                <Button variant="accent" size="sm" asChild><Link href="/profile/edit"><Edit3 size={16} className="mr-2" /> Edit Profile</Link></Button>
             </div>
          </div>

          <div className="px-8 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
             <div className="lg:col-span-4 space-y-6">
                <Card>
                   <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold">About Me</h3>
                      <p className="text-sm text-elite-primary-500 leading-relaxed">Passionate developer from Lagos, Nigeria. Learning to build the next big thing in Africa.</p>
                      <div className="space-y-2 pt-2">
                         <div className="flex items-center gap-2 text-sm text-elite-primary-600"><MapPin size={16} /> Lagos, Nigeria</div>
                         <div className="flex items-center gap-2 text-sm text-elite-primary-600"><Calendar size={16} /> Joined Jan 2024</div>
                      </div>
                   </CardContent>
                </Card>

                <Card>
                   <CardHeader><CardTitle className="text-sm">Skills</CardTitle></CardHeader>
                   <CardContent className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind"].map(s => <Badge key={s} variant="primary">{s}</Badge>)}
                   </CardContent>
                </Card>
             </div>

             <div className="lg:col-span-8 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                   <Card className="text-center p-6"><div className="text-2xl font-bold">12</div><div className="text-[10px] uppercase font-bold text-elite-primary-400">Courses</div></Card>
                   <Card className="text-center p-6"><div className="text-2xl font-bold">4</div><div className="text-[10px] uppercase font-bold text-elite-primary-400">Projects</div></Card>
                   <Card className="text-center p-6"><div className="text-2xl font-bold">8</div><div className="text-[10px] uppercase font-bold text-elite-primary-400">Certificates</div></Card>
                </div>

                <h3 className="text-xl font-bold font-space-grotesk mt-8">Recent Activity</h3>
                <Card><CardContent className="p-6">No recent public activity.</CardContent></Card>
             </div>
          </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
