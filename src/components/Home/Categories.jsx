import React from "react";
import {  FaRegGem,} from "react-icons/fa";
import { LuShirt, } from "react-icons/lu";
import { CiMobile2 ,CiHome} from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { RiGeminiLine } from "react-icons/ri";

const categories = [
  { name: "Fashion", icon: LuShirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: CiMobile2, image: "/Electronics.jpg" },
  { name: "Beauty", icon:  RiGeminiLine, image: "/Beauty.jpg" },
  { name: "Home Decor", icon: CiHome, image: "/HomeDecor.jpg" },
  { name: "Jewelry", icon: FaRegGem, image: "/Jewelry.jpg" },
  { name: "Collectibles", icon: BsBox, image: "/Collectibles.jpg" },
  { name: "Fashion", icon: LuShirt, image: "/Fashion.jpg" },
  { name: "Electronics", icon: CiMobile2, image: "/Electronics.jpg" },
];

export default function CategorySlider() {
  return (
    <div className="bg-[#FFEFE6] py-8 sm:px-6">
      {/* Heading */}
      <h2 className="font-montserrat font-bold text-[32px] leading-[100%] tracking-[0px] text-gray-800 text-start px-16 mb-6 sm:mb-8">
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
                    className="w-full h-full object-cover brightness-110 contrast-110 saturate-125 transition-all duration-300"
                  />

                  {/* ✅ Clearer orange overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-orange-400/60 group-hover:bg-orange-500/80 transition-all duration-300">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Category Name */}
                <p className="font-poppins font-normal text-[18px] leading-[27px] tracking-[0px] text-center text-gray-700 group-hover:text-orange-600 transition-colors mt-2 sm:mt-3">
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
