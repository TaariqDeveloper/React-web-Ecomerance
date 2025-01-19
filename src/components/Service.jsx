import React, { useState } from "react";
import category_1 from "../images/category-1.jpg";
import category_2 from "../images/category-2.jpg";
import category_3 from "../images/category-3.jpg";
import product_1 from "../images/product-1.jpg";
import product_2 from "../images/product-2.jpg";
import product_3 from "../images/product-3.jpg";
import product_4 from "../images/product-4.jpg";
import product_5 from "../images/product-5.jpg";
import product_6 from "../images/product-6.jpg";
import product_7 from "../images/product-7.jpg";
import product_8 from "../images/product-8.jpg";
import product_9 from "../images/product-9.jpg";
import product_10 from "../images/product-10.jpg";
import product_11 from "../images/product-11.jpg";
import product_12 from "../images/product-12.jpg";

function Service() {
  const [cart, setCart] = useState([]);

  const images = [
    { image: category_1 },
    { image: category_2 },
    { image: category_3 },
  ];

  const products = [
    { image: product_1, Title: "Red Printed T-Shirt", price: 50 },
    { image: product_2, Title: "Blue Striped Shirt", price: 60 },
    { image: product_3, Title: "Green Hoodie", price: 70 },
    { image: product_4, Title: "Black Leather Jacket", price: 120 },
    { image: product_5, Title: "White Sneakers", price: 90 },
    { image: product_6, Title: "Gray Sweatpants", price: 40 },
    { image: product_7, Title: "Pink Casual Shirt", price: 55 },
    { image: product_8, Title: "Navy Blue Jeans", price: 75 },
    { image: product_9, Title: "Brown Belt", price: 35 },
    { image: product_10, Title: "Black Formal Shoes", price: 110 },
    { image: product_11, Title: "Yellow Summer Dress", price: 80 },
    { image: product_12, Title: "Red Wool Scarf", price: 30 },
  ];

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.Title} has been added to your cart!`);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="sm:flex justify-center sm:gap-10 sm:px-20 p-6 mb-16 ">
        {images.map((ser, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 sm:w-[300px] w-[350px]"
          >
            <img
              src={ser.image}
              alt={`Service ${index}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold text-gray-800 underline mb-12 ">
          Featured Products
        </h1>
        <div className="sm:flex justify-center gap-10 flex-wrap  sm:px-20 sm:py-0 p-8 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 sm:w-[350px]"
            >
              {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
              <img
                src={product.image}
                alt={product.Title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.Title}
                </h2>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={
                        starIndex < 4
                          ? "fa-solid fa-star"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  ))}
                </div>
                <p className="text-xl font-bold text-gray-800">
                  ${product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="px-20 mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Cart Summary:</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600 mt-4">Your cart is empty.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b pb-2 border-gray-300"
                >
                  <span>{item.Title}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
