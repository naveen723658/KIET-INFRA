import Link from "next/link";
export default function Page() {
  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair w-full">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2 text-center border-b-2">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(12)].map((_, i) => (
            <Link href="/" className="cursor-zoom-in" key={i}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="/b1.jpg"
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
