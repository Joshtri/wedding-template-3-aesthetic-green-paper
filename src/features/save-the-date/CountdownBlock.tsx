import { motion } from "framer-motion";
import { Text } from "@/components/text";
import { itemVariants } from "./animations";

export interface TimeUnit {
  label: string;
  value: number;
}

export const CountdownBlock = ({ unit }: { unit: TimeUnit }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center gap-1"
  >
    <div className="relative border-2 border-dashed border-amber-700/70 bg-amber-50/80 px-3 py-4 md:px-6 md:py-6 min-w-[68px] md:min-w-[100px] flex flex-col items-center gap-1">
      {/* corner ticks */}
      <span className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-amber-800/60" />
      <span className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-amber-800/60" />
      <span className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-amber-800/60" />
      <span className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-amber-800/60" />

      <motion.span
        key={unit.value}
        initial={{ scale: 1.15, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="font-serif font-bold text-3xl md:text-5xl text-amber-900 leading-none tabular-nums"
      >
        {String(unit.value).padStart(2, "0")}
      </motion.span>
    </div>
    <Text
      size="xs"
      weight="bold"
      align="center"
      className="uppercase tracking-[0.25em] text-amber-800/70"
    >
      {unit.label}
    </Text>
  </motion.div>
);
