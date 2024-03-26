import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    {
      label: "Home",
      path: "/",
      subNav: [],
    },
    {
      label: "About us",
      path: "/about-us",
      subNav: [],
    },
    {
      label: "Our Products",
      path: "#",
      subNav: [
        {
          label: "Pipes",
          path: "#",
          subNav: [
            {
              label: "ERW Pipes",
              path: "/products/erw-pipes",
            },
            {
              label: "Seamless Pipes",
              path: "/products/seamless-pipes",
            },
            {
              label: "GI Pipes",
              path: "/products/gi-pipes",
            },
          ],
        },
        {
          label: "Butt Weld fittings",
          path: "/products/ms-butt-weld-fittings",
          subNav: [],
        },
        {
          label: "Grooved Fittings",
          path: "/products/grooved-fittings",
          subNav: [],
        },
        {
          label: "Flanges",
          path: "/products/flanges",
          subNav: [],
        },
        {
          label: "Threaded Fittings",
          path: "#",
          subNav: [
            {
              label: "MI & GI Fittings",
              path: "/products/mi-&-gi-fittings",
            },
            {
              label: "GI Fittings",
              path: "/products/gi-fittings",
            },
            {
              label: "Threaded High Pressure Fittings",
              path: "/products/threaded-high-pressure-fittings",
            },
          ],
        },
        {
          label: "Valves",
          path: "/products/valves",
          subNav: [],
        },
      ],
    },
    {
      label: "Gallery",
      path: "/gallery",
      subNav: [],
    },
    {
      label: "Careers",
      path: "/career",
      subNav: [],
    },
    {
      label: "Contact us",
      path: "/contact-us",
      subNav: [],
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="w-full h-fit bg-[url(/bgn-footer.png)] md:bg-[url(/bgn-footer2.png)] bg-contain bg-no-repeat bg-bottom py-8 border-b-2 border-t-2 md:border-t-0">
        <div className="flex items-center justify-center px-4 gap-0 md:p-8 md:gap-4">
          <p className="text-xl md:text-3xl font-playfair font-semibold opacity-55 pb-5 md:pb-10 pr-1">
            KIET INFRA
          </p>
          <span className="w-[2px] h-20 md:h-44 rotate-45 bg-black"></span>
          <p className="text-sm sm:text-xl md:text-4xl font-bold font-playfair pt-5 md:pt-10 pl-1">
            Contracting Company
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 justify-center md:justify-between container m-auto my-4 px-4 md:px-0 py-4">
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
            <Link href="/">
              <div className="relative h-14 w-14">
                <Image
                  src="/favicon.png"
                  sizes="100%"
                  priority
                  fill
                  alt="KIET INFRA ENGINEERING PVT. LTD."
                  className="top-0 left-0 object-center object-fill"
                />
              </div>
            </Link>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-xs font-normal md:font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="p-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 text-xs items-center">
            <Link href="/">
              <span>
                <FaFacebookF />
              </span>
            </Link>
            <Link href="/">
              <span>
                <FaLinkedinIn />
              </span>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center gap-2 font-josefin text-xs mt-8">
          <p className="font-semibold tracking-wider">
            KIET INFRA ENGINEERING PVT. LTD.
          </p>
          <p>
            <span className="font-semibold">© {year} </span>All Rights Reserved.
          </p>
        </div>
      </div>
      <nav className="flex items-center justify-center md:justify-end container m-auto mt-4 mb-8 md:mt-4 md:mb-4 py-2">
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-3 text-xs font-light opacity-90">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path} className="p-2">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
