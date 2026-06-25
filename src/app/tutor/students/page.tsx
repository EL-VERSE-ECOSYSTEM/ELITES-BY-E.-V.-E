"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MessageSquare,
  Star,
  Award,
  Rocket,
  MoreVertical,
  CheckCircle2,
  XCircle,
  ChevronRight,
  TrendingUp,
  Mail
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const MOCK_STUDENTS = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    stack: "Frontend",
    level: "Advanced",
    progress: 85,
    lastActive: "2 hours ago",
    status: "EXCELLENT",
    isPromoted: false
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria@example.com",
    stack: "Backend",
    level: "Intermediate",
    progress: 42,
    lastActive: "1 day ago",
    status: "STEADY",
    isPromoted: false
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam@example.com",
    stack: "Mobile",
    level: "Beginner",
    progress: 92,
    lastActive: "5 mins ago",
    status: "EXCELLENT",
    isPromoted: true,
    promotedTo: "EL CODERS"
  },
];

export default function TutorStudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [promotingStudent, setPromotingStudent] = useState<any>(null);

  return (
    <div className="p-6 space-y-8 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-space-grotesk">Student Management</h1>
          <p className="text-elite-primary-500">Monitor progress and promote top performers</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Mail size={16} /> Broadcast Message
          </Button>
          <Button variant="accent" size="sm" className="gap-2">
            <Star size={16} /> Leaderboard
          </Button>
        </div>
      </header>

      {/* Main Student List */}
      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white dark:bg-elite-primary-900 border-b dark:border-elite-primary-800">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-primary-400" size={18} />
              <Input
                placeholder="Search students by name or stack..."
                className="pl-10 h-11"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Filter size={18} />
              </Button>
              <select className="h-11 rounded-lg border border-elite-primary-200 bg-white px-3 text-sm focus:ring-2 focus:ring-elite-accent-500 dark:bg-elite-primary-950 dark:border-elite-primary-800">
                <option>All Progress</option>
                <option>Completed</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-elite-primary-50/50 dark:bg-elite-primary-900/50 text-[10px] font-bold uppercase tracking-widest text-elite-primary-400 border-b dark:border-elite-primary-800">
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Current Stack</th>
                  <th className="px-6 py-4">Progress</th>
                  <th className="px-6 py-4">Performance</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-elite-primary-800">
                {MOCK_STUDENTS.map((student) => (
                  <tr key={student.id} className="group hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-elite-primary-100 flex items-center justify-center font-bold text-elite-primary-600">
                          {student.name[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold">{student.name}</div>
                          <div className="text-[10px] text-elite-primary-400">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold">{student.stack}</span>
                        <span className="text-[10px] text-elite-primary-500 uppercase">{student.level}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-32 space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold">
                          <span>{student.progress}%</span>
                          <span className="text-elite-primary-400">{student.lastActive}</span>
                        </div>
                        <div className="h-1.5 w-full bg-elite-primary-100 dark:bg-elite-primary-800 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              student.progress > 80 ? "bg-elite-success" : student.progress > 40 ? "bg-elite-accent-500" : "bg-elite-warning"
                            )}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={student.status === "EXCELLENT" ? "success" : "primary"}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {student.isPromoted ? (
                          <Badge variant="accent" className="gap-1">
                            <Rocket size={10} /> {student.promotedTo}
                          </Badge>
                        ) : (
                          <Button
                            variant="secondary"
                            size="sm"
                            className={cn(
                              "h-8 gap-1.5 font-bold text-[10px]",
                              student.status === "EXCELLENT" ? "bg-elite-accent-500 text-white hover:bg-elite-accent-600" : "opacity-50"
                            )}
                            onClick={() => setPromotingStudent(student)}
                          >
                            <Rocket size={14} /> Promote
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Promotion Modal */}
      {promotingStudent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md animate-in zoom-in-95 duration-200 shadow-2xl">
            <CardHeader className="text-center space-y-2 border-b dark:border-elite-primary-800">
              <div className="w-16 h-16 bg-elite-accent-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3 mb-2">
                <Rocket size={32} />
              </div>
              <CardTitle className="text-2xl">Promote {promotingStudent.name}</CardTitle>
              <p className="text-sm text-elite-primary-500">Recommend this top-performer to the EL VERSE ecosystem.</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Select Target Arm</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "EL_ACCESS", name: "EL ACCESS", desc: "Global Identity & Benefits" },
                    { id: "EL_CODERS", name: "EL CODERS", desc: "Premium Project Outsourcing" },
                    { id: "EL_SPACE", name: "EL SPACE", desc: "Physical/Virtual Work Hubs" }
                  ].map((arm) => (
                    <button
                      key={arm.id}
                      className="flex items-center justify-between p-4 rounded-xl border-2 border-elite-primary-50 dark:border-elite-primary-800 hover:border-elite-accent-500 hover:bg-elite-accent-500/5 transition-all text-left group"
                    >
                      <div>
                        <div className="font-bold text-sm group-hover:text-elite-accent-500">{arm.name}</div>
                        <div className="text-[10px] text-elite-primary-500">{arm.desc}</div>
                      </div>
                      <ChevronRight size={16} className="text-elite-primary-300 group-hover:text-elite-accent-500" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Award className="text-elite-accent-500" size={14} /> Tutor Recommendation
                </div>
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 text-sm italic placeholder:text-elite-primary-400 min-h-[60px]"
                  placeholder="Add a brief note about why this student deserves promotion..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="ghost" className="flex-1" onClick={() => setPromotingStudent(null)}>Cancel</Button>
                <Button variant="accent" className="flex-1" onClick={() => setPromotingStudent(null)}>Confirm Promotion</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
