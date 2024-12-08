export  function ShoeBar() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">First Look</h1>
        <h2 className="text-3xl font-extrabold mb-2">NIKE AIR MAX PULSE</h2>
        <p className="text-center text-lg mb-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
            Notify Me
          </button>
          <button className="px-6 py-2 bg-white text-black font-semibold border-gray-300 rounded-lg hover:bg-gray-100">
            Shop Air Max
          </button>
        </div>
      </div>
    );
  }
  export default ShoeBar;