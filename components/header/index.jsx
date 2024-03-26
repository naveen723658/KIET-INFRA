"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
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
    label: "Career",
    path: "/Career",
    subNav: [],
  },
  {
    label: "Contact us",
    path: "/contact-us",
    subNav: [],
  },
];

export default function Header() {
  const [show, setShow] = useState(false);
  const active = "/";
  return (
    <header className="bg-white relative">
      <div className="w-full h-7 opacity-90 bg-blue-900"></div>

      <nav className="font-playfair container px-4 md:px-0 mx-auto p-1 flex items-center justify-between z-[9999]">
        <Link href="/">
          <div className="relative h-16 w-60">
            <Image
              src="/logo2.svg"
              alt="error"
              fill
              sizes="100%"
              priority
              className="top-0 left-0 object-center object-fill"
            />
          </div>
        </Link>
        <div
          className={`md:items-center items-start justify-between gap-5 absolute md:relative flex-col md:flex-row top-full bg-white left-0 z-40 w-full md:w-auto p-4 md:p-0 shadow-2xl md:shadow-none transition-all duration-300 md:flex ${
            show ? "flex" : "hidden"
          }`}
        >
          <ul className="md:items-center items-start gap-3 list-none text-lg md:text-sm font-semibold text-gray-600 flex flex-col md:flex-row w-full md:w-auto">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="dropdown inline-block relative space-x-1 border-b-2 border-gray-100 md:border-none w-full md:w-auto"
              >
                <Link href={item.path} className="p-2 flex items-center gap-1">
                  {active === item.path && (
                    <span className="text-xl text-center">-</span>
                  )}{" "}
                  {item.label}
                </Link>
                {item.subNav?.length > 0 && (
                  <ul className="dropdown-content absolute hidden pt-1 bg-slate-50 w-fit font-medium z-50 shadow-xl">
                    {item.subNav.map((subItem, i) => (
                      <li key={i} className="dropdown">
                        <Link
                          className="hover:bg-slate-100 w-full flex items-center justify-between p-3 pr-14 whitespace-nowrap"
                          href={subItem.path}
                        >
                          {subItem.label}
                        </Link>

                        {subItem.subNav?.length > 0 && (
                          <ul className="dropdown-content absolute hidden font-medium ml-44 md:ml-36 -mt-10 bg-slate-50 shadow-xl">
                            {subItem.subNav.map((nav, _) => (
                              <li key={_} className="w-full">
                                <Link
                                  className="hover:bg-slate-100 w-full flex items-center justify-between p-3 pr-5 whitespace-nowrap"
                                  href={nav.path}
                                >
                                  {nav.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end">
            <Link
              href="/"
              className="flex gap-1 items-center text-center bg-blue-800 font-semibold py-2 px-3 text-lg md:text-sm text-white rounded"
            >
              <FaPhoneAlt className="text-sm md:text-xs opacity-90 mt-1" />
              +91 1234567890
            </Link>
          </div>
        </div>

        <button
          className="text-5xl block md:hidden text-gray-500"
          onClick={() => setShow(!show)}
        >
          <HiMenuAlt3 />
        </button>
      </nav>
    </header>
  );
}
