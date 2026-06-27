"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
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
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/90 dark:bg-elite-dark-surface/90 backdrop-blur-md border-b border-elite-border-gray dark:border-elite-dark-border shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-elite-purple rounded-lg flex items-center justify-center font-black text-white text-xl group-hover:rotate-12 transition-transform">E</div>
          <span className={cn(
            "text-2xl font-black font-space-grotesk tracking-tighter transition-colors",
            scrolled ? "text-elite-blue-deep dark:text-white" : "text-white"
          )}>
            ELITE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Home", "Courses", "Tutors", "About"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={cn(
                  "text-xs font-black uppercase tracking-widest transition-all hover:text-elite-violet-soft",
                  isActive
                    ? "text-elite-purple"
                    : scrolled ? "text-elite-slate-gray dark:text-elite-light-gray" : "text-white/80"
                )}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "p-2 rounded-full transition-colors",
              scrolled
                ? "hover:bg-elite-off-white dark:hover:bg-elite-dark-bg text-elite-slate-gray dark:text-elite-light-gray"
                : "text-white/80 hover:bg-white/10"
            )}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button size="sm" className="hidden md:flex font-black uppercase tracking-widest gradient-button border-none px-6" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <button
            className={cn("md:hidden p-2", scrolled ? "text-elite-dark-blue dark:text-white" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-elite-dark-surface border-t border-elite-border-gray dark:border-elite-dark-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          {["Home", "Courses", "Tutors", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black font-space-grotesk text-elite-dark-blue dark:text-white flex justify-between items-center group"
            >
              {item}
              <ArrowRight size={18} className="text-elite-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
          <Button className="w-full mt-4 gradient-button border-none font-black uppercase tracking-widest h-12" asChild>
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>Go to Dashboard</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
