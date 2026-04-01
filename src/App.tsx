import { useState, useRef } from "react";
import "./App.css";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "./constants/assets";

// Features
import HeroSection from "./features/hero";
import { SaveTheDateSection } from "@/features/save-the-date";
import CoupleOverviewSection from "./features/couple-overview";
import EventDetailsSection from "./features/event-details";
import { Gallery } from "@/features/gallery-couple";
import GiftSection from "./features/digital-wedding-gift";
import ClosingSection from "./features/closing";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import { GuestMessages } from "./features/guest-message";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useScrollToTop();

  return (
    <main className="relative min-h-screen bg-[#fdfcf8] selection:bg-amber-100 selection:text-amber-900 scroll-smooth">
      {/* Background Music (Audio) */}
      <audio ref={audioRef} loop src={ASSETS.BACKGROUND_MUSIC} />

      {/* Floating Music Toggle */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full border border-amber-200 shadow-xl flex items-center justify-center text-amber-800 hover:bg-white hover:scale-110 transition-all cursor-pointer group"
        >
          {isPlaying ? (
            <Music className="w-5 h-5 animate-pulse" />
          ) : (
            <Music2 className="w-5 h-5 opacity-40 group-hover:opacity-100" />
          )}
          {/* Visual label appearing on hover */}
          <span className="absolute right-14 bg-white/80 px-3 py-1 rounded-full text-[10px] font-oswald tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-amber-100 shadow-sm">
            {isPlaying ? "Mute" : "Play Music"}
          </span>
        </motion.button>
      </AnimatePresence>

      {/* Template Sections */}
      <div className="flex flex-col">
        <HeroSection />
        <SaveTheDateSection />
        <CoupleOverviewSection />
        <Gallery />
        <EventDetailsSection />
        <GiftSection />
        <GuestMessages/>
        <ClosingSection />
      </div>
    </main>
  );
}

export default App;
