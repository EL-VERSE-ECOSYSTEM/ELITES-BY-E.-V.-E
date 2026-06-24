"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {  BookOpen, ChevronRight, Eye, MoreVertical, Plus, Search, Star, Users , Edit3 } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import {  } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent,  } from "@/components/ui/Card";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function TutorMyCourses() {
  const [activeTab, setActiveTab] = useState<"published" | "draft" | "review">("published");

  const courses = [
    { id: 1, title: "Next.js 15 Masterclass", students: 1240, revenue: 18600, rating: 4.9, status: "published" },
    { id: 2, title: "Advanced UI Design", students: 850, revenue: 12750, rating: 4.8, status: "published" },
    { id: 3, title: "Python for AI", students: 0, revenue: 0, rating: 0, status: "draft" },
    { id: 4, title: "Cloud Architecture", students: 0, revenue: 0, rating: 0, status: "review" },
  ];

  const filteredCourses = courses.filter(c => c.status === activeTab);

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">My Courses</h1>
              <Button variant="accent" asChild>
                 <Link href="/tutor/courses/create"><Plus size={18} className="mr-2" /> Create New Course</Link>
              </Button>
           </div>

           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2 p-1 bg-white dark:bg-elite-primary-900 rounded-xl w-fit border border-elite-primary-100 dark:border-elite-primary-800">
                 {["published", "draft", "review"].map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab as unknown)}
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
                 <input placeholder="Search my courses..." className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-xl outline-none" />
              </div>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           {filteredCourses.length > 0 ? (
             <div className="grid grid-cols-1 gap-4">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="group hover:border-elite-primary-300 transition-all overflow-hidden border-none shadow-md">
                     <CardContent className="p-0 flex flex-col md:flex-row">
                        <div className="md:w-64 aspect-video bg-elite-primary-100 shrink-0" />
                        <div className="flex-1 p-6 flex flex-col justify-between">
                           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                              <div className="space-y-1">
                                 <h3 className="font-bold text-xl leading-tight group-hover:text-elite-primary-600 transition-colors">{course.title}</h3>
                                 <div className="flex items-center gap-4 text-xs font-bold text-elite-primary-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Users size={14} /> {course.students.toLocaleString()} Students</span>
                                    <span className="flex items-center gap-1"><Star size={14} className="text-elite-accent-500" fill="currentColor" /> {course.rating} Rating</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2">
                                 <Button variant="outline" size="sm" asChild><Link href={`/courses/${course.id}`}><Eye size={16} className="mr-2" /> View</Link></Button>
                                 <Button variant="primary" size="sm" asChild><Link href={`/tutor/courses/${course.id}/edit`}><Edit3 size={16} className="mr-2" /> Edit</Link></Button>
                                 <button className="p-2 text-elite-primary-400 hover:text-elite-primary-900 transition-colors"><MoreVertical size={20} /></button>
                              </div>
                           </div>

                           <div className="pt-6 mt-6 border-t border-elite-primary-50 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex gap-8">
                                 <div>
                                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">Total Revenue</div>
                                    <div className="text-lg font-bold text-elite-success">${course.revenue.toLocaleString()}</div>
                                 </div>
                                 <div>
                                    <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">Completion Rate</div>
                                    <div className="text-lg font-bold">84%</div>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-bold text-elite-primary-600">
                                 Manage Enrollment <ChevronRight size={16} />
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-elite-primary-100 rounded-full flex items-center justify-center text-elite-primary-400">
                   <BookOpen size={40} />
                </div>
                <div className="space-y-1">
                   <h3 className="text-xl font-bold font-space-grotesk">No courses found</h3>
                   <p className="text-sm text-elite-primary-500">You don{"'"}t have any courses in the {activeTab} status yet.</p>
                </div>
                <Button variant="accent" asChild>
                   <Link href="/tutor/courses/create">Create My First Course</Link>
                </Button>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}