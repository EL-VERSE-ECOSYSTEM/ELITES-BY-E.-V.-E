
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <p>{"Don't worry, we'll help you reset it."}</p>
      <Link href="/login" className="mt-4 text-blue-600">Back to login</Link>
    </div>
  );
}
