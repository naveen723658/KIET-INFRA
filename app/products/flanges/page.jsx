export default function Page() {
  return (
    <>
      <div className="w-full my-5 md:my-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 justify-between items-start container px-4 md:px-0 m-auto">
          <div className="font-playfair pr-0 md:pr-16 pt-4">
            <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
              Flanges
            </h1>
            <ul className="list-disc text-sm flex flex-col gap-2 p-4">
              <div>
                <li className=" font-semibold">Slip-on Flanges</li>
                <p>
                  The slip-on flange has a low hub because the pipe slips into
                  the flange prior to welding. It is welded both inside and out
                  to provide sufficient strength and prevent leakage. Slip-on
                  flanges are all bored slightly larger than the O.D. of the
                  matching pipe.
                </p>
              </div>
              <div>
                <li className=" font-semibold">Welding Neck Flanges</li>
                <p>
                  The welding neck flange is normally referred to as the “high
                  hub” flange. It is designed to transfers tresses to the pipe,
                  there by reducing high stress concentrations at the base of
                  the flange.
                </p>
              </div>
              <div>
                <li className=" font-semibold">Threaded Flanges</li>
                <p>
                  The threaded flange is similar to the slip-on flange, but the
                  bore is threaded. Very important that it can be assembled
                  without welding, example its use in low pressure service at
                  ordinary Temperatures, and in highly explosive areas where
                  welding create risk.
                </p>
              </div>
              <div>
                <li className=" font-semibold">Blind Flanges</li>
                <p>
                  The blind flange is a flange without a bore. It is used to
                  close off the ends of a piping system and/or a pressure vessel
                  opening. It also permits easy access to the interior of a line
                  of vessel once it has been sealed and must be reopened.
                </p>
              </div>
            </ul>
          </div>
          <div className="w-full relative">
            <div className="relative w-full">
              <img
                src="/products/Flanges.png"
                alt="error"
                className="w-auto h-full object-contain object-center rounded"
              />
              <div className="absolute top-20 md:-left-8 w-full md:w-[150%] h-full z-10 transition-all ease-in-out">
                <div className="w-[2px] rotate-45 h-16 bg-[#037aad] hidden md:block"></div>
                {/* <div className="w-14 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#8ad6f7c7] align-bottom absolute bottom-40 md:bottom-8 md:left-8 left-1"></div> */}
                <div className="w-24 mix-blend-darken h-28 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc] align-bottom absolute bottom-20 right-24 hidden md:block"></div>
                <div className="w-[3px] rotate-45 h-16 absolute bottom-0 right-44 bg-[#8ad6f7c7] hidden md:block"></div>
                <div className="w-[5px] rotate-45 h-24 absolute top-1/3 -right-8 hidden md:block bg-[#99ccff]"></div>
              </div>
            </div>

            <div className="font-playfair pr-0 md:pr-16 pt-4">
              <h1 className="text-4xl md:text-4xl text-[#037aad] font-extrabold pt-2">
                Material Specification
              </h1>
              <ul className="list-disc text-sm p-6 flex flex-col gap-2">
                <li>
                  FLANGES TO DIN 2632/33 OR BS 4504 IN PN 10/16/25 – SIZES: 1″
                  TO 24″
                </li>
                <li>
                  FLANGES TO ANSI B 16.5 ASTM A105 IN CLASS 150 & CLASS 300 –
                  SIZES: 1″ TO 24″
                </li>
                <li>
                  STAINLESS STEEL – ASTM A182 F304(L,H), F316(L,H), 316TI, F321
                  – SIZES: 1″ TO 24″
                </li>
                <li>
                  FLANGES TO JIS 5K & 10K (JAPANESE STANDARD) TYPE : SLIP ON
                  ,SIZES: 1″ TO 12″
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
