"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  Github,
  Globe,
  Upload,
  FileText,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ExternalLink,
  Save,
  Send,
  Trash2
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectSubmission() {
  const [activeTab, setActiveTab] = useState<"brief" | "submission" | "feedback">("brief");

  const requirements = [
    { id: 1, title: "Next.js App Router used correctly", status: "met" },
    { id: 2, title: "Server Actions for data mutation", status: "met" },
    { id: 3, title: "Responsive UI with Tailwind CSS", status: "met" },
    { id: 4, title: "PostgreSQL Database Integration", status: "pending" },
    { id: 5, title: "Unit tests for core logic", status: "pending" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild><Link href="/projects"><ChevronLeft size={20} /></Link></Button>
              <div>
                 <h1 className="text-xl font-bold font-space-grotesk">Real-time Chat Application</h1>
                 <p className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Next.js 15 Masterclass • Final Project</p>
              </div>
           </div>
           <div className="flex items-center gap-2">
              <Badge variant="warning">In Progress</Badge>
              <div className="h-6 w-[1px] bg-elite-primary-100 mx-2" />
              <Button variant="accent" size="sm"><Send size={16} className="mr-2" /> Submit for Review</Button>
           </div>
        </header>

        <main className="max-w-5xl mx-auto w-full p-6 pb-24 space-y-8">
           <div className="flex gap-8 border-b border-elite-primary-50 dark:border-elite-primary-900">
              {[
                { id: "brief", label: "Project Brief", icon: FileText },
                { id: "submission", label: "Submission", icon: Upload },
                { id: "feedback", label: "Feedback", icon: MessageSquare },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "pb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider relative transition-all",
                    activeTab === tab.id ? "text-elite-primary-600 dark:text-white" : "text-elite-primary-400 hover:text-elite-primary-600"
                  )}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 rounded-full" />}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-8">
                 {activeTab === "brief" && (
                   <Card className="border-none shadow-xl">
                      <CardContent className="p-8 space-y-6">
                         <div className="prose prose-elite dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold font-space-grotesk">Overview</h2>
                            <p>Build a production-ready real-time chat application using Next.js 15, Supabase, and Tailwind CSS. The app should allow users to create channels, send messages, and see presence indicators.</p>

                            <h3 className="text-xl font-bold font-space-grotesk mt-8">Technical Requirements</h3>
                            <ul className="list-disc pl-5 space-y-2">
                               <li>Implement real-time messaging using Supabase Realtime or Socket.io.</li>
                               <li>Use Next.js Middleware for authentication protection.</li>
                               <li>Enable file attachments (images/PDFs) up to 5MB.</li>
                               <li>Optimize for SEO and include proper meta tags.</li>
                               <li>Deploy the application to Vercel and provide a live URL.</li>
                            </ul>
                         </div>

                         <div className="pt-6 border-t border-elite-primary-50 dark:border-elite-primary-800 space-y-4">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400">Resources & Assets</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               {[
                                 { name: "Starter Database Schema", type: "SQL" },
                                 { name: "UI Design Kit (Figma)", type: "DESIGN" },
                               ].map((res, i) => (
                                 <div key={i} className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between hover:bg-elite-primary-50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3 text-sm font-bold">
                                       <FileText size={18} className="text-elite-primary-600" /> {res.name}
                                    </div>
                                    <Badge variant="primary" className="text-[8px]">{res.type}</Badge>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </CardContent>
                   </Card>
                 )}

                 {activeTab === "submission" && (
                   <div className="space-y-6 animate-in fade-in duration-300">
                      <Card>
                         <CardContent className="p-8 space-y-6">
                            <div className="space-y-4">
                               <div className="flex items-center gap-2 text-elite-primary-900 dark:text-white font-bold">
                                  <Github size={20} /> Repository URL
                               </div>
                               <Input placeholder="https://github.com/username/project-repo" />
                            </div>
                            <div className="space-y-4">
                               <div className="flex items-center gap-2 text-elite-primary-900 dark:text-white font-bold">
                                  <Globe size={20} /> Live Demo URL
                               </div>
                               <Input placeholder="https://project-name.vercel.app" />
                            </div>
                            <div className="space-y-4">
                               <div className="flex items-center gap-2 text-elite-primary-900 dark:text-white font-bold">
                                  <FileText size={20} /> Submission Notes
                               </div>
                               <textarea
                                className="w-full p-4 rounded-lg border border-elite-primary-100 bg-white text-sm min-h-[150px] outline-none focus:ring-2 focus:ring-elite-primary-500"
                                placeholder="Describe your approach, challenges faced, and how to test the application..."
                               />
                            </div>
                            <Button variant="primary" className="w-full"><Save size={18} className="mr-2" /> Save Progress</Button>
                         </CardContent>
                      </Card>

                      <div className="p-12 border-2 border-dashed border-elite-primary-100 dark:border-elite-primary-800 rounded-3xl text-center space-y-4 hover:border-elite-primary-400 transition-colors cursor-pointer group">
                         <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-2xl flex items-center justify-center mx-auto text-elite-primary-400 group-hover:bg-elite-primary-600 group-hover:text-white transition-colors">
                            <Upload size={32} />
                         </div>
                         <div className="space-y-1">
                            <div className="text-lg font-bold">Upload Project Assets</div>
                            <p className="text-sm text-elite-primary-500">Drag & drop your ZIP file, documentation, or screenshots.</p>
                         </div>
                         <p className="text-[10px] text-elite-primary-400 uppercase font-bold tracking-widest">MAX FILE SIZE: 20MB</p>
                      </div>
                   </div>
                 )}
              </div>

              <div className="lg:col-span-4 space-y-8">
                 <Card>
                    <CardHeader>
                       <CardTitle className="text-lg font-space-grotesk">Review Checklist</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       {requirements.map((req) => (
                         <div key={req.id} className="flex gap-3">
                            <div className={cn(
                              "w-5 h-5 rounded flex items-center justify-center shrink-0 border mt-0.5",
                              req.status === 'met' ? "bg-elite-success border-elite-success text-white" : "border-elite-primary-100"
                            )}>
                               {req.status === 'met' && <CheckCircle2 size={12} fill="currentColor" />}
                            </div>
                            <span className={cn("text-xs font-medium", req.status === 'met' ? "text-elite-primary-400 line-through" : "text-elite-primary-700 dark:text-elite-primary-300")}>{req.title}</span>
                         </div>
                       ))}
                       <div className="pt-4 mt-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                          <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400 mb-2">
                             <span>Overall Readiness</span>
                             <span>60%</span>
                          </div>
                          <ProgressBar value={60} className="h-1.5" />
                       </div>
                    </CardContent>
                 </Card>

                 <Card className="bg-elite-primary-950 text-white border-none p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-elite-accent-500">
                       <AlertCircle size={24} />
                    </div>
                    <div className="space-y-1">
                       <h3 className="font-bold">Project Deadline</h3>
                       <p className="text-xs text-elite-primary-400">Your final submission is due in</p>
                       <div className="text-2xl font-bold font-space-grotesk text-elite-error">72:45:12</div>
                    </div>
                 </Card>
              </div>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
