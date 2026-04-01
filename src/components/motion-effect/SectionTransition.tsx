import { motion } from "framer-motion";
import flowerBoom from "@/assets/object/flower-boom.png";
import { cn } from "@/utils/cn";
import { Image } from "@/components/image";

interface SectionTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundOverlayColor?: string;
  showBorder?: boolean;
  showVignette?: boolean;
  vignetteIntensity?: number;
  showTopLeft?: boolean;
  showTopRight?: boolean;
  showBottomLeft?: boolean;
  showBottomRight?: boolean;
  cornerImage?: string;
  /** Tailwind width class for corner images, e.g. "w-32" or "w-40 md:w-56" */
  cornerSize?: string;
  /** Extra rotate offset (degrees) applied on top of each corner's default rotation */
  cornerRotateOffset?: number;
}

export const SectionTransition = ({
  children,
  className,
  backgroundImage,
  backgroundOpacity = 1,
  backgroundOverlayColor = "bg-white/5",
  showBorder = true,
  showVignette = false,
  vignetteIntensity = 0.12,
  showTopLeft = true,
  showTopRight = true,
  showBottomLeft = true,
  showBottomRight = true,
  cornerImage = flowerBoom,
  cornerSize = "w-40 md:w-56",
  cornerRotateOffset = 0,
  ...props
}: SectionTransitionProps) => {
  const cornerClass = cn(
    "absolute z-0 pointer-events-none opacity-40",
    cornerSize,
  );

  // Base rotations per corner + optional offset
  const r = (base: number) => base + cornerRotateOffset;

  return (
    <section
      className={cn(
        "py-24 px-6 sm:px-8 relative overflow-hidden flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      {/* Background Decor */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: backgroundOpacity }}
          />
          <div className={cn("absolute inset-0", backgroundOverlayColor)}></div>
        </div>
      )}

      {/* Vignette Effect */}
      {showVignette && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, transparent 40%, rgba(28, 25, 23, ${vignetteIntensity / 2}) 80%, rgba(28, 25, 23, ${vignetteIntensity}) 100%)`,
          }}
        />
      )}

      {/* Borders */}
      {showBorder && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent" />
        </>
      )}

      {/* Floral Corners */}
      {showTopLeft && (
        <motion.img
          initial={{ opacity: 0, x: -20, rotate: r(-5) }}
          whileInView={{
            opacity: 0.4,
            x: 0,
            rotate: [r(-2), r(2), r(-2)],
            y: [0, -5, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            x: { duration: 1.5 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          src={cornerImage}
          className={cn(cornerClass, "-top-12 -left-12")}
        />
      )}
      {showTopRight && (
        <motion.img
          initial={{ opacity: 0, x: 20, rotate: r(85) }}
          whileInView={{
            opacity: 0.4,
            x: 0,
            rotate: [r(88), r(92), r(88)],
            y: [0, -5, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            x: { duration: 1.5 },
            rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          src={cornerImage}
          className={cn(cornerClass, "-top-12 -right-12 rotate-90")}
        />
      )}
      {showBottomLeft && (
        <motion.img
          initial={{ opacity: 0, x: -20, rotate: r(265) }}
          whileInView={{
            opacity: 0.4,
            x: 0,
            rotate: [r(268), r(272), r(268)],
            y: [0, 5, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            x: { duration: 1.5 },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          src={cornerImage}
          className={cn(cornerClass, "-bottom-12 -left-12 rotate-270")}
        />
      )}
      {showBottomRight && (
        <motion.img
          initial={{ opacity: 0, x: 20, rotate: r(175) }}
          whileInView={{
            opacity: 0.4,
            x: 0,
            rotate: [r(178), r(182), r(178)],
            y: [0, 5, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            x: { duration: 1.5 },
            rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          }}
          src={cornerImage}
          className={cn(cornerClass, "-bottom-12 -right-12 rotate-180")}
        />
      )}

      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </section>
  );
};
