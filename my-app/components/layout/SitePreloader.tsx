"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LOGO_URL from "@/app/assets/ht/ht-logo.svg";

const MIN_VISIBLE_MS = 900;

export default function SitePreloader() {
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
    <section
      id="ht-preloader"
      className={`ht-preloader ${visibilityClass}`}
      aria-hidden={!shouldShow}
    >
      <div data-text="HEAPTRACE" className="preloader old-loader" />
      <div className="ht-loader-container">
        <div id="page-logo" className="div-block-62">
          <Image
            src={LOGO_URL}
            alt="HeapTrace Logo"
            width={170}
            height={42}
            priority
          />
        </div>
      </div>
    </section>
  );
}
