import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
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

export default function Header() {
  return (
    <header className="bg-white">
      <div className="w-full h-7 opacity-90 bg-blue-900"></div>

      <nav className="flex items-center justify-between gap-2 font-playfair container mx-auto p-1">
        <Link href="/">
          <div className="">
            <img
              src="https://hotlinesteel.com/wp-content/uploads/2023/03/01.png"
              alt="error"
              className="w-auto h-14 object-cover"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-3 list-none text-sm font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href="/" className="p-2">
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
      </nav>
    </header>
  );
}
