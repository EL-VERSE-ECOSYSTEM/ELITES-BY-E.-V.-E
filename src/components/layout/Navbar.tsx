"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md border-b border-elite-primary-100 dark:border-elite-primary-900" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black font-space-grotesk tracking-tighter text-elite-primary-950 dark:text-white">
          ELITES
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Courses", "Tutors", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-colors hover:text-elite-primary-600",
                pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-400"
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-elite-primary-100 dark:hover:bg-elite-primary-900 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button variant="primary" size="sm" asChild className="hidden md:flex">
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-elite-primary-950 border-t border-elite-primary-100 dark:border-elite-primary-900 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {["Home", "Courses", "Tutors", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold font-space-grotesk"
            >
              {item}
            </Link>
          ))}
          <Button variant="primary" className="w-full mt-4" asChild>
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
