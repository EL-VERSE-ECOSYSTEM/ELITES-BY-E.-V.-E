"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  ArrowRight,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type Role = "STUDENT" | "TUTOR";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("STUDENT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login logic
    setTimeout(() => {
      setLoading(false);
      if (role === "TUTOR") {
        router.push("/tutor/dashboard");
      } else {
        router.push("/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-elite-off-white dark:bg-elite-dark-bg flex flex-col justify-center items-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="w-12 h-12 bg-elite-purple rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:scale-110 transition-transform">
          E
        </div>
        <span className="text-3xl font-bold font-space-grotesk tracking-tighter text-elite-blue-deep dark:text-white">
          ELITE
        </span>
      </Link>

      <Card className="w-full max-w-md shadow-2xl border-none">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">Welcome Back</h1>
            <p className="text-sm text-elite-slate-gray">Log in to your ELITE account to continue.</p>
          </div>

          <div className="flex p-1 bg-elite-off-white dark:bg-elite-dark-surface rounded-xl gap-1">
            {[
              { id: "STUDENT", label: "Learner", icon: GraduationCap },
              { id: "TUTOR", label: "Tutor", icon: Briefcase }
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id as Role)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all",
                  role === r.id
                    ? "bg-white dark:bg-elite-purple text-elite-purple dark:text-white shadow-sm"
                    : "text-elite-light-gray hover:text-elite-slate-gray"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[34px] text-elite-light-gray hover:text-elite-slate-gray"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-elite-border-gray text-elite-purple focus:ring-elite-purple" />
                <span className="text-xs text-elite-slate-gray dark:text-elite-light-gray">Remember me</span>
              </label>
              <Link href="/forgot-password"  className="text-xs font-bold text-elite-purple hover:underline">Forgot Password?</Link>
            </div>

            <Button size="lg" className="w-full font-bold gradient-button border-none" disabled={loading}>
              {loading ? "Signing in..." : "Login"} <ArrowRight className="ml-2" size={18} />
            </Button>
          </form>

          <p className="text-center text-sm text-elite-slate-gray">
            Don&apos;t have an account? <Link href="/register" className="font-bold text-elite-purple hover:underline">Register now</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
