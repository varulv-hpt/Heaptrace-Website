import type { StaticImageData } from "next/image";

import careersHeroImage from "@/app/assets/people/asset 5.webp";
import careersBannerImage from "@/app/assets/banner/asset 46.webp";

import collab21 from "@/app/assets/collaborations/asset 33.svg";
import collab22 from "@/app/assets/collaborations/asset 22.svg";
import collab23 from "@/app/assets/collaborations/asset 23.svg";
import collab24 from "@/app/assets/collaborations/asset 24.svg";
import collab25 from "@/app/assets/collaborations/asset 25.svg";
import collab26 from "@/app/assets/collaborations/asset 26.svg";
import collab27 from "@/app/assets/collaborations/asset 27.svg";
import collab28 from "@/app/assets/collaborations/asset 28.svg";
import collab29 from "@/app/assets/collaborations/asset 29.svg";
import collab30 from "@/app/assets/collaborations/asset 30.svg";
import collab31 from "@/app/assets/collaborations/asset 31.svg";
import collab32 from "@/app/assets/collaborations/asset 32.svg";
import collab34 from "@/app/assets/collaborations/asset 34.webp";
import collab35 from "@/app/assets/collaborations/asset 35.png";
import collab36 from "@/app/assets/collaborations/asset 36.png";
import collab37 from "@/app/assets/collaborations/asset 37.png";
import collab38 from "@/app/assets/collaborations/asset 38.png";
import collab39 from "@/app/assets/collaborations/asset 39.png";
import collab40 from "@/app/assets/collaborations/asset 40.webp";
import collab41 from "@/app/assets/collaborations/asset 41.jpeg";

const CDN = "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3";

export const ICON = {
  global: `${CDN}/6756ff03684162ef15c71234_global-icon.svg`,
  satisfactionRate: `${CDN}/6756f0ecdd7ab428a339c49e_satisfaction-rate.svg`,
  retentionRate: `${CDN}/67570a67f681b92d1c41fc93_retention-rate.svg`,
  locationMap: `${CDN}/6757156f35778db9571abff9_location-map.svg`,
  jobType: `${CDN}/675715f00cea24fae36770ba_job-type-icon.svg`,
} as const;

export const HERO_IMAGE: StaticImageData = careersHeroImage;
export const BANNER_IMAGE: StaticImageData = careersBannerImage;

export type BenefitItem = {
  title: string;
  icon: string;
};

export const benefits: BenefitItem[] = [
  {
    title: "Competitive Salary",
    icon: `${CDN}/67584c22d2231b2feebb382d_Competitive%20Salary.svg`,
  },
  {
    title: "Flexible Work Environment",
    icon: `${CDN}/67584c22f52f1e6d7fa0348d_Flexible%20Work%20Environment.svg`,
  },
  {
    title: "Professional Growth",
    icon: `${CDN}/67584c2276495aaadb16624f_Professional%20Growth.svg`,
  },
  {
    title: "Innovative Projects",
    icon: `${CDN}/67584ce866737e30245e4066_Innovative%20Projects.svg`,
  },
  {
    title: "Collaborative Culture",
    icon: `${CDN}/67594082fb244a4763763234_Collaborative.svg`,
  },
  {
    title: "Celebrations and Rewards",
    icon: `${CDN}/675930f9895e1d14e785f0f4_Celebration.svg`,
  },
  {
    title: "Fun Team events",
    icon: `${CDN}/67584c229974a69e6d042611_Fun%20team%20events%20color.svg`,
  },
  {
    title: "Health care Insurance",
    icon: `${CDN}/67584c2254326172df05dfb6_Health%20care%20Insurance.svg`,
  },
  {
    title: "Work-Life Balance",
    icon: `${CDN}/6759310bfd0942babd2e45e8_Work%20life.svg`,
  },
  {
    title: "Employee Referral Bonus",
    icon: `${CDN}/67584c228470e3f7c7a59079_Employee%20Referral%20Bonus.svg`,
  },
];

export type OpeningItem = {
  title: string;
  description: string;
  location: string;
  hours: string;
  slug: string;
};

export const openings: OpeningItem[] = [
  {
    title: "Sr.Talent Acquisition Executive",
    description:
      "As a Sr Talent Acquisition Executive, you will lead the end-to-end recruitment process, leveraging your expertise in sourcing and hiring top IT talent to support the organization’s growth and success.",
    location: "Pune",
    hours: "09:00 am to 06:00 pm",
    slug: "sr-talent-acquisition-executive",
  },
  {
    title: "UI/UX Developer",
    description:
      "Dynamic UI/UX Developer who is passionate about creating sharp, clean, professional, and slick designs quickly for enterprise applications, smart applications, and business applications. The ideal candidate will be a Figma expert with strong knowledge of tools like Photoshop, Webflow, Framer, and Wix, as well as being highly skilled in CSS, CSS animations, and transformations.",
    location: "Pune",
    hours: "11 AM to 8 PM",
    slug: "ui-ux-developer",
  },
  {
    title: "Solution Architect",
    description:
      "A highly skilled and experienced Solution Architect with over 10 years in the IT service industry, specializing in designing and delivering comprehensive technical solutions across diverse domains. Adept at leading complex projects, aligning technical solutions with business goals, and leveraging cutting-edge technologies such as AI, cloud computing, and software development. Proven ability to work closely with cross-functional teams to architect scalable, secure, and efficient solutions for clients in industries including healthcare, finance, real estate, and e-commerce.",
    location: "Pune India",
    hours: "Flexible Time",
    slug: "solution-architect",
  },
  {
    title: "Lead Developer - Generative AI",
    description:
      "At HeapTrace Technology, we're at the cutting edge of innovation, delivering transformative IT solutions across industries. Specializing in software development, AI integration, cloud services, and more, we empower businesses to harness technology for growth and success. We're seeking a passionate Lead Developer with expertise in Generative AI to join our team and drive the development of next-generation AI solutions.",
    location: "Pune",
    hours: "11:00 AM to 08:00 PM",
    slug: "lead-developer---generative-ai",
  },
  {
    title: "Full-Stack Developer (React & Python Django)",
    description:
      "We are seeking a skilled Full-Stack Developer with expertise in React and Python Django to develop scalable web applications. In this role, you will be responsible for designing, building, and maintaining both the front-end and back-end of our applications, ensuring smooth and efficient functionality. You’ll work closely with our product and design teams to deliver robust and user-friendly applications that meet our clients’ needs.",
    location: "Pune",
    hours: "11:00 am - 08:00 pm",
    slug: "full-stack-developer-react-python-django",
  },
  {
    title: "Marketing Analyst",
    description:
      "The Marketing Analyst role at our firm involves analyzing market trends, conducting competitor research, and interpreting customer data to provide actionable insights that drive strategic marketing decisions and optimize campaign performance.",
    location: "California",
    hours: "09:00 am - 05:00 pm",
    slug: "marketing-analyst",
  },
  {
    title: "Brand Strategist",
    description:
      "As a Brand Strategist, you'll spearhead the development and execution of comprehensive brand strategies, leveraging market insights and consumer behavior analysis.",
    location: "London",
    hours: "09:00 am - 04:00 pm",
    slug: "brand-strategist",
  },
];

export type ClientLogoItem = {
  name: string;
  src: StaticImageData;
};

export const valuedClientRows: ClientLogoItem[][] = [
  [
    { name: "Collaboration 21", src: collab21 },
    { name: "Collaboration 22", src: collab22 },
    { name: "Collaboration 23", src: collab23 },
    { name: "Collaboration 24", src: collab24 },
  ],
  [
    { name: "Collaboration 25", src: collab25 },
    { name: "Collaboration 26", src: collab26 },
    { name: "Collaboration 27", src: collab27 },
    { name: "Collaboration 28", src: collab28 },
  ],
  [
    { name: "Collaboration 29", src: collab29 },
    { name: "Collaboration 30", src: collab30 },
    { name: "Collaboration 31", src: collab31 },
    { name: "Collaboration 32", src: collab32 },
  ],
  [
    { name: "Collaboration 34", src: collab34 },
    { name: "Collaboration 35", src: collab35 },
    { name: "Collaboration 36", src: collab36 },
    { name: "Collaboration 37", src: collab37 },
  ],
  [
    { name: "Collaboration 38", src: collab38 },
    { name: "Collaboration 39", src: collab39 },
    { name: "Collaboration 40", src: collab40 },
    { name: "Collaboration 41", src: collab41 },
  ],
];
