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
    <div className="bg-[#FFEFE6] py-8 w-full">
      {/* Container with responsive margin */}
      <div className=" pl-4 sm:px-2 md:ml-20">
        {/* Title */}
        <h2 className="font-montserrat font-bold text-[24px] sm:text-[28px] text-gray-800 mb-6">
          Categories
        </h2>

        {/* Scroll Section */}
        <div className="overflow-x-auto scrollbar-hide py-2 px-6">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Circle Image */}
                  <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Orange Overlay */}
                    <div className="absolute inset-0 bg-orange-500/50 flex items-center justify-center group-hover:bg-orange-500/70 transition-all duration-300">
                      {/* Icon Circle */}
                      <div className="bg-gray-200/50 rounded-full flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14">
                        <Icon className="text-white text-2xl sm:text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* Category Name */}
                  <p className="font-poppins text-[14px] sm:text-[16px] text-gray-700 text-center mt-2 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>
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
