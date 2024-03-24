export default function Page() {
  return (
    <>
      <div className="w-full my-5 md:my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-start container px-4 md:px-0 m-auto">
          <div className="font-playfair pr-0 md:pr-16 pt-4">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              MS Butt Weld Fittings
            </h1>
            <p className="text-sm md:text-base text-justify font-barlow">
              A Piping system using Butt-weld Fittings has many inherent
              advantages over other forms. Welding a fitting to the Pipe means
              it is permanently leak-proof.
            </p>
            <p className="text-sm md:text-base text-justify font-barlow py-4">
              The continuous metal structure formed between pipe and
              pipefittings adds strength to the system.A welded seems utilizes a
              minimum of space.
            </p>
            <p className="text-sm md:text-base text-justify font-barlow py-4">
              Applicable Standards of Butt-weld fittings are ASME / ASTM and MSS
              Standards.The main Butt-weld fittings used are Elbows , Caps,
              Tees, Concentric Reducers, Eccentric Reducers etc. Generally Pipe
              fittings are measured by their diameter and , wall thickness. This
              is known as Schedule. Fittings can also be defined by their
              material grade and whether they are seamless or welded. Diameter
              refers to outside diameter of a pipe or fitting.
            </p>
            <h2 className=" font-semibold py-2">Specifications</h2>
            <ul className="list-disc p-6">
              <li>
                Dimensions: ANSI B16.9,B16.25,B16.25,B16.28,MSS
                SP-43,SP-48,SP-59
              </li>
              <li>Material Spec : ASTM A403,A240,A312,A234 WPB</li>
              <li>Material Grade:CarbonSteel,304,304L,316,316L</li>
              <li>Sizes : ½” to 24”</li>
            </ul>
          </div>
          <div className="w-full relative">
            <img
              src="/products/h_1.jpg"
              alt="error"
              className="w-auto h-full object-contain object-center rounded"
            />
            <div className="absolute top-20 md:-left-8 w-full md:w-[150%] h-full z-10 transition-all ease-in-out">
              <div className="w-[2px] rotate-45 h-16 bg-[#037aad] hidden md:block"></div>
              <div className="w-14 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#8ad6f7c7] align-bottom absolute bottom-40 md:-bottom-8 md:left-8 left-1"></div>
              <div className="w-24 mix-blend-darken h-28 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc] align-bottom absolute bottom-20 right-24 hidden md:block"></div>
              <div className="w-[3px] rotate-45 h-16 absolute bottom-0 right-44 bg-[#8ad6f7c7] hidden md:block"></div>
              <div className="w-[5px] rotate-45 h-24 absolute top-1/3 -right-8 hidden md:block bg-[#99ccff]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
