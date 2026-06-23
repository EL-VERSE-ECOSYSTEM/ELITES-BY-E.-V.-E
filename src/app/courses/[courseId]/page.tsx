"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";

import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Award, Bookmark, Calendar, CheckCircle2, ChevronDown, Clock, Download, Globe, Lock, MessageCircle, Play, Save, Share2, Star } from "lucide-react";

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "reviews" | "faq">("overview");

  const modules = [
    { title: "Introduction to Next.js 15", lessons: 4, duration: "45m" },
    { title: "The App Router Deep Dive", lessons: 8, duration: "2h 15m" },
    { title: "Data Fetching & Server Actions", lessons: 6, duration: "1h 30m" },
    { title: "Authentication with NextAuth.js", lessons: 5, duration: "1h 10m" },
    { title: "Building the Final Project", lessons: 12, duration: "4h 00m" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 bg-white dark:bg-elite-primary-950">
        {/* Header Section */}
        <section className="bg-elite-primary-950 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="accent">Bestseller</Badge>
                  <Badge variant="primary" className="bg-white/10 text-white border-none">Web Development</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk leading-tight">
                  Complete Full Stack Development with Next.js 15, TypeScript & Tailwind CSS
                </h1>
                <p className="text-xl text-elite-primary-200 max-w-3xl">
                  Master modern web development by building a production-ready application from scratch. Learn the latest features of Next.js 15.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-elite-accent-500 font-bold">
                    <Star size={18} fill="currentColor" />
                    <span>4.9</span>
                    <span className="text-white/60 font-medium">(1,240 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <span>Created by David Mensah</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Globe size={18} />
                    <span>English (Auto-generated subtitles)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">

              {/* Trailer Video Player Placeholder */}
              <div className="relative aspect-video bg-elite-primary-900 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-elite-accent-500 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                      <Play size={40} fill="currentColor" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                    <div>
                      <div className="text-lg font-bold">Course Preview</div>
                      <div className="text-sm opacity-60">2:45m</div>
                    </div>
                 </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-elite-primary-100 dark:border-elite-primary-900 sticky top-20 bg-white dark:bg-elite-primary-950 z-20">
                <div className="flex gap-8">
                  {["overview", "curriculum", "reviews", "faq"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as "overview" | "curriculum" | "reviews" | "faq")}
                      className={cn(
                        "pb-4 text-sm font-bold uppercase tracking-widest transition-all relative",
                        activeTab === tab
                          ? "text-elite-primary-600 dark:text-elite-primary-400"
                          : "text-elite-primary-400 hover:text-elite-primary-600"
                      )}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 dark:bg-elite-primary-400 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-12">
                {activeTab === "overview" && (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold font-space-grotesk">What you'll learn</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Master the latest features of Next.js 15",
                          "Advanced state management with Server Actions",
                          "Building responsive UI with Tailwind CSS",
                          "Database design with PostgreSQL and Prisma",
                          "Authentication with Clerk and NextAuth",
                          "Deployment to Vercel and AWS",
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-3">
                            <CheckCircle2 className="text-elite-success shrink-0" size={20} />
                            <span className="text-elite-primary-700 dark:text-elite-primary-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold font-space-grotesk">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2 text-elite-primary-700 dark:text-elite-primary-300">
                        <li>Basic knowledge of JavaScript (ES6+)</li>
                        <li>Experience with React (Hooks, Components)</li>
                        <li>Familiarity with HTML and CSS</li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold font-space-grotesk">Description</h2>
                      <div className="prose prose-elite dark:prose-invert max-w-none text-elite-primary-700 dark:text-elite-primary-300">
                        <p>Welcome to the most comprehensive Next.js course available. This course is designed to take you from a React developer to a full-stack engineering pro.</p>
                        <p>Throughout this course, we will build a real-world tech learning platform similar to ELITE itself, covering every aspect of modern web architecture.</p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "curriculum" && (
                  <div className="space-y-4">
                    {modules.map((module, idx) => (
                      <div key={idx} className="border border-elite-primary-100 dark:border-elite-primary-900 rounded-xl overflow-hidden">
                        <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900/50 flex justify-between items-center cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="font-bold text-elite-primary-400">Module {idx + 1}</div>
                            <h3 className="font-bold">{module.title}</h3>
                          </div>
                          <div className="flex items-center gap-4 text-xs font-medium text-elite-primary-500">
                            <span>{module.lessons} Lessons</span>
                            <span>{module.duration}</span>
                            <ChevronDown size={16} />
                          </div>
                        </div>
                        <div className="divide-y divide-elite-primary-50 dark:divide-elite-primary-900">
                           {Array.from({ length: module.lessons }).map((_, lIdx) => (
                             <div key={lIdx} className="p-4 flex items-center justify-between text-sm hover:bg-elite-primary-50/50 dark:hover:bg-white/5 transition-colors">
                               <div className="flex items-center gap-3">
                                  {lIdx === 0 && idx === 0 ? <Play size={14} className="text-elite-primary-600" /> : <Lock size={14} className="text-elite-primary-400" />}
                                  <span className={cn(lIdx === 0 && idx === 0 ? "text-elite-primary-900 dark:text-white font-medium" : "text-elite-primary-500")}>
                                    Lesson {lIdx + 1}: {idx === 0 ? "Introduction to the course" : "Deep diving into the topic"}
                                  </span>
                               </div>
                               {lIdx === 0 && idx === 0 && <button className="text-xs text-elite-primary-600 font-bold hover:underline">Preview</button>}
                             </div>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:relative">
              <aside className="lg:sticky lg:top-32 space-y-8">
                <Card className="overflow-hidden shadow-2xl border-none">
                  <div className="p-6 space-y-6">
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-bold text-elite-primary-900 dark:text-white">$15.00</span>
                       <span className="text-lg text-elite-primary-400 line-through">$89.00</span>
                       <Badge variant="success" className="ml-auto">85% OFF</Badge>
                    </div>
                    <div className="text-sm font-bold text-elite-error flex items-center gap-2">
                      <Clock size={16} />
                      <span>Special price ends in 12h 45m!</span>
                    </div>
                    <div className="space-y-3">
                      <Button variant="accent" size="lg" className="w-full">Enroll Now</Button>
                      <Button variant="outline" size="lg" className="w-full">Add to Cart</Button>
                    </div>
                    <p className="text-center text-xs text-elite-primary-400">30-Day Money-Back Guarantee</p>

                    <div className="space-y-4">
                      <div className="text-sm font-bold uppercase tracking-wider">This course includes:</div>
                      <div className="space-y-2 text-sm text-elite-primary-600 dark:text-elite-primary-300">
                        <div className="flex items-center gap-3"><Play size={16} /> 15.5 hours on-demand video</div>
                        <div className="flex items-center gap-3"><Download size={16} /> 24 downloadable resources</div>
                        <div className="flex items-center gap-3"><Award size={16} /> Certificate of completion</div>
                        <div className="flex items-center gap-3"><BarChart size={16} /> Full lifetime access</div>
                        <div className="flex items-center gap-3"><Calendar size={16} /> Regular updates</div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                       <button className="flex items-center gap-2 text-xs font-bold hover:text-elite-primary-600 transition-colors"><Share2 size={16} /> Share</button>
                       <button className="flex items-center gap-2 text-xs font-bold hover:text-elite-primary-600 transition-colors"><Bookmark size={16} /> Save</button>
                       <button className="flex items-center gap-2 text-xs font-bold hover:text-elite-primary-600 transition-colors"><MessageCircle size={16} /> Gift</button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold font-space-grotesk">Your Tutor</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-elite-primary-100" />
                      <div>
                        <div className="font-bold text-lg">David Mensah</div>
                        <div className="text-xs text-elite-primary-400 font-medium">Senior Software Engineer</div>
                      </div>
                    </div>
                    <p className="text-sm text-elite-primary-600 dark:text-elite-primary-400">
                      Over 10 years of experience in full-stack development and cloud architecture. Passionate about teaching the next generation of African tech talent.
                    </p>
                    <div className="flex gap-4 pt-2">
                       <div className="text-center">
                         <div className="font-bold">4.9</div>
                         <div className="text-[10px] uppercase text-elite-primary-400">Rating</div>
                       </div>
                       <div className="text-center border-x border-elite-primary-50 dark:border-elite-primary-800 px-4">
                         <div className="font-bold">12k</div>
                         <div className="text-[10px] uppercase text-elite-primary-400">Students</div>
                       </div>
                       <div className="text-center">
                         <div className="font-bold">15</div>
                         <div className="text-[10px] uppercase text-elite-primary-400">Courses</div>
                       </div>
                    </div>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href="/tutors/1">View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}