import Image from "next/image";

export function GearUp() {
  const products = [
    {
      category: "Shop Men's",
      items: [
        {
          name: "Nike Dri-FIT ADV TechKnit Ultra",
          description: "Men's Short-Sleeve Running Top",
          price: "₹ 3,895",
          image: "/men.jpg",
        },
        {
          name: "Nike Dri-FIT Challenger",
          description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
          price: "₹ 2,495",
          image: "/ShortMen.jpg",
        },
      ],
    },
    {
      category: "Shop Women's",
      items: [
        {
          name: "Nike Dri-FIT ADV Run Division",
          description: "Women's Long-Sleeve Running Top",
          price: "₹ 5,295",
          image: "/workout.jpg",
        },
        {
          name: "Nike Fast",
          description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
          price: "₹ 3,795",
          image: "/girlShort.jpg",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Gear Up</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.items.map((item, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300} // Set the width
                    height={300} // Set the height
                    className="rounded-lg object-cover"
                  />
                  <h3 className="font-medium text-lg mt-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-900 font-semibold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GearUp;
