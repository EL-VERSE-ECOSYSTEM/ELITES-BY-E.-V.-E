"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  FileText,
  Video,
  ExternalLink,
  MoreVertical,
  BookOpen,
  Code,
  Layers
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

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

      {/* Resources Grid */}
      <div className="space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
          <Input placeholder="Search your resources..." className="pl-10 h-12 shadow-sm border-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {isAdding && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl animate-in zoom-in-95 duration-200">
            <CardHeader className="flex flex-row items-center justify-between border-b dark:border-elite-primary-800">
              <CardTitle>Upload New Resource</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsAdding(false)}>
                X
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
