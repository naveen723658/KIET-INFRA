export default function About() {
  return (
    <div className="w-full py-10 my-20">
      <div className="grid grid-cols-2 gap-6 justify-between items-start container m-auto py-10">
        <div className="w-full relative">
          <img
            src="b2.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center"
          />
          <div className="absolute top-0 -left-8 w-full h-full z-10 transition-all ease-in-out">
            <div className="w-[2px] rotate-45 absolute top-0 left-8 h-8 bg-[#037aad]"></div>
            <div className="w-12 mix-blend-darken h-24 bg-[#8ad6f7c7] align-bottom absolute -bottom-16 left-8 skew-x-0 skew-y-[-45deg]"></div>
            <div className="w-16 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc96] align-bottom absolute top-4 -right-16"></div>
            <div className="w-[3px] rotate-45 h-20 absolute -bottom-14 -right-8 bg-[#8ad6f7c7]"></div>
            <div className="w-[5px] rotate-45 h-16 absolute top-1/3 -left-8 bg-[#99ccff]"></div>
          </div>
        </div>
        <div className="font-playfair pt-6 pl-20 ">
          <p className="text-sm pb-2">About Us</p>
          <h1 className="text-5xl text-[#037aad] font-extrabold flex flex-col pb-6 pt-2">
            <span className="text-black">KIET INFRA</span> Trading{" "}
            <span>Company</span>
          </h1>
          <p className="text-base font-barlow">
            Hotline Steel Trading company based in Dubai, United Arab Emirates
            is a specialized stockiest importer and exporter of SEAMLESS-PIPE,
            ERW Pipes, GI Pipes, flanges, valves, gaskets and pipe fittings. We
            specialize in carbon steel, galvanized iron, ductile iron malleable
            iron and grooved fittings to various standard like ASTM, ANSI, APT,
            JIS and BS Standard from our stock in Sharjah. We can supply all
            over UAE, GCC countries and other African markets.
          </p>
          <div className="flex flex-col font-playfair font-semibold gap-2 mt-6">
            <button
              type="submit"
              className="bg-[#037aad] w-fit text-white py-2 px-6 text-base rounded tracking-wider"
            >
              call: +971 50 798 3153
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
