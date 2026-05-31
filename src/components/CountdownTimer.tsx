import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import couplepin from "../images/couplepin.jpg"

interface TimeUnit {
  value: number;
  label: string;
}

const WEDDING_DATE = new Date("2026-06-15T11:00:00");

function useCountdown(target: Date) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = target.getTime() - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (difference % (1000 * 60)) / 1000
        ),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return time;
}

function CountBox({ value, label }: TimeUnit) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <h3
        className="text-5xl sm:text-6xl md:text-7xl text-[#D4AF37]"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {String(value).padStart(2, "0")}
      </h3>

      <p
        className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#C5A977] mt-3"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const time = useCountdown(WEDDING_DATE);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0702]"
    >
       <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${couplepin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.1,
      }}
    />
      {/* Subtle background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.06), transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] uppercase text-[#C5A977] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            The Blessed Day Approaches
          </p>

          <h2
            className="text-4xl sm:text-6xl text-[#D4AF37] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Countdown
          </h2>

          <div
            className="w-32 h-[1px] mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* Countdown Row */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{
    delay: 0.2,
    duration: 0.8,
  }}
  className="flex flex-wrap justify-center items-center gap-1 sm:gap-6 md:gap-8"
>
  <CountBox value={time.days} label="Days" />

  <span
    className="text-3xl sm:text-4xl text-[#D4AF37]/60 -mt-6"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  >
    :
  </span>

  <CountBox value={time.hours} label="Hours" />

  <span
    className="text-3xl sm:text-4xl text-[#D4AF37]/60 -mt-6"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  >
    :
  </span>

  <CountBox value={time.minutes} label="Minutes" />

  <span
    className="text-3xl sm:text-4xl text-[#D4AF37]/60 -mt-6"
    style={{
      fontFamily: "'Playfair Display', serif",
    }}
  >
    :
  </span>

  <CountBox value={time.seconds} label="Seconds" />
</motion.div>
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <p
            className="text-sm sm:text-base text-[#E8D8B8]/70 italic leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            "And among His signs is that He created for you mates from among yourselves
            that you may find tranquility in them; and He placed between you affection
            and mercy."
          </p>

          <p
            className="text-xs text-[#C5A977]/50 mt-3 tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            — Surah Ar-Rum 30:21
          </p>
        </motion.div>
      </div>
    </section>
  );
}