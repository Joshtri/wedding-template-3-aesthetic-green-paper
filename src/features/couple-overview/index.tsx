import { motion } from "framer-motion";
import { ASSETS } from "../../constants/assets";
import { Image } from "@/components/image";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";

const CoupleOverviewSection = () => {
  return (
    <SectionTransition
      id="couple"
      backgroundImage={ASSETS.PAPERBOARD_TEXTURE}
      showTopLeft={false}
      showTopRight={false}
      showBottomLeft={false}
      showBottomRight={false}
      className="min-h-screen"
    >
      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
        {/* Intro Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-6"
        >
          <Text
            as="span"
            align="center"
            className="text-amber-700 font-script text-2xl mb-4 block"
          >
            Bismillahirrahmannirrahiim
          </Text>
          <Text
            align="center"
            className="text-slate-600 font-serif italic text-sm sm:text-base leading-loose max-w-2xl"
          >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang."
            <br />
            <Text as="span" className="font-bold mt-2 block">
              — QS Ar-Rum: 21
            </Text>
          </Text>
        </motion.div>

        {/* Couple Profiles */}
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-16 md:gap-8">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6">
              <div className="absolute inset-0 border-2 border-amber-200 rotate-6 translate-x-2 translate-y-2 rounded-2xl group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image
                  src={ASSETS.GROOM_PHOTO}
                  alt="Groom Placeholder"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floral Accent */}
              {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-40">
                <svg viewBox="0 0 100 100" className="fill-amber-600">
                  <path d="M50 0 C60 30 100 40 100 50 C100 60 60 70 50 100 C40 70 0 60 0 50 C0 40 40 30 50 0" />
                </svg>
              </div> */}
            </div>

            <Heading
              as="h3"
              align="center"
              className="text-3xl sm:text-4xl font-script text-slate-800 mb-1"
            >
              Romeo Montague
            </Heading>
            <Text
              align="center"
              className="text-amber-700 font-oswald text-xs mb-4 tracking-[0.2em] uppercase underline underline-offset-4 decoration-amber-200"
            >
              The Groom
            </Text>
            <div className="text-center text-slate-500 text-xs sm:text-sm font-serif leading-relaxed">
              <Text align="center">Putra dari Ayah Montague</Text>
              <Text align="center">& Ibu Montague</Text>
            </div>
          </motion.div>

          {/* "And" Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-serif text-amber-200/50 hidden md:block"
          >
            <Text
              as="span"
              className="text-7xl sm:text-6xl font-serif text-amber-800/50"
            >
              &
            </Text>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6">
              <div className="absolute inset-0 border-2 border-amber-200 -rotate-6 -translate-x-2 translate-y-2 rounded-2xl group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden shadow-lg border border-white">
                <Image
                  src={ASSETS.BRIDE_PHOTO}
                  alt="Bride Placeholder"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floral Accent */}
              {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-40">
                <svg viewBox="0 0 100 100" className="fill-amber-600">
                  <path d="M50 0 C60 30 100 40 100 50 C100 60 60 70 50 100 C40 70 0 60 0 50 C0 40 40 30 50 0" />
                </svg>
              </div> */}
            </div>

            <Heading
              as="h3"
              align="center"
              className="text-3xl sm:text-4xl font-script text-slate-800 mb-1"
            >
              Juliet Capulet
            </Heading>
            <Text
              align="center"
              className="text-amber-700 font-oswald text-xs mb-4 tracking-[0.2em] uppercase underline underline-offset-4 decoration-amber-200"
            >
              The Bride
            </Text>
            <div className="text-center text-slate-500 text-xs sm:text-sm font-serif leading-relaxed">
              <Text align="center">Putri dari Ayah Capulet</Text>
              <Text align="center">& Ibu Capulet</Text>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default CoupleOverviewSection;
