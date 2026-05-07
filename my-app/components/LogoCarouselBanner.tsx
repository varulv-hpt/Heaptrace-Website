"use client";

import Image from "next/image";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/app/_shared/sectionShell";
import asset6 from "@/app/assets/collaborations/asset 6.svg";
import asset7 from "@/app/assets/collaborations/asset 7.svg";
import asset8 from "@/app/assets/collaborations/asset 8.svg";
import asset9 from "@/app/assets/collaborations/asset 9.svg";
import asset10 from "@/app/assets/collaborations/asset 10.svg";
import asset11 from "@/app/assets/collaborations/asset 11.svg";
import asset12 from "@/app/assets/collaborations/asset 12.svg";
import asset13 from "@/app/assets/collaborations/asset 13.svg";
import asset14 from "@/app/assets/collaborations/asset 14.svg";
import asset15 from "@/app/assets/collaborations/asset 15.svg";
import asset16 from "@/app/assets/collaborations/asset 16.svg";
import asset17 from "@/app/assets/collaborations/asset 17.svg";

type LogoItem = {
  name: string;
  src: string;
  width?: number;
  height?: number;
};

const DEFAULT_LOGOS: LogoItem[] = [
  { name: "Partner 6", src: asset6, width: 130, height: 40 },
  { name: "Partner 7", src: asset7, width: 130, height: 40 },
  { name: "Partner 8", src: asset8, width: 130, height: 40 },
  { name: "Partner 9", src: asset9, width: 130, height: 40 },
  { name: "Partner 10", src: asset10, width: 130, height: 40 },
  { name: "Partner 11", src: asset11, width: 130, height: 40 },
  { name: "Partner 12", src: asset12, width: 130, height: 40 },
  { name: "Partner 13", src: asset13, width: 130, height: 40 },
  { name: "Partner 14", src: asset14, width: 130, height: 40 },
  { name: "Partner 15", src: asset15, width: 130, height: 40 },
  { name: "Partner 16", src: asset16, width: 130, height: 40 },
  { name: "Partner 17", src: asset17, width: 130, height: 40 },
];

interface LogoCarouselBannerProps {
  logos?: LogoItem[];
  speedSeconds?: number;
}

export default function LogoCarouselBanner({
  logos = DEFAULT_LOGOS,
  speedSeconds = 28,
}: LogoCarouselBannerProps) {
  const tickerLogos = [...logos, ...logos];

  return (
    <section
      className={`collaborators w-full ${SECTION_OUTER_PAD_CLASS}`}
      aria-label="Client logos"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className="collaborators-marquee">
          <div
            className="collaborators-track"
            style={{ animationDuration: `${speedSeconds}s` }}
          >
            {tickerLogos.map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="collaborators-item">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width ?? 130}
                  height={logo.height ?? 40}
                  className="collaborators-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
