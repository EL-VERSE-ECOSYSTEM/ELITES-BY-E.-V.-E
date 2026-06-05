"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart, LineChart, PieChart, AreaChart } from "recharts";
import { BookOpen, TrendingUp, Users, Award } from "lucide-react";

export default function CourseAnalytics() {
  const data = [
    { name: "Web Dev", students: 4000, revenue: 2400 },
    { name: "Mobile", students: 3000, revenue: 1398 },
    { name: "Data Science", students: 2000, revenue: 9800 },
    { name: "Design", students: 2780, revenue: 3908 },
    { name: "DevOps", students: 1890, revenue: 4800 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-3xl font-bold">Course Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="w-4 h-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
            </CardContent>
          </Card>
          {/* ... other cards ... */}
        </div>
      </main>
    </div>
  );
}
