export default function Page() {
  const range = [
    {
      Number: "",
      Item: "Adaptor (not illustrated)",
      "Minimum Size": 15,
      "Maximum Size": 50,
    },
    {
      Number: 1,
      Item: "Backnut",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 2,
      Item: "Bend 90° M&F",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 3,
      Item: "Bend 90° F&F",
      "Minimum Size": 8,
      "Maximum Size": 100,
    },
    {
      Number: 4,
      Item: "Bend 45° M&F",
      "Minimum Size": 15,
      "Maximum Size": 50,
    },
    {
      Number: 5,
      Item: "Cap",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 6,
      Item: "Cross",
      "Minimum Size": 10,
      "Maximum Size": 100,
    },
    {
      Number: 7,
      Item: "Elbow 90° F&F",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 8,
      Item: "Elbow 90° M&F",
      "Minimum Size": 8,
      "Maximum Size": 100,
    },
    {
      Number: 9,
      Item: "Elbow 45° F&F",
      "Minimum Size": 15,
      "Maximum Size": 100,
    },
    {
      Number: 10,
      Item: "Elbow 45° M&F",
      "Minimum Size": 15,
      "Maximum Size": 50,
    },
    {
      Number: 11,
      Item: "Flange Undrilled",
      "Minimum Size": 15,
      "Maximum Size": 150,
    },
    {
      Number: 12,
      Item: "Flange Drilled",
      "Minimum Size": 15,
      "Maximum Size": 150,
    },
    {
      Number: 13,
      Item: "Hex Nipple",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 14,
      Item: "Plug-Hollow.",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 15,
      Item: "Plug - Solid",
      "Minimum Size": 15,
      "Maximum Size": 50,
    },
    {
      Number: 16,
      Item: "Socket",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 17,
      Item: "Tee",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 18,
      Item: "Union Flat Seat",
      "Minimum Size": 8,
      "Maximum Size": 150,
    },
    {
      Number: 19,
      Item: "Union Brass Seat F&F",
      "Minimum Size": 8,
      "Maximum Size": 100,
    },
    {
      Number: 20,
      Item: "Bush Reducing",
      "Minimum Size": "10*6",
      "Maximum Size": "150*125",
    },
    {
      Number: 21,
      Item: "Elbow Reducing F&F",
      "Minimum Size": "15*8",
      "Maximum Size": "50*40",
    },
    {
      Number: 22,
      Item: "Hex Nipple Reducing",
      "Minimum Size": "10*8",
      "Maximum Size": "100*80",
    },
    {
      Number: 23,
      Item: "Sockets Reducing",
      "Minimum Size": "10*8",
      "Maximum Size": "100*80",
    },
    {
      Number: 24,
      Item: "Tees Reducing",
      "Minimum Size": "15*8",
      "Maximum Size": "100*80",
    },
    {
      Number: 25,
      Item: "Tees Reducing Special",
      "Minimum Size": "20*15",
      "Maximum Size": "80*50",
    },
  ];

  return (
    <div className="w-full my-5 md:my-10">
      <div className="flex flex-col gap-6 justify-between items-center container px-4 md:px-0 m-auto">
        <div className="font-playfair pr-0 md:pr-16 pt-4">
          <h1 className="text-4xl md:text-5xl text-[#037aad] font-extrabold pb-6 pt-2">
            GI Fittings
          </h1>
        </div>
        <div className="w-full relative bg-gray-100 p-4 rounded">
          <img
            src="/products/gi_products.png"
            alt="error"
            className="w-auto h-full object-contain object-center rounded"
          />
          <img
            src="/products/h35.jpg"
            alt="error"
            className="w-auto h-full object-contain object-center rounded"
          />

          <div className="font-montserrat py-4">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <p className="font-semibold text-center pb-4">
                      Nominal Range - Equal & Reducing Fittings (all sizes shown
                      in mm)
                    </p>
                    <table className="min-w-full text-left text-sm font-light text-surface ">
                      <thead className="border-b border-gray-400 font-medium">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            #Number
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Item
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Minimum Size
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Maximum Size
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {range.map((item, index) => (
                          <tr className="border-b border-gray-400 " key={index}>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {item.Number}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.Item}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item["Minimum Size"]}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item["Maximum Size"]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
