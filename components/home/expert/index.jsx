export default function Expert() {
  return (
    <div className="w-full py-10 my-8">
      <div className="grid grid-cols-2 gap-6 justify-between items-start container m-auto py-10">
        <div className="w-full relative">
          <img
            src="b4.jpg"
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
          <h1 className="text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            <span className="text-black">We are</span> Experts
          </h1>
          <p className="text-base font-barlow">
            Our product of services is mainly used in oilfields services, HVAC
            industry, Marine industry and with other piping contractors. We
            stock wide range of products with diversified branch and act as a
            single source of supply.
          </p>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between font-barlow gap-2 mt-4">
            <div>Client Satisfaction</div> <span>96%</span>
          </div>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between font-barlow gap-2 mt-4">
            <div>Business Calculation</div> <span>98%</span>
          </div>
          <div className="flex border-b-4 border-gray-500 pb-2 justify-between font-barlow gap-2 mt-4">
            <div>Project Success</div> <span>94%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
