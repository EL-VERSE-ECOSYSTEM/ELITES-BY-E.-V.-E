"use client";

import { Footer from "@/components/layout/Footer";, Card, CardContent from "@/components/ui/Card";, Button from "@/components/ui/Button";, Badge from "@/components/ui/Badge";, Input from "@/components/ui/Input"; } from "lucide-react";
import Link from "next/link";

export default function BlogIndex() {
  const posts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: ["The Future of Frontend in 2024", "Mastering the Art of UI/UX", "Why Python is the King of AI", "Building Scalable Backend Systems"][i % 4],
    excerpt: "Explore the latest trends and technologies shaping the future of African tech talent...",
    author: "David Mensah",
    date: "Feb 12, 2024",
    readTime: "5 min read",
    category: ["Tech Trends", "Design", "AI/ML", "Development"][i % 4],
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-white dark:bg-elite-primary-950">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">ELITE Blog</h1>
              <p className="text-xl text-elite-primary-500">Insights, tutorials, and success stories from the African tech ecosystem.</p>
              <div className="relative max-w-2xl mx-auto mt-8">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-elite-primary-400" size={20} />
                 <Input placeholder="Search articles..." className="pl-12 h-14 rounded-2xl" />
              </div>
           </div>

           {/* Featured Post */}
           <div className="mb-20">
              <Link href="/blog/future-of-frontend">
                 <div className="group relative aspect-[21/9] bg-elite-primary-950 rounded-[40px] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 space-y-6">
                       <Badge variant="accent">FEATURED POST</Badge>
                       <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white max-w-3xl leading-tight group-hover:text-elite-accent-400 transition-colors">
                          The African Tech Revolution: Why Now is the Best Time to Learn.
                       </h2>
                       <div className="flex items-center gap-6 text-sm text-white/60">
                          <span className="flex items-center gap-2"><User size={16} /> David Mensah</span>
                          <span className="flex items-center gap-2"><Clock size={16} /> 10 min read</span>
                          <span>Feb 15, 2024</span>
                       </div>
                    </div>
                 </div>
              </Link>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Blog Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {posts.map((post) => (
                   <Card key={post.id} className="group border-none shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
                      <div className="aspect-video bg-elite-primary-100" />
                      <CardContent className="p-6 space-y-4">
                         <Badge variant="primary" className="text-[10px] uppercase font-bold tracking-widest">{post.category}</Badge>
                         <h3 className="text-xl font-bold leading-tight group-hover:text-elite-primary-600 transition-colors">{post.title}</h3>
                         <p className="text-sm text-elite-primary-500 line-clamp-2">{post.excerpt}</p>
                         <div className="pt-4 border-t border-elite-primary-50 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-tighter">{post.date}</span>
                            <Link href={`/blog/${post.id}`} className="text-xs font-bold text-elite-primary-600 flex items-center gap-1 hover:underline">Read More <ArrowRight size={14} /></Link>
                         </div>
                      </CardContent>
                   </Card>
                 ))}
              </div>

              {/* Sidebar */}
              <aside className="space-y-12">
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold font-space-grotesk flex items-center gap-2">
                       <TrendingUp className="text-elite-primary-600" size={20} /> Popular Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {["Development", "Design", "Product", "AI/ML", "Career", "Success Stories"].map((c) => (
                         <button key={c} className="px-4 py-2 rounded-full border border-elite-primary-100 dark:border-elite-primary-800 text-xs font-bold hover:bg-elite-primary-50 transition-colors">{c}</button>
                       ))}
                    </div>
                 </div>

                 <Card className="bg-elite-primary-950 text-white p-8 space-y-6 overflow-hidden relative border-none shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 scale-150">
                       <ArrowRight size={100} />
                    </div>
                    <div className="relative z-10 space-y-4">
                       <h3 className="text-xl font-bold font-space-grotesk">Subscribe to Newsletter</h3>
                       <p className="text-xs text-elite-primary-300">Get the latest tech trends and course updates directly in your inbox.</p>
                       <form className="space-y-3">
                          <input type="email" placeholder="email@example.com" className="w-full h-10 px-4 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-elite-accent-500" />
                          <Button variant="accent" className="w-full">Join the List</Button>
                       </form>
                    </div>
                 </Card>
              </aside>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
