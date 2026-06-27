"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { courses } from "@/data/courses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Entry Level", "Standard", "Premium", "Advanced"];

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-elite-primary-50 dark:bg-elite-primary-950">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
        <header className="mb-12 space-y-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                 <h1 className="text-4xl md:text-5xl font-black font-space-grotesk tracking-tight text-elite-primary-950 dark:text-white">Course Catalog</h1>
                 <p className="text-elite-primary-500 font-medium text-lg">Master 100+ programming languages and frameworks.</p>
              </div>
              <div className="flex items-center gap-3">
                 <Badge variant="accent" className="h-8 text-sm px-4">{filteredCourses.length} Courses Available</Badge>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-elite-primary-400 group-focus-within:text-elite-accent-500 transition-colors" size={20} />
                 <input
                    type="text"
                    placeholder="Search by language (e.g. Python, Rust, Solidity...)"
                    className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-elite-primary-100 bg-white dark:bg-elite-primary-900 dark:border-elite-primary-800 outline-none focus:border-elite-accent-500 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                 {categories.map(cat => (
                   <button
                     key={cat}
                     onClick={() => setSelectedCategory(cat)}
                     className={`h-14 px-6 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                       selectedCategory === cat
                        ? "bg-elite-primary-950 border-elite-primary-950 text-white shadow-xl"
                        : "bg-white border-elite-primary-100 text-elite-primary-400 hover:border-elite-primary-300"
                     }`}
                   >
                     {cat}
                   </button>
                 ))}
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {filteredCourses.map((course) => (
             <Card key={course.id} className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden bg-white dark:bg-elite-primary-900 flex flex-col">
                <div className="aspect-video bg-elite-primary-100 dark:bg-elite-primary-800 relative">
                   <div className="absolute inset-0 flex items-center justify-center font-black text-4xl text-elite-primary-200 dark:text-elite-primary-700 select-none group-hover:scale-110 transition-transform">
                      {course.name.charAt(0)}
                   </div>
                   <div className="absolute top-4 left-4">
                      <Badge variant="accent" className="shadow-lg">{course.category}</Badge>
                   </div>
                </div>
                <CardHeader className="space-y-1">
                   <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-elite-accent-500 transition-colors">{course.name}</CardTitle>
                      <div className="text-right">
                         <div className="text-lg font-black font-space-grotesk text-elite-primary-950 dark:text-white">₦{course.priceNGN.toLocaleString()}</div>
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">${course.priceUSD} • €{course.priceEUR} • £{course.priceGBP}</div>
                      </div>
                   </div>
                   <p className="text-xs text-elite-primary-500 font-medium line-clamp-2">{course.description}</p>
                </CardHeader>
                <CardContent className="space-y-4 mt-auto">
                   <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">
                      <div className="flex items-center gap-1"><BookOpen size={12} /> {course.level}</div>
                      <div className="flex items-center gap-1">Certificate Incl.</div>
                   </div>
                   <Button className="w-full font-black uppercase tracking-widest h-12 shadow-lg shadow-elite-primary-900/10 group-hover:bg-elite-accent-500 group-hover:text-white transition-all" asChild>
                      <Link href={`/courses/${course.id}`}>View Curriculum</Link>
                   </Button>
                </CardContent>
             </Card>
           ))}
        </div>

        {filteredCourses.length === 0 && (
           <div className="text-center py-24 space-y-4">
              <div className="w-20 h-20 bg-elite-primary-100 rounded-full flex items-center justify-center mx-auto text-elite-primary-400">
                 <Filter size={32} />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk">No courses found</h3>
              <p className="text-elite-primary-500">Try adjusting your search or filters.</p>
              <Button variant="ghost" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>Clear All Filters</Button>
           </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
