"use client";
import {cn} from "@/lib/utils";
import {Clock, Eye, Filter, MoreVertical, ShieldCheck, Star, Users, XCircle} from "lucide-react";
import {useState} from "react";
import {MobileBottomNav} from "@/components/layout/MobileBottomNav";
import {Sidebar} from "@/components/layout/Sidebar";

import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {Card} from "@/components/ui/Card";

export default function TutorManagement() {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "verified">("all");

  const tutors = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    name: ["David Mensah", "Sarah Kamau", "Kofi Anan", "Amara Okafor"][i % 4],
    email: `tutor${i + 1}@example.com`,
    status: i === 0 ? "Pending" : "Verified",
    students: [1200, 850, 420, 2400][i % 4],
    rating: 4.9,
    joined: "Jan 2024",
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <h1 className="text-3xl font-bold font-space-grotesk">Tutor Management</h1>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Users size={24} /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Total Tutors</div>
                    <div className="text-xl font-bold">245</div>
                 </div>
              </Card>
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-elite-warning/10 text-elite-warning flex items-center justify-center"><Clock size={24} /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Pending Apps</div>
                    <div className="text-xl font-bold text-elite-warning">12</div>
                 </div>
              </Card>
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-elite-success/10 text-elite-success flex items-center justify-center"><Star size={24} fill="currentColor" /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Avg. Tutor Rating</div>
                    <div className="text-xl font-bold">4.8</div>
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["all", "pending", "verified"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "all" | "pending" | "verified")}
                    className={cn(
                      "px-6 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all",
                      activeTab === tab ? "bg-white dark:bg-elite-primary-800 text-elite-primary-900 shadow-sm" : "text-elite-primary-400"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <div className="flex items-center gap-2">
                 <Button variant="outline" size="sm"><Filter size={16} className="mr-2" /> Filter</Button>
                 <Button variant="primary" size="sm">New Application</Button>
              </div>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Tutor</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-center">Students</th>
                          <th className="px-6 py-4 text-center">Rating</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {tutors.map((tutor) => (
                         <tr key={tutor.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-xs shrink-0">{tutor.name[0]}</div>
                                  <div className="min-w-0">
                                     <div className="font-bold text-sm truncate">{tutor.name}</div>
                                     <div className="text-[10px] text-elite-primary-400 truncate">{tutor.email}</div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant={tutor.status === 'Verified' ? 'success' : 'warning'} className="text-[8px] h-5 uppercase tracking-tighter">
                                  {tutor.status}
                               </Badge>
                            </td>
                            <td className="px-6 py-4 text-center font-bold text-sm">{tutor.students.toLocaleString()}</td>
                            <td className="px-6 py-4">
                               <div className="flex items-center justify-center gap-1 text-elite-accent-500 font-bold text-xs">
                                  <Star size={14} fill="currentColor" /> {tutor.rating}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  {tutor.status === 'Pending' ? (
                                    <>
                                       <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-elite-error border-elite-error/20"><XCircle size={16} /></Button>
                                       <Button variant="primary" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase bg-elite-success border-none">Approve</Button>
                                    </>
                                  ) : (
                                    <>
                                       <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><Eye size={16} /></Button>
                                       <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><ShieldCheck size={16} /></Button>
                                    </>
                                  )}
                                  <button className="p-2 text-elite-primary-400"><MoreVertical size={18} /></button>
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