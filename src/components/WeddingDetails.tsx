import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import confetti from "canvas-confetti";

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
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
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

function CountBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-2xl sm:text-3xl text-[#D4AF37] font-bold">
        {String(value).padStart(2, "0")}
      </h3>

      <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A977] mt-1">
        {label}
      </p>
    </div>
  );
}

export default function WeddingDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [revealed, setRevealed] = useState(false);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10%",
  });

  const time = useCountdown(WEDDING_DATE);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 180;

    // Gold scratch layer
    ctx.fillStyle = "#D4AF37";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.font = "20px serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "Scratch Here ✨",
      canvas.width / 2,
      95
    );

    let scratching = false;

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation =
        "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
    };

    const getPos = (
      e: MouseEvent | TouchEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      if ("touches" in e && e.touches[0]) {
        return {
          x:
            e.touches[0].clientX - rect.left,
          y:
            e.touches[0].clientY - rect.top,
        };
      }

      return {
        x:
          (e as MouseEvent).clientX -
          rect.left,
        y:
          (e as MouseEvent).clientY -
          rect.top,
      };
    };

    const start = (e: any) => {
      e.preventDefault?.();
      scratching = true;
    };

    const move = (e: any) => {
      if (!scratching) return;
      e.preventDefault?.();

      const pos = getPos(e);
      scratch(pos.x, pos.y);
    };

    const end = () => {
      scratching = false;

      const imageData =
        ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

      let transparentPixels = 0;

      for (
        let i = 3;
        i < imageData.data.length;
        i += 4
      ) {
        if (imageData.data[i] === 0)
          transparentPixels++;
      }

      const percent =
        transparentPixels /
        (canvas.width * canvas.height);

      if (percent > 0.4 && !revealed) {
        setRevealed(true);

        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 },
          colors: [
            "#D4AF37",
            "#FFD700",
            "#E6BE8A",
          ],
        });
      }
    };

    canvas.addEventListener(
      "mousedown",
      start
    );
    canvas.addEventListener(
      "mousemove",
      move
    );
    canvas.addEventListener(
      "mouseup",
      end
    );

    canvas.addEventListener(
      "touchstart",
      start,
      { passive: false }
    );
    canvas.addEventListener(
      "touchmove",
      move,
      { passive: false }
    );
    canvas.addEventListener(
      "touchend",
      end
    );

    return () => {
      canvas.removeEventListener(
        "mousedown",
        start
      );
      canvas.removeEventListener(
        "mousemove",
        move
      );
      canvas.removeEventListener(
        "mouseup",
        end
      );

      canvas.removeEventListener(
        "touchstart",
        start
      );
      canvas.removeEventListener(
        "touchmove",
        move
      );
      canvas.removeEventListener(
        "touchend",
        end
      );
    };
  }, [revealed]);

 return (
  <section
    ref={sectionRef}
    id="wedding-details"
    className="relative py-28 bg-black text-center overflow-hidden"
  >
    {/* Background image/glow */}
    <div className="absolute inset-0 bg-black" />

    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at center, rgba(212,175,55,0.08), transparent 50%)",
      }}
    />

    {/* Top golden blur */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

    <div className="relative z-10 max-w-4xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xs uppercase tracking-[0.5em] text-[#C5A977] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Mark Your Calendar
        </p>

        <h2
          className="text-4xl sm:text-6xl text-[#D4AF37] mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Save The Date
        </h2>
      </motion.div>

      {/* Scratch Card */}
    <div className="relative w-[320px] h-[80px] mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#111111]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.08)]">
  
  {/* Date underneath */}
  <div className="absolute inset-0 flex items-center justify-center">
    <motion.h2
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold text-[#99916f] tracking-[0.3em]"
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      15 June 2026
    </motion.h2>
  </div>

  {/* Scratch layer */}
  {!revealed && (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 rounded-2xl cursor-pointer touch-none"
      />

      {/* Instruction text ON TOP */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p
          className="text-black text-xs uppercase tracking-[0.3em]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Scratch Here
        </p>
      </div>
    </>
  )}
</div>

      {/* Countdown */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-14 mb-20"
          >
            <CountBox value={time.days} label="Days" />
            <CountBox value={time.hours} label="Hours" />
            <CountBox value={time.minutes} label="Minutes" />
            <CountBox value={time.seconds} label="Seconds" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div
        className="w-32 h-[1px] mx-auto mb-14"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4AF37, transparent)",
        }}
      />

      {/* Wedding details */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <h3
          className="text-3xl sm:text-4xl text-[#D4AF37] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Nikah & Reception
        </h3>

        <Clock
          size={28}
          className="mx-auto text-[#D4AF37] mb-5"
        />

        <p className="text-xl text-white">
          Nikah at 11:00 AM
        </p>

        <p
          className="text-lg text-[#C5A977] mt-3 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Reception follows until 2:00 PM
        </p>

        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  onClick={() =>
    document
      .getElementById("venue-section")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  className="mt-8 text-white/70 text-sm tracking-[0.3em] uppercase hover:text-[#D4AF37] transition-colors"
>
  Venue Details ↓
</motion.button>
      </motion.div>
    </div>
  </section>
);
}