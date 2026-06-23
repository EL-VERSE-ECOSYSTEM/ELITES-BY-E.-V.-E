
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p>{"I'm ready to learn!"}</p>
      <Button className="mt-4">Login</Button>
    </div>
  );
}
