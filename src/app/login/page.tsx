"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  ArrowRight,
  GraduationCap,
  Briefcase,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"STUDENT" | "TUTOR" | "ADMIN">("STUDENT");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      setLoading(false);
      if (role === "ADMIN") router.push("/admin");
      else if (role === "TUTOR") router.push("/tutor/dashboard");
      else router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex flex-col justify-center items-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="w-12 h-12 bg-elite-accent-500 rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:scale-110 transition-transform">
          E
        </div>
        <span className="text-3xl font-bold font-space-grotesk tracking-tighter text-elite-primary-900 dark:text-white">
          ELITE
        </span>
      </Link>

      <Card className="w-full max-w-md shadow-2xl border-none">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold font-space-grotesk">Welcome Back</h1>
            <p className="text-sm text-elite-primary-500">Log in to your ELITE account to continue.</p>
          </div>

          <div className="flex p-1 bg-elite-primary-100 dark:bg-elite-primary-900 rounded-xl gap-1">
            {[
              { id: "STUDENT", label: "Learner", icon: GraduationCap },
              { id: "TUTOR", label: "Tutor", icon: Briefcase },
              { id: "ADMIN", label: "Admin", icon: ShieldCheck }
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id as any)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all",
                  role === r.id
                    ? "bg-white dark:bg-elite-primary-800 text-elite-accent-500 shadow-sm"
                    : "text-elite-primary-500 hover:text-elite-primary-700"
                )}
              >
                <r.icon size={14} />
                {r.label}
              </button>
            ))}
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              required
              icon={<Mail size={18} />}
            />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                icon={<Lock size={18} />}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[34px] text-elite-primary-400 hover:text-elite-primary-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-elite-primary-200 text-elite-primary-600 focus:ring-elite-primary-500" />
                <span className="text-xs text-elite-primary-600 dark:text-elite-primary-400">Remember me</span>
              </label>
              <Link href="/forgot-password" size="xs" className="text-xs font-bold text-elite-primary-600 hover:underline">Forgot Password?</Link>
            </div>

            <Button variant="accent" size="lg" className="w-full font-bold" disabled={loading}>
              {loading ? "Signing in..." : "Login"} <ArrowRight className="ml-2" size={18} />
            </Button>
          </form>

          <p className="text-center text-sm text-elite-primary-500">
            Don't have an account? <Link href="/register" className="font-bold text-elite-primary-600 hover:underline">Register now</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
