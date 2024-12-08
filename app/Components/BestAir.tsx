import Image from 'next/image';
import React from 'react';

const BestAir = () => {
  return (
    <>
      {/* Top Image */}
      <div>
      </div>

      {/* Shoes Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Shoe 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 container mx-auto px-4">
            <Image src="/Shoe.1.jpg" alt="Nike Air Max Pulse Women's" width={300} height={300} className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-2">Nike Air Max Pulse</h3>
            <p className="text-gray-600">Women`s Shoes</p>
            <p className="text-lg font-bold mt-2">₹13,995</p>
          </div>

          {/* Shoe 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image src="/Shoe.1.jpg" alt="Nike Air Max Pulse Men's" width={300} height={300} className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-2">Nike Air Max Pulse</h3>
            <p className="text-gray-600">Men`s Shoes</p>
            <p className="text-lg font-bold mt-2">₹13,995</p>
          </div>

          {/* Shoe 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image src="/Shoe.2.jpg" alt="Nike Air Max Pulse Kids" width={300} height={300} className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-2">Nike Air Max Pulse</h3>
            <p className="text-gray-600">Kids`` Shoes</p>
            <p className="text-lg font-bold mt-2">₹13,995</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAir;
