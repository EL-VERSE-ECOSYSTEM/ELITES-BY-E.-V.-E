"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Award, Briefcase, CheckCircle2, ChevronRight, Filter, Layout, MessageSquare, Plus } from "lucide-react";
import { useState } from "react";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  const projects = [
    {
      id: 1,
      title: "Real-time Chat Application",
      course: "Next.js 15 Masterclass",
      deadline: "3 days left",
      progress: 60,
      status: "in-progress",
      requirements: 12,
      completedReqs: 8
    },
    {
      id: 2,
      title: "E-commerce Design System",
      course: "UI/UX for Developers",
      deadline: "Tomorrow",
      progress: 90,
      status: "critical",
      requirements: 15,
      completedReqs: 14
    },
    {
      id: 3,
      title: "Weather Dashboard",
      course: "Python Foundations",
      deadline: "Completed",
      progress: 100,
      status: "graded",
      grade: "A+",
      feedback: 4
    },
  ];

  const filteredProjects = activeTab === 'active'
    ? projects.filter(p => p.status !== 'graded')
    : projects.filter(p => p.status === 'graded');

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk">My Projects</h1>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm"><Filter size={18} className="mr-2" /> Filters</Button>
                 <Button variant="primary" size="sm"><Plus size={18} className="mr-2" /> Start New Lab</Button>
              </div>
           </div>

           <div className="flex gap-4 p-1 bg-elite-primary-100 dark:bg-elite-primary-900 rounded-xl w-fit">
              {["active", "completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as unknown)}
                  className={cn(
                    "px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all",
                    activeTab === tab ? "bg-white dark:bg-elite-primary-800 shadow-sm text-elite-primary-900 dark:text-white" : "text-elite-primary-500 hover:text-elite-primary-700"
                  )}
                >
                  {tab}
                </button>
              ))}
           </div>
        </header>

        <main className="px-6 pb-24 space-y-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:border-elite-primary-300 transition-all flex flex-col">
                   <div className="aspect-video bg-elite-primary-900 relative">
                      {/* Project Preview Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                         <Layout size={64} className="text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                         <Badge variant={project.status === 'critical' ? 'error' : project.status === 'graded' ? 'success' : 'primary'}>
                            {project.status === 'graded' ? `Grade: ${project.grade}` : project.deadline}
                         </Badge>
                      </div>
                   </div>
                   <CardContent className="p-6 flex-1 flex flex-col space-y-4">
                      <div className="space-y-1">
                         <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                         <p className="text-xs text-elite-primary-500 font-medium">{project.course}</p>
                      </div>

                      <div className="space-y-2 pt-2">
                         <div className="flex justify-between text-[10px] font-bold uppercase text-elite-primary-400">
                            <span>Project Progress</span>
                            <span>{project.progress}%</span>
                         </div>
                         <ProgressBar value={project.progress} className="h-1.5" indicatorClassName={project.status === 'critical' ? 'bg-elite-error' : 'bg-elite-primary-600'} />
                      </div>

                      <div className="flex items-center gap-4 text-xs font-bold text-elite-primary-400 py-2 border-y border-elite-primary-50 dark:border-elite-primary-800">
                         <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-elite-success" /> {project.completedReqs}/{project.requirements} Tasks</div>
                         {project.feedback && <div className="flex items-center gap-1.5"><MessageSquare size={14} /> {project.feedback} Comments</div>}
                      </div>

                      <div className="pt-4 mt-auto">
                         <Button variant={project.status === 'graded' ? 'outline' : 'accent'} className="w-full" asChild>
                            <Link href={`/projects/${project.id}`}>
                               {project.status === 'graded' ? 'View Graded Submission' : 'Continue Working'} <ChevronRight size={16} className="ml-1" />
                            </Link>
                         </Button>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>

           {/* Quick Stats */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-elite-primary-950 text-white border-none p-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-elite-accent-500">
                       <Briefcase size={24} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Career Portfolio</div>
                       <div className="text-xl font-bold">4 Public Projects</div>
                    </div>
                 </div>
              </Card>
              <Card className="p-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-elite-primary-50 flex items-center justify-center text-elite-primary-600">
                       <CheckCircle2 size={24} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Total Completion</div>
                       <div className="text-xl font-bold">128 Lab Tasks</div>
                    </div>
                 </div>
              </Card>
              <Card className="p-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-elite-success/10 flex items-center justify-center text-elite-success">
                       <Award size={24} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-elite-primary-400">Average Grade</div>
                       <div className="text-xl font-bold">A (92%)</div>
                    </div>
                 </div>
              </Card>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}