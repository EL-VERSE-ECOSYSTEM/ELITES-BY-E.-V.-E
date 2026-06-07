"use client";

import { Input from "@/components/ui/Input";, Card, CardContent from "@/components/ui/Card";, Link from "next/link";, useState from "react"; } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
            <p className="text-sm text-elite-primary-500">Log in to your ELITE account to continue learning.</p>
          </div>

          <div className="space-y-4">
             <div className="grid grid-cols-3 gap-3">
               <button className="flex justify-center items-center py-2 border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                 <Mail size={20} className="text-red-500" />
               </button>
               <button className="flex justify-center items-center py-2 border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                 <Lock size={20} className="text-black dark:text-white" />
               </button>
               <button className="flex justify-center items-center py-2 border border-elite-primary-100 dark:border-elite-primary-800 rounded-lg hover:bg-elite-primary-50 dark:hover:bg-elite-primary-900 transition-colors">
                 <User size={20} className="text-blue-600" />
               </button>
             </div>

             <div className="relative">
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-elite-primary-100 dark:border-elite-primary-800" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                 <span className="bg-white dark:bg-gray-900 px-2 text-elite-primary-400">Or continue with</span>
               </div>
             </div>

             <form className="space-y-4">
               <Input label="Email Address" type="email" placeholder="name@example.com" required />
               <div className="space-y-1.5 relative">
                  <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
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
                 <Link href="/forgot-password" title="Forgot Password?" className="text-xs font-bold text-elite-primary-600 hover:underline">Forgot Password?</Link>
               </div>

               <Button variant="accent" size="lg" className="w-full font-bold">Login</Button>
             </form>
          </div>

          <p className="text-center text-sm text-elite-primary-500">
            Don't have an account? <Link href="/register" className="font-bold text-elite-primary-600 hover:underline">Register now</Link>
          </p>
        </CardContent>
      </Card>

      <p className="mt-8 text-xs text-elite-primary-400 text-center max-w-sm">
        By continuing, you agree to ELITE's <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
