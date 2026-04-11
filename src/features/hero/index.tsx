import { useState, useEffect } from "react";
import { ASSETS } from "../../constants/assets";
import { useHeroAnimations } from "./animations";
import { Envelope } from "@/components/envelope";
import { SectionTransition } from "@/components/motion-effect/SectionTransition";
import { InvitationCard } from "./components/InvitationCard";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const { envelopeVariants, flapVariants, cardVariants, sealVariants } =
    useHeroAnimations();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <SectionTransition
      backgroundImage={ASSETS.HERO_BACKGROUND}
      backgroundOpacity={0.8}
      className="min-h-screen p-6 sm:p-12 overflow-x-hidden"
      showBorder={false}
      showTopLeft={false}
      showTopRight={false}
      showBottomLeft={false}
      showBottomRight={false}
    >
      <div
        className={`relative transition-all duration-1000 ease-in-out flex items-center justify-center ${
          isOpen ? "w-full max-w-7xl" : "w-full max-w-[500px]"
        }`}
      >
        {/*
          On mobile (< lg), the open state stacks card above envelope vertically.
          min-h-screen gives enough runway so the absolute-positioned elements
          (translated via y offsets) don't get clipped by the container.
          On desktop the side-by-side x-transform layout takes over.
        */}
        <div
          className={`relative w-full flex items-center justify-center ${
            isOpen
              ? "min-h-screen lg:min-h-[700px]"
              : "min-h-[600px] sm:min-h-[700px]"
          }`}
        >
          {/* Invitation Card */}
          <InvitationCard isOpen={isOpen} cardVariants={cardVariants} />

          {/* Envelope */}
          <Envelope
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            envelopeVariants={envelopeVariants}
            flapVariants={flapVariants}
            sealVariants={sealVariants}
          />
        </div>
      </div>

      {/* Aesthetic Border Accents for Desktop */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-900/10 pointer-events-none m-8 hidden lg:block"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-900/10 pointer-events-none m-8 hidden lg:block"></div>
    </SectionTransition>
  );
}
