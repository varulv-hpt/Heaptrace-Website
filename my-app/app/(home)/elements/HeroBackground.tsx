import Image from "next/image";
import heroBannerImage from "@/app/assets/banner/Hero 1.jpg";

export default function HeroBackground() {
  return (
    <Image
      src={heroBannerImage}
      alt=""
      fill
      priority
      sizes="100vw"
      className="hero-banner-background absolute inset-0 z-0 object-cover object-center"
      aria-hidden="true"
    />
  );
}
