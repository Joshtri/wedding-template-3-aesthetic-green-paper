import { cn } from "@/utils/cn";
import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "muted"
    | "white"
    | "stone"
    | "stone-muted"
    | "accent";
  align?: "left" | "center" | "right" | "justify";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  default: "text-stone-900",
  primary: "text-rose-700",
  secondary: "text-stone-600",
  success: "text-emerald-700",
  warning: "text-amber-700",
  danger: "text-rose-700",
  muted: "text-stone-500",
  white: "text-white",
  stone: "text-stone-800",
  "stone-muted": "text-stone-500",
  accent: "text-rose-500",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as: Component = "p",
      size = "base",
      weight = "normal",
      color = "default",
      align = "left",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          colorClasses[color],
          alignClasses[align],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";
