"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Award, Briefcase, CheckCircle2, Code, Download, Eye, FileText, GraduationCap, GripVertical, Plus, Save, Share2, Trash2, User } from "lucide-react";

export default function CVBuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  const sections = [
    { id: "personal", title: "Personal Information", icon: User, completed: true },
    { id: "experience", title: "Work Experience", icon: Briefcase, completed: true },
    { id: "skills", title: "Technical Skills", icon: Code, completed: false },
    { id: "education", title: "Education", icon: GraduationCap, completed: true },
    { id: "certificates", title: "Certifications (ELITE)", icon: Award, completed: true },
  ];

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold font-space-grotesk">AI CV Builder</h1>
              <div className="hidden md:flex gap-2 p-1 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-xl">
                 <button
                  onClick={() => setActiveTab("edit")}
                  className={cn("px-4 py-1.5 text-xs font-bold uppercase rounded-lg transition-all", activeTab === 'edit' ? "bg-white dark:bg-elite-primary-800 shadow-sm text-elite-primary-900" : "text-elite-primary-400")}
                 >
                    Editor
                 </button>
                 <button
                  onClick={() => setActiveTab("preview")}
                  className={cn("px-4 py-1.5 text-xs font-bold uppercase rounded-lg transition-all", activeTab === 'preview' ? "bg-white dark:bg-elite-primary-800 shadow-sm text-elite-primary-900" : "text-elite-primary-400")}
                 >
                    Live Preview
                 </button>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm"><Save size={18} className="mr-2" /> Save</Button>
              <Button variant="accent" size="sm"><Download size={18} className="mr-2" /> Export PDF</Button>
           </div>
        </header>

        <main className="p-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Section List (Left Sidebar) */}
           <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest px-2">Resume Sections</h3>
              <div className="space-y-2">
                 {sections.map((section) => (
                   <button key={section.id} className="w-full flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-elite-primary-900 hover:bg-elite-primary-50 transition-all group border border-transparent hover:border-elite-primary-100">
                      <div className="p-2 rounded-lg bg-elite-primary-50 dark:bg-elite-primary-950 text-elite-primary-600">
                         <section.icon size={18} />
                      </div>
                      <span className="flex-1 text-sm font-bold text-left">{section.title}</span>
                      {section.completed && <CheckCircle2 size={16} className="text-elite-success" />}
                   </button>
                 ))}
                 <Button variant="ghost" className="w-full justify-start text-xs uppercase font-bold tracking-widest text-elite-primary-400 hover:text-elite-primary-600">
                    <Plus size={16} className="mr-2" /> Add Custom Section
                 </Button>
              </div>

              <Card className="bg-elite-primary-950 text-white p-6 border-none shadow-xl mt-8">
                 <CardContent className="p-0 space-y-4 text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-elite-accent-500">
                       <FileText size={24} />
                    </div>
                    <div className="space-y-1">
                       <div className="text-sm font-bold">Import from LinkedIn</div>
                       <p className="text-[10px] text-elite-primary-400 leading-relaxed">Sync your profile to auto-fill your resume data.</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">Import Now</Button>
                 </CardContent>
              </Card>
           </div>

           {/* Editor Area (Middle) */}
           <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-space-grotesk">Work Experience</h2>
                    <Button variant="outline" size="sm"><Plus size={16} className="mr-2" /> Add Experience</Button>
                 </div>

                 {[1, 2].map((i) => (
                   <Card key={i} className="relative group">
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                         <button className="p-2 text-elite-primary-400 hover:text-elite-primary-600"><GripVertical size={16} /></button>
                         <button className="p-2 text-elite-error hover:bg-elite-error/10 rounded-lg"><Trash2 size={16} /></button>
                      </div>
                      <CardContent className="p-6 space-y-4">
                         <div className="grid grid-cols-2 gap-4">
                            <Input label="Job Title" placeholder="e.g. Senior Frontend Engineer" />
                            <Input label="Company" placeholder="e.g. ELCODERS" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <Input label="Start Date" type="month" />
                            <Input label="End Date" type="month" placeholder="Present" />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-sm font-medium">Description</label>
                            <textarea
                              className="w-full p-4 rounded-lg border border-elite-primary-100 bg-white text-sm min-h-[120px] outline-none focus:ring-2 focus:ring-elite-primary-500"
                              placeholder="Key responsibilities and achievements..."
                            />
                         </div>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>

           {/* Preview Area (Right - Sticky on Desktop) */}
           <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <h3 className="text-xs font-bold text-elite-primary-400 uppercase tracking-widest mb-4 px-2">Template Preview</h3>
              <Card className="aspect-[1/1.41] shadow-2xl border-none overflow-hidden origin-top scale-[0.9] lg:scale-100">
                 <CardContent className="p-8 h-full bg-white text-black space-y-6 text-[10px]">
                    {/* Tiny Resume Preview Content */}
                    <div className="text-center space-y-2 border-b pb-4 border-slate-100">
                       <div className="text-lg font-bold uppercase tracking-tight">John Doe</div>
                       <div className="text-slate-500 font-medium">Full Stack Software Engineer | Lagos, Nigeria</div>
                       <div className="text-slate-400 flex justify-center gap-4 uppercase font-bold text-[6px]">
                          <span>john@example.com</span>
                          <span>+234 800 123 456</span>
                          <span>github.com/johndoe</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div className="space-y-2">
                          <div className="font-bold border-b border-slate-100 pb-1 text-slate-800 uppercase tracking-widest text-[8px]">Work Experience</div>
                          <div className="space-y-3">
                             {[1, 2].map((i) => (
                               <div key={i} className="space-y-1">
                                  <div className="flex justify-between font-bold">
                                     <span className="text-slate-700">Senior Software Engineer @ ELCODERS</span>
                                     <span className="text-slate-400 uppercase">2022 — Present</span>
                                  </div>
                                  <p className="text-slate-500 text-[8px] leading-relaxed">Built and scaled mission-critical applications using Next.js, TypeScript, and AWS. Improved system performance by 40%.</p>
                               </div>
                             ))}
                          </div>
                       </div>

                       <div className="space-y-2">
                          <div className="font-bold border-b border-slate-100 pb-1 text-slate-800 uppercase tracking-widest text-[8px]">ELITE Certifications</div>
                          <div className="grid grid-cols-2 gap-2">
                             {["Next.js Mastery", "UI/UX Advanced", "Python for DS"].map((c, i) => (
                               <div key={i} className="flex items-center gap-2 p-1.5 border border-slate-50 rounded">
                                  <Award size={10} className="text-elite-primary-600" />
                                  <span className="font-bold text-slate-700 uppercase tracking-tighter">{c}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </CardContent>
              </Card>
              <div className="mt-6 flex gap-4">
                 <Button variant="outline" className="flex-1"><Eye size={16} className="mr-2" /> Fullscreen</Button>
                 <Button variant="primary" className="flex-1"><Share2 size={16} className="mr-2" /> Share Link</Button>
              </div>
           </div>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}