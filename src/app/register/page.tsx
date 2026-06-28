"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {ArrowRight,
  ChevronLeft,
  GraduationCap,
  Briefcase,
  Upload} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type Role = "STUDENT" | "TUTOR";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("STUDENT");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    techStack: "",
    experienceLevel: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (selectedRole: Role) => {
    setRole(selectedRole);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      if (role === "TUTOR") router.push("/tutor/dashboard");
      else router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-elite-off-white dark:bg-elite-dark-bg flex flex-col justify-center items-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="w-12 h-12 bg-elite-purple rounded-xl flex items-center justify-center font-bold text-white text-2xl group-hover:scale-110 transition-transform">
          E
        </div>
        <span className="text-3xl font-bold font-space-grotesk tracking-tighter text-elite-blue-deep dark:text-white">
          ELITE
        </span>
      </Link>

      <Card className="w-full max-w-xl shadow-2xl border-none overflow-hidden">
        <div className="h-2 bg-elite-border-gray dark:bg-elite-dark-border">
          <div
            className="h-full bg-elite-purple transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">Choose Your Path</h1>
                <p className="text-sm text-elite-slate-gray">Select your role on the platform.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "STUDENT", title: "Learner", icon: GraduationCap, desc: "Master new tech skills" },
                  { id: "TUTOR", title: "Tutor", icon: Briefcase, desc: "Share knowledge & earn" }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleRoleSelect(item.id as Role)}
                    className={cn(
                      "flex flex-col items-center p-6 rounded-2xl border-2 transition-all group",
                      role === item.id
                        ? "border-elite-purple bg-elite-purple/5 ring-4 ring-elite-purple/10"
                        : "border-elite-border-gray dark:border-elite-dark-border hover:border-elite-purple/40"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                      role === item.id ? "bg-elite-purple text-white" : "bg-elite-off-white dark:bg-elite-dark-surface text-elite-light-gray group-hover:text-elite-purple"
                    )}>
                      <item.icon size={24} />
                    </div>
                    <span className="font-bold text-sm mb-1 text-elite-dark-blue dark:text-white">{item.title}</span>
                    <span className="text-[10px] text-center text-elite-slate-gray leading-tight">{item.desc}</span>
                  </button>
                ))}
              </div>

              <Button size="lg" className="w-full gradient-button border-none font-bold" onClick={nextStep}>
                Continue <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <button type="button" onClick={prevStep} className="flex items-center gap-1 text-sm font-bold text-elite-light-gray hover:text-elite-purple transition-colors">
                <ChevronLeft size={16} /> Back
              </button>

              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">Account Details</h1>
                <p className="text-sm text-elite-slate-gray">Create your credentials to get started.</p>
              </div>

              <form className="space-y-4">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                />
                <Button size="lg" className="w-full mt-4 gradient-button border-none font-bold" onClick={nextStep}>
                  Next Step <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <button type="button" onClick={prevStep} className="flex items-center gap-1 text-sm font-bold text-elite-light-gray hover:text-elite-purple transition-colors">
                <ChevronLeft size={16} /> Back
              </button>

              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-space-grotesk text-elite-dark-blue dark:text-white">
                  {role === "STUDENT" ? "Learning Profile" : "Tutor Verification"}
                </h1>
                <p className="text-sm text-elite-slate-gray">
                  {role === "STUDENT" ? "Help us customize your learning path." : "Upload your CV for verification."}
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {role === "STUDENT" && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-elite-slate-gray">Tech Stack</label>
                      <select
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border border-elite-border-gray bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-purple dark:border-elite-dark-border dark:bg-elite-dark-surface"
                      >
                        <option value="">Select Stack</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">Fullstack Development</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="ai">AI & Machine Learning</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-elite-slate-gray">Experience Level</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-lg border border-elite-border-gray bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-elite-purple dark:border-elite-dark-border dark:bg-elite-dark-surface"
                      >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </>
                )}

                {role === "TUTOR" && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-elite-border-gray dark:border-elite-dark-border rounded-2xl p-8 text-center space-y-4 hover:border-elite-purple transition-colors cursor-pointer group">
                      <div className="w-16 h-16 bg-elite-off-white dark:bg-elite-dark-surface rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <Upload className="text-elite-light-gray group-hover:text-elite-purple" size={32} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-elite-dark-blue dark:text-white">Upload your CV / Resume</p>
                        <p className="text-xs text-elite-slate-gray">PDF, DOCX up to 5MB</p>
                      </div>
                      <input type="file" className="hidden" id="cv-upload" />
                      <Button variant="outline" size="sm" type="button" onClick={() => document.getElementById('cv-upload')?.click()}>
                        Choose File
                      </Button>
                    </div>
                    <p className="text-[10px] text-center text-elite-warning font-bold italic">
                      Note: Your status will be &apos;Pending&apos; until verified by admin.
                    </p>
                  </div>
                )}

                <Button size="lg" className="w-full mt-6 gradient-button border-none font-bold" type="submit" disabled={loading}>
                  {loading ? "Creating Account..." : "Complete Registration"}
                </Button>
              </form>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-sm text-elite-slate-gray">
        Already have an account? <Link href="/login" className="font-bold text-elite-purple hover:underline">Login here</Link>
      </p>
    </div>
  );
}
