import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
  const steps = [0, 25, 50, 75, 100];
  let i = 0;

  const interval = setInterval(() => {
    if (i < steps.length) {
      setProgress(steps[i]);
      i++;
    } else {
      clearInterval(interval);

      setTimeout(() => {
        setPhase("done");
      }, 200);

      setTimeout(() => {
        onComplete();
      }, 500);
    }
  }, 400); // faster progression

  return () => clearInterval(interval);
}, [onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dark Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111111]" />

          {/* Gold Glow Effects */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#B8860B]/20 rounded-full blur-3xl" />

          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="relative mb-8"
          >
            <div className="w-28 h-28 rounded-full border border-[#D4AF37]/40 flex items-center justify-center relative">
              
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#D4AF37]/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <h1
  className="text-4xl text-[#D4AF37] flex items-center justify-center gap-3"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
  }}
>
  S
  <Heart size={20} className="text-[#D4AF37]" fill="currentColor" />
  S
</h1>
            </div>
          </motion.div>

          {/* Optional Arabic Text */}
          {/*
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="text-2xl text-[#E8D8B8] mb-6"
            style={{
              fontFamily: "'Noto Nastaliq Urdu', serif",
            }}
          >
            بسم الله الرحمن الرحيم
          </motion.p>
          */}

          {/* Optional Subtitle */}
          {/*
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="text-sm tracking-[0.4em] uppercase text-[#B89B6A] mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Preparing Your Invitation
          </motion.p>
          */}

          {/* Progress Bar */}
          <div className="w-64 h-[5px] bg-[#1a1a1a] rounded-full overflow-hidden shadow-sm">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #9A6E1A, #D4AF37, #F5E4B0)",
                boxShadow: "0 0 12px rgba(212, 175, 55, 0.5)",
              }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="mt-4 text-xs tracking-[0.3em] text-[#E8D8B8]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {progress}%
          </motion.p>

          {/* Bottom Names */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="absolute bottom-20 text-[15px] tracking-[0.5em] uppercase text-[#C5A977]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            SHAMMA & SHUHAIB
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}