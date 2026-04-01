import { Send, Heart } from "lucide-react";
import { Button } from "@/components/button";
import { TextInput } from "@/components/inputs/TextInput";
import { Text } from "@/components/text";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/assets";

interface GuestFormProps {
  name: string;
  message: string;
  isSubmitting: boolean;
  onNameChange: (val: string) => void;
  onMessageChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const GuestForm = ({
  name,
  message,
  isSubmitting,
  onNameChange,
  onMessageChange,
  onSubmit,
}: GuestFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="relative bg-[#ebe1ca] rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-amber-200/60 overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("${ASSETS.PAPER_TEXTURE}")` }}
      />

      {/* Form header accent */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-amber-100/70 border border-amber-200/70 flex items-center justify-center shadow-sm">
          <Heart className="w-5 h-5 text-amber-800 fill-amber-200/60" />
        </div>
        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50" />
          <span className="text-amber-400 text-[9px] leading-none select-none">◆</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50" />
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block px-1">
            <Text size="sm" weight="bold" className="text-amber-800 uppercase tracking-widest text-xs font-oswald">
              Nama Anda
            </Text>
          </label>
          <TextInput
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Masukkan nama lengkap Anda"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block px-1">
            <Text size="sm" weight="bold" className="text-amber-800 uppercase tracking-widest text-xs font-oswald">
              Ucapan & Doa
            </Text>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            placeholder="Tuliskan ucapan dan doa terbaik Anda..."
            rows={5}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 bg-amber-50/30 resize-none disabled:opacity-50 transition-all duration-300 text-sm text-slate-800 placeholder:text-amber-800/40"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !name.trim() || !message.trim()}
          className="w-full bg-amber-800 hover:bg-amber-950 text-white rounded-full py-6 shadow-lg shadow-amber-900/40 uppercase tracking-widest text-xs font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-900/60 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              Mengirim...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Kirim Ucapan & Doa
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
};
