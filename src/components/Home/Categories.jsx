import React from "react";
import {
  FaTshirt,
  FaMobileAlt,
  FaMagic,
  FaHome,
  FaGem,
  FaBox,
} from "react-icons/fa";

const categories = [
  { name: "Fashion", icon: FaTshirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: FaMobileAlt, image: "/Electronics.jpg" },
  { name: "Beauty", icon: FaMagic, image: "/Beauty.jpg" },
  { name: "Home Decor", icon: FaHome, image: "/HomeDecor.jpg" },
  { name: "Jewelry", icon: FaGem, image: "/Jewelry.jpg" },
  { name: "Collectibles", icon: FaBox, image: "/Collectibles.jpg" },
  { name: "Fashion", icon: FaTshirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: FaMobileAlt, image: "/Electronics.jpg" },
];

export default function CategorySlider() {
  return (
    <div className="bg-[#FFEFE6] py-8 sm:px-6">
      {/* Heading */}
      <h2 className="text-2xl px-16 sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-left">
        Categories
      </h2>

      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide px-16 py-2">
        <div
          className="flex gap-4 sm:gap-8 justify-start items-center"
          style={{ minWidth: "max-content" }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
                style={{ minWidth: "140px" }}
              >
                {/* Image */}
                <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />

                  {/* ✅ Full orange background for icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-orange-300/90">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* Category Name */}
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-gray-700 group-hover:text-orange-600 transition-colors text-center">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
