"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Components.css";

const CHEVRON_URL =
  "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f35a9dd60ec1d9a138bbc_chevron.svg";

const LOGO_URL =
  "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/670bbc6b01de0ce138925648_ht-logo.svg";

const INDUSTRIES_LINKS = [
  { label: "Blockchain", href: "/industry/blockchain" },
  { label: "EdTech", href: "/industry/edtech" },
  { label: "Healthcare Technology", href: "/industry/healthcare-technology" },
  { label: "ERP Solutions", href: "/industry/erp-solutions" },
  { label: "EDP Solutions", href: "/industry/edp-solutions" },
  { label: "IoT", href: "/industry/iot" },
  { label: "AdTech Innovations", href: "/industry/adtech-innovations" },
  { label: "Real Estate Technology", href: "/industry/real-estate-tech" },
  { label: "E-Commerce", href: "/industry/e-commerce" },
];

const SERVICES_LINKS = [
  { label: "All Services", href: "/services" },
  { label: "Cloud Development", href: "/services/cloud-development" },
  { label: "Generative AI", href: "/services/generative-ai" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Development", href: "/services/mobile-development" },
  { label: "Big Data And ML", href: "/services/big-data-and-ml" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Testing Services", href: "/services/testing-services" },
  { label: "DevOps Services", href: "/services/devops-services" },
  { label: "UX Designs", href: "/services/ux-design" },
];

const INSIGHTS_LINKS = [
  { label: "Blogs", href: "/blog" },
  { label: "White Paper", href: "/contact-us" },
];

// Routes whose hero is dark/full-bleed and should be overlaid by the navbar
// (transparent at the top, solid on scroll). Mirrors the home page behavior.
const TRANSPARENT_HERO_ROUTES = new Set<string>(["/", "/careers"]);
const TRANSPARENT_HERO_PREFIXES = ["/industry/", "/about-us"];

type DropdownItem = { label: string; href: string };

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="site-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="site-nav-btn"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Image
          src={CHEVRON_URL}
          alt=""
          width={12}
          height={6}
          className={`site-chevron ${open ? "site-chevron-open" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`site-dropdown-panel ${
          open ? "site-dropdown-panel-open" : ""
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`site-dropdown-link${pathname === item.href ? " site-dropdown-link-active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile accordion item ─────────────────────────────────────── */
interface MobileAccordionProps {
  label: string;
  items: DropdownItem[];
  onClose: () => void;
}

function MobileAccordion({ label, items, onClose }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="site-nav-btn site-nav-btn-mobile"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <Image
          src={CHEVRON_URL}
          alt=""
          width={12}
          height={6}
          className={`site-chevron ${open ? "site-chevron-open" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="site-mobile-accordion-panel">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="site-mobile-nav-link site-mobile-nav-link-sub"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Navbar ───────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    function updateTopState() {
      setIsAtTop(window.scrollY <= 8);
    }

    updateTopState();
    window.addEventListener("scroll", updateTopState, { passive: true });
    return () => window.removeEventListener("scroll", updateTopState);
  }, []);

  // const TRANSPARENT_ROUTES = ["/", "/about-us"];
  // const isTransparent = TRANSPARENT_ROUTES.includes(pathname) && isAtTop && !mobileOpen;
  const overlayHero =
    TRANSPARENT_HERO_ROUTES.has(pathname) ||
    TRANSPARENT_HERO_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const isTransparent = overlayHero && isAtTop && !mobileOpen;

  return (
    <>
      <header
        className={`site-header ${isTransparent ? "site-header-transparent" : "site-header-solid"}`}
        role="banner"
      >
        <div className="site-header-inner">
          <Link href="/" aria-label="home" className="site-logo-link">
            <Image src={LOGO_URL} alt="Heaptrace" width={155} height={38} className="site-logo" priority />
          </Link>

          <nav className="site-nav" role="navigation" aria-label="Main navigation">
            <NavDropdown label="Industries" items={INDUSTRIES_LINKS} />
            <NavDropdown label="Services" items={SERVICES_LINKS} />
            <Link href="/about-us" className="site-nav-link">
              About
            </Link>
            <Link href="/portfolio" className="site-nav-link">
              Work
            </Link>
            <Link href="/careers" className="site-nav-link">
              Careers
            </Link>
            <NavDropdown label="Insights" items={INSIGHTS_LINKS} />
          </nav>

          <div className="site-actions">
            <Link href="/contact-us" className="site-cta">
              Get In Touch
            </Link>
            <button
              className={`site-mobile-toggle ${mobileOpen ? "site-mobile-open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className="site-mobile-line" />
              <span className="site-mobile-line" />
              <span className="site-mobile-line" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`site-mobile-overlay ${
          mobileOpen ? "site-mobile-overlay-open" : ""
        }`}
      >
        <div className="site-mobile-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <div className="site-mobile-drawer">
          <div className="site-mobile-drawer-header">
            <Link
              href="/"
              aria-label="home"
              className="site-logo-link"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src={LOGO_URL}
                alt="Heaptrace"
                width={140}
                height={34}
                className="site-mobile-drawer-logo"
              />
            </Link>
            <button
              type="button"
              className="site-mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <span className="site-mobile-close-line" />
              <span className="site-mobile-close-line" />
            </button>
          </div>
          <nav role="navigation" aria-label="Mobile navigation">
            <MobileAccordion label="Industries" items={INDUSTRIES_LINKS} onClose={() => setMobileOpen(false)} />
            <MobileAccordion label="Services" items={SERVICES_LINKS} onClose={() => setMobileOpen(false)} />
            {[
              { label: "About", href: "/about-us" },
              { label: "Work", href: "/portfolio" },
              { label: "Careers", href: "/careers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="site-mobile-nav-link"
              >
                {item.label}
              </Link>
            ))}
            <MobileAccordion label="Insights" items={INSIGHTS_LINKS} onClose={() => setMobileOpen(false)} />
          </nav>
          <div>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="site-cta site-mobile-cta site-mobile-cta-flex"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
