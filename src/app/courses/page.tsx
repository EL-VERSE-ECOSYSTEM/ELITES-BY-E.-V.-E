"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, Star, Clock, User, Grid, List, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";



export default function CourseCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", "Web Dev", "Mobile", "Data Science", "Design", "DevOps", "AI/ML"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const courses = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: "Complete Full Stack Development with Next.js & TypeScript",
    tutor: "David Mensah",
    rating: 4.9,
    students: "1.2k",
    price: 15.0,
    level: levels[i % 3],
    duration: "15h 30m",
    thumbnail: "/course-thumb.jpg",
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 bg-elite-primary-50 dark:bg-elite-primary-950/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 space-y-8 shrink-0">
              <div className="space-y-4">
                <h3 className="font-bold text-lg font-space-grotesk">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-elite-primary-200 text-elite-primary-600 focus:ring-elite-primary-500" />
                      <span className="text-sm text-elite-primary-600 dark:text-elite-primary-400 group-hover:text-elite-primary-900 transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg font-space-grotesk">Difficulty</h3>
                <div className="space-y-2">
                  {levels.map((lvl) => (
                    <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-elite-primary-200 text-elite-primary-600 focus:ring-elite-primary-500" />
                      <span className="text-sm text-elite-primary-600 dark:text-elite-primary-400 group-hover:text-elite-primary-900 transition-colors">{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg font-space-grotesk">Price Range</h3>
                <input type="range" className="w-full accent-elite-primary-600" min="0" max="100" />
                <div className="flex justify-between text-xs font-bold text-elite-primary-400">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow space-y-8">
              {/* Top Controls */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-elite-primary-900 p-4 rounded-xl shadow-sm border border-elite-primary-100 dark:border-elite-primary-800">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
                  <Input placeholder="Search for courses..." className="pl-10" />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                   <select className="bg-transparent border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-elite-primary-500">
                      <option>Sort by: Popular</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                   </select>
                   <div className="flex gap-1 border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={cn("p-1.5 rounded", viewMode === "grid" ? "bg-elite-primary-100 dark:bg-elite-primary-800 text-elite-primary-600" : "text-elite-primary-400")}
                      >
                        <Grid size={18} />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={cn("p-1.5 rounded", viewMode === "list" ? "bg-elite-primary-100 dark:bg-elite-primary-800 text-elite-primary-600" : "text-elite-primary-400")}
                      >
                        <List size={18} />
                      </button>
                   </div>
                </div>
              </div>

              {/* Grid */}
              <div className={cn(
                "grid gap-6",
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              )}>
                {courses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`}>
                    <Card className={cn(
                      "group overflow-hidden transition-all hover:-translate-y-1",
                      viewMode === "list" && "flex flex-col md:flex-row"
                    )}>
                      <div className={cn(
                        "relative aspect-video bg-elite-primary-200",
                        viewMode === "list" && "md:w-64"
                      )}>
                        {/* Placeholder for Image */}
                      </div>
                      <CardContent className="p-5 space-y-3 flex-1">
                        <div className="flex justify-between items-center">
                          <Badge variant={course.level === "Beginner" ? "success" : course.level === "Intermediate" ? "warning" : "error"}>
                            {course.level}
                          </Badge>
                          <span className="text-xs text-elite-primary-400 font-bold flex items-center gap-1">
                            <Clock size={14} /> {course.duration}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-elite-primary-600 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-elite-primary-500">
                          <div className="w-5 h-5 rounded-full bg-elite-primary-200" />
                          <span>{course.tutor}</span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                          <div className="flex items-center gap-1 text-elite-accent-500 font-bold">
                            <Star size={16} fill="currentColor" />
                            <span>{course.rating}</span>
                            <span className="text-xs text-elite-primary-400 font-medium ml-1">({course.students})</span>
                          </div>
                          <div className="text-xl font-bold text-elite-primary-900 dark:text-white">${course.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center pt-8">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="primary" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
