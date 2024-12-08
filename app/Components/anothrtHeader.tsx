import Link from 'next/link';
import React from 'react';

const AppBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center py-12">
      <h1 className="text-2xl font-bold text-black">Hello Nike App</h1>
      <p className="mt-2 text-sm text-gray-600">
        Download the app to access everything Nike.{' '}
        <Link href="#" className="text-blue-500 underline">
          Get Your Great
        </Link>
      </p>

    </div>
  );
};

export default AppBanner;
