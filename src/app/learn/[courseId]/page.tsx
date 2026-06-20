"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ChevronLeft, ChevronRight, Download, FileText, Maximize2, Menu, MessageSquare, Monitor, Play, Settings, StickyNote, Volume2, X } from "lucide-react";

export default function CoursePlayer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"discussion" | "resources" | "notes">("discussion");

  const modules = [
    {
      title: "Introduction to Next.js 15",
      lessons: [
        { id: 1, title: "Course Overview", duration: "05:24", completed: true },
        { id: 2, title: "Setting up your Environment", duration: "12:10", completed: true },
        { id: 3, title: "Why Next.js 15?", duration: "08:45", completed: false },
      ]
    },
    {
      title: "The App Router",
      lessons: [
        { id: 4, title: "Layouts & Pages", duration: "15:20", completed: false },
        { id: 5, title: "Dynamic Routing", duration: "18:15", completed: false },
      ]
    }
  ];

  const currentLesson = modules[0].lessons[2];

  return (
    <div className="flex h-screen bg-white dark:bg-elite-primary-950 overflow-hidden">

      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col border-r border-elite-primary-100 dark:border-elite-primary-900 bg-white dark:bg-elite-primary-950 transition-all duration-300",
        sidebarOpen ? "w-80" : "w-0 opacity-0"
      )}>
        <div className="p-6 border-b border-elite-primary-100 dark:border-elite-primary-900">
           <Link href="/dashboard" className="flex items-center gap-2 mb-6 text-elite-primary-400 hover:text-elite-primary-600 transition-colors">
              <ChevronLeft size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Back to Dashboard</span>
           </Link>
           <h2 className="font-bold font-space-grotesk leading-tight">Mastering Next.js 15: From Zero to Pro</h2>
           <div className="mt-4 space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400">
                 <span>Course Progress</span>
                 <span>33%</span>
              </div>
              <ProgressBar value={33} className="h-1.5" />
           </div>
        </div>

        <div className="flex-1 overflow-y-auto">
           {modules.map((module, mIdx) => (
             <div key={mIdx}>
                <div className="px-6 py-4 bg-elite-primary-50 dark:bg-elite-primary-900/30 text-xs font-bold uppercase tracking-wider text-elite-primary-400 border-y border-elite-primary-100 dark:border-elite-primary-900">
                   {module.title}
                </div>
                <div className="divide-y divide-elite-primary-50 dark:divide-elite-primary-900">
                   {module.lessons.map((lesson) => (
                     <button
                      key={lesson.id}
                      className={cn(
                        "w-full px-6 py-4 flex items-center gap-3 hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors text-left",
                        lesson.id === currentLesson.id ? "bg-elite-primary-50 dark:bg-elite-primary-600/10 border-l-4 border-elite-primary-600" : ""
                      )}
                     >
                       <div className="shrink-0">
                          {lesson.completed ? (
                            <CheckCircle2 size={18} className="text-elite-success" fill="currentColor" />
                          ) : (
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-elite-primary-200" />
                          )}
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className={cn("text-sm font-bold truncate", lesson.id === currentLesson.id ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-600")}>
                             {lesson.title}
                          </div>
                          <div className="text-[10px] font-medium text-elite-primary-400 flex items-center gap-1 mt-0.5">
                             <Play size={10} /> {lesson.duration}
                          </div>
                       </div>
                     </button>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-elite-primary-950">
        {/* Video Area */}
        <div className="bg-black aspect-video relative group">
           {/* Placeholder for Video Player */}
           <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <Monitor size={120} />
           </div>

           {/* Controls Overlay (Fake) */}
           <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ProgressBar value={45} className="h-1 bg-white/20" indicatorClassName="bg-elite-accent-500" />
              <div className="flex items-center justify-between text-white">
                 <div className="flex items-center gap-6">
                    <button><Play size={20} fill="white" /></button>
                    <button><ChevronRight size={20} /></button>
                    <div className="text-xs font-bold">12:45 / {currentLesson.duration}</div>
                    <button className="flex items-center gap-2"><Volume2 size={20} /> <div className="w-16 h-1 bg-white/20 rounded-full"><div className="w-1/2 h-full bg-white rounded-full" /></div></button>
                 </div>
                 <div className="flex items-center gap-6">
                    <button className="text-xs font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded">1x</button>
                    <button><Settings size={20} /></button>
                    <button><Maximize2 size={20} /></button>
                 </div>
              </div>
           </div>

           {/* Sidebar Toggle */}
           <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute top-6 left-6 p-2 bg-black/50 text-white rounded-lg hover:bg-black/80 transition-colors z-20"
           >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>

        {/* Lesson Info & Tabs */}
        <div className="flex-1 flex flex-col min-h-0">
           <div className="px-8 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
              <div className="space-y-1">
                 <div className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest">Currently Watching</div>
                 <h1 className="text-2xl font-bold font-space-grotesk">{currentLesson.title}</h1>
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="outline" size="sm">Previous</Button>
                 <Button variant="accent" size="sm">Mark as Complete</Button>
                 <Button variant="primary" size="sm">Next Lesson <ChevronRight size={16} className="ml-1" /></Button>
              </div>
           </div>

           <div className="flex-1 flex flex-col md:flex-row min-h-0">
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                 <div className="flex gap-4 border-b border-elite-primary-50 dark:border-elite-primary-900 shrink-0">
                    {[
                      { id: "discussion", label: "Discussion", icon: MessageSquare },
                      { id: "resources", label: "Resources", icon: Download },
                      { id: "notes", label: "My Notes", icon: StickyNote },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as unknown)}
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

                 <div className="animate-in fade-in duration-300">
                    {activeTab === "discussion" && (
                      <div className="space-y-6">
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-elite-primary-100 shrink-0" />
                            <div className="flex-1 space-y-3">
                               <textarea
                                placeholder="Have a question about this lesson? Ask here..."
                                className="w-full bg-elite-primary-50 dark:bg-elite-primary-900/50 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-elite-primary-500"
                                rows={3}
                               />
                               <div className="flex justify-end">
                                  <Button variant="primary" size="sm">Post Comment</Button>
                               </div>
                            </div>
                         </div>

                         <div className="space-y-6">
                            {[1, 2].map((i) => (
                              <div key={i} className="flex gap-4">
                                 <div className="w-10 h-10 rounded-full bg-elite-primary-200 shrink-0" />
                                 <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                       <span className="font-bold text-sm">Amara Okafor</span>
                                       <Badge variant="primary" className="text-[10px]">Tutor</Badge>
                                       <span className="text-[10px] text-elite-primary-400 font-bold uppercase">2 hours ago</span>
                                    </div>
                                    <p className="text-sm text-elite-primary-700 dark:text-elite-primary-300">
                                       Great question! Next.js 15 introduces dynamic partial prerendering which really helps with performance. Let me know if you need a code example.
                                    </p>
                                    <div className="flex items-center gap-4">
                                       <button className="text-[10px] font-bold uppercase text-elite-primary-400 hover:text-elite-primary-600 transition-colors">Reply</button>
                                       <button className="text-[10px] font-bold uppercase text-elite-primary-400 hover:text-elite-primary-600 transition-colors">Helpful (4)</button>
                                    </div>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {activeTab === "resources" && (
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { name: "Starter Code Portfolio", type: "ZIP", size: "4.5 MB" },
                            { name: "Next.js 15 Cheatsheet", type: "PDF", size: "1.2 MB" },
                            { name: "Environment Setup Guide", type: "PDF", size: "850 KB" },
                          ].map((res, idx) => (
                            <div key={idx} className="p-4 rounded-xl border border-elite-primary-100 dark:border-elite-primary-800 flex items-center justify-between hover:border-elite-primary-400 transition-colors group cursor-pointer">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-lg flex items-center justify-center text-elite-primary-600">
                                     <FileText size={20} />
                                  </div>
                                  <div>
                                     <div className="text-sm font-bold">{res.name}</div>
                                     <div className="text-[10px] text-elite-primary-400 font-bold uppercase">{res.type} • {res.size}</div>
                                  </div>
                               </div>
                               <Download size={18} className="text-elite-primary-400 group-hover:text-elite-primary-900 transition-colors" />
                            </div>
                          ))}
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}