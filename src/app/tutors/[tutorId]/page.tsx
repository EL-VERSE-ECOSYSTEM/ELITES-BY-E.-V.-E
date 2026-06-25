"use client";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useState} from "react";
import {Navbar} from "@/components/layout/Navbar";

import {Footer} from "@/components/layout/Footer";
import {Card, CardContent} from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {Briefcase, Clock, Globe, MapPin} from "lucide-react";

export default function TutorProfilePage() {
  const [activeTab, setActiveTab] = useState<"courses" | "reviews" | "availability">("courses");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 bg-white dark:bg-elite-primary-950">
        {/* Cover Photo & Avatar */}
        <section className="relative h-64 md:h-96 bg-elite-primary-900 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-elite-primary-600 to-elite-accent-500 opacity-20" />
           <div className="container mx-auto px-4 h-full relative">
              <div className="absolute -bottom-16 left-4 md:left-8 flex flex-col md:flex-row items-end gap-6">
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-elite-primary-100 border-[6px] border-white dark:border-elite-primary-950 flex items-center justify-center font-bold text-5xl text-elite-primary-900 shadow-2xl">DM</div>
                 <div className="pb-4 space-y-2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white md:text-white drop-shadow-md">David Mensah</h1>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/80 font-medium">
                       <span className="flex items-center gap-1"><Briefcase size={16} /> Senior Engineer @ ELCODERS</span>
                       <span className="flex items-center gap-1"><MapPin size={16} /> Lagos, Nigeria</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <div className="container mx-auto px-4 pt-24 pb-20">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Bio & Tabs */}
              <div className="lg:col-span-8 space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-space-grotesk">About Me</h2>
                    <p className="text-lg text-elite-primary-600 dark:text-elite-primary-300 leading-relaxed">
                       David is a veteran full-stack engineer with over 10 years of experience building scalable systems for tech giants and startups across Africa. He specializes in Next.js, Cloud Architecture, and distributed systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map(skill => (
                         <Badge key={skill} variant="primary" className="px-4 py-1">{skill}</Badge>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="flex gap-8 border-b border-elite-primary-100 dark:border-elite-primary-900 sticky top-20 bg-white dark:bg-elite-primary-950 z-20">
                       {["courses", "reviews", "availability"].map((tab) => (
                         <button
                          key={tab}
                          onClick={() => setActiveTab(tab as "courses" | "reviews" | "availability")}
                          className={cn(
                            "pb-4 text-sm font-bold uppercase tracking-widest relative transition-all",
                            activeTab === tab ? "text-elite-primary-600 dark:text-white" : "text-elite-primary-400 hover:text-elite-primary-900"
                          )}
                         >
                           {tab}
                           {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-elite-primary-600 rounded-full" />}
                         </button>
                       ))}
                    </div>

                    <div className="animate-in fade-in duration-300">
                       {activeTab === 'courses' && (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2].map(i => (
                              <Card key={i} className="group cursor-pointer hover:border-elite-primary-300 transition-all overflow-hidden border-none shadow-lg">
                                 <div className="aspect-video bg-elite-primary-50" />
                                 <CardContent className="p-6 space-y-3">
                                    <h3 className="font-bold leading-tight group-hover:text-elite-primary-600 transition-colors">Mastering Next.js 15: From Zero to Pro</h3>
                                    <div className="flex justify-between items-center text-xs font-bold text-elite-primary-400">
                                       <span>1,240 Students</span>
                                       <span className="text-elite-primary-900 dark:text-white">$15.00</span>
                                    </div>
                                 </CardContent>
                              </Card>
                            ))}
                         </div>
                       )}
                    </div>
                 </div>
              </div>

              {/* Booking & Stats Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                 <Card className="border-none shadow-2xl overflow-hidden sticky top-32">
                    <CardContent className="p-8 space-y-6">
                       <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                             <div className="text-2xl font-bold font-space-grotesk">4.9</div>
                             <div className="text-[10px] uppercase font-bold text-elite-primary-400 tracking-tighter">Rating</div>
                          </div>
                          <div className="border-x border-elite-primary-50 px-4">
                             <div className="text-2xl font-bold font-space-grotesk">12k</div>
                             <div className="text-[10px] uppercase font-bold text-elite-primary-400 tracking-tighter">Students</div>
                          </div>
                          <div>
                             <div className="text-2xl font-bold font-space-grotesk">15</div>
                             <div className="text-[10px] uppercase font-bold text-elite-primary-400 tracking-tighter">Courses</div>
                          </div>
                       </div>

                       <hr className="border-elite-primary-50" />

                       <div className="space-y-4">
                          <div className="flex justify-between items-center text-sm font-bold">
                             <span className="text-elite-primary-400 uppercase tracking-widest">Hourly Rate</span>
                             <span className="text-2xl text-elite-primary-900 dark:text-white">$25.00</span>
                          </div>
                          <Button variant="accent" size="lg" className="w-full h-14 font-bold text-lg shadow-xl shadow-elite-accent-500/20" asChild>
                             <Link href="/tutors/1/book">Book 1-on-1 Session</Link>
                          </Button>
                          <Button variant="outline" size="lg" className="w-full">Send Message</Button>
                       </div>

                       <div className="space-y-4 pt-4">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400 flex items-center gap-2">
                             <Clock size={14} /> Response Time: ~2 hours
                          </h4>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400 flex items-center gap-2">
                             <Globe size={14} /> Languages: English, Twi
                          </h4>
                       </div>
                    </CardContent>
                 </Card>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}