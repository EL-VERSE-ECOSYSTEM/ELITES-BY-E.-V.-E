"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 pt-32">
        <h1 className="text-3xl font-bold">Course Catalog</h1>
      </main>
      <Footer />
    </div>
  );
}
