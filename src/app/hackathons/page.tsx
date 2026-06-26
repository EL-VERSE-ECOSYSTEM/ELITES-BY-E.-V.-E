"use client";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Globe, Target, Trophy, Code, Users, Zap, Sparkles } from "lucide-react";
import { useState } from "react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function HackathonsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "active" | "past">("active");

  const hackathons = [
    {
      id: 1,
      title: "FinTech Innovation 2024",
      organizer: "ELITE x PayStack",
      prize: "$5,000 Pool",
      timeLeft: "4 days left",
      participants: 1240,
      category: "FinTech",
      status: "active"
    },
    {
      id: 2,
      title: "Clean Energy Hack",
      organizer: "EL VERSE Ecosystem",
      prize: "$3,000 + Funding",
      timeLeft: "Starts in 12 days",
      participants: 850,
      category: "Sustainability",
      status: "upcoming"
    },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-12 bg-elite-primary-950 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 scale-150">
              <Zap size={400} fill="white" />
           </div>
           <div className="relative z-10 max-w-4xl space-y-6">
              <Badge variant="accent">HACKATHONS</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter">Code for Impact.</h1>
              <p className="text-xl text-elite-primary-300 max-w-2xl leading-relaxed">
                 Join thousands of developers across Africa building solutions for real-world problems. Earn prizes, get noticed by top companies, and boost your portfolio.
              </p>

              <div className="flex gap-4 pt-4">
                 <div className="flex gap-4 p-1 bg-white/5 backdrop-blur-xl rounded-xl w-fit border border-white/10">
                    {["active", "upcoming", "past"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as "upcoming" | "active" | "past")}
                        className={cn(
                          "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                          activeTab === tab ? "bg-elite-accent-500 text-white shadow-lg" : "text-elite-primary-400 hover:text-white"
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                 </div>
              </div>
           </div>
        </header>

        <main className="px-6 pb-24 -mt-8 relative z-20 space-y-8">
           <div className="grid grid-cols-1 gap-6">
              {hackathons.map((h) => (
                <Card key={h.id} className="group border-none shadow-xl overflow-hidden hover:ring-2 ring-elite-accent-500 transition-all">
                   <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                         <div className="lg:w-1/3 bg-elite-primary-900 p-8 flex flex-col justify-between text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                               <Sparkles size={120} />
                            </div>
                            <div className="space-y-4 relative z-10">
                               <Badge variant="primary" className="bg-white/10 text-white border-none">{h.category}</Badge>
                               <h3 className="text-3xl font-bold font-space-grotesk leading-tight">{h.title}</h3>
                               <p className="text-sm text-elite-primary-300">by {h.organizer}</p>
                            </div>
                            <div className="pt-8 flex items-center gap-2 text-xl font-bold text-elite-accent-400">
                               <Trophy size={24} /> {h.prize}
                            </div>
                         </div>
                         <div className="lg:w-2/3 p-8 flex flex-col justify-between bg-white dark:bg-elite-primary-950">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                               <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Time Remaining</div>
                                  <div className="flex items-center gap-2 font-bold text-elite-error">
                                     <Clock size={16} /> {h.timeLeft}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Participants</div>
                                  <div className="flex items-center gap-2 font-bold">
                                     <Users size={16} /> {h.participants.toLocaleString()} joined
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Region</div>
                                  <div className="flex items-center gap-2 font-bold">
                                     <Globe size={16} /> Pan-African
                                  </div>
                               </div>
                            </div>

                            <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                               <div className="flex -space-x-3">
                                  {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-elite-primary-950 bg-elite-primary-100" />
                                  ))}
                                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-elite-primary-950 bg-elite-primary-950 text-white flex items-center justify-center text-[10px] font-bold">+1k</div>
                               </div>
                               <div className="flex gap-4">
                                  <Button variant="outline">Learn More</Button>
                                  <Button variant="accent" className="px-8">Register Now <ArrowRight size={18} className="ml-2" /></Button>
                               </div>
                            </div>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Team Finder", icon: Users, desc: "Connect with others." },
                { title: "Mentorship", icon: Target, desc: "Get help from pros." },
                { title: "Skill Labs", icon: Code, desc: "Pre-hack tutorials." },
                { title: "Past Winners", icon: Trophy, desc: "See what won." },
              ].map((item, i) => (
                <Card key={i} className="hover:border-elite-primary-400 transition-all cursor-pointer">
                   <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600 shrink-0">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <div className="font-bold text-sm">{item.title}</div>
                         <div className="text-[10px] text-elite-primary-400 uppercase font-bold">{item.desc}</div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}