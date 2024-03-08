import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About us",
    path: "/about-us",
  },
  {
    label: "Our Products",
    path: "/our-products",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Quote",
    path: "/quote",
  },
  {
    label: "Contact us",
    path: "/contact-us",
  },
];

export default function Header() {
  const active = "/";
  return (
    <header className="bg-white">
      <div className="w-full h-7 opacity-90 bg-blue-900"></div>

      <nav className="font-playfair container px-4 md:px-0 mx-auto p-1 flex items-center justify-between">
        <Link href="/">
          <div className="">
            <img
              src="logo.jpeg"
              alt="error"
              className="w-auto h-14 object-cover"
            />
          </div>
        </Link>
        <div className="items-center justify-between gap-20 hidden sm:flex">
          <ul className="items-center gap-3 list-none text-sm font-semibold flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href="/" className="p-2 flex items-center gap-1">
                  {active === item.path && (
                    <span className="text-xl text-center">-</span>
                  )}{" "}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end">
            <Link
              href="/"
              className="flex gap-1 items-center text-center bg-blue-800 font-semibold py-2 px-3 text-sm text-white rounded"
            >
              <FaPhoneAlt className="text-xs opacity-90 mt-1" />
              +91 1234567890
            </Link>
          </div>
        </div>
        <div>

        </div>
      </nav>
    </header>
  );
}
