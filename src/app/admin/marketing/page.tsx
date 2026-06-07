"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
  Send,
  Search,
  Tag,
  Plus,
  MoreVertical,
  Eye,
  Trash2,
  Users,
  Sparkles,
  Zap,
  Mail,
  Smartphone
} from "lucide-react";

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState<"coupons" | "campaigns" | "notifications">("coupons");

  return (
    <div className="flex min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-8 space-y-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold font-space-grotesk text-elite-primary-900 dark:text-white">Marketing & Growth</h1>
           </div>
        </header>

        <main className="px-6 pb-24 space-y-6">
           <Card className="p-6">
              <CardContent>
                 <p className="text-elite-primary-600">Marketing management modules.</p>
              </CardContent>
           </Card>
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}
