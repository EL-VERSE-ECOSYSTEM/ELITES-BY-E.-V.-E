"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Search, Wallet, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Search", href: "/search", icon: Search },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-elite-primary-950 border-t border-elite-primary-100 dark:border-elite-primary-900 px-6 py-3 z-50">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              pathname === tab.href
                ? "text-elite-primary-600 dark:text-elite-primary-400"
                : "text-elite-primary-400 hover:text-elite-primary-600 dark:hover:text-elite-primary-300"
            )}
          >
            <tab.icon size={22} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
