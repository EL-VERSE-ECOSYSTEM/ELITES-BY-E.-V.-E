"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextType {
  toast: (title: string, type?: ToastType, message?: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback(
    (title: string, type: ToastType = "info", message?: string) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { id, type, title, message }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                "w-80 p-4 rounded-xl shadow-lg border pointer-events-auto flex gap-3",
                t.type === "success" && "bg-white border-elite-success text-elite-success dark:bg-gray-900",
                t.type === "error" && "bg-white border-elite-error text-elite-error dark:bg-gray-900",
                t.type === "info" && "bg-white border-elite-info text-elite-info dark:bg-gray-900",
                t.type === "warning" && "bg-white border-elite-warning text-elite-warning dark:bg-gray-900"
              )}
            >
              <div className="shrink-0 pt-0.5">
                {t.type === "success" && <CheckCircle2 className="w-5 h-5" />}
                {t.type === "error" && <AlertCircle className="w-5 h-5" />}
                {t.type === "info" && <Info className="w-5 h-5" />}
                {t.type === "warning" && <AlertCircle className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm leading-tight">{t.title}</h4>
                {t.message && <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{t.message}</p>}
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
                className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
