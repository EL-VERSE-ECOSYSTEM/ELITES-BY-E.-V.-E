"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus, Trash2, Video, FileText, Globe } from "lucide-react";

export default function CreateCoursePage() {
  const [modules, setModules] = useState([{ id: 1, title: "", lessons: [{ id: 1, title: "", type: "video" }] }]);

  const addModule = () => {
    setModules([...modules, { id: modules.length + 1, title: "", lessons: [{ id: 1, title: "", type: "video" }] }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-elite-primary-50 dark:bg-elite-primary-950">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4 max-w-5xl">
        <header className="mb-8">
           <h1 className="text-3xl font-bold font-space-grotesk">Create New Course</h1>
           <p className="text-elite-primary-500">Share your expertise with the ELITE community.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-xl">
                 <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
                 <CardContent className="space-y-4">
                    <Input label="Course Title" placeholder="e.g. Advanced Next.js 15 Masterclass" />
                    <div className="space-y-1.5">
                       <label className="text-sm font-medium">Description</label>
                       <textarea className="w-full p-4 rounded-lg border border-elite-primary-100 dark:border-white/10 bg-white dark:bg-elite-primary-950 text-sm min-h-[150px] outline-none" placeholder="What will students learn?" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <Input label="Price ($)" type="number" placeholder="0.00" />
                       <div className="space-y-1.5">
                          <label className="text-sm font-medium">Category</label>
                          <select className="w-full h-10 px-3 rounded-lg border border-elite-primary-200 dark:border-white/10 bg-white dark:bg-elite-primary-950 text-sm">
                             <option>Web Development</option>
                             <option>Mobile Development</option>
                             <option>Data Science</option>
                             <option>UI/UX Design</option>
                          </select>
                       </div>
                    </div>
                 </CardContent>
              </Card>

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-space-grotesk">Course Curriculum</h2>
                    <Button variant="outline" size="sm" onClick={addModule}><Plus size={16} className="mr-2" /> Add Module</Button>
                 </div>

                 {modules.map((m, mIdx) => (
                   <Card key={m.id} className="border-none shadow-lg">
                      <CardHeader className="flex flex-row items-center justify-between bg-elite-primary-50 dark:bg-white/5 py-4">
                         <div className="flex items-center gap-4 flex-1">
                            <span className="text-xs font-bold text-elite-primary-400 uppercase">Module {mIdx + 1}</span>
                            <input className="bg-transparent font-bold outline-none border-b border-transparent focus:border-elite-primary-300 flex-1" placeholder="Module Title" />
                         </div>
                         <Button variant="ghost" size="icon" className="text-elite-error"><Trash2 size={16} /></Button>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                         {m.lessons.map((l, _lIdx) => (
                           <div key={l.id} className="flex items-center gap-4 p-4 rounded-xl border border-elite-primary-50 dark:border-white/5 group">
                              <div className="w-8 h-8 rounded-lg bg-white dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-400">
                                 {l.type === "video" ? <Video size={16} /> : <FileText size={16} />}
                              </div>
                              <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Lesson Title" />
                              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></Button>
                           </div>
                         ))}
                         <Button variant="ghost" size="sm" className="w-full border-dashed border-2 border-elite-primary-100 hover:border-elite-primary-300">
                            <Plus size={14} className="mr-2" /> Add Lesson
                         </Button>
                      </CardContent>
                   </Card>
                 ))}
              </div>
           </div>

           <div className="space-y-8">
              <Card className="border-none shadow-xl overflow-hidden">
                 <div className="aspect-video bg-elite-primary-100 flex items-center justify-center text-elite-primary-300 border-b dark:border-white/5">
                    <Globe size={48} />
                 </div>
                 <CardContent className="p-6 space-y-4">
                    <Button variant="outline" className="w-full">Upload Thumbnail</Button>
                    <p className="text-[10px] text-center text-elite-primary-500 uppercase font-bold">16:9 Aspect Ratio recommended</p>
                 </CardContent>
              </Card>

              <Card className="bg-elite-primary-900 text-white border-none shadow-2xl p-6 space-y-6">
                 <div className="space-y-2">
                    <h3 className="font-bold">Publishing Info</h3>
                    <p className="text-xs text-elite-primary-300">Once published, your course will be reviewed by our moderation team before appearing in the catalog.</p>
                 </div>
                 <div className="space-y-2">
                    <Button variant="accent" className="w-full h-12 font-bold">Submit for Review</Button>
                    <Button variant="ghost" className="w-full text-white/60">Save as Draft</Button>
                 </div>
              </Card>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
