import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ASSETS } from "../../constants/assets";
import { Image } from "@/components/image";
import flowerYellowImg from "../../assets/object/flower-yellow.png";
import { Text } from "../text";

export interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  envelopeVariants: Variants;
  flapVariants: Variants;
  sealVariants: Variants;
  showFlower?: boolean;
}

export const Envelope: React.FC<EnvelopeProps> = ({
  isOpen,
  onOpen,
  envelopeVariants,
  flapVariants,
  sealVariants,
  showFlower = true,
}) => {
  return (
    <motion.div
      variants={envelopeVariants}
      animate={isOpen ? "open" : "closed"}
      style={{ perspective: "1500px" }}
      className="relative w-[320px] sm:w-[480px] aspect-4/3 z-20 pointer-events-none"
    >
      {/* Guide Text (Above) */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="presentation-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.2 },
            }}
            className="absolute -top-16 left-0 w-full text-center"
          >
            <Text
              className="text-amber-50 font-script text-2xl sm:text-3xl tracking-widest font-bold"
              style={{ textShadow: "0 1px 4px rgba(120,60,0,0.55), 0 0px 1px rgba(0,0,0,0.4)" }}
              align="center"
            >
              The Wedding Invitation
            </Text>
            <div className="w-12 h-px bg-amber-200 mx-auto mt-2 opacity-50"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Flap (Flipped Upwards) */}
      <motion.div
        variants={flapVariants}
        style={{
          transformOrigin: "top",
          clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)",
          background: `linear-gradient(to bottom, #bd9567, #a67c52), url(${ASSETS.ENVELOPE_TEXTURE_3})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "300px",
          transformStyle: "preserve-3d",
          zIndex: 30,
        }}
        className="absolute top-0 left-0 w-full h-full shadow-2xl border-t border-amber-900/10"
      >
        {/* Flap Lining (Visible when flipped) */}
        <div
          className="absolute inset-0 bg-[#8c6b44] opacity-80"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)",
            transform: "rotateX(180deg)",
            backfaceVisibility: "visible",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-black/5"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)" }}
        ></div>
      </motion.div>

      {/* Envelope Body */}
      <div className="absolute inset-0 bg-[#bd9567] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-amber-900/10">
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply rounded-sm"
          style={{
            backgroundImage: `url(${ASSETS.ENVELOPE_TEXTURE_2})`,
            backgroundSize: "300px",
          }}
        ></div>
        {/* Paper grain noise overlay */}
        <div
          className="absolute inset-0 rounded-sm pointer-events-none opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }}
        />
        <div
          className="absolute inset-0 bg-[#bd9567] shadow-inner"
          style={{ clipPath: "polygon(0% 100%, 0% 0%, 50% 50%)" }}
        >
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div
          className="absolute inset-0 bg-[#bd9567] shadow-inner"
          style={{ clipPath: "polygon(100% 100%, 100% 0%, 50% 50%)" }}
        >
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div
          className="absolute inset-0 bg-[#bd9567] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "polygon(0% 100%, 100% 100%, 50% 50%)" }}
        ></div>
      </div>

      {/* Flower Decoration (bottom-right corner) */}
      {showFlower && (
        <Image
          src={flowerYellowImg}
          alt="Flower Decoration"
          aria-hidden="true"
          className="absolute bottom-10 right-0 w-64 sm:w-[350px] opacity-80 pointer-events-none z-25 translate-x-1/4 translate-y-1/4 rotate-12"
        />
      )}

      {/* Wax Seal Trigger */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.button
            key="wax-seal"
            variants={sealVariants}
            initial="closed"
            animate="closed"
            exit="open"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto cursor-pointer flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-red-950/40 blur-lg scale-125 transition-transform duration-700"></div>
              <Image
                src={ASSETS.WAX_SEAL}
                alt="Seal"
                className="w-20 h-20 sm:w-28 sm:h-28 relative z-10 drop-shadow-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-amber-400/30 blur-[2px]"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom Guide Text */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="click-guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-16 left-0 w-full text-center"
          >
            <p className="text-amber-200 font-oswald text-lg tracking-widest uppercase">
              Click to Open
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
