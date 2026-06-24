"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card,  } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Building2, CheckCircle2, ExternalLink, FileText, MapPin, MoreVertical, Plus, Search, Users } from "lucide-react";

export default function AdminJobManagement() {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "applications">("all");

  const jobs = [
    { id: 1, title: "Senior Frontend Engineer", company: "ELCODERS", location: "Remote", salary: "$5k", apps: 124, status: "Active" },
    { id: 2, title: "Backend Dev (Node.js)", company: "PayStack", location: "Lagos", salary: "$3.5k", apps: 85, status: "Active" },
    { id: 3, title: "UX Design Lead", company: "ELACCESS", location: "Nairobi", salary: "$4k", apps: 12, status: "Reviewing" },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">Job Pipeline Management</h1>
              <Button variant="accent" size="sm"><Plus size={18} className="mr-2" /> Post New Job</Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Active Jobs", value: "84", icon: Briefcase, color: "text-blue-600" },
                { label: "Total Apps", value: "2.4k", icon: Users, color: "text-purple-600" },
                { label: "Hired Talent", value: "156", icon: CheckCircle2, color: "text-elite-success" },
                { label: "Partner Cos.", value: "42", icon: Building2, color: "text-elite-accent-500" },
              ].map((stat, i) => (
                <Card key={i} className="p-4 border-none shadow-sm flex items-center gap-4">
                   <div className={cn("w-10 h-10 rounded-xl bg-opacity-10 flex items-center justify-center", stat.color.replace('text', 'bg'))}>
                      <stat.icon size={20} className={stat.color} />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-lg font-bold">{stat.value}</div>
                   </div>
                </Card>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["all", "active", "applications"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as unknown)}
                    className={cn(
                      "px-6 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-white dark:bg-elite-primary-800 text-elite-primary-900 shadow-sm" : "text-elite-primary-400"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="relative w-full md:w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                 <input placeholder="Search job listings..." className="w-full pl-9 pr-4 py-2 text-sm border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none bg-transparent" />
              </div>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Job Title & Company</th>
                          <th className="px-6 py-4">Location</th>
                          <th className="px-6 py-4">Budget</th>
                          <th className="px-6 py-4 text-center">Applicants</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {jobs.map((job) => (
                         <tr key={job.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="space-y-1">
                                  <div className="font-bold text-sm">{job.title}</div>
                                  <div className="text-[10px] font-bold text-elite-accent-500 uppercase tracking-widest">{job.company}</div>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-1.5 text-xs text-elite-primary-500">
                                  <MapPin size={14} /> {job.location}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-elite-primary-900 dark:text-white">{job.salary}</td>
                            <td className="px-6 py-4 text-center">
                               <Badge variant="primary" className="text-[10px]">{job.apps} Apps</Badge>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant={job.status === 'Active' ? 'success' : 'warning'} className="text-[8px] h-5 uppercase tracking-tighter">
                                  {job.status}
                               </Badge>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><ExternalLink size={14} /></Button>
                                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><FileText size={14} /></Button>
                                  <button className="p-2 text-elite-primary-400 hover:text-elite-primary-900"><MoreVertical size={18} /></button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}