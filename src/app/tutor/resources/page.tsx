"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import { cn } from "@/lib/utils";


  Plus,
  Search,
  Upload,
  FileCode,
  FileText,
  Layout,
  MoreVertical,
  Download,
  Trash2,
  Link as LinkIcon,
  Filter,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  FolderPlus
} from "lucide-react";

export default function ResourceLibrary() {
  const [activeTab, setActiveTab] = useState<"all" | "code" | "docs">("all");

  const resources = [
    { id: 1, name: "Next.js 15 Starter Template", type: "code", format: "ZIP", size: "2.4 MB", usage: 1240 },
    { id: 2, name: "UI Design Guidelines", type: "docs", format: "PDF", size: "1.2 MB", usage: 850 },
    { id: 3, name: "Authentication Flow Diagram", type: "docs", format: "FIGMA", size: "-", usage: 420 },
    { id: 4, name: "PostgreSQL Schema Snippets", type: "code", format: "SQL", size: "45 KB", usage: 610 },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Resource Library</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><FolderPlus size={18} className="mr-2" /> New Folder</Button>
                 <Button variant="accent" size="sm"><Upload size={18} className="mr-2" /> Upload Resource</Button>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2 p-1 bg-white dark:bg-elite-primary-900 rounded-xl w-fit border border-elite-primary-100 dark:border-elite-primary-800">
                 {["all", "code", "docs"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={cn(
                      "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-elite-primary-950 text-white shadow-lg" : "text-elite-primary-400 hover:text-elite-primary-900"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="relative w-full md:w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Search resources..." className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl outline-none" />
              </div>
           </div>
        </header>

        <main className="px-6 pb-24">
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {resources.map((res) => (
                <Card key={res.id} className="group hover:border-elite-primary-400 transition-all cursor-pointer border-none shadow-md overflow-hidden">
                   <CardContent className="p-0">
                      <div className="aspect-square bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center relative overflow-hidden group-hover:bg-elite-primary-100 transition-colors">
                         {res.type === 'code' ? (
                           <FileCode size={64} className="text-elite-primary-300" />
                         ) : (
                           <FileText size={64} className="text-elite-primary-300" />
                         )}
                         <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 bg-white rounded-lg shadow-xl text-elite-error"><Trash2 size={16} /></button>
                         </div>
                         <div className="absolute inset-0 bg-elite-primary-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="accent" size="sm"><Download size={16} className="mr-2" /> Download</Button>
                         </div>
                      </div>
                      <div className="p-5 space-y-2">
                         <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm truncate pr-2">{res.name}</h4>
                            <Badge variant="primary" className="text-[8px] h-4 px-1">{res.format}</Badge>
                         </div>
                         <div className="flex justify-between items-center text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">
                            <span>{res.size}</span>
                            <span>Used by {res.usage} students</span>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              ))}

              <button className="aspect-square border-2 border-dashed border-elite-primary-100 dark:border-elite-primary-800 rounded-2xl flex flex-col items-center justify-center gap-4 text-elite-primary-400 hover:text-elite-primary-600 hover:border-elite-primary-300 transition-all group">
                 <div className="w-16 h-16 rounded-full bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plus size={32} />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest">New Resource</span>
              </button>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
