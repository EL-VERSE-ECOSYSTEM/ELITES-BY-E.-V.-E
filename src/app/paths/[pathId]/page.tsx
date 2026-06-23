
"use client";
import { Navbar } from "@/components/layout/Navbar";

export default function PathDetail() {
  return (
    <div className="p-8">
      <Navbar />
      <h1 className="mt-16">Learning Path</h1>
      <p>{"Follow this path and you'll become an expert."}</p>
    </div>
  );
}
