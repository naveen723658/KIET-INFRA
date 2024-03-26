import Link from "next/link";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdLocationPin,
  MdOutlineChat,
} from "react-icons/md";
export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2 text-center border-b-2">
            Get in <span className="text-gray-800">Touch</span>
          </h1>

          <div className="w-full mx-auto bg-white my-6 font-[sans-serif] text-gray-800">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 items-center justify-between gap-4 w-full">
              <div className="bg-gray-200 text-gray-800 rounded-lg p-6 max-lg:text-center">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <p className="text-sm text-gray-500 mt-3">
                  Have any questions? We'd love to hear from you.
                </p>
                <ul className="md:mt-16 mt-8 gap-6 flex flex-col">
                  <li className="flex items-center max-lg:justify-center">
                    <span className="text-2xl">
                      <MdOutlineMail />
                    </span>
                    <Link
                      href="mailto:info@kietinfra.com"
                      target="_blank"
                      className="text-gray-500 text-sm ml-1"
                    >
                      <strong>info@kietinfra.com</strong>
                    </Link>
                  </li>
                  <li className="flex items-center max-lg:justify-center">
                    <span className="text-2xl">
                      <MdOutlinePhone />
                    </span>
                    <Link
                      href="mailto:info@kietinfra.com"
                      target="_blank"
                      className="text-gray-500 text-sm ml-1"
                    >
                      <strong>+91 1234567890</strong>
                    </Link>
                  </li>
                  <li className="flex items-center max-lg:justify-center">
                    <span className="text-2xl">
                      <MdLocationPin />
                    </span>
                    <Link
                      href="mailto:info@kietinfra.com"
                      target="_blank"
                      className="text-gray-500 text-sm ml-1"
                    >
                      <strong>New Delhi, 110096</strong>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2 w-full">
                <form className="w-full">
                  <div className="grid grid-cols-2 gap-8 w-full justify-between">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx={10} cy={7} r={6} data-original="#000000" />
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx={10} cy={7} r={6} data-original="#000000" />
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="number"
                        placeholder="Phone No."
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-gary-800 outline-none"
                      />
                      <span className="w-[18px] h-[18px] absolute right-2">
                        <MdOutlinePhone className="text-gray-500" />
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                      />
                      <span className="w-[18px] h-[18px] absolute right-2">
                        <MdOutlineMail className="text-gray-500" />
                      </span>
                    </div>
                    <div className="relative flex items-center col-span-2">
                      <textarea
                        placeholder="Write Message"
                        className="px-2 pt-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                        defaultValue={""}
                      />
                      <span className="w-[18px] h-[18px] absolute right-2">
                        <MdOutlineChat className="text-gray-500" />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#011c2b] text-white hover:bg-[#011c2bf3]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      className="mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-80 overflow-hidden relative rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.141219871881!2d77.32584611605557!3d28.612655720922326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4dfeaaaaaab%3A0xbda414ff05d1d8b3!2sKiet%20Infra%20Engineering%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711481524450!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
