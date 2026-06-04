"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, Mail, MessageCircle, MoreVertical, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MyStudentsPage() {
  const students = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: ["John Doe", "Sarah Kamau", "Kofi Anan", "Zainab Yusuf"][i % 4],
    email: `student${i + 1}@example.com`,
    course: ["Next.js Masterclass", "UI/UX Design", "Python Basics"][i % 3],
    progress: Math.floor(Math.random() * 100),
    lastActive: "2 hours ago",
    grade: "A",
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <h1 className="text-3xl font-bold font-space-grotesk">My Students</h1>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
                 <input
                  placeholder="Search students by name or email..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none focus:ring-2 focus:ring-elite-primary-500 bg-transparent"
                 />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                 <Button variant="outline" size="sm" className="flex-1 md:flex-none"><Filter size={16} className="mr-2" /> Filters</Button>
                 <Button variant="primary" size="sm" className="flex-1 md:flex-none">Export List</Button>
              </div>
           </div>
        </header>

        <main className="px-6 pb-24">
           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Student</th>
                          <th className="px-6 py-4">Enrolled Course</th>
                          <th className="px-6 py-4 text-center">Progress</th>
                          <th className="px-6 py-4">Last Active</th>
                          <th className="px-6 py-4 text-center">Grade</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {students.map((student) => (
                         <tr key={student.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-elite-primary-100 flex items-center justify-center font-bold text-xs shrink-0">
                                     {student.name[0]}
                                  </div>
                                  <div className="min-w-0">
                                     <div className="font-bold text-sm truncate">{student.name}</div>
                                     <div className="text-[10px] text-elite-primary-400 truncate">{student.email}</div>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <Badge variant="primary" className="text-[10px]">{student.course}</Badge>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex flex-col items-center gap-1">
                                  <div className="text-[10px] font-bold text-elite-primary-400">{student.progress}%</div>
                                  <div className="w-24 h-1.5 bg-elite-primary-100 dark:bg-elite-primary-900 rounded-full overflow-hidden">
                                     <div className={cn(
                                       "h-full rounded-full",
                                       student.progress > 80 ? "bg-elite-success" : student.progress > 40 ? "bg-elite-primary-600" : "bg-elite-warning"
                                     )} style={{ width: `${student.progress}%` }} />
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-4 text-xs text-elite-primary-500">{student.lastActive}</td>
                            <td className="px-6 py-4 text-center">
                               <span className="font-bold text-elite-primary-900 dark:text-white">{student.grade}</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <button title="Message" className="p-2 text-elite-primary-400 hover:text-elite-primary-600 transition-colors">
                                     <MessageCircle size={18} />
                                  </button>
                                  <button title="Email" className="p-2 text-elite-primary-400 hover:text-elite-primary-600 transition-colors">
                                     <Mail size={18} />
                                  </button>
                                  <button title="Profile" className="p-2 text-elite-primary-400 hover:text-elite-primary-600 transition-colors">
                                     <User size={18} />
                                  </button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900/50 flex items-center justify-between">
                 <div className="text-xs text-elite-primary-400">Showing 1-8 of 1,245 students</div>
                 <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled><ChevronLeft size={16} /></Button>
                    <Button variant="outline" size="sm"><ChevronRight size={16} /></Button>
                 </div>
              </div>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
