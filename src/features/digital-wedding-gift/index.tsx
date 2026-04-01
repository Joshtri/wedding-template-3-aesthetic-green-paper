import { motion } from "framer-motion";
import { Gift, Building2 } from "lucide-react";
import { BankCard } from "@/components/card/BankCard";
import type { BankAccount } from "@/interfaces/bank-account";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { ASSETS } from "@/constants/assets";

const GiftSection = () => {
  const accounts: BankAccount[] = [
    {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "Romeo Montague",
      logo: <Building2 className="w-8 h-8 text-white" />,
      theme: "platinum",
    },
    {
      bank: "Mandiri",
      accountNumber: "0987654321",
      accountName: "Juliet Capulet",
      logo: <Building2 className="w-8 h-8 text-white" />,
      theme: "blue",
    },
  ];

  return (
    <SectionTransition
      backgroundImage={ASSETS.PAPERBOARD_TEXTURE}
      showBorder={false}
      showTopLeft={false}
      showTopRight={false}
      showBottomLeft={false}
      showBottomRight={false}
      className="min-h-[80vh]"
    >
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-amber-100/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Gift className="text-amber-800 w-8 h-8" />
          </div>
          <Heading
            as="h2"
            align="center"
            className="text-5xl sm:text-6xl font-script text-slate-800 mb-6"
          >
            Digital Gift
          </Heading>
          <Text
            align="center"
            className="max-w-md mx-auto text-slate-600 font-serif italic text-sm sm:text-base leading-relaxed px-4"
          >
            Doa restu Anda merupakan hadiah terindah bagi kami. Namun jika Anda
            ingin memberikan tanda kasih secara digital, Anda dapat melalui
            tombol di bawah ini.
          </Text>
        </motion.div>

        {/* Gift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
          {accounts.map((acc, index) => (
            <motion.div
              key={acc.accountNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <BankCard account={acc} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};

export default GiftSection;
