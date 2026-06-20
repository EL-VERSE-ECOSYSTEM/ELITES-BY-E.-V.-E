"use client";
import { cn } from "@/lib/utils";
import { AlertCircle, BookOpen, Eye, MoreVertical, Search, Star, TrendingUp, X, XCircle } from "lucide-react";
import { useState } from "react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function CourseManagement() {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "published">("all");

  const courses = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: ["Next.js 15 Masterclass", "UI/UX Advanced", "Python for AI", "Cybersecurity Basics"][i % 4],
    tutor: "David Mensah",
    status: i === 0 ? "Pending" : "Published",
    students: [1200, 850, 420, 2400][i % 4],
    rating: 4.9,
    category: "Web Dev"
  }));

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <h1 className="text-3xl font-bold font-space-grotesk">Course Management</h1>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><BookOpen size={24} /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Total Courses</div>
                    <div className="text-xl font-bold">156</div>
                 </div>
              </Card>
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-elite-warning/10 text-elite-warning flex items-center justify-center"><AlertCircle size={24} /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Pending Review</div>
                    <div className="text-xl font-bold text-elite-warning">24</div>
                 </div>
              </Card>
              <Card className="p-4 border-none shadow-sm flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-elite-success/10 text-elite-success flex items-center justify-center"><TrendingUp size={24} /></div>
                 <div>
                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Month Revenue</div>
                    <div className="text-xl font-bold text-elite-success">$42k</div>
                 </div>
              </Card>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
              <div className="flex gap-4 p-1 bg-elite-primary-50 dark:bg-elite-primary-950 rounded-xl w-fit">
                 {["all", "pending", "published"].map((tab) => (
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
                 <input placeholder="Search courses..." className="w-full pl-9 pr-4 py-2 text-sm border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none bg-transparent" />
              </div>
           </div>

           <Card className="overflow-hidden border-none shadow-xl">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-elite-primary-950 text-white text-[10px] font-bold uppercase tracking-widest">
                       <tr>
                          <th className="px-6 py-4">Course Title</th>
                          <th className="px-6 py-4">Tutor</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-center">Students</th>
                          <th className="px-6 py-4 text-center">Rating</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-elite-primary-100 dark:divide-elite-primary-900">
                       {courses.map((course) => (
                         <tr key={course.id} className="hover:bg-elite-primary-50 dark:hover:bg-white/5 transition-colors group">
                            <td className="px-6 py-4">
                               <div className="font-bold text-sm truncate max-w-[200px]">{course.title}</div>
                               <div className="text-[8px] font-bold text-elite-primary-400 uppercase tracking-widest mt-1">{course.category}</div>
                            </td>
                            <td className="px-6 py-4 text-xs font-medium text-elite-primary-600 underline cursor-pointer">{course.tutor}</td>
                            <td className="px-6 py-4">
                               <Badge variant={course.status === 'Published' ? 'success' : 'warning'} className="text-[8px] h-5 uppercase">
                                  {course.status}
                               </Badge>
                            </td>
                            <td className="px-6 py-4 text-center font-bold text-xs">{course.students.toLocaleString()}</td>
                            <td className="px-6 py-4">
                               <div className="flex items-center justify-center gap-1 text-elite-accent-500 font-bold text-xs">
                                  <Star size={14} fill="currentColor" /> {course.rating}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <div className="flex justify-end gap-2">
                                  {course.status === 'Pending' ? (
                                    <>
                                       <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-elite-error"><XCircle size={16} /></Button>
                                       <Button variant="primary" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase bg-elite-success border-none">Approve</Button>
                                    </>
                                  ) : (
                                    <>
                                       <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-elite-primary-100"><Eye size={16} /></Button>
                                    </>
                                  )}
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