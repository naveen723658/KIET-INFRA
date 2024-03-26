export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair pr-0 md:pr-16 pt-4">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            Valves
          </h1>
        </div>
        <div className="w-full relative bg-gray-100 p-4 rounded">
          <img
            src="/products/valves.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center rounded m-auto"
          />
          <img
            src="/products/valves2.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center rounded m-auto"
          />
        </div>
      </div>
    </div>
  );
}
