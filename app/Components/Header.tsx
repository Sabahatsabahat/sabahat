import Image from 'next/image';
import Link from 'next/link';

export  function Header() {
  return (
    <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image
            src="/top.png" // Replace this with your logo path
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Center - Skip to main content */}
        <div className="hidden sm:block">
          <a
            href="#main-content"
            className="text-xs md:text-sm  text-black hover:text-gray-800 focus:text-gray-800"
          >
            Skip to main content
          </a>
        </div>

        {/* Right Side - Links */}
        <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
          <Link
            href="/Product"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Find a Store
          </Link>
          <span className="hidden sm:block">|</span>
          <Link
            href="/Help"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Help
          </Link>
          <span className="hidden sm:block">|</span>
          <a
            href="/JoinUs"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Join Us
          </a>
          <span className="hidden sm:block">|</span>
          <Link
            href="/Login"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;