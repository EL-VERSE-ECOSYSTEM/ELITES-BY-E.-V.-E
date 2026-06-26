"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ChevronLeft, ChevronRight, Code, Eye, FileText, GripVertical, Image, ImageIcon, Plus, Rocket, Save, Trash2, Video } from "lucide-react";

export default function CourseCreator() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [modules, setModules] = useState([
    { id: 1, title: "Introduction", lessons: [{ id: 101, title: "Course Overview", type: "video" }] }
  ]);

  const nextStep = () => step < totalSteps && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-6 border-b border-elite-primary-100 dark:border-elite-primary-900 bg-white sticky top-0 z-30 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}><ChevronLeft size={20} /></Button>
              <div>
                 <h1 className="text-xl font-bold font-space-grotesk">Create New Course</h1>
                 <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
                    <div className="w-32 h-1 bg-elite-primary-100 dark:bg-elite-primary-800 rounded-full overflow-hidden">
                       <div className="h-full bg-elite-primary-600 transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%` }} />
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:flex"><Save size={18} className="mr-2" /> Save Draft</Button>
              <Button variant="outline" size="sm" className="hidden md:flex"><Eye size={18} className="mr-2" /> Preview</Button>
           </div>
        </header>

        <main className="max-w-4xl mx-auto w-full p-6 pb-24">
           {step === 1 && (
             <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5">
                <div className="space-y-2">
                   <h2 className="text-2xl font-bold font-space-grotesk">Course Details</h2>
                   <p className="text-sm text-elite-primary-500">Provide the basic information about your course.</p>
                </div>

                <Card>
                   <CardContent className="p-8 space-y-6">
                      <Input label="Course Title" placeholder="e.g. Advanced Next.js 15 Masterclass" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-1.5">
                            <label className="text-sm font-medium">Category</label>
                            <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-200 dark:border-elite-primary-800 bg-white dark:bg-elite-primary-950 text-sm">
                               <option>Web Development</option>
                               <option>Mobile Development</option>
                               <option>Data Science</option>
                               <option>UI/UX Design</option>
                            </select>
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-sm font-medium">Difficulty Level</label>
                            <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-200 dark:border-elite-primary-800 bg-white dark:bg-elite-primary-950 text-sm">
                               <option>Beginner</option>
                               <option>Intermediate</option>
                               <option>Advanced</option>
                               <option>Expert</option>
                            </select>
                         </div>
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-sm font-medium">Course Description</label>
                         <textarea
                          className="w-full p-4 rounded-lg border border-elite-primary-200 dark:border-elite-primary-800 bg-white dark:bg-elite-primary-950 text-sm min-h-[150px] outline-none focus:ring-2 focus:ring-elite-primary-500"
                          placeholder="What will students learn in this course?"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-medium">Course Thumbnail</label>
                         <div className="border-2 border-dashed border-elite-primary-100 dark:border-elite-primary-800 rounded-2xl p-12 text-center space-y-4 hover:border-elite-primary-400 transition-colors cursor-pointer group">
                            <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-2xl flex items-center justify-center mx-auto text-elite-primary-400 group-hover:text-elite-primary-600 transition-colors">
                               <Plus size={32} />
                            </div>
                            <div className="space-y-1">
                               <div className="text-sm font-bold">Click to upload or drag and drop</div>
                               <div className="text-xs text-elite-primary-400 font-medium">PNG, JPG or WEBP (Max. 5MB)</div>
                            </div>
                         </div>
                      </div>
                   </CardContent>
                </Card>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5">
                <div className="flex justify-between items-end">
                   <div className="space-y-2">
                      <h2 className="text-2xl font-bold font-space-grotesk">Curriculum</h2>
                      <p className="text-sm text-elite-primary-500">Organize your course into modules and lessons.</p>
                   </div>
                   <Button variant="outline" size="sm"><Plus size={18} className="mr-2" /> Add Module</Button>
                </div>

                <div className="space-y-6">
                   {modules.map((module, mIdx) => (
                     <Card key={module.id} className="overflow-hidden">
                        <div className="bg-elite-primary-50 dark:bg-elite-primary-900/50 p-4 flex items-center gap-4">
                           <GripVertical size={20} className="text-elite-primary-400 cursor-grab" />
                           <div className="flex-1 font-bold">Module {mIdx + 1}: {module.title}</div>
                           <button className="text-elite-error hover:bg-elite-error/10 p-2 rounded-lg transition-colors"><Trash2 size={18} /></button>
                        </div>
                        <CardContent className="p-4 space-y-3">
                           {module.lessons.map((lesson, _lIdx) => (
                             <div key={lesson.id} className="flex items-center gap-4 p-3 border border-elite-primary-50 dark:border-elite-primary-800 rounded-xl hover:border-elite-primary-200 transition-all group">
                                <GripVertical size={16} className="text-elite-primary-300" />
                                <div className={cn(
                                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                                  lesson.type === 'video' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                                )}>
                                   {lesson.type === 'video' ? <Video size={16} /> : <FileText size={16} />}
                                </div>
                                <div className="flex-1 text-sm font-medium">{lesson.title}</div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                   <Button variant="ghost" size="icon" className="h-8 w-8"><Plus size={14} /></Button>
                                   <Button variant="ghost" size="icon" className="h-8 w-8 text-elite-error"><Trash2 size={14} /></Button>
                                </div>
                             </div>
                           ))}
                           <button className="w-full py-3 border-2 border-dashed border-elite-primary-100 dark:border-elite-primary-800 rounded-xl text-xs font-bold uppercase tracking-widest text-elite-primary-400 hover:text-elite-primary-600 hover:border-elite-primary-300 transition-all flex items-center justify-center gap-2">
                              <Plus size={14} /> Add Lesson
                           </button>
                        </CardContent>
                     </Card>
                   ))}
                </div>
             </div>
           )}

           {step === 5 && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                 <div className="w-24 h-24 bg-elite-success/10 rounded-full flex items-center justify-center text-elite-success mx-auto relative">
                    <CheckCircle2 size={48} />
                    <div className="absolute inset-0 bg-elite-success/20 rounded-full animate-ping" />
                 </div>
                 <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-space-grotesk">Ready to Launch!</h2>
                    <p className="text-elite-primary-500 max-w-md">Your course {"'"}Advanced Next.js 15 Masterclass{"'"} is ready to be submitted for review. Once approved, it will be visible to thousands of students.</p>
                 </div>

                 <div className="bg-white dark:bg-elite-primary-900 border border-elite-primary-100 dark:border-elite-primary-800 p-6 rounded-2xl w-full text-left space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-elite-primary-400">Review Checklist</h3>
                    <div className="space-y-3">
                       {[
                         "All modules have at least one lesson",
                         "Course description is clear and detailed",
                         "Thumbnail image is uploaded",
                         "Pricing is set correctly",
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-medium">
                            <CheckCircle2 size={16} className="text-elite-success" />
                            {item}
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="w-full">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                       <Link href="/tutor/dashboard"><Rocket size={20} className="mr-2" /> Submit for Admin Review</Link>
                    </Button>
                 </div>
              </div>
           )}

           {/* Navigation Buttons */}
           {step < 5 && (
             <div className="mt-12 flex justify-between">
                <Button variant="ghost" onClick={prevStep} disabled={step === 1}>Back</Button>
                <Button variant="primary" onClick={nextStep}>Next Step <ChevronRight size={18} className="ml-2" /></Button>
             </div>
           )}
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}