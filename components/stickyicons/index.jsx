import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function StickyIcons() {
  return (
    <>
      <div className="fixed top-1/2 left-0 z-30">
        <div className="flex flex-col items-center gap-[3px]">
          <Link
            href="/"
            className="bg-blue-800 text-white p-2 transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaFacebookF className="text-xl" />
          </Link>
          <Link
            href="/"
            className="bg-blue-600 text-white p-2 transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="fixed bottom-2 md:bottom-4 right-2 md:right-6 z-50">
        <Link
          href="/"
          className="text-xs md:text-sm bg-green-500 text-white py-2 font-semibold shadow-lg px-3 md:px-6 transform hover:scale-110 transition-all duration-300 flex gap-1 items-center rounded-3xl"
        >
          <FaWhatsapp className="text-base" /> How can we help you?
        </Link>
      </div>
    </>
  );
}
