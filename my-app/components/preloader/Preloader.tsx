"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import HtPreloader from "@/components/preloader/HtPreloader";
import "./preloader.css";

const MIN_VISIBLE_MS = 900;

export default function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [routeAnimating, setRouteAnimating] = useState(false);
  const initialLoadHandled = useRef(false);
  const mountedAt = useRef<number>(Date.now());

  const shouldShow = visible || routeAnimating;

  useEffect(() => {
    const hideAfterMinTime = () => {
      const elapsed = Date.now() - mountedAt.current;
      const waitMs = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => setVisible(false), waitMs);
    };

    if (document.readyState === "complete") {
      hideAfterMinTime();
      initialLoadHandled.current = true;
      return;
    }

    const onLoad = () => {
      hideAfterMinTime();
      initialLoadHandled.current = true;
    };

    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (!initialLoadHandled.current) return;
    setRouteAnimating(true);
    const timer = window.setTimeout(() => setRouteAnimating(false), 520);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const visibilityClass = useMemo(
    () => (shouldShow ? "ht-preloader-visible" : "ht-preloader-hidden"),
    [shouldShow],
  );

  return (
    <HtPreloader
      visibilityClass={visibilityClass}
      shouldShow={shouldShow}
    />
  );
}
