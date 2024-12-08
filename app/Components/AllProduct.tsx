import Image from "next/image";
import React from "react";

const FIRST = () => {
  // Array of product data
  const products = [
    { id: 1, label: "Just In", name: "Nike Air Force 1 Mid '07", category: "Men's Shoes", color: "1 Colour", price: "₹ 10,795.00", image: "/assests/shoe1.jpg" },
    { id: 2, label: "Just In", name: "Nike Court Vision Low Next Nature", category: "Men's Shoes", color: "1 Colour", price: "₹ 4,995.00", image: "/assests/shoe3.jpg" },
    { id: 3, label: "Just In", name: "Nike Air Force 1 PLT.AF.ORM", category: "Women's Shoes", color: "1 Colour", price: "₹ 8,695.00", image: "/assests/shoe2.jpg" },
    { id: 4, label: "Just In", name: "Nike Air Force 1 React", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,295.00", image: "/assests/shoe4.jpg" },
    { id: 5, label: "Promo Exclusive", name: "Air Jordan 1 Elevate Low", category: "Women's Shoes", color: "1 Colour", price: "₹ 11,895.00", image: "/assests/shoe5.jpg" },
    { id: 6, label: "Just In", name: "Nike Standard Issue", category: "Women's Basketball Jersey", color: "1 Colour", price: "₹ 2,895.00", image: "/assests/dress6.jpg" },
    { id: 7, label: "Just In", name: "Nike Revolution 6 FlyEase", category: "Men's Shoes", color: "1 Colour", price: "₹ 5,695.00", image: "/assests/shoe7.jpg" },
    { id: 8, label: "Just In", name: "Nike Dunk High Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 9,295.00", image: "/assests/shirt8.jpg" },
    { id: 9, label: "Just In", name: "Nike Air Max 97", category: "Men's Shoes", color: "1 Colour", price: "₹ 15,995.00", image: "/assests/shoe.9.jpg" },
    { id: 10, label: "Just In", name: "Nike Zoom Fly 5", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 12,895.00", image: "/assests/shirt10.jpg" },
    { id: 11, label: "Just In", name: "Nike Sportswear Club Fleece", category: "Men's Sweatpants", color: "1 Colour", price: "₹ 3,295.00", image: "/assests/women11.jpg" },
    { id: 12, label: "Just In", name: "Nike Pegasus 40", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 10,495.00", image: "/assests/sho12.jpg" },
    { id: 13, label: "Just In", name: "Nike Air Zoom Structure 25", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 12,995.00", image: "/assests/shoe13.jpg" },
    { id: 14, label: "Just In", name: "Nike Air Max 1", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,495.00", image: "/assests/shoe14.jpg" },
    { id: 15, label: "Just In", name: "Nike Air Max 90", category: "Men's Shoes", color: "1 Colour", price: "₹ 14,295.00", image: "/assests/sho15.jpg" },
    { id: 16, label: "Just In", name: "Nike Blazer Low", category: "Men's Shoes", color: "1 Colour", price: "₹ 7,495.00", image: "/assests/shoe16.jpg" },
    { id: 17, label: "Just In", name: "Nike Air Max 270", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,495.00", image: "/assests/men17.jpg" },
    { id: 18, label: "Promo Exclusive", name: "Nike Air Presto", category: "Men's Shoes", color: "1 Colour", price: "₹ 8,295.00", image: "/assests/shoe18.jpg" },
    { id: 19, label: "Just In", name: "Nike Air Zoom Pegasus 38", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 11,995.00", image: "/assests/women19.jpg" },
    { id: 20, label: "Promo Exclusive", name: "Air Jordan 4 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,495.00", image: "/assests/shoe20.jpg" },
    { id: 21, label: "Just In", name: "Nike Air Max 97 Ultra", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,995.00", image: "/assests/women21.jpg" },
    { id: 22, label: "Just In", name: "Nike Free Run 5.0", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 9,695.00", image: "/assests/shoe22.jpg" },
    { id: 23, label: "Just In", name: "Nike Air Force 1 High", category: "Men's Shoes", color: "1 Colour", price: "₹ 13,995.00", image: "/assests/shoe13.jpg" },
    { id: 24, label: "Just In", name: "Nike Air Max 180", category: "Men's Shoes", color: "1 Colour", price: "₹ 12,395.00", image: "/assests/men24.jpg" },
    { id: 25, label: "Just In", name: "Nike Air Zoom Winflo 8", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 9,895.00", image: "/assests/shoe16.jpg" },
    { id: 26, label: "Just In", name: "Nike React Infinity Run Flyknit", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 14,995.00", image: "/assests/short26.jpg" },
    { id: 27, label: "Just In", name: "Nike Air Max 2090", category: "Men's Shoes", color: "1 Colour", price: "₹ 16,695.00", image: "/assests/shoe27.jpg" },
    { id: 28, label: "Promo Exclusive", name: "Air Jordan 3 Retro", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,395.00", image: "/assests/kids27.jpg" },
    { id: 29, label: "Just In", name: "Nike Free RN 5.0", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 10,495.00", image: "/assests/sho15.jpg" },
    { id: 30, label: "Just In", name: "Nike Air Max 720", category: "Men's Shoes", color: "1 Colour", price: "₹ 18,495.00", image: "/assests/short31.jpg" },
    { id: 31, label: "Just In", name: "Nike VaporMax", category: "Men's Shoes", color: "1 Colour", price: "₹ 19,995.00", image: "/assests/shoe32.jpg" },
    { id: 32, label: "Just In", name: "Nike Air Zoom Alphafly Next%", category: "Men's Running Shoes", color: "1 Colour", price: "₹ 22,495.00", image: "/assests/shoe33.jpg" },
    { id: 35, label: "Just In", name: "Nike Air Max 97 SE", category: "Men's Shoes", color: "1 Colour", price: "₹ 17,295.00", image: "/assests/shoe14.jpg" },
    
  ];
  
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">New (500)</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 font-medium">Shoes</li>
            <li className="text-gray-700 font-medium">Sports Bras</li>
            <li className="text-gray-700 font-medium">Tops & T-Shirts</li>
            <li className="text-gray-700 font-medium">Hoodies & Sweatshirts</li>
            <li className="text-gray-700 font-medium">Jackets</li>
            <li className="text-gray-700 font-medium">Trousers & Tights</li>
            <li className="text-gray-700 font-medium">Shorts</li>
            <li className="text-gray-700 font-medium">Tracksuits</li>
            <li className="text-gray-700 font-medium">Jumpsuits & Rompers</li>
            <li className="text-gray-700 font-medium">Socks</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Gender</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Men</li>
            <li className="text-gray-700">Women</li>
            <li className="text-gray-700">Unisex</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Kids</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Boys</li>
            <li className="text-gray-700">Girls</li>
          </ul>
          <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Under ₹ 2,500.00</li>
            <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 bg-white shadow-md"
              >
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="text-sm text-red-500 font-semibold mb-1">
                  {product.label}
                </div>
                <div className="font-medium text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
                <div className="text-sm text-gray-500">{product.color}</div>
                <div className="font-semibold text-gray-800 mt-2">
                  MRP: {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRST