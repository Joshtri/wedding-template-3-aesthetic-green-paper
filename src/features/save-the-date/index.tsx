import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Image } from "@/components/image";
import { Calendar } from "lucide-react";
import { ASSETS } from "@/constants/assets";
import { containerVariants, itemVariants } from "./animations";
import { CountdownBlock, type TimeUnit } from "./CountdownBlock";

const MotionImage = motion(Image);

const WEDDING_DATE = new Date("2026-09-20T16:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

//helpers.
const calculateTimeLeft = (): TimeLeft => {
  const difference = WEDDING_DATE.getTime() - new Date().getTime();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const SaveTheDateSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const yFloral = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits: TimeUnit[] = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background — kraft/sepia texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <MotionImage
            style={{ y: yBg }}
            src={ASSETS.VINTAGE_BG}
            alt=""
            aria-hidden="true"
            className="absolute -top-[20%] left-0 w-full h-[140%] object-cover object-center"
          />
        </div>
        {/* warm sepia tint layers */}
        <div className="absolute inset-0 bg-amber-950/30" />
        <div className="absolute inset-0 bg-linear-to-b from-amber-100/60 via-amber-50/20 to-amber-100/60" />
        {/* subtle noise/grain via paperboard overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${ASSETS.PAPERBOARD_TEXTURE})`,
            backgroundSize: "320px 320px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Floral corner — top-left */}
      <MotionImage
        style={{ y: yFloral }}
        src={ASSETS.FLOWERS_AESTHETIC}
        alt=""
        aria-hidden="true"
        className="absolute -top-6 -left-6 w-44 md:w-64 opacity-90 rotate-12 z-10 pointer-events-none select-none"
      />

      {/* Floral corner — bottom-right */}
      <MotionImage
        style={{ y: yFloral }}
        src={ASSETS.FLOWER_RED}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-6 -right-6 w-44 md:w-64 opacity-90 -rotate-[340deg] z-10 pointer-events-none select-none"
      />

      {/* ── Main postcard frame ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 w-full max-w-2xl mx-4 md:mx-auto my-16"
      >
        {/* Outer postcard border */}
        <div className="relative border-2 border-amber-800/50 bg-amber-50/90 shadow-[0_8px_40px_rgba(92,45,0,0.25)] backdrop-blur-[2px]">

          {/* Outer dashed inset rule */}
          <div className="m-2 border border-dashed border-amber-700/40 pointer-events-none absolute inset-0" />

          <div className="relative px-6 py-8 md:px-12 md:py-12 space-y-8">

            {/* Top label row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <div className="flex-1 border-t border-dashed border-amber-700/50" />
              <Text
                as="span"
                size="xs"
                weight="bold"
                className="mx-3 uppercase tracking-[0.35em] text-amber-800/60 font-serif"
              >
                The Union
              </Text>
              <div className="flex-1 border-t border-dashed border-amber-700/50" />
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants} className="text-center space-y-1">
              <Heading
                as="h2"
                size="4xl"
                weight="bold"
                align="center"
                className="font-serif text-amber-950 tracking-[0.06em] uppercase"
              >
                Save The Date
              </Heading>
              <Text
                as="p"
                size="sm"
                align="center"
                className="font-serif italic tracking-[0.18em] text-amber-800/70"
              >
                Tandai Tanggal Istimewa Kami
              </Text>
            </motion.div>

            {/* Stamp + body copy row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Stamp image */}
              <div className="relative flex-shrink-0">
                <div className=" p-1.5 rotate-[-4deg]">
                  <Image
                    src={ASSETS.CALENDAR}
                    alt="Love Stamp"
                    className="w-24 h-24 object-contain opacity-90"
                  />
                </div>
                {/* postmark arc scribble */}
                <div className="absolute -top-2 -right-3 w-10 h-10 border-t-2 border-r-2 border-amber-800/30 rounded-tr-full rotate-[20deg]" />
              </div>

              {/* Body copy */}
              <div className="space-y-3 text-center sm:text-left">
                <Text
                  size="lg"
                  weight="semibold"
                  className="font-serif italic text-amber-900 tracking-wide"
                >
                  Kami Bersyukur
                </Text>
                <Text
                  size="sm"
                  color="secondary"
                  className="leading-relaxed text-amber-900/70 max-w-xs"
                >
                  Dipertemukan Allah di waktu terbaik. Kini kami menanti hari
                  istimewa bersama orang-orang terkasih.
                </Text>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="flex-1 border-t border-dashed border-amber-700/40" />
              <span className="text-amber-700/50 text-xs font-serif tracking-widest">✦</span>
              <div className="flex-1 border-t border-dashed border-amber-700/40" />
            </motion.div>

            {/* Wedding date display */}
            <motion.div variants={itemVariants} className="text-center">
              <Text
                as="p"
                size="xl"
                weight="semibold"
                align="center"
                className="font-serif text-amber-950 tracking-[0.22em] uppercase"
              >
                20 September 2026
              </Text>
              <Text
                as="p"
                size="xs"
                align="center"
                className="mt-1 uppercase tracking-[0.3em] text-amber-800/55 font-serif"
              >
                Ahad · Minggu · Sunday
              </Text>
            </motion.div>

            {/* Countdown grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-4 gap-3 md:gap-5"
            >
              {timeUnits.map((unit) => (
                <CountdownBlock key={unit.label} unit={unit} />
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="flex-1 border-t border-dashed border-amber-700/40" />
              <span className="text-amber-700/50 text-xs font-serif tracking-widest">✦</span>
              <div className="flex-1 border-t border-dashed border-amber-700/40" />
            </motion.div>

            {/* Google Calendar CTA */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Laily+%26+Akbar&dates=20260920T090000Z/20260920T130000Z&details=Kami+menunggu+kehadiran+Anda+di+hari+bahagia+kami.&location=Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-3 border-2 border-amber-800 bg-amber-800 hover:bg-amber-900 hover:border-amber-900 text-amber-50 font-serif font-semibold uppercase tracking-[0.2em] text-xs transition-colors duration-200"
              >
                <Calendar className="w-3.5 h-3.5" />
                Simpan di Google Calendar
              </motion.a>
            </motion.div>

            {/* Bottom postmark row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between pt-2"
            >
              <div className="flex-1 border-t border-dashed border-amber-700/50" />
              <Text
                as="span"
                size="xs"
                weight="bold"
                className="mx-3 uppercase tracking-[0.3em] text-amber-800/50 font-serif"
              >
                Est. MMXXVI
              </Text>
              <div className="flex-1 border-t border-dashed border-amber-700/50" />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
