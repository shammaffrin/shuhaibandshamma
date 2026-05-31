import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import shuhaib from "../images/Shuhaib.jpeg"
import shamma from "../images/Shamma.jpeg"

export default function CoupleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section
      id="couple"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      {/* Gold glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] uppercase text-[#C5A977] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Meet The Couple
          </p>

          <h2
            className="text-4xl sm:text-6xl text-[#D4AF37]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Bride & Groom
          </h2>

          <div
            className="w-32 h-[1px] mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* Couple Cards */}
        {/* Couple Photos Side by Side */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
  

  {/* Bride */}
  <motion.div
  initial={{ opacity: 0, x: 100, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: "easeOut",
    delay: 0.2,
  }}
  className="text-center"
>
    <img
      src={shamma}
      alt="Bride"
      className="w-full h-[420px] object-cover rounded-2xl border border-[#D4AF37]/20"
    />

    <p
      className="mt-6 text-xs tracking-[0.4em] uppercase text-[#C5A977]"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      The Bride
    </p>

    <h3
      className="text-3xl text-[#D4AF37] mt-3"
      style={{
        fontFamily: " 'Quattrocento', serif;",
      }}
    >
      Shamma Affrin A K
    </h3>

    <p className="text-[#E8D8B8]/70 text-xl italic mt-2 pb-14">
      Daughter of Nazeer A K & Abitha K A
    </p>
  </motion.div>

  {/* Groom */}
  <motion.div
  initial={{ opacity: 0, x: -100, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 2,
    ease: "easeOut",
    delay: 0.1,
  }}
  className="text-center"
>
    <img
      src={shuhaib}
      alt="Groom"
      className="w-full h-[420px] object-cover rounded-2xl border border-[#D4AF37]/20"
    />

    <p
      className="mt-6 text-xs tracking-[0.4em] uppercase text-[#C5A977]"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      The Groom
    </p>

    <h3
      className="text-3xl text-[#D4AF37] mt-3"
      style={{
        fontFamily: " 'Quattrocento', serif;",
      }}
    >
     Mohammed Shuhaib K
    </h3>

    <p className="text-[#E8D8B8]/70 text-xl italic mt-2">
      Son of Mohammed Kunhi & Kadeeja
    </p>
  </motion.div>
</div>

        {/* Quran Quote */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <p
            className="text-3xl sm:text-3xl text-[#E8D8B8] mb-4"
            style={{
              fontFamily: " 'El Messiri ', sans-serif",
            }}
          >
            وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>

          <p
            className="text-[17px] text-[#C5A977]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            And He placed between you affection and mercy
          </p>

          <p className="text-xs text-[#C5A977]/60 mt-2 tracking-widest uppercase">
            Surah Ar-Rum 30:21
          </p>
        </motion.div>
      </div>
    </section>
  );
}