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
  { name: "Beauty", icon: RiGeminiLine, image: "/Beauty.jpg" },
  { name: "Home Decor", icon: CiHome, image: "/HomeDecor.jpg" },
];

export default function CategorySlider() {
  return (
    <div className="bg-[#FFEFE6] py-10 ">
      {/* Title */}
      <div className=" w-[95%] sm:w-[90%] md:w-[85%] mx-auto">

      
      <h2 className="font-montserrat font-bold text-[28px] sm:text-[32px] text-gray-800 mb-10">
        Categories
      </h2>

      {/* Scroll Section */}
      <div className="overflow-x-auto scrollbar-hide py-2">
        <div className="flex gap-8 justify-start items-center min-w-max">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Equal Circle */}
                <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  {/* Orange Overlay */}
                  <div className="absolute inset-0 bg-orange-500/60 flex items-center justify-center group-hover:bg-orange-500/80 transition-all duration-300">
                    {/* Icon Circle (always proportional) */}
                    <div className="bg-gray-200/50 rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
                      <Icon className="text-white text-[26px] sm:text-[32px]" />
                    </div>
                  </div>
                </div>

                {/* Category Name */}
                <p className="font-poppins text-[16px] sm:text-[18px] text-gray-700 text-center mt-3 group-hover:text-orange-600 transition-colors duration-300">
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
    </div>
  );
}
