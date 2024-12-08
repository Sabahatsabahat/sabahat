import Image from 'next/image'; // For the product image

function AirNike() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image 
            src="/Rectangle.jpg" // Replace with your image path
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={500} // Adjust width and height as needed
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-lg mb-4">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid.  Its `inside out`-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className="text-2xl font-bold mb-2">£ 8 695.00</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AirNike;