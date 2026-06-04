"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, ChevronRight, Bookmark, Building2, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function JobPipelinePage() {
  const [activeTab, setActiveTab] = useState<"all" | "saved" | "applied">("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "ELCODERS",
      location: "Remote, Africa",
      type: "Full-time",
      salary: "$3,500 - $5,000",
      posted: "2 days ago",
      eligible: true
    },
    {
      id: 2,
      title: "Backend Developer (Node.js)",
      company: "PayStack",
      location: "Lagos, Nigeria",
      type: "Remote",
      salary: "$2,000 - $3,500",
      posted: "5 hours ago",
      eligible: true
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "ELACCESS",
      location: "Nairobi, Kenya",
      type: "Contract",
      salary: "$4,000 - $6,000",
      posted: "1 day ago",
      eligible: false,
      reason: "Needs Advanced Next.js Certificate"
    },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                 <h1 className="text-3xl font-bold font-space-grotesk">Job Pipeline</h1>
                 <p className="text-sm text-elite-primary-500 font-medium">Connect your ELITE skills to real-world opportunities.</p>
              </div>
              <div className="flex items-center gap-2">
                 <Button variant="accent" asChild>
                    <Link href="/cv-builder">Manage CV / Portfolio</Link>
                 </Button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Job title or keywords..." className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl outline-none focus:ring-2 focus:ring-elite-primary-500" />
              </div>
              <div className="relative">
                 <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Location..." className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl outline-none focus:ring-2 focus:ring-elite-primary-500" />
              </div>
              <Button variant="outline" className="justify-between">
                 <div className="flex items-center gap-2"><Filter size={16} /> Filters</div>
                 <Badge variant="primary" className="bg-elite-primary-600 text-white ml-2">2</Badge>
              </Button>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex gap-8 border-b border-elite-primary-100 dark:border-elite-primary-900 overflow-x-auto shrink-0">
              {["all", "saved", "applied"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "pb-4 text-xs font-bold uppercase tracking-widest relative transition-all whitespace-nowrap",
                    activeTab === tab ? "text-elite-primary-600 dark:text-white" : "text-elite-primary-400 hover:text-elite-primary-600"
                  )}
                >
                  {tab} Jobs
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 rounded-full" />}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 gap-4">
              {jobs.map((job) => (
                <Card key={job.id} className="group hover:border-elite-primary-400 transition-all">
                   <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                         <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-2xl flex items-center justify-center shrink-0">
                            <Building2 className="text-elite-primary-400" size={32} />
                         </div>
                         <div className="flex-1 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                               <div>
                                  <h3 className="text-xl font-bold font-space-grotesk group-hover:text-elite-primary-600 transition-colors">{job.title}</h3>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-elite-primary-500 font-medium">
                                     <span className="flex items-center gap-1"><Building2 size={14} /> {job.company}</span>
                                     <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                     <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                                     <span className="flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
                                  </div>
                               </div>
                               <div className="flex items-center gap-2">
                                  <button className="p-2 text-elite-primary-400 hover:bg-elite-primary-50 dark:hover:bg-white/5 rounded-lg transition-all">
                                     <Bookmark size={20} />
                                  </button>
                                  <Button variant={job.eligible ? "primary" : "secondary"} disabled={!job.eligible}>
                                     {job.eligible ? "Apply Now" : "Locked"}
                                  </Button>
                               </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-elite-primary-50 dark:border-elite-primary-900">
                               <div className="flex items-center gap-4">
                                  {job.eligible ? (
                                    <Badge variant="success" className="bg-elite-success/10 text-elite-success border-none">
                                       <CheckCircle2 size={12} className="mr-1" /> Eligible
                                    </Badge>
                                  ) : (
                                    <div className="flex items-center gap-2">
                                       <Badge variant="error" className="bg-elite-error/10 text-elite-error border-none">
                                          <Lock size={12} className="mr-1" /> Missing requirements
                                       </Badge>
                                       <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{job.reason}</span>
                                    </div>
                                  )}
                               </div>
                               <div className="flex items-center gap-1 text-xs text-elite-primary-400 font-bold">
                                  <Clock size={14} /> Posted {job.posted}
                               </div>
                            </div>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
