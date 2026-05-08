"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import andrewImage from "@/app/assets/people/andrew.png";
import azizImage from "@/app/assets/people/aziz.png";
import christianImage from "@/app/assets/people/christian.png";
import loganImage from "@/app/assets/people/logan.png";
import markImage from "@/app/assets/people/mark.png";
import steveImage from "@/app/assets/people/steve.png";
import travisImage from "@/app/assets/people/travis.png";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  imageSrc: StaticImageData;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "I appreciate how flexibly they work. Depending on our needs, we’re able to add on or reduce the number of resources, but it still feels like we’re working with an in-house team. They’re an extension of us, which is key to our projects. As for the quality of their work itself, it’s comparable to other outsourced development firms.",
    name: "Aziz Boxwala",
    role: "Cofounder & President , Elimu Informatics",
    imageSrc: azizImage,
  },
  {
    quote:
      "They’re very assiduous and on the ball. If I think of something or something isn’t working, I can get a rapid response outside of regular meetings. I have no complaints about their",
    name: "Mark Perkins",
    role: "Founder & Managing Director, Repindex Ltd.",
    imageSrc: markImage,
  },
  {
    quote:
      "No matter what we ask for, their team has enough breadth and depth to address it. I’ve been in the technical world for 25 years, and HeapTrace has as talented a bench as anyone. If we’re working with new technology, they’re smart enough to either pick it up themselves or bring someone on with the necessary skills. There’ll always miscommunications with offshore teams, but there’ve much fewer than normal with HeapTrace Technologies.",
    name: "Steve Cornell",
    role: "President, Maxis Technology",
    imageSrc: steveImage,
  },
  {
    quote:
      "The HeapTrace team is skilled and easy to work with. We worked with several developers on a Javascript MVC framework. They were always willing to do what we needed. They were flexible as our toolchain changed. They were adaptable as the scope changed. They were straightforward to communicate with and pleasant to work with.",
    name: "Travis",
    role: "COO, Product and Business Development",
    imageSrc: travisImage,
  },
  {
    quote:
      "“We have worked with Heaptrace Technology for almost five years, during which they developed an end-to-end product for our legal management system. Heaptrace has managed our case tracking system using a variety of technologies, delivering beautifully designed and high-quality solutions. Their commitment to on-time delivery and dedication to providing multiple top-notch products have consistently impressed us. I highly recommend Heaptrace Technology to any business looking for reliable and skilled partners.”",
    name: "Andrew Scott",
    role: "Founder & CEO , Mattersmith Limited",
    imageSrc: andrewImage,
  },
  {
    quote:
      "HeapTrace has consistently demonstrated exceptional professionalism and expertise. Having worked with several vendors in the health tech space, I can confidently say that HeapTrace stands out for their superior customer service, clear communication, deep understanding, and unwavering commitment. Whenever an opportunity arises to work with them, they are my first choice without hesitation.",
    name: "Logan Lyle",
    role:
      "Vice President of Underwriting and Analytics | Director of Product Innovation & Analytics",
    imageSrc: loganImage,
  },
  {
    quote:
      "Working with HeapTrace team was an absolute good experience for our project. Their expertise in full-stack development, AI integration and commitment to delivering high-quality solutions exceeded our expectations. They not only met our complex requirements but also brought innovative ideas that significantly improved our product. Their professionalism, communication, and technical skills are truly outstanding. I highly recommend them for any software development needs.",
    name: "Christian Plum, Ph.D.",
    role: "Head of Bunker Management product, Bunker Planner",
    imageSrc: christianImage,
  },
];

const FADE_MS = 220;

export default function HomeTestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const indexRef = useRef(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const len = TESTIMONIALS.length;
      const normalized = ((next % len) + len) % len;
      if (normalized === indexRef.current) return;

      if (reduceMotion) {
        setIndex(normalized);
        return;
      }

      setFading(true);
      window.setTimeout(() => {
        setIndex(normalized);
        window.requestAnimationFrame(() => setFading(false));
      }, FADE_MS);
    },
    [reduceMotion],
  );

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      goTo(indexRef.current + 1);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, goTo]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(indexRef.current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(indexRef.current + 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end == null) return;
    const dx = end - start;
    if (Math.abs(dx) < 40) return;
    goTo(indexRef.current + (dx < 0 ? 1 : -1));
  };

  const active = TESTIMONIALS[index];

  return (
    <div
      className="testimonial-slider-box relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full overflow-hidden px-12 sm:px-16 md:px-20">
        <div
          className={`testimonial-slide flex h-[392px] w-full flex-col items-center text-center transition-opacity ease-out`}
          style={{
            transitionDuration: `${FADE_MS}ms`,
            opacity: fading ? 0 : 1,
          }}
          aria-live="polite"
        >
          <div className="testimonial-profile relative h-[120px] w-[120px] overflow-hidden rounded-full ring-1 ring-black/5">
            <Image
              src={active.imageSrc}
              alt={`${active.name}, testimonial author`}
              width={240}
              height={240}
              sizes="120px"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="div-block-36 mt-8 flex w-full flex-1 min-h-0 max-w-[640px] flex-col items-center gap-6 overflow-hidden">
            <div className="flex-1 min-h-0 overflow-y-auto">
              <p className="paragraph-18 m-0 text-[1rem] font-normal leading-[1.75rem] text-[#5e5e60] sm:text-[1.0625rem]">
                {active.quote}
              </p>
            </div>
            <div className="div-block-35 flex-none flex flex-col items-center gap-1">
              <div className="profile-name text-base font-semibold leading-6 text-[#1f1f21]">
                {active.name}
              </div>
              <div className="profile-designation text-sm leading-5 text-[#7a7a7c]">
                {active.role}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => goTo(index - 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#286f58] text-white shadow-[0_8px_18px_rgba(40,111,88,0.28)] transition hover:bg-[#1f5e4a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4dac8a] sm:h-11 sm:w-11"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => goTo(index + 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#286f58] text-white shadow-[0_8px_18px_rgba(40,111,88,0.28)] transition hover:bg-[#1f5e4a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4dac8a] sm:h-11 sm:w-11"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
