import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About us",
      path: "/",
    },
    {
      label: "Our Products",
      path: "/",
    },
    {
      label: "Gallery",
      path: "/",
    },
    {
      label: "Quote",
      path: "/",
    },
    {
      label: "Contact us",
      path: "/",
    },
  ];
  return (
    <footer>
      <div className="w-full h-fit bg-[url(/bgn-footer2.png)] bg-no-repeat bg-bottom py-8 border-b-2">
        <div className="flex items-center justify-center p-8 gap-4">
          <p className="text-3xl font-playfair font-semibold opacity-55 pb-10 pr-1">
            KIET INFRA
          </p>
          <span className="w-[2px] h-44 rotate-45 bg-black"></span>
          <p className="text-4xl font-bold font-playfair pt-10 pl-1">
            Trading Company
          </p>
        </div>
        <nav className="flex items-center gap-4 justify-between container m-auto my-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="relative">
                <img
                  src="logo.jpeg"
                  alt="KIET INFRA ENGINEERING PVT. LTD."
                  className="w-auto h-14 object-cover"
                />
              </div>
            </Link>
            <ul className="flex items-center gap-3 text-xs font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href="/" className="p-2">
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
            <span className="font-semibold">© 2023 </span>All Rights Reserved.
          </p>
        </div>
      </div>
      <nav className="flex items-center justify-end gap-4 container m-auto my-4 py-2">
        <ul className="flex items-center gap-3 text-xs font-light opacity-90">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href="/" className="p-2">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
