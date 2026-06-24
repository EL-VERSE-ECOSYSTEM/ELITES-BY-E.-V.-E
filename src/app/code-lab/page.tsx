"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import {  } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, FileCode, Layout, MessageSquare, Play, RotateCcw, Save, Sparkles, X, Zap } from "lucide-react";

export default function CodingLab() {
  const [activeFile, setActiveFile] = useState("index.js");
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([...output, "> node index.js", "Server running on port 3000...", "Fetching data...", "Success! Output: { status: 200, data: [...] }"]);
    setTimeout(() => setIsRunning(false), 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-elite-primary-950 text-white overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
           <div className="w-8 h-8 bg-elite-accent-500 rounded flex items-center justify-center font-bold">E</div>
           <div className="h-4 w-[1px] bg-white/20 mx-2" />
           <div className="flex flex-col">
              <span className="text-xs font-bold text-elite-primary-400 uppercase tracking-tighter">Coding Lab</span>
              <span className="text-sm font-bold truncate max-w-[200px]">Next.js Server Actions Practice</span>
           </div>
        </div>

        <div className="flex items-center gap-3">
           <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Save size={16} className="mr-2" /> Save
           </Button>
           <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <RotateCcw size={16} className="mr-2" /> Reset
           </Button>
           <div className="h-4 w-[1px] bg-white/20 mx-2" />
           <Button variant="accent" size="sm" onClick={runCode} disabled={isRunning}>
              <Play size={16} fill="white" className="mr-2" /> {isRunning ? "Running..." : "Run Code"}
           </Button>
           <Button variant="primary" size="sm" className="bg-elite-success border-none hover:bg-emerald-600">
              Submit Task
           </Button>
        </div>
      </header>

      {/* Main Lab Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer (Mini) */}
        <div className="w-12 md:w-48 border-r border-white/10 flex flex-col bg-elite-primary-950/50 shrink-0">
           <div className="p-4 hidden md:block text-[10px] font-bold uppercase tracking-widest text-elite-primary-500">Explorer</div>
           <div className="flex flex-col gap-1 p-2">
              {[
                { name: "index.js", icon: FileCode, color: "text-yellow-400" },
                { name: "App.tsx", icon: FileCode, color: "text-blue-400" },
                { name: "styles.css", icon: Layout, color: "text-blue-300" },
                { name: "README.md", icon: FileCode, color: "text-gray-400" },
              ].map((file) => (
                <button
                  key={file.name}
                  onClick={() => setActiveFile(file.name)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
                    activeFile === file.name ? "bg-white/10 text-white" : "text-elite-primary-400 hover:bg-white/5"
                  )}
                >
                  <file.icon size={16} className={file.color} />
                  <span className="hidden md:block">{file.name}</span>
                </button>
              ))}
           </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
           {/* Tabs */}
           <div className="flex bg-elite-primary-950 border-b border-white/10 shrink-0 overflow-x-auto">
              <div className="flex items-center px-4 py-2 bg-white/10 border-r border-white/10 gap-2 min-w-[120px]">
                 <FileCode size={14} className="text-yellow-400" />
                 <span className="text-xs font-medium">{activeFile}</span>
                 <X size={12} className="ml-auto text-elite-primary-500" />
              </div>
           </div>

           {/* Monaco Editor Placeholder */}
           <div className="flex-1 bg-[#1e1e1e] relative p-6 font-jetbrains-mono text-sm leading-relaxed overflow-hidden">
              <div className="absolute top-0 left-0 w-12 h-full bg-white/5 border-r border-white/5 text-right pr-3 py-6 text-white/20 select-none">
                 {Array.from({ length: 20 }).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="pl-10 space-y-1">
                 <div className="text-purple-400">import <span className="text-blue-300">{"{ useState }"}</span> from <span className="text-emerald-400">"react"</span>;</div>
                 <div className="text-gray-500">{/* Practice your server actions here */}</div>
                 <div className="text-purple-400">async function <span className="text-yellow-200">submitForm</span><span className="text-white">(formData) {"{"}</span></div>
                 <div className="pl-6 text-white">"use server";</div>
                 <div className="pl-6 text-white">const name = formData.get(<span className="text-emerald-400">"name"</span>);</div>
                 <div className="pl-6 text-purple-400">return <span className="text-white">{"{"}</span></div>
                 <div className="pl-12 text-white">message: <span className="text-emerald-400">`Hello, {"${name}"}!`</span></div>
                 <div className="pl-6 text-white">{"}"};</div>
                 <div className="text-white">{"}"}</div>
              </div>

              {/* AI Suggestion Ghost */}
              <div className="absolute bottom-10 right-10 flex flex-col items-end gap-3">
                 <button className="bg-elite-primary-600 hover:bg-elite-primary-500 text-white p-3 rounded-full shadow-2xl transition-all group">
                    <Sparkles size={20} className="group-hover:animate-pulse" />
                 </button>
              </div>
           </div>

           {/* Terminal Panel */}
           <div className="h-1/3 border-t border-white/10 bg-elite-primary-950 flex flex-col">
              <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 shrink-0">
                 <div className="flex gap-4">
                    <button className="text-xs font-bold uppercase tracking-wider text-white border-b-2 border-elite-accent-500 h-full flex items-center">Terminal</button>
                    <button className="text-xs font-bold uppercase tracking-wider text-elite-primary-400 h-full flex items-center">Output</button>
                    <button className="text-xs font-bold uppercase tracking-wider text-elite-primary-400 h-full flex items-center">Debug Console</button>
                 </div>
                 <button onClick={() => setOutput([])} className="text-elite-primary-400 hover:text-white"><X size={14} /></button>
              </div>
              <div className="flex-1 p-4 font-jetbrains-mono text-xs overflow-y-auto space-y-1">
                 {output.map((line, i) => (
                   <div key={i} className={cn(line.startsWith(">") ? "text-blue-400" : "text-gray-300")}>{line}</div>
                 ))}
                 {isRunning && <div className="animate-pulse">_</div>}
              </div>
           </div>
        </div>

        {/* Task Side Panel */}
        <div className="w-80 border-l border-white/10 bg-elite-primary-950/80 p-6 space-y-8 overflow-y-auto shrink-0 hidden lg:block">
           <div className="space-y-2">
              <div className="flex items-center gap-2 text-elite-accent-500 font-bold">
                 <CheckCircle2 size={18} />
                 <h2 className="text-lg font-space-grotesk">Task Objectives</h2>
              </div>
              <p className="text-xs text-elite-primary-400 leading-relaxed">
                 Implement a server action that validates form data and returns a success message.
              </p>
           </div>

           <div className="space-y-4">
              {[
                { title: "Create submitForm function", done: true },
                { title: "Use 'use server' directive", done: true },
                { title: "Extract 'name' from formData", done: true },
                { title: "Return response object", done: false },
              ].map((obj, i) => (
                <div key={i} className="flex gap-3">
                   <div className={cn(
                     "w-5 h-5 rounded-md flex items-center justify-center shrink-0 border",
                     obj.done ? "bg-elite-success border-elite-success text-white" : "border-white/20"
                   )}>
                      {obj.done && <CheckCircle2 size={12} fill="currentColor" />}
                   </div>
                   <span className={cn("text-xs font-medium", obj.done ? "text-elite-primary-400 line-through" : "text-white")}>{obj.title}</span>
                </div>
              ))}
           </div>

           <hr className="border-white/10" />

           <div className="space-y-4">
              <h3 className="text-sm font-bold font-space-grotesk flex items-center gap-2">
                 <MessageSquare size={16} className="text-elite-primary-400" /> Need Help?
              </h3>
              <div className="p-4 bg-white/5 rounded-xl text-xs space-y-3">
                 <p className="text-elite-primary-300 italic">"How do I use formData.get()?"</p>
                 <Button variant="ghost" size="sm" className="w-full bg-white/5 text-white">Ask AI Assistant</Button>
              </div>
           </div>

           <div className="pt-8">
              <Card className="bg-elite-primary-900/50 border-white/10">
                 <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                    <div className="text-[10px] uppercase font-bold text-elite-xp">Reward</div>
                    <div className="flex items-center gap-2 text-xl font-bold">
                       <Zap size={20} className="text-elite-xp" fill="currentColor" /> 50 XP
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}