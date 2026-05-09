"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay before the transition kicks in (ms). */
  delay?: number;
  /** Distance the element travels in from below before settling (px). */
  offset?: number;
  /** Visibility ratio that triggers the reveal (0 to 1). */
  threshold?: number;
  /** Use a different wrapper element when block-level `<div>` is wrong. */
  as?: "div" | "section" | "article";
  style?: CSSProperties;
};

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  offset = 24,
  threshold = 0.15,
  as: Tag = "div",
  style,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (!("IntersectionObserver" in window)) return true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    return false;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${offset}px, 0)`,
        transition: `opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
