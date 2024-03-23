import Link from "next/link";

export default function Index() {
  const service = [
    {
      img: "/services/service1.jpg",
      title: "MEP Contracting",
      description:
        "EPC contracting of MEP systems in challenging construction projects around the world.",
      link: "/",
    },
    {
      img: "/services/service2.jpg",
      title: "MEP Operation & Maintenance",
      description:
        "Services with globally valid maintenance management systems.",
      link: "/",
    },
    {
      img: "/services/service3.jpg",
      title: "Panel Production",
      description:
        "AnelSis produces and installs panels and provides on-site service and maintenance.",
      link: "/",
    },
    {
      img: "/services/service2.jpg",
      title: "MEP Supplier",
      description:
        "AnelSis produces and installs panels and provides on-site service and maintenance.",
      link: "/",
    },
  ];
  return (
    <div className="w-full my-6">
      <div className="px-4 md:px-0 container md:max-w-[73%] m-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-[#037aad] font-extrabold items-center justify-center border-b-4 w-fit pb-4 px-4 border-[#037aad]">
            <span className="text-black">WHAT WE </span> DO
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 items-start justify-between gap-3 py-10">
          {service?.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="relative flex max-w-[24rem] h-full flex-col overflow-hidden rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img src={item.img} alt="ui/ux review check h-52" />
              </div>
              <div className="p-3">
                <h4 className="block font-sans text-base antialiased font-semibold leading-snug tracking-normal capitalize text-blue-gray-900">
                  {item.title}
                </h4>
                <p className="block mt-3 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
