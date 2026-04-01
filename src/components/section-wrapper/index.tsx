import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  onInView: (id: string) => void;
  threshold?: number;
}

export const SectionWrapper = ({ id, children, onInView, threshold = 0.5 }: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold });

  useEffect(() => {
    if (isInView) {
      onInView(id);
    }
  }, [isInView, id, onInView]);

  return (
    <div ref={ref} id={id} className="min-h-[50vh]">
      {children}
    </div>
  );
};
