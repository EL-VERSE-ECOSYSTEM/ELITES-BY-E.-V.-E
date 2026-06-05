"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Layers,
  Users,
  Trophy,
  Briefcase,
  Wallet,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Flame,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface SidebarItem {
  name: string;
  href: string;
  icon: any;
}

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: SidebarItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Courses", href: "/my-courses", icon: BookOpen },
    { name: "Learning Paths", href: "/paths", icon: Layers },
    { name: "Tutor Sessions", href: "/sessions", icon: Users },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { name: "Job Pipeline", href: "/jobs", icon: Briefcase },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-screen sticky top-0 bg-elite-primary-950 text-white transition-all duration-300 z-40 border-r border-elite-primary-900",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-elite-accent-500 rounded flex items-center justify-center font-bold">E</div>
            <span className="text-xl font-bold font-space-grotesk tracking-tighter">ELITE</span>
          </Link>
        )}
        {collapsed && <div className="mx-auto w-8 h-8 bg-elite-accent-500 rounded flex items-center justify-center font-bold">E</div>}

        {/* <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-elite-primary-900 rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button> */}
      </div>

      {!collapsed && (
        <div className="px-6 mb-8">
          <div className="bg-elite-primary-900 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-1 text-elite-xp font-bold">
                <Zap size={14} fill="currentColor" /> LVL 12
              </span>
              <span className="text-elite-primary-400">240/500 XP</span>
            </div>
            <ProgressBar value={240} max={500} className="h-1.5" indicatorClassName="bg-elite-xp" />
            <div className="flex items-center gap-2 text-elite-streak font-bold text-sm">
              <Flame size={16} fill="currentColor" /> 7 Day Streak
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
              pathname === item.href
                ? "bg-elite-primary-600 text-white"
                : "text-elite-primary-400 hover:bg-elite-primary-900 hover:text-white"
            )}
          >
            <item.icon size={20} className={cn("shrink-0", pathname === item.href ? "text-white" : "group-hover:text-white")} />
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full text-elite-error hover:bg-elite-error/10 rounded-lg transition-colors">
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
