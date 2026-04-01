import { memo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ASSETS } from "../../../constants/assets";
import { Image } from "@/components/image";
import { Text } from "@/components/text";
import { MotionText } from "@/components/text-motion";
import { MotionHeading } from "@/components/heading-motion";

interface InvitationCardProps {
  isOpen: boolean;
  cardVariants: Variants;
}

export const InvitationCard = memo(({ isOpen, cardVariants }: InvitationCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      animate={isOpen ? "open" : "closed"}
      className="absolute w-[340px] sm:w-[500px] h-[580px] sm:h-[680px] flex flex-col items-center justify-center text-center overflow-visible rounded-sm"
    >
      {/* Decorative Paper Frame Asset */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.INVITATION_CONTENT_PAPER}
          alt="Paper Border"
          className="w-full h-full object-fill pointer-events-none opacity-90"
        />
      </div>

      <div className="relative z-10 w-full px-14 sm:px-24 -mt-4 sm:-mt-6 overflow-visible flex flex-col items-center">
        <div className="mb-4 md:mb-6 w-full flex flex-col items-center">
          <MotionText
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
            transition={{ delay: 1.2 }}
            align="center"
            className="text-amber-600 font-script text-2xl md:text-3xl mb-1 mt-4 tracking-wide text-center"
          >
            The Wedding of
          </MotionText>
          <MotionHeading
            as="h1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
            transition={{ delay: 1.4 }}
            align="center"
            className="text-4xl sm:text-5xl md:text-6xl font-script text-slate-800 leading-tight mb-2 text-center"
          >
            Romeo <br /> <Text as="span" align="center" className="text-3xl sm:text-4xl font-serif text-center">&</Text> <br /> Juliet
          </MotionHeading>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="w-16 h-[2px] bg-amber-200 mb-6 mx-auto"
        ></motion.div>

        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 1.8 }}
          align="center"
          className="text-slate-700 font-serif leading-relaxed italic mb-6 max-w-sm mx-auto px-4 text-xs sm:text-base text-center"
        >
          Join us for our special day.
        </MotionText>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
          transition={{ delay: 2 }}
          className="space-y-1 sm:space-y-2 text-slate-600 font-oswald text-xs sm:text-sm tracking-widest font-light flex flex-col items-center"
        >
          <Text align="center" className="uppercase tracking-[0.2em] font-medium text-amber-700 text-center">
            Saturday, September 20th 2025
          </Text>
          <Text align="center" className="text-center">10:00 AM — 14:00 PM</Text>
          <Text align="center" className="max-w-[200px] sm:max-w-none mx-auto uppercase text-center">
            The Grand Ballroom, Crystal Palace, New York
          </Text>
        </motion.div>
      </div>
    </motion.div>
  );
});

InvitationCard.displayName = "InvitationCard";
