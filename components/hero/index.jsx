import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-fit flex items-center">
        {[...Array(5)].map((_, index) => (
          <div className="relative h-64 w-screen" key={index}>
            <Image
              src="https://www.kamalinternationall.in/assets/images/sliders/slide-bg/1.jpg"
              alt="error"
              fill
              sizes="100%"
              className="w-full h-full object-cover object-center top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
