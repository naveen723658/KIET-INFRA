export default function Trust() {
  return (
    <div className="w-full my-5 md:my-8">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-start container px-4 md:px-0 m-auto">
        <div className="font-playfair pr-0 md:pr-16 pt-4">
          <p className="text-sm pb-2">Growing With Our Clients</p>
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            <span className="text-black">15 Years Of</span> <br className="hidden md:block" /> Your Trust
          </h1>
          <p className="text-sm md:text-base font-barlow text-justify">
            Our dedicated staff with wide experience has competence to procure
            precision products from reliable manufacturer all over the world
            .Our experienced young team helps client professionally to attain
            total satisfaction. We stock wide range of products with diversified
            branch and act as a single source of supply. Based on order we can
            arrange delivery to client site even at short notice. We have
            regular consolidated shipment from major American and European
            destination, thus able to provide economical pricing. We have a
            separate team of professionals looking after the MEP (Mechanical
            Electrical and piping), Firefighting and district cooling
            industries.
          </p>
        </div>
        <div className="w-full relative">
          <img
            src="b1.jpg"
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
  );
}
