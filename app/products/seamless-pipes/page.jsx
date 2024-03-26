export default function Page() {
  return (
    <>
      <div className="w-full my-5 md:my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-center container px-4 md:px-0 m-auto">
          <div className="font-playfair pr-0 md:pr-16 pt-4">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              Seamless Pipe
            </h1>
            <p className="text-sm md:text-base text-justify font-barlow">
              Seamless pipes is a term used to define the process, that does not
              have any welding seam. The presence of any seam on a welded tube
              acts as a weak point, however if the tube is seamless, it tends to
              be solid and overcome various industrial forces and pressures
              while in operation. A seamless tube can be made from any of
              several alloys and metals such as carbon steel, stainless steel,
              etc.
            </p>
          </div>
          <div className="w-full relative">
            <img
              src="/products/Seamless/1.png"
              alt="error"
              className="w-auto h-full object-contain object-center rounded"
            />
            <div className="absolute top-20 md:-left-8 w-full md:w-[150%] h-full z-10 transition-all ease-in-out">
              <div className="w-[2px] rotate-45 h-16 bg-[#037aad] hidden md:block"></div>
              <div className="w-14 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#8ad6f7c7] align-bottom absolute bottom-40 md:bottom-8 md:left-8 left-1"></div>
              <div className="w-24 mix-blend-darken h-28 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc] align-bottom absolute bottom-20 right-24 hidden md:block"></div>
              <div className="w-[3px] rotate-45 h-16 absolute bottom-0 right-44 bg-[#8ad6f7c7] hidden md:block"></div>
              <div className="w-[5px] rotate-45 h-24 absolute top-1/3 -right-8 hidden md:block bg-[#99ccff]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 my-5 md:py-10 md:my-20 overflow-hidden md:overflow-visible">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-center container px-4 md:px-0 m-auto py-10">
          <div className="w-full relative">
            <img
              src="/products/Seamless/2.png"
              alt="error"
              className="w-auto h-full object-contain object-center"
            />
            <div className="p-4 bg-slate-100">
              <li>
                Sizes range from 0.5″ or 1/2 ” of various schedules. (SCH- 40,
                80, XS, STD)
              </li>
              <li>
                Certified with Mill Test Certificate complying with API 5L
                standards.
              </li>
              <li>Single Random Length (SRL) or Double Random Length (DRL).</li>
              <li>
                Outside protected with Lacquer and Ends protected with plastic
                caps.
              </li>
              <li>SIZES: ¼” TO 16″</li>
            </div>
            <div className="absolute top-0 -left-8 w-full h-full z-10">
              {/* <div className="w-[2px] rotate-45 absolute top-0 left-12 md:left-8 h-8 bg-[#037aad]"></div> */}
              {/* <div className="w-12 mix-blend-darken h-24 bg-[#8ad6f7c7] align-bottom absolute -bottom-16 left-8 skew-x-0 skew-y-[-45deg] hidden md:block"></div> */}
              <div className="w-16 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc96] align-bottom absolute top-4 -right-16"></div>
              {/* <div className="w-[3px] rotate-45 h-8 md:h-20 absolute -bottom-3 md:-bottom-14 -right-7 md:-right-8 bg-[#8ad6f7c7]"></div> */}
              <div className="w-[5px] rotate-45 h-16 absolute top-1/3 -left-8 bg-[#99ccff] hidden md:block"></div>
            </div>
          </div>
          <div className="font-playfair pl-0 pt-2 md:pt-6 md:pl-20">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              Production Standards:
            </h1>
            <ul className="p-6 list-disc">
              <li>
                Line Pipes: API 5L GR. A, B, X-42, X-46, X-52, X-60, X-65, X-70
              </li>
              <li>ASTM A-106 GR. A,B</li>
              <li>ASTM A-53 GR. A,B</li>
              <li>DIN 1629/2448 ST 37.0, 44.0, 52.0</li>
              <li>DIN 2440, 2441 ST 33</li>
              <li>DIN 2391 ST 35.0, 45.0, 52.0</li>
              <li>DIN 17171/2448 ST 37.3, 44.2, 44.3, 52.3</li>
              <li>DIN 17172/2448 ST E 210.7, 240.7, 290.7, 320.7</li>
              <li>JIS G 3444 ST K 290, 400, 500 Low</li>
              <li>ASTM A 179 ASTM A192</li>
              <li>ASTM A210 GR. A1, C</li>
              <li>ASTM A213 GR. T-11, T-12, T-22</li>
              <li>ASTM A335 GR. P-11, P-12, P-22</li>
              <li>DIN 17175 ST 35.8, 45.8, 15 Mo 3, 13 CrMo44, 10 CrMo910</li>
              <li>JIS G 3461 STB 340, 410</li>
              <li>JIS G 3462 STBA 22,23,24</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
