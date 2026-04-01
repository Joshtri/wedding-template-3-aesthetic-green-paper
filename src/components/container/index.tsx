import { cn } from "@/utils/cn";
import React from "react";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "size" | "className" | "children">;


const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[96rem]",
  full: "max-w-full",
};

export const Container = React.forwardRef(
  <T extends React.ElementType = "div">(
    { as, size = "lg", className, children, ...props }: ContainerProps<T>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return React.createElement(
      as || "div",
      {
        ref,
        className: cn(
          "mx-auto w-full px-4 sm:px-6 md:px-8",
          sizeClasses[size as keyof typeof sizeClasses],
          className
        ),
        ...props,
      },
      children
    );
  }
) as unknown as {
  <T extends React.ElementType = "div">(
    props: ContainerProps<T>
  ): React.ReactElement | null;
  displayName: string;
};

Container.displayName = "Container";
