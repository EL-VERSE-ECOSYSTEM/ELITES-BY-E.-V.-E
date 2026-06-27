"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {Card} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Play, Code, Save, Share2 } from "lucide-react";

export default function CodeLabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 bg-elite-primary-50 dark:bg-elite-primary-950 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-160px)]">
           <Card className="flex flex-col overflow-hidden border-none shadow-xl bg-elite-primary-900 text-white">
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-500" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500" />
                       <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-bold text-elite-primary-400 ml-4 uppercase tracking-widest">editor.tsx</span>
                 </div>
                 <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-white/60"><Save size={14} /> Save</Button>
                    <Button variant="accent" size="sm" className="h-8 text-xs"><Play size={14} /> Run</Button>
                 </div>
              </div>
              <div className="flex-1 p-6 font-mono text-sm space-y-2 text-elite-primary-200">
                 <p><span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> &quot;react&quot;;</p>
                 <p><span className="text-pink-400">export default function</span> Welcome() {'{'}</p>
                 <p className="pl-4"><span className="text-pink-400">return</span> (</p>
                 <p className="pl-8">&lt;<span className="text-blue-400">div</span>&gt;</p>
                 <p className="pl-12">Hello ELITE! Welcome to Africa&apos;s coding future.</p>
                 <p className="pl-8">&lt;/<span className="text-blue-400">div</span>&gt;</p>
                 <p className="pl-4">);</p>
                 <p>{'}'}</p>
              </div>
           </Card>

           <Card className="border-none shadow-xl flex flex-col overflow-hidden">
              <div className="p-4 border-b dark:border-elite-primary-800 flex justify-between items-center bg-white dark:bg-elite-primary-900">
                 <span className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Console &amp; Output</span>
                 <Button variant="outline" size="sm" className="h-8 text-xs"><Share2 size={14} /> Share</Button>
              </div>
              <div className="flex-1 bg-white dark:bg-elite-primary-950 p-8 flex items-center justify-center">
                 <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-elite-primary-50 rounded-full flex items-center justify-center mx-auto text-elite-primary-300">
                       <Code size={32} />
                    </div>
                    <p className="text-sm text-elite-primary-400 font-medium">Click &quot;Run&quot; to see the output</p>
                 </div>
              </div>
           </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
