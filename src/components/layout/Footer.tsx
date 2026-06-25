import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-elite-primary-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-elite-accent-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                E
              </div>
              <span className="text-2xl font-bold font-space-grotesk tracking-tighter">
                ELITE
              </span>
            </Link>
            <p className="text-elite-primary-300 max-w-xs">
              Africa&apos;s premier tech skills learning platform designed to train, certify, and connect African tech talent to jobs.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-elite-primary-900 flex items-center justify-center hover:bg-elite-accent-500 transition-colors cursor-pointer">
                  <span className="sr-only">Social Link</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-space-grotesk mb-6">Quick Links</h4>
            <ul className="space-y-4 text-elite-primary-300">
              <li><Link href="/courses" className="hover:text-elite-accent-500 transition-colors">Course Catalog</Link></li>
              <li><Link href="/paths" className="hover:text-elite-accent-500 transition-colors">Learning Paths</Link></li>
              <li><Link href="/tutors" className="hover:text-elite-accent-500 transition-colors">Tutor Directory</Link></li>
              <li><Link href="/pricing" className="hover:text-elite-accent-500 transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-space-grotesk mb-6">Company</h4>
            <ul className="space-y-4 text-elite-primary-300">
              <li><Link href="/about" className="hover:text-elite-accent-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-elite-accent-500 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-elite-accent-500 transition-colors">Tech Blog</Link></li>
              <li><Link href="/support" className="hover:text-elite-accent-500 transition-colors">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-space-grotesk mb-6">Platform</h4>
            <ul className="space-y-4 text-elite-primary-300">
               <li><Link href="/admin" className="text-elite-accent-500 font-bold hover:underline">Admin Panel</Link></li>
               <li><Link href="/tutor/dashboard" className="hover:text-white transition-colors">Tutor Dashboard</Link></li>
               <li><Link href="/dashboard" className="hover:text-white transition-colors">Learner Dashboard</Link></li>
               <li><Link href="/wallet" className="hover:text-white transition-colors">Financial Wallet</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-elite-primary-900 flex flex-col md:flex-row justify-between items-center gap-4 text-elite-primary-400 text-sm">
          <p>© {new Date().getFullYear()} EL VERSE ECOSYSTEM. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
