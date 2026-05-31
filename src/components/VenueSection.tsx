import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock, X } from "lucide-react";
import { GoldenDivider } from "./IslamicPatterns";
import hall from "../images/KH-hall.jpeg"

export default function VenueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const [showMap, setShowMap] = useState(false);

  return (
    <section
      ref={ref}
      id="venue-section"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0702 0%, #0E0C07 50%, #0A0702 100%)",
      }}
    >
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.6em] uppercase text-champagne/40 mb-4">
            Our
          </p>

          <h2
            className="text-4xl sm:text-6xl text-gold-shimmer mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Wedding Venue
          </h2>

          <GoldenDivider className="w-full max-w-md mx-auto" />
        </motion.div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Hall Image */}
        {/* Hall Image */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden cursor-pointer group"
  onClick={() => setShowMap(true)}
>
  <img
    src={hall}
    alt="Kalanad Residency Hall"
    className="w-full h-[450px] object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />

  {/* Corner accents */}
  <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gold-500/40" />
  <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gold-500/40" />
</motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="p-10 relative"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              {/* Venue */}
              <div className="mb-8">
                <MapPin className="text-gold-500 mb-4" size={24} />

                <p className="text-xs tracking-[0.4em] uppercase text-champagne/40 mb-3">
                  Nikah & Reception
                </p>

                <h3
                  className="text-3xl text-gold-shimmer mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Kalanad Residency &
                  Convention Centre
                </h3>

                <p className="text-champagne/60">
                  Kalanad, Kasaragod, Kerala
                </p>
              </div>

              {/* Time */}
              <div className="mb-10">
                <Clock className="text-gold-500 mb-4" size={22} />

                <p className="text-xs tracking-[0.4em] uppercase text-champagne/40 mb-2">
                  Time
                </p>

                <h4 className="text-3xl text-gold-shimmer">
                  11:00 AM
                </h4>
              </div>

              {/* Button */}
              <button
                onClick={() => setShowMap(true)}
                className="inline-flex items-center gap-3 px-8 py-3 border border-gold-500/30 hover:bg-gold-500/10 transition-all duration-300"
              >
                <Navigation size={16} className="text-gold-500" />

                <span className="text-xs tracking-[0.3em] uppercase text-gold-shimmer">
                  View Map
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black border border-gold-500/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-4 right-4 z-10 text-white"
              >
                <X size={24} />
              </button>

              {/* Google Map */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.98497380577!2d75.01767498885499!3d12.450721500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba481500a14d10f%3A0x6f63b679a606b6b6!2sKalanad%20Residency%20And%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1778835738783!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }}  allowFullScreen loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}