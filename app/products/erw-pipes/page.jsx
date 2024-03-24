export default function Page() {
  return (
    <>
      <div className="w-full my-5 md:my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-center container px-4 md:px-0 m-auto">
          <div className="font-playfair pr-0 md:pr-16 pt-4">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              ERW PIPE
            </h1>
            <ul className="p-6 list-disc">
              <li>Fixed Lengths 6 mtr & 12 mtr (with tolerances)</li>
              <li>Single Random 4.8 mtr to 6.7 mtr</li>
              <li>Double Random 10.5 mtr to 12.5 mtr</li>
              <li>Outside Diameter 1/2″ – 24″</li>
              <li>
                Wall Thickness 1.6 mm Up to 14.2 mm (depending on the O.D)
              </li>
            </ul>
          </div>
          <div className="w-full relative">
            <img
              src="/b1.jpg"
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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-start container px-4 md:px-0 m-auto py-10">
          <div className="w-full relative">
            <img
              src="/b2.jpg"
              alt="error"
              className="w-auto h-full object-contain object-center"
            />
            <div className="absolute top-0 -left-8 w-full h-full z-10">
              <div className="w-[2px] rotate-45 absolute top-0 left-12 md:left-8 h-8 bg-[#037aad]"></div>
              <div className="w-12 mix-blend-darken h-24 bg-[#8ad6f7c7] align-bottom absolute -bottom-16 left-8 skew-x-0 skew-y-[-45deg] hidden md:block"></div>
              <div className="w-16 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc96] align-bottom absolute top-4 -right-16"></div>
              <div className="w-[3px] rotate-45 h-8 md:h-20 absolute -bottom-3 md:-bottom-14 -right-7 md:-right-8 bg-[#8ad6f7c7]"></div>
              <div className="w-[5px] rotate-45 h-16 absolute top-1/3 -left-8 bg-[#99ccff] hidden md:block"></div>
            </div>
          </div>
          <div className="font-playfair pl-0 pt-2 md:pt-6 md:pl-20">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              Production Standards:
            </h1>
            <ul className="p-6 list-disc">
              <li>API 5L GR.A, B, X-42, X-46, X-52, X-60, X-65, X-70</li>
              <li>ASTM A53 GR. A, B</li>
              <li>DIN 1626/2458 ST 37.0,44.0,52.0</li>
              <li>DIN 2440,2441 ST 33</li>
              <li>DIN 1628 ST 37.4</li>
              <li>DIN 17100 ST 44.2</li>
              <li>DIN 17172 ST E 210.7, 240.7, 290.7, 320.7</li>
              <li>BS 1387 Light, Medium, Heavy.</li>
              <li>BS 3601 GR. 430, GR.360</li>
              <li>CASING/TUBING</li>
              <li>API 5CT GR. H 40, J/K 55, N 80</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
