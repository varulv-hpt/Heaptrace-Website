"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(() => {
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
            setInView(true);
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

  return [ref, inView] as const;
}

const BRAND = "#4dac8a";
const BRAND_DEEP = "#2a8a6c";
const TRACK = "#e6efe9";

type CircularStatProps = {
  /** Target percentage (0–100). */
  value: number;
  /** Outer pixel size of the indicator. */
  size?: number;
  className?: string;
  /** Optional accessible label for screen readers. */
  label?: string;
  /** Animation duration for both ring sweep and counter (ms). */
  duration?: number;
  /** Delay before animation starts after entering view (ms). */
  delay?: number;
};

/**
 * Animated circular progress that sweeps the ring and counts up the
 * percentage from 0 to `value` once the element enters the viewport.
 * Honors prefers-reduced-motion (snaps to final state).
 */
export function CircularStat({
  value,
  size = 72,
  className,
  label,
  duration = 1400,
  delay = 120,
}: CircularStatProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [display, setDisplay] = useState(0);

  const clamped = Math.max(0, Math.min(100, value));
  const stroke = Math.max(4, Math.round(size * 0.1));
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      return;
    }

    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * clamped));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, clamped, duration, delay, reduceMotion]);

  const gradientId = `stat-grad-${clamped}-${size}`;
  const fontSize = Math.round(size * 0.28);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        lineHeight: 0,
      }}
      role="img"
      aria-label={
        label ? `${label}: ${clamped} percent` : `${clamped} percent`
      }
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BRAND} />
            <stop offset="100%" stopColor={BRAND_DEEP} />
          </linearGradient>
        </defs>

        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={TRACK}
          strokeWidth={stroke}
          fill="none"
        />

        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? offset : circumference}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
          }}
        />
      </svg>

      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: BRAND_DEEP,
          fontFeatureSettings: '"tnum" 1',
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
      >
        {reduceMotion && inView ? clamped : display}
        <span style={{ fontSize: Math.round(fontSize * 0.55), marginLeft: 1 }}>
          %
        </span>
      </span>
    </div>
  );
}

type IconProps = {
  size?: number;
  className?: string;
};

export function SatisfactionIcon({ size = 72, className }: IconProps) {
  return (
    <CircularStat
      value={95}
      size={size}
      className={className}
      label="Employee satisfaction rate"
    />
  );
}

export function RetentionIcon({ size = 72, className }: IconProps) {
  return (
    <CircularStat
      value={85}
      size={size}
      className={className}
      label="Employee retention rate"
      delay={260}
    />
  );
}
