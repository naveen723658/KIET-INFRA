import Link from "next/link";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdLocationPin,
  MdOutlineChat,
  MdOutlineStarBorderPurple500,
} from "react-icons/md";
export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2 text-center border-b-2">
            Careers
          </h1>
          {/* <div className="w-full p-4 text-center bg-gray-200">
            <h2 className="text-3xl">
              We give you a challenging and{" "}
              <span className="text-[#037aad] font-semibold">enjoyable</span>{" "}
              work culture.
            </h2>
            <p>
              KIET is looking for extraordinary people to join our
              industry-leading team that keeps defining the future of Developing
              & Designing
            </p>

            <p>
              An inspirational and fun working environment, an
              innovation-driven, fast-growing company, ambitious projects and an
              incredibly talented team are just a few reasons why you will love
              it here.
            </p>
          </div> */}
          <div>
            <h2 className="text-3xl font-semibold text-[#037aad] py-4 text-center">
              Open Positions At{" "}
              <span className="text-gray-800"> KIET INFRA</span>
            </h2>
            <p className="text-gray-500 text-base text-center">
              We help you become the best version of yourself !
            </p>

            <div className="grid md:grid-cols-3 items-center justify-center mt-10 font-montserrat">
              {[...Array(3)].map((_, i) => (
                <Link
                  href="/"
                  className="border-2 p-6 hover:bg-slate-200"
                  key={i}
                >
                  <h3 className="text-lg font-bold">
                    Bussiness Development Executive
                  </h3>
                  <p className="text-base mt-2">
                    <span>
                      <strong>Experience :</strong> 1-2 years
                    </span>
                  </p>
                  <p className="text-base">
                    <span>
                      <strong>Location :</strong> New Delhi
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full mx-auto bg-white my-6 font-[sans-serif] text-gray-800 py-10">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 items-start justify-between gap-4 w-full">
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 max-lg:text-center">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <p className="text-sm text-gray-300 mt-3">
                  Please fill the job application form and one of representative
                  shall get in touch with you soon.
                </p>
                <ul className="md:mt-16 mt-8 gap-6 flex flex-col">
                  <li className="flex items-center max-lg:justify-center">
                    <span className="text-2xl">
                      <MdOutlineMail />
                    </span>
                    <Link
                      href="mailto:career@kietinfra.com"
                      target="_blank"
                      className="text-gray-300 text-sm ml-1"
                    >
                      <strong>career@kietinfra.com</strong>
                    </Link>
                  </li>
                  <li className="flex items-center max-lg:justify-center">
                    <span className="text-2xl">
                      <MdOutlinePhone />
                    </span>
                    <Link
                      href="mailto:info@kietinfra.com"
                      target="_blank"
                      className="text-gray-300 text-sm ml-1"
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
                      className="text-gray-300 text-sm ml-1"
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
                    <div className="relative flex items-center">
                      <label
                        htmlFor="resume-upload"
                        className="absolute left-0 px-2 py-3 text-sm text-gray-400 cursor-pointer z-10"
                      >
                        Upload Resume
                      </label>
                      <input
                        className="relative m-0 block min-w-0 flex-auto cursor-pointer rounded bg-transparent bg-clip-padding font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e-2 file:border-solid file:border-inherit file:bg-transparent file:px-8 file:py-[0.32rem] file:text-transparent focus:outline-none py-3 px-2 pt-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none text-gray-400"
                        type="file"
                        accept=".pdf"
                        id="resume-upload"
                        name="resume-upload"
                      />
                    </div>
                    <div className="relative flex items-center">
                      <select
                        id="underline_select"
                        className="py-3 text-gray-400 bg-transparent focus:outline-none focus:ring-0 px-2 pt-3 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                        defaultValue={0}
                      >
                        <option value={0}>Choose a Positions</option>
                        <option value="US">
                          Bussiness Development Executive
                        </option>
                      </select>
                    </div>
                    <div className="relative flex items-center col-span-2">
                      <input
                        type="number"
                        placeholder="Year of Experience"
                        className="px-2 py-3 w-full text-sm border-b-2 focus:border-gary-800 outline-none"
                      />
                      <span className="w-[18px] h-[18px] absolute right-2">
                        <MdOutlineStarBorderPurple500 className="text-gray-500" />
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
      </div>
    </div>
  );
}
