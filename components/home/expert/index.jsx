export default function Expert() {
  return (
    <div className="w-full md:py-10 my-5 py-5 md:my-8 md:overflow-visible overflow-hidden">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-6 justify-between items-start container px-4 md:px-0 m-auto py-10">
        <div className="w-full relative">
          <img
            src="b4.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center"
          />
          <div className="absolute top-0 -left-8 w-full h-full z-10 transition-all ease-in-out">
            <div className="w-[2px] rotate-45 absolute -top-3 md:top-0 left-10 md:left-8 h-8 bg-[#037aad]"></div>
            <div className="w-12 mix-blend-darken h-24 bg-[#8ad6f7c7] align-bottom absolute -bottom-16 left-8 skew-x-0 skew-y-[-45deg] hidden md:block"></div>
            <div className="w-16 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc96] align-bottom absolute top-4 -right-16"></div>
            <div className="w-[3px] rotate-45 h-8 md:h-20 absolute -bottom-3 md:-bottom-14 -right-7 md:-right-8 bg-[#8ad6f7c7]"></div>
            <div className="w-[5px] rotate-45 h-16 absolute top-1/3 -left-8 bg-[#99ccff] hidden md:block"></div>
          </div>
        </div>
        <div className="font-playfair pt-6 pl-0 md:pl-20 ">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            <span className="text-black">We are</span> Experts
          </h1>
          <p className="text-sm text-justify md:text-base font-barlow">
            Our product of services is mainly used in oilfields services, HVAC
            industry, Marine industry and with other piping contractors. We
            stock wide range of products with diversified branch and act as a
            single source of supply.
          </p>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between text-sm font-barlow gap-2 mt-4">
            <div>Client Satisfaction</div> <span>96%</span>
          </div>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between text-sm font-barlow gap-2 mt-4">
            <div>Business Calculation</div> <span>98%</span>
          </div>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between text-sm font-barlow gap-2 mt-4">
            <div>Project Success</div> <span>94%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
