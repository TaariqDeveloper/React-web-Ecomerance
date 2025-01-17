import React from "react";
import logo1 from "../images/logo.png";
import image1 from "../images/image1.png";

function Header() {
  return (
    <div className="bg-gradient-to-t from-indigo-500 via-purple-400 to-blue-300 min-h-screen font-sans">
      {/* Navbar */}
      <div className="sm:flex justify-between items-center px-20 py-8 shadow-md bg-white bg-opacity-90">
        <div>
          <img src={logo1} alt="Logo" className="w-24" />
        </div>
        <ul className="sm:flex gap-8 text-gray-700 font-medium text-lg hidden">
          <li>
            <a
              href="#"
              className="hover:text-indigo-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-500 transition duration-300"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-500 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-500 transition duration-300"
            >
              Account
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="sm:flex justify-center items-center gap-12 mt-16 px-10">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Give Your Workout <br /> A New Style!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed">
            Success isn't always about greatness. It's about consistency.
            Consistent hard work gains success. Greatness will come.
          </p>
          <button className="mt-8 text-white bg-red-600 hover:bg-red-700 py-3 px-12 text-xl rounded-full shadow-lg transition duration-300">
            Explore Now
          </button>
        </div>

        <div>
          <img
            src={image1}
            alt="Workout Style"
            className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
