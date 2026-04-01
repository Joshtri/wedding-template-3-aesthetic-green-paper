import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Image } from "@/components/image";
import { ASSETS } from "@/constants/assets";

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/60" />
    <span className="text-amber-400 text-xs leading-none select-none">◆</span>
    <span className="text-amber-300/60 text-[8px] leading-none select-none">
      ◆
    </span>
    <span className="text-amber-400 text-xs leading-none select-none">◆</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/60" />
  </div>
);

const ClosingSection = () => {
  return (
    <SectionTransition
      className="min-h-screen"
      backgroundImage={ASSETS.PAPERBOARD_TEXTURE}
      backgroundOpacity={0.55}
      backgroundOverlayColor="bg-amber-50/60"
      showVignette
      vignetteIntensity={0.18}
      showTopLeft={false}
      showTopRight={false}
      showBottomLeft={false}
      showBottomRight={false}
    >
      {/* Floating floral accent — top left */}
      <motion.div
        className="absolute top-16 left-4 sm:left-10 w-28 sm:w-36 pointer-events-none z-0"
        initial={{ opacity: 0, x: -20, rotate: -8 }}
        whileInView={{
          opacity: 0.55,
          x: 0,
          rotate: [-6, -10, -6],
          y: [0, -8, 0],
        }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 1.4 },
          x: { duration: 1.4 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src={ASSETS.FLOWERS_AESTHETIC}
          alt=""
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </motion.div>

      {/* Floating stamps accent — bottom right */}
      <motion.div
        className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-32 pointer-events-none z-0"
        initial={{ opacity: 0, x: 20, rotate: 10 }}
        whileInView={{ opacity: 0.5, x: 0, rotate: [8, 13, 8], y: [0, 6, 0] }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 1.4 },
          x: { duration: 1.4 },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* <Image
          src={ASSETS.STAMPS_LOVE}
          alt=""
          className="w-full h-auto object-contain drop-shadow-sm"
        /> */}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl w-full relative z-10 flex flex-col items-center gap-10 px-4"
      >
        {/* Pulsing Heart Icon */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer glow ring */}
            <motion.div
              animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.12, 0.35] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-24 h-24 rounded-full bg-amber-300/30 blur-sm"
            />
            {/* Middle ring */}
            {/* <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.25, 0.5] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute w-20 h-20 rounded-full border border-amber-300/50"
            /> */}
            {/* Icon container */}
            {/* <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/80 shadow-lg flex items-center justify-center">
              <Heart className="text-red-700 w-7 h-7 fill-red-700/20" />
            </div> */}
          </div>

          {/* Top ornamental divider */}
          <OrnamentalDivider />
        </motion.div>

        {/* Closing paragraph card */}
        <motion.div
          variants={fadeUp}
          className="w-full rounded-2xl border border-amber-200/50 bg-amber-50/30 backdrop-blur-xs px-6 py-8 sm:px-10 shadow-sm"
        >
          <Text
            align="center"
            className="text-slate-600 font-serif italic text-sm sm:text-lg sm:leading-loose"
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kedua mempelai.
          </Text>
          <div className="my-5 flex items-center justify-center">
            <div className="w-12 h-px bg-amber-300/50" />
          </div>
          <Text
            align="center"
            className="text-slate-500 font-serif italic text-sm sm:text-base sm:leading-relaxed"
          >
            Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
          </Text>
        </motion.div>

        {/* Ornamental divider between paragraph and signature */}
        <motion.div variants={fadeUp} className="w-full">
          <OrnamentalDivider />
        </motion.div>

        {/* Signature block */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 w-full"
        >
          {/* Arabic salutation */}
          <motion.div variants={fadeUp}>
            <Text
              as="span"
              align="center"
              className="text-amber-700 font-script text-2xl sm:text-3xl block"
            >
              Wassalamualaikum Warrahmatullahi Wabarakatuh
            </Text>
          </motion.div>

          {/* Label */}
          <motion.div variants={fadeUp}>
            <Text
              align="center"
              className="text-slate-400 font-oswald tracking-[0.25em] uppercase text-[10px]"
            >
              Kami yang berbahagia,
            </Text>
          </motion.div>

          {/* Couple name with flourish */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-2"
          >
            <Heading
              as="h2"
              align="center"
              className="text-5xl sm:text-7xl font-script text-slate-800 leading-tight"
            >
              Romeo &amp; Juliet
            </Heading>
            {/* Decorative underline flourish */}
            <div className="flex items-center gap-2 mt-1">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-amber-500/80 text-[10px] leading-none select-none">
                ✦
              </span>
              <div className="w-16 h-px bg-amber-300/60" />
              <span className="text-amber-600 text-xs leading-none select-none">
                ◆
              </span>
              <div className="w-16 h-px bg-amber-300/60" />
              <span className="text-amber-500/80 text-[10px] leading-none select-none">
                ✦
              </span>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
            </div>
          </motion.div>

          {/* Hashtag */}
          {/* <motion.div variants={fadeUp} className="flex flex-col items-center gap-2 mt-2">
            <Text
              align="center"
              className="text-amber-700/70 font-oswald text-xs tracking-[0.5em] uppercase"
            >
              #RomeoJulietWedding
            </Text>
          </motion.div> */}

          {/* Wax seal flourish at the very bottom */}
          {/* <motion.div
            variants={fadeIn}
            className="mt-4 w-16 h-16 opacity-70"
          >
            <Image
              src={ASSETS.WAX_SEAL}
              alt="Wax seal"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </motion.div> */}
        </motion.div>

        {/* Bottom ornamental divider */}
        {/* <motion.div variants={fadeUp} className="w-full pb-2">
          <OrnamentalDivider />
        </motion.div> */}
      </motion.div>
    </SectionTransition>
  );
};

export default ClosingSection;
