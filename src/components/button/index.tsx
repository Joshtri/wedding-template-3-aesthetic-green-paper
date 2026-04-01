import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-stone-900 text-stone-50 hover:bg-stone-900/90 shadow-sm":
              variant === "primary",
            "bg-stone-100 text-stone-900 hover:bg-stone-100/80":
              variant === "secondary",
            "border border-stone-200 bg-transparent shadow-sm hover:bg-stone-100":
              variant === "outline",
            "hover:bg-stone-100 text-stone-700": variant === "ghost",
            "text-stone-900 underline-offset-4 hover:underline":
              variant === "link",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-14 px-8 text-lg": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
