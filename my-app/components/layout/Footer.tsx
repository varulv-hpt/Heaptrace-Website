import Image from "next/image";
import Link from "next/link";
import "./Components.css";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const LOGO_URL =
  "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/670bbc6b01de0ce138925648_ht-logo.svg";

const SOCIAL_LINKS = [
  {
    href: "https://in.linkedin.com/company/heaptrace-technology-pvt.-ltd.",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/6746cea551bdedc4299a9cdd_linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/heaptrace",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/6746c8413cfdf245ae577c0b_facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/heaptracetechnology/",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/6746c8426e6b5ae9f0e1c226_instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.youtube.com/@heaptracetechnologypvt.ltd5344",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/6746c841fafaa06022b83315_Youtube.svg",
    alt: "YouTube",
  },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  {
    label: "AWS Partner",
    href: "https://partners.amazonaws.com/partners/0018W00002Il2Z2QAJ",
    external: true,
  },
];

const INSIGHTS_LINKS: FooterLink[] = [
  { label: "White papers", href: "/contact-us" },
  { label: "Blogs", href: "/blog" },
];

const USEFUL_LINKS: FooterLink[] = [
  { label: "Careers", href: "/careers" },
  { label: "Contact us", href: "/contact-us" },
  { label: "FAQ's", href: "/faq" },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="site-footer-link"
    >
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="site-footer" aria-labelledby="footer-company-heading">
        <div className="site-footer-inner">
          <div className="site-footer-grid">
            <div className="site-footer-brand">
              <Link href="/" className="site-logo-link site-logo-link-footer">
                <Image src={LOGO_URL} alt="Heaptrace" width={227} height={30} className="site-logo" />
              </Link>

              <p className="site-footer-text">
                HeapTrace is a cutting-edge consulting firm specializing in providing strategic
                guidance and solutions to businesses of all sizes.
              </p>
              <p className="site-footer-text site-footer-contact">
                <span className="site-footer-email">Sales: service@heaptrace.com</span>
                <span className="site-footer-email">HR : hra@heaptrace.com</span>
              </p>

              <div className="site-footer-socials">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer-social"
                    aria-label={social.alt}
                  >
                    <Image src={social.icon} alt="" width={16} height={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer-links">
              <div className="site-footer-col">
                <h6 id="footer-company-heading" className="site-footer-col-title">
                  Company
                </h6>
                {COMPANY_LINKS.map((link) => (
                  <FooterNavLink key={link.href} link={link} />
                ))}
              </div>

              <div className="site-footer-col">
                <h6 className="site-footer-col-title">Insights</h6>
                {INSIGHTS_LINKS.map((link) => (
                  <FooterNavLink key={link.href} link={link} />
                ))}
              </div>

              <div className="site-footer-col">
                <h6 className="site-footer-col-title">Useful Links</h6>
                {USEFUL_LINKS.map((link) => (
                  <FooterNavLink key={link.href} link={link} />
                ))}
              </div>
            </div>
          </div>
          <div className="site-footer-bottom">© HeapTrace All Rights Reserved. Licensing</div>
        </div>
      </footer>
    </>
  );
}
