import Image from 'next/image';

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="Nike Logo"
          width={80}
          height={80}
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2 text-center">BECOME A NIKE MEMBER</h1>
      <p className="text-sm text-gray-600 text-center max-w-lg">
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>

      {/* Input Fields */}
      <form className="w-full max-w-md mt-8">
        {/* Email Field */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Birthday Reward Notice */}
        <p className="text-xs text-gray-600 mb-6">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Selector */}
        <div className="mb-4 relative">
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            defaultValue="India"
          >
            <option>India</option>
            <option>Pakistan</option>
            <option>Bangladesh</option>
            <option>South Africa</option>
          </select>
        </div>

        {/* Gender Selection */}
        <div className="mb-6 flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-gray-500"
            />
            <span className="ml-2 text-gray-600">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-gray-500"
            />
            <span className="ml-2 text-gray-600">Female</span>
          </label>
        </div>

        {/* Email Updates Checkbox */}
        <label className="flex items-start space-x-2 mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-gray-500"
          />
          <span className="text-sm text-gray-600">
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </span>
        </label>

        {/* Agreement */}
        <p className="text-xs text-gray-600 mb-6">
          By creating an account, you agree to Nike`s{' '}
          <a href="#" className="underline text-gray-800 hover:text-black">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-gray-800 hover:text-black">
            Terms of Use
          </a>.
        </p>

        {/* Join Us Button */}
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
        >
          JOIN US
        </button>
      </form>

      {/* Already a Member */}
      <p className="mt-6 text-sm text-gray-600">
        Already a member?{' '}
        <a href="/sign-in" className="font-semibold underline hover:text-black">
          Sign In
        </a>
      </p>
    </div>
  );
}
