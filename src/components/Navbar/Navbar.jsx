import React from "react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow ">
      {/* 🔹 Top Section */}
      <div className="flex justify-between items-center px-24 py-3 mr-3 max-sm:px-10">
        {/* 🔸 Logo Image */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-14 w-auto object-contain cursor-pointer rounded-lg"
          />
        </div>

        {/* 🔸 Search Bar */}
        <div className="flex items-stretch border border-orange-500 rounded-xl overflow-hidden w-3/4 max-w-xl">
          <select
            className="bg-gray-100 text-gray-600 text-sm px-2 py-1 outline-none w-[63p] h-[44px] appearance-none"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          >
            <div className=" bg-[#FFF1EB]  rounded-xl text-black">
              <option className="font-Open Sans" >All</option>

            </div>
          </select>

          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-3 outline-none text-sm"
          />
          <button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center px-4">
            <FiSearch className="text-lg mb-0.5" />
          </button>
        </div>

        {/* 🔸 Cart Icon */}
        <div className="relative">
          <FiShoppingCart className="text-4xl text-black " />
          <span className="absolute -top-3 -right-0 bg-orange-500 text-white text-xs  rounded-full px-1.5">
            1
          </span>
        </div>
      </div>

      {/* 🔸 Bottom Navigation */}
      <div className="bg-[#565656] text-white flex items-center space-x-3 px-20 py-2 text-sm font-poppins">
        <div className="flex items-center cursor-pointer -space-x-2">
          <FiMenu className="w-[71px] h-[35px]" /> {/* icon stays same */}
          <span className="font-semibold text-[18px] leading-[100%] tracking-[0.5%] font-poppins">All</span>
        </div>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] leading-[100%] tracking-[0.5%] font-poppins text-[#D2D2D2]">
          Live Streams
        </span>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] leading-[100%] tracking-[0.5%] font-poppins text-[#D2D2D2]">
          Customer service
        </span>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] leading-[100%] tracking-[0.5%] font-poppins text-[#D2D2D2]">
          Sale
        </span>
      </div>

    </div>
  );
}
