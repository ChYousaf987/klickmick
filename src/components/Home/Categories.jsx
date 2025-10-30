import React from "react";
import { FaRegGem } from "react-icons/fa";
import { LuShirt } from "react-icons/lu";
import { CiMobile2, CiHome } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { RiGeminiLine } from "react-icons/ri";

const categories = [
  { name: "Fashion", icon: LuShirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: CiMobile2, image: "/Electronics.jpg" },
  { name: "Beauty", icon: RiGeminiLine, image: "/Beauty.jpg" },
  { name: "Home Decor", icon: CiHome, image: "/HomeDecor.jpg" },
  { name: "Jewelry", icon: FaRegGem, image: "/Jewelry.jpg" },
  { name: "Collectibles", icon: BsBox, image: "/Collectibles.jpg" },
  { name: "Fashion", icon: LuShirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: CiMobile2, image: "/Electronics.jpg" },
];

export default function CategorySlider() {
  return (
    <div className="bg-[#FFEFE6] py-10">
      {/* Title */}
      <h2 className="font-montserrat font-bold text-[32px] leading-[100%] text-gray-800 text-left px-16 mb-10">
        Categories
      </h2>

      {/* Scroll Section */}
      <div className="overflow-x-auto scrollbar-hide px-16">
        <div className="flex gap-8 justify-start items-center min-w-max">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Category Circle */}
                <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-300 brightness-100"
                  />

                  {/* Orange Overlay */}
                  <div className="absolute inset-0 bg-orange-500/60 flex items-center justify-center group-hover:bg-orange-500/80 transition-all duration-300">
                    <Icon className="text-white text-[28px] sm:text-[34px]" />
                  </div>
                </div>

                {/* Category Name */}
                <p className="font-poppins font-normal text-[18px] leading-[27px] text-gray-700 text-center mt-3 group-hover:text-orange-600 transition-colors duration-300">
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
