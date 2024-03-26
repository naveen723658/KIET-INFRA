export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair pr-0 md:pr-16 pt-4">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            MI Fittings
          </h1>
        </div>
        <div className="w-full relative bg-gray-100 p-4 rounded">
          <img
            src="/products/mi_gi.png"
            alt="error"
            className="w-auto h-full object-contain object-center rounded"
          />

          <div className=" font-montserrat py-4">
            <h1 className="font-semibold text-xl">STANDARDS</h1>
            <p className="py-2 text-gray-600">
              CCTF MALLEABLE IRON FITTINGS are designed to conform with the
              following industry standards:
            </p>
            <ul className="list-disc p-5">
              <li>
                <strong>MATERIAL:</strong> ASTM A 197 Cupola Malleable Iron ASTM
                A 153 Zinc Coatings
              </li>
              <li>
                <strong>DIMENSIONS:</strong> ANSI/ASME B 16.3 Malleable Iron
                Threaded Fittings ASME B 16.14 Ferous Pipe Plugs, Bushings, etc.
                ASME B 16.39 Malleable Iron Threaded Pipe Unions
              </li>
              <li>
                <strong>THREADS:</strong> ANSI/ASME B1.20.1 Pipe Threads.Sizes:
                1/8” to 2 ½”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
