"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Search, Filter, Play, Award, Heart, Clock, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "in-progress" | "completed" | "wishlist">("all");

  const courses = [
    { id: 1, title: "Mastering Next.js 15: From Zero to Pro", progress: 65, lessons: 18, completed: 12, status: "in-progress" },
    { id: 2, title: "Advanced UI/UX with Figma & Framer", progress: 30, lessons: 24, completed: 8, status: "in-progress" },
    { id: 3, title: "Python for Data Science Bootcamp", progress: 100, lessons: 32, completed: 32, status: "completed" },
    { id: 4, title: "Cybersecurity Fundamentals", progress: 0, lessons: 15, completed: 0, status: "wishlist" },
  ];

  const filteredCourses = activeTab === "all"
    ? courses.filter(c => c.status !== "wishlist")
    : courses.filter(c => c.status === activeTab);

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">My Courses</h1>
              <div className="flex items-center gap-2">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={16} />
                    <input
                      placeholder="Search my courses..."
                      className="pl-9 pr-4 py-2 text-sm bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg outline-none focus:ring-2 focus:ring-elite-primary-500"
                    />
                 </div>
                 <Button variant="outline" size="icon"><Filter size={18} /></Button>
              </div>
           </div>

           <div className="flex gap-2 p-1 bg-elite-primary-100 dark:bg-elite-primary-900 rounded-xl w-fit">
              {["all", "in-progress", "completed", "wishlist"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all",
                    activeTab === tab
                      ? "bg-white dark:bg-elite-primary-800 text-elite-primary-900 dark:text-white shadow-sm"
                      : "text-elite-primary-500 hover:text-elite-primary-700"
                  )}
                >
                  {tab.replace("-", " ")}
                </button>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24">
           {filteredCourses.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {filteredCourses.map((course) => (
                 <Card key={course.id} className="overflow-hidden group hover:border-elite-primary-300 transition-all">
                    <div className="aspect-video bg-elite-primary-200 relative">
                       {course.status === "completed" && (
                         <div className="absolute top-2 right-2 bg-elite-success text-white p-1.5 rounded-full shadow-lg">
                            <Award size={16} />
                         </div>
                       )}
                       {course.status === "wishlist" && (
                         <div className="absolute top-2 right-2 bg-white text-elite-error p-1.5 rounded-full shadow-lg">
                            <Heart size={16} fill="currentColor" />
                         </div>
                       )}
                    </div>
                    <CardContent className="p-5 space-y-4">
                       <h3 className="font-bold leading-tight group-hover:text-elite-primary-600 transition-colors h-10 line-clamp-2">
                         {course.title}
                       </h3>

                       {course.status !== "wishlist" && (
                         <div className="space-y-2">
                           <div className="flex justify-between text-xs font-bold">
                             <span className="text-elite-primary-400">{course.progress}% Complete</span>
                             <span className="text-elite-primary-900 dark:text-white">{course.completed}/{course.lessons} Lessons</span>
                           </div>
                           <ProgressBar value={course.progress} className="h-2" />
                         </div>
                       )}

                       {course.status === "wishlist" && (
                         <div className="flex items-center gap-2 text-xs text-elite-primary-400">
                           <Clock size={14} />
                           <span>15 hours of content</span>
                         </div>
                       )}

                       <div className="pt-2">
                         {course.status === "completed" ? (
                           <Button variant="outline" className="w-full" asChild>
                             <Link href={`/certificates/${course.id}`}>View Certificate</Link>
                           </Button>
                         ) : course.status === "wishlist" ? (
                           <Button variant="accent" className="w-full">Enroll Now - $15.00</Button>
                         ) : (
                           <Button variant="primary" className="w-full" asChild>
                             <Link href={`/learn/${course.id}`}>Resume Course <ChevronRight size={16} className="ml-1" /></Link>
                           </Button>
                         )}
                       </div>
                    </CardContent>
                 </Card>
               ))}
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-elite-primary-100 dark:bg-elite-primary-900 rounded-full flex items-center justify-center text-elite-primary-400">
                   <BookOpen size={40} />
                </div>
                <div className="space-y-1">
                   <h3 className="text-xl font-bold font-space-grotesk">No courses found</h3>
                   <p className="text-sm text-elite-primary-500">You haven't {activeTab === "completed" ? "finished" : "started"} any courses in this category yet.</p>
                </div>
                <Button variant="accent" asChild>
                   <Link href="/courses">Browse Course Catalog</Link>
                </Button>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
