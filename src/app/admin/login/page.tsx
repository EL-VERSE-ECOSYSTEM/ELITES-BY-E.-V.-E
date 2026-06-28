"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {ShieldCheck, ArrowRight, Eye, EyeOff} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      setLoading(false);
      if (password === "ELITES20@") {
        router.push("/admin");
      } else {
        setError(true);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-elite-dark-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-elite-dark-surface border-none shadow-2xl overflow-hidden">
        <div className="h-2 bg-elite-admin" />
        <CardContent className="p-10 space-y-8">
          <div className="text-center space-y-3">
             <div className="w-16 h-16 bg-elite-admin/10 text-elite-admin rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} />
             </div>
             <h1 className="text-3xl font-black font-space-grotesk text-white tracking-tight">Admin Portal</h1>
             <p className="text-elite-light-gray text-sm">Secure access for platform administrators only.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
               <label className="text-xs font-black uppercase tracking-widest text-elite-light-gray">Admin Password</label>
               <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full h-14 bg-elite-dark-bg border-2 border-elite-dark-border rounded-xl px-4 text-white outline-none focus:border-elite-admin transition-all"
                    placeholder="Enter security key"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-elite-light-gray hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
               </div>
            </div>

            {error && (
              <p className="text-elite-error text-xs font-bold text-center animate-bounce">Access Denied: Invalid Security Key</p>
            )}

            <Button size="lg" className="w-full h-14 bg-elite-admin hover:bg-red-700 text-white font-black uppercase tracking-widest border-none" disabled={loading}>
              {loading ? "Authenticating..." : "Authorize Access"} <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          <p className="text-center text-[10px] text-elite-light-gray/30 uppercase font-black tracking-widest">
            Authorized Personnel Only • IP Logged
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
