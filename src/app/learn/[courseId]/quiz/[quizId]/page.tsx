"use client";

import { Button from "@/components/ui/Button";, ProgressBar from "@/components/ui/ProgressBar";, Card, CardContent from "@/components/ui/Card";, cn from "@/lib/utils";, Link from "next/link";, ChevronLeft, ChevronRight, Timer, CheckCircle2, AlertCircle, Flag, Award, Zap, Coins, RotateCcw, ArrowRight, X } from "lucide-react";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const questions = [
    {
      question: "Which of the following is NOT a benefit of Server Components in Next.js?",
      options: [
        "Reduced bundle size on the client",
        "Direct access to backend resources",
        "Automatic client-side interactivity",
        "Better SEO and initial page load",
      ],
      correct: 2
    },
    {
       question: "What is the correct file name for creating a layout in the App Router?",
       options: [
         "layout.js",
         "main.js",
         "index.js",
         "root.js",
       ],
       correct: 0
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-elite-primary-50 dark:bg-elite-primary-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl overflow-hidden shadow-2xl border-none">
           <div className="bg-elite-primary-900 p-12 text-center text-white space-y-6">
              <div className="w-24 h-24 bg-elite-success rounded-full flex items-center justify-center mx-auto shadow-lg shadow-elite-success/50 animate-bounce">
                 <Award size={48} />
              </div>
              <div className="space-y-2">
                 <h1 className="text-4xl font-bold font-space-grotesk">Quiz Completed!</h1>
                 <p className="text-elite-primary-300">Great job! You've successfully completed the Next.js 15 Foundations Quiz.</p>
              </div>
           </div>
           <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <div className="p-6 rounded-2xl bg-elite-primary-50 dark:bg-elite-primary-900/50 text-center space-y-2">
                    <div className="text-[10px] uppercase font-bold text-elite-primary-400">Your Score</div>
                    <div className="text-3xl font-bold text-elite-primary-900 dark:text-white">100%</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-elite-xp/10 text-center space-y-2">
                    <div className="text-[10px] uppercase font-bold text-elite-xp">XP Earned</div>
                    <div className="text-3xl font-bold text-elite-xp flex items-center justify-center gap-2">
                       <Zap size={24} fill="currentColor" /> +150
                    </div>
                 </div>
                 <div className="p-6 rounded-2xl bg-elite-coin/10 text-center space-y-2">
                    <div className="text-[10px] uppercase font-bold text-elite-coin">Coins</div>
                    <div className="text-3xl font-bold text-elite-coin flex items-center justify-center gap-2">
                       <Coins size={24} fill="currentColor" /> +25
                    </div>
                 </div>
              </div>

              <div className="flex gap-4">
                 <Button variant="outline" size="lg" className="flex-1" onClick={() => { setIsSubmitted(false); setCurrentQuestion(0); setSelectedOption(null); }}>
                    <RotateCcw size={18} className="mr-2" /> Retake Quiz
                 </Button>
                 <Button variant="accent" size="lg" className="flex-[2]" asChild>
                    <Link href="/learn/1">Continue Learning <ArrowRight size={18} className="ml-2" /></Link>
                 </Button>
              </div>
           </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-elite-primary-950 flex flex-col">
       <header className="h-16 border-b border-elite-primary-100 dark:border-elite-primary-900 flex items-center justify-between px-8 bg-white/80 dark:bg-elite-primary-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-6">
             <Link href="/learn/1" className="text-elite-primary-400 hover:text-elite-primary-900 transition-colors">
                <X size={24} />
             </Link>
             <div className="h-6 w-[1px] bg-elite-primary-100 dark:bg-elite-primary-900" />
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-elite-primary-400 uppercase tracking-widest">Next.js 15 Masterclass</span>
                <span className="text-sm font-bold truncate">Foundations Quiz</span>
             </div>
          </div>

          <div className="flex items-center gap-8">
             <div className={cn(
               "flex items-center gap-2 font-bold",
               timeLeft < 60 ? "text-elite-error animate-pulse" : "text-elite-primary-600"
             )}>
                <Timer size={20} />
                <span>{formatTime(timeLeft)}</span>
             </div>
             <Button variant="primary" size="sm" onClick={() => setIsSubmitted(true)}>Submit Quiz</Button>
          </div>
       </header>

       <main className="flex-1 flex flex-col items-center py-12 px-4 max-w-4xl mx-auto w-full space-y-12">
          <div className="w-full space-y-4">
             <div className="flex justify-between items-end">
                <span className="text-xs font-bold uppercase tracking-widest text-elite-primary-400">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-xs font-bold text-elite-primary-900 dark:text-white">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
             </div>
             <ProgressBar value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
          </div>

          <div className="w-full space-y-12">
             <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-center leading-snug">
                {questions[currentQuestion].question}
             </h2>

             <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={cn(
                      "group relative p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4",
                      selectedOption === idx
                        ? "border-elite-primary-600 bg-elite-primary-50 dark:bg-elite-primary-600/10"
                        : "border-elite-primary-100 dark:border-elite-primary-900 hover:border-elite-primary-300"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl border-2 flex items-center justify-center font-bold transition-all",
                      selectedOption === idx
                        ? "bg-elite-primary-600 border-elite-primary-600 text-white"
                        : "border-elite-primary-100 dark:border-elite-primary-800 text-elite-primary-400 group-hover:border-elite-primary-300"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className={cn("text-lg font-medium", selectedOption === idx ? "text-elite-primary-900 dark:text-white" : "text-elite-primary-600 dark:text-elite-primary-400")}>
                      {option}
                    </span>
                    {selectedOption === idx && <CheckCircle2 className="ml-auto text-elite-primary-600" />}
                  </button>
                ))}
             </div>
          </div>

          <div className="w-full pt-12 flex justify-between items-center border-t border-elite-primary-100 dark:border-elite-primary-900">
             <button className="flex items-center gap-2 text-elite-primary-400 font-bold hover:text-elite-primary-900 transition-colors uppercase text-xs tracking-widest">
                <Flag size={16} /> Flag for review
             </button>
             <div className="flex gap-4">
                <Button
                  variant="outline"
                  disabled={currentQuestion === 0}
                  onClick={() => { setCurrentQuestion(prev => prev - 1); setSelectedOption(null); }}
                >
                   <ChevronLeft size={20} className="mr-2" /> Previous
                </Button>
                {currentQuestion === questions.length - 1 ? (
                  <Button variant="primary" onClick={() => setIsSubmitted(true)}>Finish Quiz</Button>
                ) : (
                  <Button variant="primary" onClick={() => { setCurrentQuestion(prev => prev + 1); setSelectedOption(null); }}>
                    Next Question <ChevronRight size={20} className="ml-2" />
                  </Button>
                )}
             </div>
          </div>
       </main>
    </div>
  );
}
