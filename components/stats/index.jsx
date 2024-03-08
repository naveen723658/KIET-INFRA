import Link from "next/link";
export default function Stats() {
  return (
    <div className="container px-4 m-auto my-10 md:my-20 font-playfair">
      <div className="flex flex-col md:flex-row md:items-center px-4 md:px-0 justify-between gap-8 md:gap-4">
        <div className="flex gap-2 items-start">
          <div>
            <img
              src="goal.svg"
              alt="kietinfra.com"
              className="w-16 md:w-14 h-16 md:h-14"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-3xl">
              100 %
            </span>
            <p className="text-sm text-gray-700">
              Quality Produts
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-start">
          <div>
            <img
              src="globe.svg"
              alt="kietinfra.com"
              className="w-16 md:w-14 h-16 md:h-14"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-3xl">
              130 +
            </span>
            <p className="text-sm text-gray-700">
              Worldwide Clients
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div>
            <img
              src="trophy.svg"
              alt="kietinfra.com"
              className="w-16 md:w-14 h-16 md:h-14"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-3xl">
              15 +
            </span>
            <p className="text-sm text-gray-700">
              Achievement Awards
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <div>
            <img
              src="group.svg"
              alt="kietinfra.com"
              className="w-16 md:w-14 h-16 md:h-14"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-3xl">40 +</span>
            <p className="text-sm text-gray-700">Industrial Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
