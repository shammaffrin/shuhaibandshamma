import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({
  onOpen,
}: OpeningScreenProps) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setExit(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      onOpen();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onOpen]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      animate={
        exit
          ? {
              opacity: 0,
              scale: 1.05,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Gold glow */}
      <div className="absolute w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center">
        {/* Initials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span
            className="text-6xl sm:text-7xl text-[#D4AF37]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            S
          </span>

          <FaHeart className="text-[#D4AF37] text-2xl" />

          <span
            className="text-6xl sm:text-7xl text-[#D4AF37]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            S
          </span>
        </motion.div>

        {/* Wedding invitation text */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="text-[#E8D8B8] uppercase tracking-[0.5em] text-xs sm:text-sm"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Wedding Invitation
        </motion.p> */}

        {/* Names */}
        {/* <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="text-[#D4AF37] text-3xl sm:text-5xl mt-6"
          style={{
            fontFamily: "'Gwendolyn', cursive",
          }}
        >
          Shamma & Shuhaib
        </motion.h1> */}
      </div>
    </motion.div>
  );
}