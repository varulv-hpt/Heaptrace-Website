import Image, { StaticImageData } from "next/image";
import mulSahu from "@/app/assets/people/mul-sahu.jpg";
import amolWani from "@/app/assets/people/amol-wani.png";
import gauriSahu from "@/app/assets/people/gauri-sahu.png";
import shwetaPandya from "@/app/assets/people/shweta-pandya.png";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/lib/layout/sectionShell";

type TeamMember = {
  name: string;
  title: string;
  photo: StaticImageData;
  linkedin: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Mul Sahu",
    title: "CEO / Founder",
    photo: mulSahu,
    linkedin: "https://www.linkedin.com/in/mulshankersahu/",
  },
  {
    name: "Amol Wani",
    title: "Director of Engineering",
    photo: amolWani,
    linkedin: "https://www.linkedin.com/in/amol-wani-b9b51612/",
  },
  {
    name: "GauriShankar Sahu",
    title: "Director of Delivery",
    photo: gauriSahu,
    linkedin: "https://www.linkedin.com/in/gaurish010/",
  },
  {
    name: "Shweta Pandya",
    title: "Managing Director",
    photo: shwetaPandya,
    linkedin: "https://www.linkedin.com/in/shweta-pandya-045900112/",
  },
];

export default function AboutUsTeamSection() {
  return (
    <section
      className={`py-[5rem] bg-white ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="team-heading"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2
            id="team-heading"
            className="m-0 text-[#1c1c1c] text-[2rem] font-semibold leading-[2.6rem] tracking-[-0.04em]"
          >
            Meet our{" "}
            <span className="text-[#4DAC8A]">Team Members</span>
          </h2>
          <p className="m-0 text-[#4c4c4e] text-[1rem] leading-[1.7rem] max-w-[560px]">
            We focus on the details of everything we do. All to help businesses
            around the world focus on what&apos;s most important to them.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="w-full overflow-hidden bg-[#f5f7fa]" style={{ height: "320px" }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="m-0 text-[#1c1c1c] text-[1rem] font-semibold leading-snug truncate">
                    {member.name}
                  </h3>
                  <p className="m-0 text-[#4c4c4e] text-[0.85rem] leading-snug">
                    {member.title}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="shrink-0 w-7 h-7 rounded-full bg-[#0077b5] flex items-center justify-center text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
