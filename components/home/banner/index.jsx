export default function Banner() {
  return (
    <div className="relative w-full">
      <div className=" w-[73%] relative m-auto bg-[url(/b3.jpg)] bg-no-repeat h-[70vh]">
        <div className="flex flex-col items-start h-full justify-center">
          <div className="flex items-center justify-center px-32 p-6 gap-4">
            <p className="text-5xl font-extrabold font-playfair pb-10 pr-1">
              Trust to
            </p>
            <span className="w-[4px] h-40 rotate-45 bg-blue-900"></span>
            <p className="text-5xl font-extrabold font-playfair pt-10 pl-1">
              Deliver
            </p>
          </div>
          <div className="flex items-center font-playfair p-10 gap-14">
            <div className="flex gap-1 items-center">
              <div>
                <img
                  src="growth.svg"
                  alt="kietinfra.com"
                  className="w-24 h-24"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-xl">
                  Business <br /> Targeting
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <div>
                <img
                  src="puzzle.svg"
                  alt="kietinfra.com"
                  className="w-16 h-16"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-xl">
                  Planning & <br /> Management
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <div>
                <img
                  src="Positioning.svg"
                  alt="kietinfra.com"
                  className="w-16 h-16"
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-500 font-semibold text-xl">
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
