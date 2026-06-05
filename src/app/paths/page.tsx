"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";


  Layers,
  Users,
  Clock,
  ArrowRight,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Code
} from "lucide-react";

export default function PathsPage() {
  const paths = [
    {
      title: "Frontend Engineering",
      icon: Code,
      desc: "Master the art of building modern, responsive, and performant web interfaces.",
      courses: 12,
      duration: "120h",
      students: "5.2k",
      salary: "$2,000 - $8,000"
    },
    {
      title: "UX Design Lead",
      icon: Layers,
      desc: "From user research to high-fidelity prototyping and design systems.",
      courses: 8,
      duration: "85h",
      students: "3.1k",
      salary: "$1,500 - $6,000"
    },
    {
      title: "Data Science & AI",
      icon: TrendingUp,
      desc: "Analyze data and build intelligent systems using Python and Machine Learning.",
      courses: 15,
      duration: "150h",
      students: "4.8k",
      salary: "$2,500 - $10,000"
    },
    {
      title: "Full Stack Master",
      icon: Briefcase,
      desc: "The complete journey from database to browser. Become a versatile engineer.",
      courses: 22,
      duration: "240h",
      students: "8.4k",
      salary: "$3,000 - $12,000"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-elite-primary-50 dark:bg-elite-primary-950/50">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
              <Badge variant="accent">CAREER PATHS</Badge>
              <h1 className="text-4xl md:text-7xl font-bold font-space-grotesk tracking-tighter">Your Roadmap to Success.</h1>
              <p className="text-xl text-elite-primary-500 max-w-2xl mx-auto">
                 Stop wondering what to learn next. Follow our expert-curated paths designed to take you from beginner to job-ready.
              </p>
              <Button variant="primary" size="lg" className="rounded-full shadow-2xl shadow-elite-primary-500/20">Compare Paths <ChevronRight className="ml-1" /></Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {paths.map((path, idx) => (
                <Card key={idx} className="group border-none shadow-xl overflow-hidden hover:-translate-y-1 transition-all">
                   <div className="bg-elite-primary-950 p-12 text-white relative">
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                         <path.icon size={120} />
                      </div>
                      <div className="relative z-10 space-y-6">
                         <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                            <path.icon size={32} />
                         </div>
                         <h3 className="text-3xl font-bold font-space-grotesk">{path.title}</h3>
                         <p className="text-elite-primary-300 max-w-sm">{path.desc}</p>
                         <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-elite-primary-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Clock size={16} /> {path.duration}</span>
                            <span className="flex items-center gap-2"><Users size={16} /> {path.students}</span>
                            <span className="flex items-center gap-2 text-elite-accent-400"><TrendingUp size={16} /> {path.salary}</span>
                         </div>
                      </div>
                   </div>
                   <CardContent className="p-8 bg-white dark:bg-elite-primary-900">
                      <div className="space-y-6">
                         <div className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Path Milestone Courses</div>
                         <div className="space-y-3">
                            {["Introduction to Logic", "Advanced Architecture", "Final Capstone Project"].map((course, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm font-medium text-elite-primary-700 dark:text-elite-primary-300">
                                 <CheckCircle2 size={16} className="text-elite-success shrink-0" />
                                 {course}
                              </div>
                            ))}
                         </div>
                         <div className="pt-6 border-t border-elite-primary-50 dark:border-elite-primary-800">
                            <Button variant="accent" className="w-full" asChild>
                               <Link href={`/paths/${idx + 1}`}>View Full Roadmap <ArrowRight size={18} className="ml-2" /></Link>
                            </Button>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           {/* Call to Action */}
           <div className="mt-24 text-center">
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-elite-primary-600 to-elite-primary-800 text-white p-16 border-none shadow-2xl">
                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk leading-tight">Need a custom training path?</h2>
                    <p className="text-lg opacity-80 max-w-xl mx-auto font-medium">Talk to our career advisors to build a learning plan specifically for your goals.</p>
                    <Button className="bg-white text-elite-primary-600 hover:bg-elite-primary-50 px-12 h-14 text-lg font-bold">Contact Advisor</Button>
                 </div>
              </Card>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
