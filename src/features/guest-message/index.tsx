import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Image } from "@/components/image";
import { ASSETS } from "@/constants/assets";
import { GuestForm } from "./GuestForm";
import { MessageList } from "./MessageList";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Rina & Budi",
    message:
      "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤲",
    time: "2 hari yang lalu",
  },
  {
    id: 2,
    name: "Dina Putri",
    message:
      "MashaAllah, barakallah! Semoga lancar sampai hari H dan bahagia selalu ya. 💕",
    time: "1 hari yang lalu",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    message:
      "Congratulations! Wishing you both a lifetime of love and happiness. 🎉",
    time: "12 jam yang lalu",
  },
];

export const GuestMessages = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    setIsSubmitting(true);

    const newMessage: Message = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      time: "Baru saja",
    };

    setTimeout(() => {
      setMessages([newMessage, ...messages]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <SectionTransition
      backgroundImage={ASSETS.PAPERBOARD_TEXTURE}
      backgroundOpacity={0.7}
      showVignette
      showTopLeft={false}
      showTopRight={true}
      showBottomLeft={false}
      showBottomRight={false}
      cornerImage={ASSETS.FLOWERS_AESTHETIC}
      className="min-h-screen"
      cornerRotateOffset={180}
    >
      {/* Floating floral accent — top right */}
      <motion.div
        className="absolute top-12 right-4 sm:right-10 w-24 sm:w-32 pointer-events-none z-0"
        initial={{ opacity: 0, x: 20, rotate: 12 }}
        whileInView={{
          opacity: 0.5,
          x: 0,
          rotate: [10, 15, 10],
          y: [0, -6, 0],
        }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 1.4 },
          x: { duration: 1.4 },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* <Image
          src={ASSETS.FLOWERS_AESTHETIC}
          alt=""
          className="w-full h-auto object-contain drop-shadow-sm"
        /> */}
      </motion.div>

      {/* Floating stamps accent — bottom left */}
      <motion.div
        className="absolute bottom-16 left-4 sm:left-10 w-20 sm:w-28 pointer-events-none z-0"
        initial={{ opacity: 0, x: -20, rotate: -10 }}
        whileInView={{
          opacity: 0.45,
          x: 0,
          rotate: [-8, -13, -8],
          y: [0, 7, 0],
        }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 1.4 },
          x: { duration: 1.4 },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src={ASSETS.STAMPS_LOVE}
          alt=""
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </motion.div>

      <Container size="md" className="space-y-16 py-12">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-5"
        >
          <motion.div variants={fadeUp}>
            <Text
              as="span"
              align="center"
              className="text-amber-700 font-script text-xl sm:text-2xl block mb-1"
            >
              Bismillahirrahmannirrahiim
            </Text>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <Text
              align="center"
              className="text-amber-700 font-oswald uppercase tracking-[0.35em] text-xs"
            >
              Wishes & Prayers
            </Text>
            <Heading
              as="h2"
              size="4xl"
              align="center"
              className="text-slate-800 font-serif"
            >
              Ucapkan Sesuatu
            </Heading>
          </motion.div>

          {/* Ornamental divider */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 max-w-xs mx-auto"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-amber-600 text-[9px] leading-none select-none">
              ◆
            </span>
            <span className="text-amber-500/60 text-[7px] leading-none select-none">
              ◆
            </span>
            <span className="text-amber-600 text-[9px] leading-none select-none">
              ◆
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Text
              align="center"
              className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-4 text-slate-600 italic font-serif"
            >
              "Berikan ucapan selamat dan doa restu Anda untuk kedua mempelai di
              hari yang istimewa ini."
            </Text>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 max-w-2xl mx-auto">
          {/* Message Form Component */}
          <GuestForm
            name={name}
            message={message}
            isSubmitting={isSubmitting}
            onNameChange={setName}
            onMessageChange={setMessage}
            onSubmit={handleSubmit}
          />

          {/* Messages List Component */}
          <MessageList messages={messages} />
        </div>
      </Container>
    </SectionTransition>
  );
};
