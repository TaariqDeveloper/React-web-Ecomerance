import React from "react";
import user_1 from "../images/user-1.png";
import { list } from "postcss";

function Testmonials() {
  const List = [
    { image: user_1, Title: "Sean Parker" },
    { image: user_1, Title: "Sean Parker" },
    { image: user_1, Title: "Sean Parker" },
  ];
  return (
    <div className="sm:flex justify-center sm:gap-20 min-h-[700px] mt-32 sm:p-0 p-6 gap-40 ">
      {List.map((product, index) => (
        <div className="sm:w-[450px] h-[400px] sm:p-6 p-2 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <i class="fa-solid fa-quote-right text-4xl  text-red-600 ml-44 "></i>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repudiandae nihil, voluptate tempore inventore obcaecati laborum
            eius similique, corporis sequi totam dicta minima saepe sed quisquam
            quas consectetur, maiores et.
          </p>
          <div className="flex gap-2 text-2xl pt-2 ml-28 py-3">
            <i class="fa-regular fa-star  text-red-500 mb-2 "></i>
            <i class="fa-regular fa-star  text-red-500 mb-2 "></i>
            <i class="fa-regular fa-star  text-red-500 mb-2 "></i>
            <i class="fa-regular fa-star  text-red-500 mb-2 "></i>
            <i class="fa-regular fa-star  text-red-500 mb-2 "></i>
          </div>
          <div className="ml-40">
            <div className="ml-4">
              <img
                src={product.image}
                alt=""
                className="w-10 h-10 rounded-full "
              />
            </div>

            <h1>{product.Title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testmonials;
