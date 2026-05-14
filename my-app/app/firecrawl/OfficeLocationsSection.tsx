import mapImage from "@/app/assets/icons/contact-us/asset 18.svg";
import countOne from "@/app/assets/icons/contact-us/asset 10.svg";
import countTwo from "@/app/assets/icons/contact-us/asset 12.svg";
import countThree from "@/app/assets/icons/contact-us/asset 14.svg";
import countFour from "@/app/assets/icons/contact-us/asset 16.svg";
import countFive from "@/app/assets/icons/contact-us/asset 20.svg";
import usaFlag from "@/app/assets/icons/contact-us/asset 11.svg";
import uaeFlag from "@/app/assets/icons/contact-us/asset 13.svg";
import indiaFlag from "@/app/assets/icons/contact-us/asset 15.svg";

type OfficeItem = {
  countIcon: string;
  flagIcon: string;
  title: string;
  address: string;
  showDivider?: boolean;
};

const officeItems: OfficeItem[] = [
  {
    countIcon: countOne.src,
    flagIcon: usaFlag.src,
    title: "Sales Office",
    address: "244 Fifth Avenue, Suite S224, New York 10001, USA",
    showDivider: true,
  },
  {
    countIcon: countTwo.src,
    flagIcon: uaeFlag.src,
    title: "Dubai Office",
    address: "IFZA Business Park, DDP, 58092 - 001, A1 - 3641379065",
    showDivider: true,
  },
  {
    countIcon: countThree.src,
    flagIcon: indiaFlag.src,
    title: "India Pune Head Office",
    address: "HeapTrace Technology Pvt. Ltd. Tatvam Vertex, Vishal Nagar, Pune, 411027, India",
    showDivider: true,
  },
  {
    countIcon: countFour.src,
    flagIcon: indiaFlag.src,
    title: "Pune New Branch",
    address: "The Capitol, Office 301 Third floor, D P Road,Vishal Nagar, Pimple Nilakh, Pune -411027.",
  },
  {
    countIcon: countFive.src,
    flagIcon: indiaFlag.src,
    title: "Pune New Branch",
    address: "9th Floor,Solitaire Business Hub III, Baner, Pune, Maharashtra.",
  },
];

export default function OfficeLocationsSection() {
  return (
    <section className="linear-bg py-100">
      <div className="mx-auto flex w-full max-w-[1760px] flex-col items-start px-[15px]">
        <h2 className="m-0 text-left text-[2.5rem] leading-[1.15] font-semibold tracking-[-0.05em] text-white capitalize">
          Our Office Locations
        </h2>
        <p className="mt-0 w-full max-w-[75rem] text-left text-[1.125rem] leading-[1.6] text-[#f5f7fa]">
          Discover our diverse network of locations, strategically positioned to serve and support our
          customers wherever they are, ensuring optimal outcomes with every endeavor.
        </p>

        <div className="mt-8 w-full">
          <img className="h-auto w-full" src={mapImage.src} alt="" />
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {officeItems.map((office) => (
            <article
              key={`${office.title}-${office.address}`}
              className="group flex h-full flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <img
                className="h-auto w-12 transition-transform duration-300 group-hover:scale-110"
                src={office.countIcon}
                alt=""
              />
              <div className="mt-6 flex items-center gap-3">
                <img className="h-auto w-8" src={office.flagIcon} alt="" />
                <h3 className="m-0 text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
                  {office.title}
                </h3>
              </div>
              <p className="mt-4 w-full text-[1.0625rem] leading-[1.6] text-[#d2d7d6]">
                {office.address}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
