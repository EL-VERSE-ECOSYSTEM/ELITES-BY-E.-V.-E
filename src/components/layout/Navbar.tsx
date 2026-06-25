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

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Paths", href: "/paths" },
    { name: "Tutors", href: "/tutors" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md shadow-sm border-b border-elite-primary-100 dark:border-elite-primary-900 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-elite-accent-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
            E
          </div>
          <span className="text-2xl font-bold font-space-grotesk tracking-tighter text-elite-primary-900 dark:text-white">
            ELITE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-elite-primary-600 transition-colors",
                pathname === link.href
                  ? "text-elite-primary-600"
                  : "text-elite-primary-900 dark:text-elite-primary-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-elite-primary-100 dark:hover:bg-elite-primary-900 rounded-full transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-elite-primary-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-elite-primary-950 border-b border-elite-primary-100 dark:border-elite-primary-900 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium p-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-elite-primary-100 dark:border-elite-primary-900" />
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </Button>
            <Button variant="accent" className="w-full" asChild>
              <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
