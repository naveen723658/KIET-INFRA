import Link from "next/link";
export default function ContactUs() {
  return (
    <div className="container m-auto font-playfair p-8">
      <div className="grid grid-cols-2 items-center gap-3 mb-44">
        <div className="relative">
          <p className="absolute w-full top-1 left-1 font-extrabold text-5xl tracking-wider">
            Quick <br /> <span className=" text-[#037aad]">Enquiry</span>
          </p>
          <img
            src="contact_img.svg"
            alt="contact us"
            className="w-auto h-auto"
          />
        </div>
        <form action="" className="flex flex-col gap-8 text-sm">
          <div className="w-full h-28"></div>
          <div className="flex flex-col font-playfair font-semibold gap-1">
            <label htmlFor="Name">
              Name <span className=" text-red-700">*</span>
            </label>
            <input
              type="text"
              name="Name"
              required
              className="p-2 text-gray-500 border border-gray-600 rounded focus:shadow-lg focus:border-gray-400 focus:outline-gray-500"
            />
          </div>
          <div className="flex flex-col font-playfair font-semibold gap-2">
            <label htmlFor="number">
              Mobile Number <span className=" text-red-700">*</span>
            </label>
            <input
              type="text"
              name="number"
              required
              className="p-2 text-gray-500 border border-gray-600 rounded focus:shadow-lg focus:border-gray-400 focus:outline-gray-500"
            />
          </div>
          <div className="flex flex-col font-playfair font-semibold gap-2">
            <label htmlFor="email">
              Email <span className=" text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="p-2 text-gray-500 border border-gray-600 rounded focus:shadow-lg focus:border-gray-400 focus:outline-gray-500"
            />
          </div>
          <div className="flex flex-col font-playfair font-semibold gap-2">
            <label htmlFor="Message">
              Enquiry Message
              <span className=" text-red-700">*</span>
            </label>
            <textarea
              name="Message"
              required
              className="p-2 h-24 text-gray-500 border border-gray-600 rounded focus:shadow-lg focus:border-gray-400 focus:outline-gray-500"
            />
          </div>
          <div className="flex flex-col font-playfair font-semibold gap-2">
            <button
              type="submit"
              className="bg-[#037aad] w-fit text-white p-2 text-base rounded tracking-wider"
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-4 items-center gap-3 justify-between py-6">
        <div className="flex gap-2 items-center">
          <div>
            <img src="www.svg" alt="kietinfra.com" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-base">
              Website
            </span>
            <Link href="/" className="text-[#037aad] font-extrabold text-sm">
              www.kietinfra.com
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="business.svg" alt="kietinfra.com" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-base">
              Reach Us
            </span>
            <Link href="/" className="text-[#037aad] font-extrabold text-sm">
              Noida, UP, 201014, IN
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="mail.svg" alt="kietinfra.com" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-base">
              Website
            </span>
            <Link href="/" className="text-[#037aad] font-extrabold text-sm">
              info@kietinfra.com
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src="phone.svg" alt="kietinfra.com" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-base">
              Website
            </span>
            <Link href="/" className="text-[#037aad] font-extrabold text-sm">
              www.kietinfra.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
