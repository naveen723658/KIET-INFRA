export default function Page() {
  return (
    <>
      <div className="w-full my-5 md:my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-center container px-4 md:px-0 m-auto">
          <div className="font-playfair pr-0 md:pr-16 pt-4">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              GI Pipe
            </h1>
            <p className="text-sm md:text-base text-justify font-barlow">
              GI pipes have a coating of zinc metal on bare steel pipe, through
              a molten zinc bath, ensuring a natural corrosion resistance, even
              in outdoor condition.
            </p>
            <p className="text-sm md:text-base text-justify font-barlow py-4">
              TYPES: BS 1387 CLASS B & C / ASTM A53 CLASS A SCH 40 SIZES: ½” TO
              8″
            </p>
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
    </>
  );
}
