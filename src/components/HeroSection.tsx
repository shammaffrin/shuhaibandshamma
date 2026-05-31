import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AmbientParticles } from "./FloatingPetals";
import hero from "../images/hero.jpeg"

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
  const scrollY = window.scrollY;

  // lock page completely
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";

  return () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollY);
  };
}, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 70%, rgba(26,74,58,0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, rgba(26,74,58,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 60%),
            linear-gradient(180deg, #000000 0%, #0a0a0a 40%, #111111 80%, #000000 100%)
          `,
        }}
      />

      {/* Islamic texture */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      {/* Gold glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 right-0 h-96"
          style={{
            background:
              "linear-gradient(0deg, rgba(212,175,55,0.08) 0%, transparent 100%)",
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-64"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Background image */}
      {/* Background image */}
<div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "left center",
  }}
/>

      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.65)",
        }}
      />

      {/* Floating particles */}
      <AmbientParticles />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl sm:text-3xl text-[#E8D8B8] mb-8"
          style={{
            fontFamily: "'Noto Nastaliq Urdu', serif",
          }}
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs sm:text-sm tracking-[0.5em] uppercase text-[#C5A977] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Together With Their Families
        </motion.p>

        {/* Bride Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[74px] sm:text-7xl md:text-8xl text-[#D4AF37] leading-tight"
          style={{
            fontFamily: "'Gwendolyn', cursive",
          }}
        >
          Shuhaib
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[54px] sm:text-7xl md:text-8xl my-4 text-[#F5E4B0] "
          style={{
            fontFamily:  "'Gwendolyn', cursive",
          }}
        >
          &
        </motion.div>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[74px] sm:text-7xl md:text-8xl text-[#D4AF37] leading-tight mb-8"
          style={{
            fontFamily: "'Gwendolyn', cursive",
          }}
        >
          Shamma
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4 }}
          className="w-32 h-[1px] mx-auto mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          }}
        />

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-lg sm:text-xl text-[#E8D8B8]  mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Request the honour of your presence at our wedding celebration
        </motion.p>

        {/* Date */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-[14px] tracking-[0.4em] uppercase text-[#C5A977] mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          June 15 • Monday • Kerala
        </motion.p> */}

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
  const scrollY = document.body.style.top;

  // unlock
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";

  window.scrollTo(
    0,
    parseInt(scrollY || "0") * -1
  );

  // move to next section
  document
    .getElementById("wedding-details")
    ?.scrollIntoView({
      behavior: "smooth",
    });
}
          }
          className="px-10 py-4 rounded-full border border-[#D4AF37]/40 bg-[#111111]/70 text-[#D4AF37]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.3em",
          }}
        >
          VIEW INVITATION
        </motion.button>
      </div>
    </section>
  );
}