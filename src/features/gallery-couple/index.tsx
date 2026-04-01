import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { X, ZoomIn, ChevronDown, ChevronUp } from "lucide-react";
import { galleryImages } from "@/features/global/constant";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Image } from "@/components/image";
import { ASSETS } from "@/constants/assets";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Initial visible count per layout
const MOBILE_INITIAL = 6;
const DESKTOP_INITIAL_PER_COL = 2;

interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox = ({ src, onClose }: LightboxProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button
      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      onClick={onClose}
      aria-label="Tutup"
    >
      <X className="w-5 h-5" />
    </button>
    <motion.img
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      src={src}
      alt="Gallery preview"
      className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </motion.div>
);

interface GalleryImageProps {
  src: string;
  onClick: () => void;
}

const GalleryImage = ({ src, onClick }: GalleryImageProps) => (
  <div
    className="rounded-2xl overflow-hidden relative group cursor-pointer border border-amber-200/50 shadow-sm"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
  >
    <Image
      src={src}
      alt="Gallery"
      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/30 transition-all duration-300 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <ZoomIn className="text-white w-5 h-5" />
      </div>
    </div>
  </div>
);

interface GalleryColumnProps {
  initialImages: string[];
  extraImages?: string[];
  showAll?: boolean;
  y?: MotionValue<number> | number;
  onImageClick: (src: string) => void;
}

const GalleryColumn = ({
  initialImages,
  extraImages = [],
  showAll = false,
  y = 0,
  onImageClick,
}: GalleryColumnProps) => (
  <motion.div style={{ y }} className="flex flex-col gap-4">
    {initialImages.map((src, index) => (
      <GalleryImage key={index} src={src} onClick={() => onImageClick(src)} />
    ))}
    <AnimatePresence>
      {showAll &&
        extraImages.map((src, index) => (
          <motion.div
            key={`extra-${index}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
          >
            <GalleryImage src={src} onClick={() => onImageClick(src)} />
          </motion.div>
        ))}
    </AnimatePresence>
  </motion.div>
);

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Desktop: 3 cols × 2 initial + 2 extra each
  const col1Initial = galleryImages.slice(0, DESKTOP_INITIAL_PER_COL);
  const col1Extra   = galleryImages.slice(DESKTOP_INITIAL_PER_COL, 4);
  const col2Initial = galleryImages.slice(4, 4 + DESKTOP_INITIAL_PER_COL);
  const col2Extra   = galleryImages.slice(4 + DESKTOP_INITIAL_PER_COL, 8);
  const col3Initial = galleryImages.slice(8, 8 + DESKTOP_INITIAL_PER_COL);
  const col3Extra   = galleryImages.slice(8 + DESKTOP_INITIAL_PER_COL, 12);

  // Mobile: always show first 6, extra 6 revealed on showAll
  const mobileVisible = galleryImages.slice(0, MOBILE_INITIAL);
  const mobileExtra   = galleryImages.slice(MOBILE_INITIAL);

  const hiddenCount = galleryImages.length - MOBILE_INITIAL;

  return (
    <>
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            key="lightbox"
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      <div ref={containerRef}>
        <SectionTransition
          backgroundImage={ASSETS.PAPERBOARD_TEXTURE}
          backgroundOpacity={0.65}
          showVignette
          vignetteIntensity={0.08}
          showTopLeft={false}
          showTopRight={true}
          showBottomLeft={true}
          showBottomRight={false}
          className="min-h-screen"
        >
          {/* Section Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-4 mb-14 max-w-2xl mx-auto w-full"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <Text
                align="center"
                className="text-amber-700 font-oswald uppercase tracking-[0.35em] text-xs"
              >
                Our Story
              </Text>
              <Heading
                as="h2"
                size="4xl"
                align="center"
                className="text-slate-800 font-serif"
              >
                Our Moments
              </Heading>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 max-w-xs mx-auto"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-600 text-[9px] leading-none select-none">◆</span>
              <span className="text-amber-500/60 text-[7px] leading-none select-none">◆</span>
              <span className="text-amber-600 text-[9px] leading-none select-none">◆</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text
                align="center"
                className="text-slate-600 italic font-serif text-sm sm:text-base leading-relaxed px-4"
              >
                Capturing the love, laughter, and unforgettable memories we've
                shared together.
              </Text>
            </motion.div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">

            {/* ── Mobile: 2-col grid, show 6 initially ── */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {mobileVisible.map((src, index) => (
                  <GalleryImage
                    key={index}
                    src={src}
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
                <AnimatePresence>
                  {showAll &&
                    mobileExtra.map((src, index) => (
                      <motion.div
                        key={`mobile-extra-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                      >
                        <GalleryImage
                          src={src}
                          onClick={() => setSelectedImage(src)}
                        />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Desktop: 3-col masonry with parallax, show 2/col initially ── */}
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              <GalleryColumn
                initialImages={col1Initial}
                extraImages={col1Extra}
                showAll={showAll}
                y={y1}
                onImageClick={setSelectedImage}
              />
              <div className="-mt-16">
                <GalleryColumn
                  initialImages={col2Initial}
                  extraImages={col2Extra}
                  showAll={showAll}
                  y={y2}
                  onImageClick={setSelectedImage}
                />
              </div>
              <GalleryColumn
                initialImages={col3Initial}
                extraImages={col3Extra}
                showAll={showAll}
                y={y3}
                onImageClick={setSelectedImage}
              />
            </div>
          </div>

          {/* Show More / Show Less button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mt-10"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-amber-700/60 text-amber-800 text-xs font-oswald uppercase tracking-[0.2em] hover:bg-amber-800 hover:text-white hover:border-amber-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Sembunyikan
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Lihat {hiddenCount} Foto Lainnya
                </>
              )}
            </button>

            {/* Bottom ornament */}
            <div className="flex items-center gap-3 max-w-xs w-full mt-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/40" />
              <span className="text-amber-600/50 text-[9px] leading-none select-none">◆</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/40" />
            </div>
          </motion.div>
        </SectionTransition>
      </div>
    </>
  );
};
