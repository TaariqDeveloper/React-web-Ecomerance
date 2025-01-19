import React from "react";
import exclusive from "../images/exclusive.png";

function Shop() {
  return (
    <div className="bg-gradient-to-t from-indigo-500 via-purple-400 to-blue-300 min-h-screen font-sans sm:flex items-center justify-center px-8">
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={exclusive}
          alt="Exclusive Product"
          className="sm:w-[70%] max-w-sm lg:max-w-md transition transform hover:scale-105 duration-300 ease-in-out shadow-2xl rounded-xl"
        />
      </div>
      {/* Text Section */}
      <div className="flex-1 max-w-lg text-white">
        <h3 className="text-xl md:text-2xl py-4 font-medium tracking-wide uppercase">
          Exclusive Available on RedStore
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold pb-6 leading-tight">
          Smart Band 4
        </h1>
        <p className="text-base md:text-lg leading-relaxed  text-gray-100">
          The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED
          color full-touch display with adjustable brightness, so everything is
          clear as can be.
        </p>
        <button className="mt-8 text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 py-3 px-16 text-lg md:text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Shop;
