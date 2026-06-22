
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function CodingLab() {
  const [output, setOutput] = useState([]);
  return (
    <div className="flex flex-col h-screen bg-elite-primary-950 text-white">
      <header className="p-4 border-b border-white/10">
        <h1 className="font-bold">Coding Lab</h1>
      </header>
      <main className="flex-1 p-4">
        <p>{/* Practice your server actions here */}</p>
        <Button onClick={() => setOutput(["Running..."])}>Run Code</Button>
      </main>
    </div>
  );
}
