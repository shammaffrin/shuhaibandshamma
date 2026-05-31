import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SmallFloral } from "./IslamicPatterns";
import couplepin2 from "../images/couplepin2.jpeg"

export default function Footer() {
  return (
    <footer
      className="relative py-24 overflow-hidden px-6"
      style={{
        background: "linear-gradient(180deg, #0A0702 0%, #030201 100%)",
      }}
    >
       <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${couplepin2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.67,
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Pattern (optional) */}
  <div className="absolute inset-0 islamic-pattern opacity-10" />
      {/* Subtle background */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-10"
        >
          <SmallFloral className="w-14 h-14 text-[#D4AF37]" />
        </motion.div>

        {/* Main closing message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl text-[#D4AF37] mb-6"
          style={{ fontFamily: "'Gwendolyn', cursive", }}
        >
          With Love & Gratitude
        </motion.h2>

        {/* Date / Place */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-champagne/50 mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          June 15, 2026 • Kasaragod
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="flex items-center justify-center gap-5 mb-12 flex-wrap"
        >
          <span
            className="text-5xl sm:text-4xl text-[#D4AF37]"
            style={{ fontFamily: "'Gwendolyn', cursive", }}
          >
            Shuhaib
          </span>

          <Heart size={18} className="text-[#D4AF37]" fill="currentColor" />

          <span
            className="text-5xl sm:text-4xl text-[#D4AF37]"
            style={{ fontFamily: "'Gwendolyn', cursive", }}
          >
            Shamma
          </span>
        </motion.div>

        {/* Dua */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12"
        >
          <p
            className="text-2xl sm:text-2xl text-[#E8D18C] pt-5"
            style={{ fontFamily: " 'El Messiri ', sans-serif", }}
          >
            جزاكم الله خيرًا
          </p>

          <p className="text-[16px] text-champagne/40  leading-relaxed">
            May your presence bring blessings to our beginning.
          </p>
        </motion.div>

        {/* Final line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-[10px] tracking-[0.4em] text-champagne/20 uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif"}}
        >
          Crafted With Grace • 2026
        </motion.p>
      </div>
    </footer>
  );
}