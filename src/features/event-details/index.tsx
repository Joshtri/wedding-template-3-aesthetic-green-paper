import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import CardMotion from "@/components/card-motion";
import { ASSETS } from "@/constants/assets";
import { Image } from "@/components/image";

const EventDetailsSection = () => {
  const commonButtonClass =
    "relative px-8 py-3 bg-amber-800 text-white rounded-full text-xs font-oswald font-medium tracking-[0.2em] uppercase shadow-lg hover:bg-amber-950 transition-all flex items-center gap-2 group-hover:-translate-y-1";

  return (
    <SectionTransition
      backgroundImage={ASSETS.HERO_BACKGROUND}
      backgroundOpacity={0.8}
      showBorder={false}
      showTopLeft={false}
      showTopRight={false}
      showBottomLeft={false}
      showBottomRight={false}
      className="min-h-screen"
    >
      {/* Decorative Corner Asset Custom to this Section */}
      <Image
        src={ASSETS.PAPER_CUT_DECOR}
        alt=""
        className="absolute top-0 left-0 w-[300px] md:w-[450px] pointer-events-none -translate-x-12 -translate-y-20 mix-blend-multiply"
      />

      <Image
        src={ASSETS.CLOCK_ICON}
        alt=""
        className="absolute top-8 md:top-[600px] right-0 opacity-80 w-[140px] md:w-[250px] pointer-events-none translate-x-12 mix-blend-multiply rotate-12"
      />

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading
            as="h2"
            align="center"
            className="text-5xl sm:text-6xl font-script text-slate-50 mb-4"
          >
            Event Details
          </Heading>
          <div className="w-24 h-px bg-amber-300 mx-auto"></div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full px-4 items-start justify-items-center">
          {/* Akad Nikah Card */}
          <CardMotion
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            icon={<Calendar className="text-amber-800 w-8 h-8" />}
            title="Akad Nikah"
            footer={
              <Button className={commonButtonClass}>
                <MapPin className="w-4 h-4" /> Buka Google Maps
              </Button>
            }
          >
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-700 opacity-60" />
              <Text
                align="center"
                className="font-oswald font-medium text-amber-900 uppercase tracking-widest"
              >
                Sabtu, 20 September 2025
              </Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-5 h-5 text-amber-700 opacity-60" />
              <Text align="center" className="font-oswald">
                08.00 - 10.00 WIB
              </Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-700 opacity-60" />
              <Text align="center" className="font-serif">
                Masjid Raya Baiturrahman <br /> Jakarta Pusat
              </Text>
            </div>

            <div className="w-full mt-4 rounded-2xl overflow-hidden shadow-sm border border-amber-100 relative h-40">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop"
                alt="Venue Masjid"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </CardMotion>

          {/* Resepsi Card */}
          <CardMotion
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            icon={<Calendar className="text-amber-800 w-8 h-8" />}
            title="Resepsi"
            footer={
              <Button className={commonButtonClass}>
                <MapPin className="w-4 h-4" /> Buka Google Maps
              </Button>
            }
          >
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-700 opacity-60" />
              <Text
                align="center"
                className="font-oswald font-medium text-amber-900 uppercase tracking-widest"
              >
                Sabtu, 20 September 2025
              </Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-5 h-5 text-amber-700 opacity-60" />
              <Text align="center" className="font-oswald">
                11.00 - 14.00 WIB
              </Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-700 opacity-60" />
              <Text align="center" className="font-serif">
                The Grand Ballroom Crystal Palace <br /> Jakarta Pusat
              </Text>
            </div>

            <div className="w-full mt-4 rounded-2xl overflow-hidden shadow-sm border border-amber-100 relative h-40">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop"
                alt="Venue Resepsi"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </CardMotion>
        </div>
      </div>
    </SectionTransition>
  );
};

export default EventDetailsSection;
