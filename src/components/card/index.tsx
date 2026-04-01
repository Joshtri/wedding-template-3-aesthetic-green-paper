import React from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/heading";

import { ASSETS } from "@/constants/assets";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ icon, title, footer, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative bg-[#ebe1ca] p-8 sm:p-10 rounded-4xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-amber-100 flex flex-col items-center text-center overflow-hidden max-w-md mx-auto w-full",
          className,
        )}
        {...props}
      >
        {/* Texture Layer */}
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("${ASSETS.PAPER_TEXTURE}")`,
          }}
        ></div>

        {/* Icon Wrapper */}
        {icon && (
          <div className="bg-amber-100/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10">
            {icon}
          </div>
        )}

        {/* Title */}
        {title && (
          <Heading
            as="h3"
            align="center"
            className="text-3xl font-script text-slate-800 mb-4 font-bold tracking-wide relative z-10"
          >
            {title}
          </Heading>
        )}

        {/* Content Area */}
        <div className="space-y-4 text-slate-600 font-serif leading-relaxed mb-6 w-full relative z-10 text-sm">
          {children}
        </div>

        {/* Footer / Action Area */}
        {footer && <div className="relative z-10">{footer}</div>}
      </div>
    );
  },
);

Card.displayName = "Card";
