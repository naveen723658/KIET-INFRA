export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair pr-0 md:pr-16 pt-4">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            Threaded High Pressure Fittings
          </h1>
        </div>
        <div className="w-full relative bg-gray-100 p-4 rounded">
          <img
            src="/products/threaded.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center rounded m-auto"
          />

          <div className=" font-montserrat py-4">
            <h1 className="font-semibold text-lg">
              SCREWED & SOCKET-WELD 3000 & 6000 lb
            </h1>
            <p className="py-2 text-gray-600 text-base">
              The high pressure pipe fittings illustrated in the following pages
              are designed for use with American Standard Line pipe and are used
              extensively in the fabrication of screwed or socket-weld high
              pressure piping systems.
            </p>
            <p className="py-2 text-gray-600 text-base">
              They are found throughout refinery, petrochemical and industrial
              plants, on pressure vessels, hydraulic lines, refrigeration plants
              and wherever high pressures and/or temperatures occur.
            </p>
            <h1 className="font-semibold text-lg">
              DIMENSIONAL SPECIFICATIONS
            </h1>
            <p className="py-2 text-gray-600 text-base">
              ASME B16.11 — Forged Steel Fittings, Socket-Weld and Threaded.
            </p>
            <p className="py-2 text-gray-600 text-base">
              BS3799 – Forged Steel Pipe Fittings, screwed and socket-weld for
              the petroleum industry – based on ASME B16.11.
            </p>

            <h1 className="font-semibold text-lg">MATERIAL SPECIFICATIONS</h1>
            <p className="py-2 text-gray-600 text-base">
              Carbon Steel — forgings to ASTM A105, or Bar stock.
            </p>
            <p className="py-2 text-gray-600 text-base">
              Stainless and Alloy Steels to ASTM A182 of the appropriate grades,
            </p>
            <h1 className="font-semibold text-lg">FINISH</h1>
            <p className="py-2 text-gray-600 text-base">
              Fittings are normally self-colored or phosphate-finished.
              Galvanized or cadmium-plated finish is available at extra cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
