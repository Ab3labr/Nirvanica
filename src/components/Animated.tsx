"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade-in" | "fade-in-up" | "scale-in";
  delay?: number;
  triggerOnce?: boolean;
}

export function Animated({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  triggerOnce = true,
  ...props
}: AnimatedProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: "0px",
    threshold: 0.1,
    freezeOnceVisible: triggerOnce,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-500",
        !isVisible && "opacity-0",
        className
      )}
      {...props}
    >
      <div
        className={cn({
          ["animate-fade-in"]: isVisible && animation === "fade-in",
          ["animate-fade-in-up"]: isVisible && animation === "fade-in-up",
          ["animate-scale-in"]: isVisible && animation === "scale-in",
        })}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
