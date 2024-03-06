export default function Trust() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 gap-6 justify-between items-center container m-auto py-10">
        <div className="font-playfair w-11/12">
          <p className="text-sm pb-2">Growing With Our Clients</p>
          <h1 className="text-5xl text-[#037aad] font-extrabold flex flex-col pb-6 pt-2">
            <span className="text-black">15 Years Of</span> Your Trust
          </h1>
          <p className="text-base font-barlow">
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
            className="w-auto h-full object-contain object-center"
          />
          <div className="absolute top-20 -left-8 w-[150%] h-full z-10 transition-all ease-in-out">
            <div className="w-[2px] rotate-45 h-16 bg-[#037aad]"></div>
            <div className="w-14 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#8ad6f7c7] align-bottom absolute bottom-8 left-8"></div>
            <div className="w-24 mix-blend-darken h-28 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc] align-bottom absolute bottom-20 right-24"></div>
            <div className="w-[3px] rotate-45 h-16 absolute bottom-0 right-44 bg-[#8ad6f7c7]"></div>
            <div className="w-[5px] rotate-45 h-24 absolute top-1/3 -right-8 bg-[#99ccff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
