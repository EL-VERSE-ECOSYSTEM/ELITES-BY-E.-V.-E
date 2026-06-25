"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  FileText,
  Video,
  ExternalLink,
  MoreVertical,
  BookOpen,
  Code,
  Layers,
  Settings2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const MOCK_RESOURCES = [
  { id: 1, title: "Next.js 15 Performance Patterns", stack: "Frontend", level: "Advanced", type: "PDF", date: "2 days ago" },
  { id: 2, title: "Mastering Prisma Migrations", stack: "Backend", level: "Intermediate", type: "Video", date: "1 week ago" },
  { id: 3, title: "Clean Code in TypeScript", stack: "Fullstack", level: "Beginner", type: "Notes", date: "3 days ago" },
];

export default function TutorResourcesPage() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="p-6 space-y-8 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-space-grotesk">Resource Management</h1>
          <p className="text-elite-primary-500">Upload and organize learning materials for your students</p>
        </div>
        <Button variant="accent" onClick={() => setIsAdding(true)} className="gap-2">
          <Plus size={18} /> Upload New Resource
        </Button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-elite-primary-900 text-white border-none">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Total Resources</div>
              <div className="text-3xl font-bold font-space-grotesk">156</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-elite-primary-800 flex items-center justify-center">
              <BookOpen size={24} />
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Active Students</div>
              <div className="text-3xl font-bold font-space-grotesk">1,240</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600">
              <Layers size={24} />
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Total Downloads</div>
              <div className="text-3xl font-bold font-space-grotesk">8.4k</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-elite-primary-50 dark:bg-elite-primary-900 flex items-center justify-center text-elite-primary-600">
              <Code size={24} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold flex items-center gap-2">
              <Filter size={18} /> Filters
            </h3>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-elite-primary-400 tracking-tighter">Tech Stack</label>
              <select className="w-full h-10 rounded-xl border border-elite-primary-100 bg-white px-3 text-sm focus:ring-2 focus:ring-elite-accent-500">
                <option>All Stacks</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Mobile</option>
                <option>AI / ML</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-elite-primary-400 tracking-tighter">Skill Level</label>
              <div className="flex flex-wrap gap-2">
                {["Beginner", "Intermediate", "Advanced"].map((l) => (
                  <button key={l} className="px-3 py-1.5 rounded-lg border border-elite-primary-100 text-[10px] font-bold uppercase hover:bg-elite-primary-50 transition-colors">
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-elite-accent-500/5 border-elite-accent-500/20">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2 text-elite-accent-600">
                <Settings2 size={16} />
                <span className="text-xs font-bold uppercase tracking-tighter">Quick Settings</span>
              </div>
              <p className="text-[10px] text-elite-primary-600">Manage how students interact with your content.</p>
              <Button variant="outline" size="sm" className="w-full text-[10px]">Resource Settings</Button>
            </CardContent>
          </Card>
        </aside>

        {/* Resources Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
            <Input placeholder="Search your resources..." className="pl-10 h-12 shadow-sm border-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_RESOURCES.map((res) => (
              <Card key={res.id} className="group hover:border-elite-accent-500 transition-all cursor-pointer">
                <CardContent className="p-5 flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-elite-primary-50 flex flex-col items-center justify-center shrink-0">
                    {res.type === "PDF" ? <FileText className="text-red-500" /> : <Video className="text-blue-500" />}
                    <span className="text-[8px] font-bold mt-1 text-elite-primary-400 uppercase">{res.type}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm leading-tight group-hover:text-elite-accent-500 transition-colors">{res.title}</h4>
                      <button className="text-elite-primary-300 hover:text-elite-primary-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="primary" className="text-[8px] h-4">{res.stack}</Badge>
                      <Badge variant="accent" className="text-[8px] h-4">{res.level}</Badge>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[10px] text-elite-primary-400 italic">Added {res.date}</span>
                      <Button variant="ghost" size="sm" className="h-6 text-[10px] gap-1">
                        <ExternalLink size={10} /> View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add Resource Modal Mockup */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl animate-in zoom-in-95 duration-200">
            <CardHeader className="flex flex-row items-center justify-between border-b dark:border-elite-primary-800">
              <CardTitle>Upload New Resource</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsAdding(false)}>
                <XCircle size={20} />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Resource Title" placeholder="e.g. Intro to Docker" />
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Tech Stack</label>
                  <select className="w-full h-10 rounded-lg border border-elite-primary-200 bg-white px-3 text-sm focus:ring-2 focus:ring-elite-accent-500 dark:bg-elite-primary-950 dark:border-elite-primary-800">
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Fullstack</option>
                    <option>Mobile</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Description / Content (Markdown supported)</label>
                <textarea
                  className="w-full min-h-[150px] rounded-lg border border-elite-primary-200 bg-white p-3 text-sm focus:ring-2 focus:ring-elite-accent-500 dark:bg-elite-primary-950 dark:border-elite-primary-800"
                  placeholder="Share details about this resource..."
                />
              </div>

              <div className="border-2 border-dashed border-elite-primary-100 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-elite-primary-50 mx-auto rounded-full flex items-center justify-center text-elite-primary-400">
                  <Plus size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Drop files here or click to upload</p>
                  <p className="text-xs text-elite-primary-500">Video links can be added separately</p>
                </div>
                <Input placeholder="Or paste Video/PDF URL" className="max-w-xs mx-auto" />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t dark:border-elite-primary-800">
                <Button variant="ghost" onClick={() => setIsAdding(false)}>Cancel</Button>
                <Button variant="accent">Publish Resource</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// Simple X icon for close button
function XCircle({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
