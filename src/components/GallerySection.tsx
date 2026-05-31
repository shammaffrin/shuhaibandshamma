import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import couple1 from "../images/Couple1.jpeg"
import shamma1 from "../images/Shamma1.jpeg"
import shuhaib1 from "../images/shuhaib1.jpeg"
import couple2 from "../images/couple2.jpeg"

const images = [
  {
    src: couple1,
    alt: "Memory 1",
  },
  {
    src: shamma1,
    alt: "Memory 2",
  },
  {
    src: shuhaib1,
    alt: "Memory 3",
  },
  {
    src: couple2,
    alt: "Memory 4",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-[#0A0702] overflow-hidden"
    >
      {/* subtle glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.05), transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] uppercase text-[#C5A977] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Moments
          </p>

          <h2
            className="text-4xl sm:text-6xl text-[#D4AF37]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Memory Lane
          </h2>

          <div
            className="w-32 h-[1px] mx-auto mt-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
        </motion.div>

        {/* Horizontal Gallery */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              className="min-w-[280px] sm:min-w-[350px] cursor-pointer flex-shrink-0"
              onClick={() => setSelected(image.src)}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[420px] object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected}
                alt="Selected memory"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
              >
                <X className="text-white" size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}