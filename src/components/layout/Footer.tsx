"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-elite-blue-deep dark:bg-elite-dark-bg text-white pt-24 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-elite-purple rounded-lg flex items-center justify-center font-black text-white text-xl group-hover:rotate-12 transition-transform">E</div>
              <span className="text-2xl font-black font-space-grotesk tracking-tighter">ELITE</span>
            </Link>
            <p className="text-elite-light-gray/60 text-sm leading-relaxed max-w-xs font-medium">
              Africa&apos;s premier tech skills learning platform designed to train, certify, and connect African tech talent to jobs.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-elite-purple transition-all duration-300 cursor-pointer">
                   <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-elite-purple mb-8">Academy</h4>
            <ul className="space-y-4 text-sm font-bold text-elite-light-gray/80">
              <li><Link href="/courses" className="hover:text-white transition-colors">Course Catalog</Link></li>
              <li><Link href="/paths" className="hover:text-white transition-colors">Learning Paths</Link></li>
              <li><Link href="/tutors" className="hover:text-white transition-colors">Expert Tutors</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Scholarships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-elite-purple mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-bold text-elite-light-gray/80">
              <li><Link href="/about" className="hover:text-white transition-colors">EL ACCESS</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">EL CODERS</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">ELSPACE</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">EL VERSE Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-elite-purple mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-elite-light-gray/80">
               <li><Link href="/dashboard" className="hover:text-white transition-colors">Learner Portal</Link></li>
               <li><Link href="/tutor/dashboard" className="hover:text-white transition-colors">Tutor Studio</Link></li>
               <li><Link href="/wallet" className="hover:text-white transition-colors">Financial Center</Link></li>
               <li><Link href="/admin/login" className="text-elite-error font-black hover:underline underline-offset-4">Admin Access</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-elite-light-gray/40">
          <p>© {new Date().getFullYear()} EL VERSE ECOSYSTEM. EMPOWERING AFRICAN TECH.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
