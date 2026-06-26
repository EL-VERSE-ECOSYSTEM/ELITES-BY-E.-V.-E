"use client";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useState} from "react";

import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {ChevronRight, Clock, Hand, Maximize2, MessageSquare, Mic, Monitor, PhoneOff, Settings, Video, X} from "lucide-react";

export default function SessionRoom() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSideTab, setActiveSideTab] = useState<"chat" | "people" | "editor">("chat");

  return (
    <div className="flex flex-col h-screen bg-elite-primary-950 text-white overflow-hidden font-inter">
      {/* Header */}
      <header className="h-16 px-6 border-b border-white/10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
           <div className="w-8 h-8 bg-elite-accent-500 rounded flex items-center justify-center font-bold">E</div>
           <div className="h-4 w-[1px] bg-white/20" />
           <div className="flex flex-col">
              <span className="text-xs font-bold text-elite-primary-400 uppercase tracking-tighter">Live Session</span>
              <span className="text-sm font-bold truncate max-w-[200px]">Next.js Architecture Review</span>
           </div>
           <Badge variant="primary" className="bg-elite-error/10 text-elite-error border-none animate-pulse">REC</Badge>
        </div>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-elite-primary-400">
              <Clock className="w-3 h-3" /> 45:12 Remaining
           </div>
           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Settings size={18} /></Button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        {/* Stage Area */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
           {/* Video Grid */}
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Speaker (Tutor) */}
              <div className="relative rounded-3xl bg-elite-primary-900 overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center text-white/10">
                    <Video size={80} />
                 </div>
                 <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="primary" className="bg-elite-primary-950/80 backdrop-blur-md border-none">David Mensah (Tutor)</Badge>
                 </div>
                 <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg bg-black/50 hover:bg-black/80 transition-colors"><Maximize2 size={16} /></button>
                 </div>
              </div>

              {/* Student */}
              <div className="relative rounded-3xl bg-elite-primary-900 overflow-hidden group shadow-xl">
                 <div className="absolute inset-0 flex items-center justify-center text-white/10">
                    <Video size={80} />
                 </div>
                 <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="primary" className="bg-elite-primary-950/80 backdrop-blur-md border-none">You</Badge>
                    <Mic size={14} className="text-elite-error" />
                 </div>
              </div>
           </div>

           {/* Controls Bar */}
           <div className="h-20 bg-elite-primary-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center gap-4 px-6 shrink-0 shadow-2xl">
              <div className="flex items-center gap-3 pr-6 border-r border-white/10">
                 <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"><Mic size={20} /></button>
                 <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"><Video size={20} /></button>
              </div>

              <div className="flex items-center gap-3 px-6">
                 <button className="w-12 h-12 rounded-xl bg-elite-primary-600 hover:bg-elite-primary-500 transition-all flex items-center justify-center shadow-lg"><Monitor size={20} /></button>
                 <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"><Hand size={20} /></button>
                 <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center" onClick={() => setSidebarOpen(!sidebarOpen)}><MessageSquare size={20} /></button>
              </div>

              <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                 <Button variant="danger" size="lg" className="rounded-xl px-8 bg-elite-error border-none hover:bg-red-600 font-bold" asChild>
                    <Link href="/sessions"><PhoneOff size={20} className="mr-2" /> End</Link>
                 </Button>
              </div>
           </div>
        </div>

        {/* Side Panel */}
        <aside className={cn(
          "bg-white dark:bg-elite-primary-900 rounded-3xl border border-white/10 flex flex-col transition-all duration-300 shadow-2xl",
          sidebarOpen ? "w-80 opacity-100" : "w-0 opacity-0 pointer-events-none"
        )}>
           <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-4">
                 {["chat", "people"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveSideTab(tab as "chat" | "people" | "editor")}
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest transition-all relative pb-2",
                      activeSideTab === tab ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-400 hover:text-elite-primary-900"
                    )}
                   >
                     {tab}
                     {activeSideTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 rounded-full" />}
                   </button>
                 ))}
              </div>
              <button onClick={() => setSidebarOpen(false)}><X size={18} className="text-elite-primary-400" /></button>
           </div>

           <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeSideTab === 'chat' && (
                <>
                   <div className="space-y-4">
                      {[
                        { name: "David Mensah", msg: "Hey there! Ready to start?", time: "10:00 AM" },
                        { name: "You", msg: "Yes, I have some questions about the middleware implementation.", time: "10:01 AM" },
                      ].map((m, i) => (
                        <div key={i} className="space-y-1">
                           <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-elite-primary-600 uppercase tracking-widest">{m.name}</span>
                              <span className="text-[8px] text-elite-primary-400">{m.time}</span>
                           </div>
                           <p className="text-sm p-3 bg-elite-primary-50 dark:bg-white/5 rounded-2xl rounded-tl-none text-elite-primary-900 dark:text-white">
                              {m.msg}
                           </p>
                        </div>
                      ))}
                   </div>
                </>
              )}
           </div>

           <div className="p-4 border-t border-white/5">
              <div className="relative">
                 <input
                  placeholder="Send a message..."
                  className="w-full bg-elite-primary-50 dark:bg-white/5 border border-elite-primary-100 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-elite-primary-950 dark:text-white outline-none focus:ring-2 focus:ring-elite-primary-500"
                 />
                 <button className="absolute right-3 top-1/2 -translate-y-1/2 text-elite-primary-600"><ChevronRight size={20} /></button>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}