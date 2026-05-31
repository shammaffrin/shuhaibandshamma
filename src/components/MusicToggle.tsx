import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import musicFile from "../../public/Kudmay.aac";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
  const audio = new Audio(musicFile);

  audio.volume = 0.5;
  audio.loop = false;

  const handleTimeUpdate = () => {
    if (audio.currentTime >= 58) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const stopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  audio.addEventListener("timeupdate", handleTimeUpdate);
  window.addEventListener("beforeunload", stopMusic);
  window.addEventListener("pagehide", stopMusic);

  audioRef.current = audio;

  audio.play().catch(() => {
    console.log("Autoplay blocked until user interaction");
    setIsPlaying(false);
  });

  return () => {
    stopMusic();
    audio.removeEventListener("timeupdate", handleTimeUpdate);
    window.removeEventListener("beforeunload", stopMusic);
    window.removeEventListener("pagehide", stopMusic);
  };
}, []);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center"
      style={{
        background: "rgba(13,10,5,0.85)",
        border: "1px solid rgba(212,175,55,0.3)",
        backdropFilter: "blur(12px)",
      }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? (
        <Volume2 size={18} className="text-[#D4AF37]" />
      ) : (
        <VolumeX size={18} className="text-[#D4AF37]" />
      )}
    </motion.button>
  );
}