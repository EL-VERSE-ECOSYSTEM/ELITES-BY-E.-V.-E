"use client";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AlertCircle, ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

import {  } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex flex-col justify-center items-center p-4">
      <Link href="/login" className="flex items-center gap-2 mb-8 group text-elite-primary-400 hover:text-elite-primary-900 transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Login</span>
      </Link>

      <Card className="w-full max-w-md shadow-2xl border-none overflow-hidden">
        <CardContent className="p-8">
          {!isSubmitted ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-elite-primary-50 dark:bg-elite-primary-900 rounded-2xl flex items-center justify-center text-elite-primary-600 mx-auto mb-4">
                   <Mail size={32} />
                </div>
                <h1 className="text-2xl font-bold font-space-grotesk">Forgot Password?</h1>
                <p className="text-sm text-elite-primary-500">No worries! Enter your email address and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button variant="accent" size="lg" className="w-full font-bold" disabled={isLoading}>
                  {isLoading ? "Sending link..." : "Send Reset Link"}
                </Button>
              </form>

              <div className="p-4 bg-elite-info/10 rounded-xl flex gap-3 border border-elite-info/20">
                 <AlertCircle className="text-elite-info shrink-0" size={18} />
                 <p className="text-xs text-elite-info leading-relaxed">
                    If you don't receive an email within a few minutes, please check your spam folder or contact support.
                 </p>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
               <div className="w-20 h-20 bg-elite-success/10 rounded-full flex items-center justify-center text-elite-success mx-auto">
                  <CheckCircle2 size={40} />
               </div>
               <div className="space-y-2">
                  <h2 className="text-2xl font-bold font-space-grotesk">Email Sent!</h2>
                  <p className="text-sm text-elite-primary-500">
                     We've sent a password reset link to <span className="font-bold text-elite-primary-900 dark:text-white">{email}</span>.
                  </p>
               </div>
               <div className="space-y-4 pt-4 border-t border-elite-primary-50 dark:border-elite-primary-800">
                  <p className="text-xs text-elite-primary-400">Didn't receive the email?</p>
                  <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>Resend Link</Button>
               </div>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-8 text-xs text-elite-primary-400 text-center max-w-sm">
        Need more help? <Link href="/contact" className="underline font-bold">Contact Support</Link>
      </p>
    </div>
  );
}