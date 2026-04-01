import { AnimatePresence } from "framer-motion";
import { Text } from "@/components/text";
import { MessageCard } from "./MessageCard";

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="space-y-6">
      {/* Ornamental header divider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <Text weight="bold" className="text-amber-700 uppercase tracking-[0.25em] text-xs font-oswald">
            Ucapan dari Tamu
          </Text>
          <span className="text-amber-600/70 font-oswald text-xs tracking-widest">
            {messages.length}
          </span>
        </div>
        {/* Gradient ornamental divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <span className="text-amber-400 text-[9px] leading-none select-none">◆</span>
          <span className="text-amber-300/60 text-[7px] leading-none select-none">◆</span>
          <span className="text-amber-400 text-[9px] leading-none select-none">◆</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
        </div>
      </div>

      <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 pl-1 scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <MessageCard key={msg.id} message={msg} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
