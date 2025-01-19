import React from "react";
import play_store from "../images/play-store.png";
import app_store from "../images/app-store.png";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="h-auto bg-black text-white sm:flex flex-wrap justify-around py-10 px-5">
      {/* Section 1 */}
      <div className="w-[300px] mb-6">
        <h1 className="text-2xl font-bold">Download Our App</h1>
        <p className="text-[12px] text-gray-400 py-4">
          Download the app for Android and iOS mobile phones
        </p>
        <div className="flex gap-2">
          <img
            src={play_store}
            alt="Play Store"
            className="w-32 hover:opacity-80 transition"
          />
          <img
            src={app_store}
            alt="App Store"
            className="w-32 hover:opacity-80 transition"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-[380px] mb-6 text-center">
        <img src={logo} className="w-56 sm:mx-auto" alt="Logo" />
        <p className="py-4">
          Our purpose is to sustainably make the pleasure and benefits of sports
          accessible to everyone.
        </p>
      </div>

      {/* Section 3 */}
      <div className="w-[200px] mb-6">
        <h1 className="pb-2 font-bold text-lg">Useful Links</h1>
        <ul className="text-gray-400 font-medium space-y-2">
          <li className="hover:text-white transition">Coupons</li>
          <li className="hover:text-white transition">Blog Posts</li>
          <li className="hover:text-white transition">Return Policy</li>
          <li className="hover:text-white transition">Join Affiliate</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="w-[200px] mb-6">
        <h1 className="pb-2 font-bold text-lg">Follow Us</h1>
        <ul className="text-gray-400 font-medium space-y-2">
          <li className="hover:text-white transition">Facebook</li>
          <li className="hover:text-white transition">Twitter</li>
          <li className="hover:text-white transition">Instagram</li>
          <li className="hover:text-white transition">YouTube</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
