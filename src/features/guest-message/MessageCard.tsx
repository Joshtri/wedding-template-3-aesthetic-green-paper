import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Text } from "@/components/text";
import { ASSETS } from "@/constants/assets";

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

interface MessageCardProps {
  message: Message;
  index: number;
}

export const MessageCard = ({ message, index }: MessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="relative bg-[#ebe1ca] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-amber-200/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.20)] hover:border-amber-300/80 transition-all duration-300 overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("${ASSETS.PAPER_TEXTURE}")` }}
      />

      {/* Decorative large quote watermark */}
      <span className="absolute -top-2 left-2 text-8xl font-serif text-amber-800/10 leading-none select-none pointer-events-none">
        ❝
      </span>

      <div className="flex items-start gap-4 relative z-10">
        {/* Warm amber avatar */}
        <div className="w-11 h-11 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center shrink-0 border border-amber-200/70 shadow-sm">
          <User className="w-5 h-5 text-amber-700" />
        </div>

        <div className="flex-1 space-y-2 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <Text weight="bold" className="font-oswald text-amber-900 tracking-wide">
              {message.name}
            </Text>
            <Text size="xs" className="text-amber-600/70 font-oswald tracking-wide shrink-0">
              {message.time}
            </Text>
          </div>

          <Text className="font-serif italic text-slate-700 leading-relaxed text-sm">
            {message.message}
          </Text>
        </div>
      </div>
    </motion.div>
  );
};
