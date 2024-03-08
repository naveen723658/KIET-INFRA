export default function Banner() {
  return (
    <div className="relative w-full">
      <div className="w-full md:w-[73%] relative m-auto bg-[url(/b3.jpg)] bg-no-repeat bg-center bg-cover h-[70vh]">
        <div className="flex flex-col items-start h-full justify-center">
          <div className="flex items-center justify-center px-10 md:px-32 md:p-6 gap-2 md:gap-4">
            <p className="text-3xl md:text-5xl font-extrabold font-playfair pb-6 md:pb-10 pr-1">
              Trust to
            </p>
            <span className="w-[4px] h-24 md:h-40 rotate-45 bg-blue-900"></span>
            <p className="text-3xl md:text-5xl font-extrabold font-playfair pt-6 md:pt-10 pl-1">
              Deliver
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center font-playfair gap-6 p-10 md:gap-14">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  src="growth.svg"
                  alt="kietinfra.com"
                  className="w-20 h-20"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-lg md:text-xl">
                  Business <br /> Targeting
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img
                  src="puzzle.svg"
                  alt="kietinfra.com"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-lg md:text-xl">
                  Planning & <br /> Management
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img
                  src="Positioning.svg"
                  alt="kietinfra.com"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-lg md:text-xl">
                  Strategy & <br /> Positioning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
