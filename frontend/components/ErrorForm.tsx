"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ResponseToastProps {
  message: string;
  isOk: boolean;
  setResponse: (value: string) => void;
}

const ErrorForm = ({ message, isOk, setResponse }: ResponseToastProps) => {
  // Effect disappears after 5 seconds.
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setResponse("");
      }, 5000);

      // CLeanup event timer
      return () => clearTimeout(timer);
    }
  }, [message, setResponse]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-13 right-5 sm:top-42 lg:right-15 lg:top-35 z-50 flex items-center gap-3 p-4 rounded-lg border shadow-2xl transition-all animate-in fade-in slide-in-from-right-5 font-lato
      ${
        isOk
          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
          : "bg-red-500/10 border-red-500/20 text-red-400"
      }`}
    >
      <span className="text-sm font-medium tracking-wide">{message}</span>

      {/* Close button*/}
      <button
        onClick={() => setResponse("")}
        className="p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default ErrorForm;
