import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
import Link from "next/link";
import { cn } from "@/lib/utils";
"use client";

  ChevronRight,
  Play,
  CheckCircle2,
  Users,
  Clock,
  Briefcase,
  TrendingUp,
  Building2,
  Award,
  Globe
} from "lucide-react";

export default function PathDetail() {
  const steps = [
    { title: "Foundations of Logic", status: "completed", courses: 3 },
    { title: "Advanced Architecture", status: "current", courses: 5 },
    { title: "Real-world Deployment", status: "locked", courses: 4 },
    { title: "Capstone Project", status: "locked", courses: 1 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 bg-white dark:bg-elite-primary-950">
        {/* Header Banner */}
        <section className="bg-elite-primary-950 text-white py-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-elite-accent-500/20 to-transparent" />
           <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl space-y-8">
                 <div className="flex items-center gap-4">
                    <Badge variant="accent">CAREER PATH</Badge>
                    <span className="text-elite-primary-400 font-bold uppercase tracking-widest text-xs">Full Stack Mastery</span>
                 </div>
                 <h1 className="text-4xl md:text-7xl font-bold font-space-grotesk tracking-tighter leading-tight">
                    Become a <span className="text-elite-accent-500 text-6xl md:text-8xl block">Senior Engineer.</span>
                 </h1>
                 <p className="text-xl text-elite-primary-200 max-w-2xl leading-relaxed">
                    This path is designed to take you from a basic understanding of code to architecting complex, production-ready systems for global companies.
                 </p>
                 <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-elite-primary-400">
                    <div className="flex items-center gap-2"><Users size={20} /> 8.4k Learners</div>
                    <div className="flex items-center gap-2"><Clock size={20} /> 240 Hours</div>
                    <div className="flex items-center gap-2"><Award size={20} /> 12 Certificates</div>
                 </div>
                 <Button variant="accent" size="lg" className="h-14 px-12 text-lg font-bold">Enroll in Path</Button>
              </div>
           </div>
        </section>

        <div className="container mx-auto px-4 py-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Roadmap Timeline */}
              <div className="lg:col-span-2 space-y-12">
                 <h2 className="text-3xl font-bold font-space-grotesk">Path Progression</h2>
                 <div className="relative space-y-8">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-1 bg-elite-primary-100 dark:bg-elite-primary-900" />

                    {steps.map((step, idx) => (
                      <div key={idx} className="relative pl-16 group">
                         <div className={cn(
                           "absolute left-2.5 top-0 w-8 h-8 rounded-full border-4 border-white dark:border-elite-primary-950 flex items-center justify-center z-10 transition-all",
                           step.status === 'completed' ? "bg-elite-success text-white" :
                           step.status === 'current' ? "bg-elite-accent-500 text-white animate-pulse ring-4 ring-elite-accent-500/20" :
                           "bg-elite-primary-100 dark:bg-elite-primary-900 text-elite-primary-400"
                         )}>
                            {step.status === 'completed' ? <CheckCircle2 size={16} /> : <div className="text-[10px] font-bold">{idx + 1}</div>}
                         </div>

                         <Card className={cn(
                           "border-none shadow-lg group-hover:shadow-xl transition-all",
                           step.status === 'locked' && "opacity-60 grayscale"
                         )}>
                            <CardContent className="p-8">
                               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                  <div className="space-y-1">
                                     <h3 className="text-xl font-bold font-space-grotesk">{step.title}</h3>
                                     <p className="text-sm text-elite-primary-500">{step.courses} Intensive Courses • Includes Practical Exams</p>
                                  </div>
                                  <Button variant={step.status === 'locked' ? 'outline' : 'primary'} size="sm" disabled={step.status === 'locked'}>
                                     {step.status === 'completed' ? 'Review Content' : step.status === 'current' ? 'Continue' : 'Locked'}
                                  </Button>
                               </div>
                               {step.status === 'current' && (
                                 <div className="mt-6 space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">
                                       <span>Step Progress</span>
                                       <span>40%</span>
                                    </div>
                                    <ProgressBar value={40} className="h-1.5" />
                                 </div>
                               )}
                            </CardContent>
                         </Card>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Path Stats Sidebar */}
              <aside className="space-y-12">
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold font-space-grotesk">Skills You'll Master</h3>
                    <div className="space-y-4">
                       {[
                         { name: "System Architecture", level: 85 },
                         { name: "Cloud Infrastructure", level: 70 },
                         { name: "Distributed Systems", level: 60 },
                         { name: "Team Leadership", level: 50 },
                       ].map((skill, i) => (
                         <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-elite-primary-600 dark:text-elite-primary-400">
                               <span>{skill.name}</span>
                               <span>Advanced</span>
                            </div>
                            <ProgressBar value={skill.level} className="h-1 bg-elite-primary-50 dark:bg-elite-primary-900" indicatorClassName="bg-elite-primary-600" />
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6 pt-8 border-t border-elite-primary-50 dark:border-elite-primary-900">
                    <h3 className="text-xl font-bold font-space-grotesk">Career Outcomes</h3>
                    <div className="grid grid-cols-1 gap-4">
                       {[
                         { label: "Salary Range", value: "$4k - $12k/mo", icon: TrendingUp },
                         { label: "Common Title", value: "Senior Full Stack Eng.", icon: Briefcase },
                         { label: "Placement Rate", value: "94%", icon: Building2 },
                       ].map((o, i) => (
                         <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-elite-primary-50 dark:bg-elite-primary-900/50">
                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600 shadow-sm">
                               <o.icon size={20} />
                            </div>
                            <div>
                               <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">{o.label}</div>
                               <div className="font-bold text-sm">{o.value}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <Card className="bg-elite-primary-950 text-white p-8 space-y-6 border-none shadow-2xl">
                    <div className="space-y-2">
                       <h3 className="text-xl font-bold font-space-grotesk">Companies Hiring</h3>
                       <p className="text-xs text-elite-primary-300">Graduates from this path are working at world-class companies.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 grayscale opacity-50">
                       <div className="h-8 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">ELCODERS</div>
                       <div className="h-8 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">STRIPE</div>
                       <div className="h-8 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">PAYSTACK</div>
                       <div className="h-8 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">GOOGLE</div>
                    </div>
                 </Card>
              </aside>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
