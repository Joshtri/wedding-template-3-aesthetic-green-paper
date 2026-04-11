import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number; // 0–100
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fdfcf8]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
    >
      {/* Decorative ring */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* Track */}
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#f5e6d0"
            strokeWidth="4"
          />
          {/* Progress arc */}
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#b8864e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 52}
            strokeDashoffset={2 * Math.PI * 52 * (1 - progress / 100)}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>

        {/* Percentage label */}
        <span className="text-2xl font-light text-amber-800 font-[Playfair_Display]">
          {progress}
          <span className="text-sm">%</span>
        </span>
      </div>

      {/* Title */}
      <motion.p
        className="text-amber-900 tracking-[0.25em] text-xs uppercase font-light mb-3"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Memuat undangan
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-amber-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-amber-600 rounded-full"
          style={{ width: `${progress}%`, transition: "width 0.3s ease" }}
        />
      </div>
    </motion.div>
  );
}
