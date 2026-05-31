import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SmallFloral } from "./IslamicPatterns";
import { AmbientParticles } from "./FloatingPetals";

export default function DuaSection() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden px-6"
      style={{
        background:
          "linear-gradient(180deg, #0A0702 0%, #11100C 50%, #0A0702 100%)",
      }}
    >
      {/* subtle background */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      <AmbientParticles />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative backdrop-blur-md bg-white/5 border border-[#D4AF37]/20 rounded-[30px] p-8 sm:p-14 text-center shadow-2xl"
        >
          {/* Top Floral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <SmallFloral className="w-14 h-14 text-[#D4AF37]" />
          </motion.div>

          {/* Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm tracking-[0.5em] uppercase text-[#D4AF40]/60 mb-8"
          >
            A Prayer For Our New Beginning
          </motion.p>

          {/* Arabic Dua */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-10"
          >
            <p
              className="text-3xl sm:text-5xl md:text-6xl text-[#D4AF37] leading-loose"
              style={{
                fontFamily: " 'El Messiri ', sans-serif",
              }}
            >
              بَارَكَ اللهُ لَكُمَا
       وَبَارَكَ عَلَيْكُمَا   وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ    </p>

          </motion.div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mb-6" />

          {/* Transliteration */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl italic text-[#F5E7C1]/70 leading-relaxed mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Barakallahu Lakuma Wa Baraka Alaikuma 
            Wa Jama'a Bainakuma Fil Khair
          </motion.p>

          {/* Translation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-sm sm:text-base text-[#F5E7C1]/50 max-w-xl mx-auto leading-relaxed"
          >
            “May Allah bless both of you, shower His blessings upon you,
            and unite you together in goodness.”
          </motion.p>

          {/* Bottom Floral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="flex justify-center mt-8"
          >
            <SmallFloral className="w-12 h-12 text-[#D4AF37]/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}