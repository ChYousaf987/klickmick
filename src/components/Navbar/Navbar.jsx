import React, { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow relative">
      {/* 🔹 Top Section */}
      <div className="flex justify-between items-center px-6 py-3 md:px-24 md:py-3">
        {/* 🔸 Left Side: Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer rounded-lg max-md:h-9"
          />
        </div>

        {/* 🔸 Center: Search Bar (desktop only) */}
        <div className="hidden rounded-xl md:flex items-stretch border border-[#ff6413] md:rounded-lg overflow-hidden w-3/4 max-w-xl">
          <select
            className="bg-gray-100 text-gray-600 text-sm px-4 py-1 outline-none"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          >
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-3 outline-none text-sm"
          />
          <button className="bg-[#ff6413] text-white hover:bg-orange-600 flex items-center justify-center px-4">
            <FiSearch className="text-lg" />
          </button>
        </div>

        {/* 🔸 Right Side: Cart + Hamburger (mobile) */}
        <div className="flex items-center space-x-3">
          {/* Cart Icon (always visible) */}
          <div className="relative">
            <FiShoppingCart className="text-3xl text-black" />
            <span className="flex justify-center items-center w-[15px] h-[15px] absolute -top-3 right-0.5 bg-[#ff6413] text-white text-xs rounded-full max-md:-top-2 max-md:w-[13px] max-md:h-[13px] max-md:text-[8px] max-md:right-1.5">
              1
            </span>
          </div>

          {/* Hamburger icon (mobile only) */}
          <button
            className="md:hidden text-4xl text-[#ff6413]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* 🔸 Bottom Nav (desktop only) */}
      <div className="bg-[#565656] text-white hidden md:flex items-center space-x-5 px-24 py-2 text-sm font-poppins">
        <div className="flex items-center cursor-pointer space-x-2">
          <FiMenu />
          <span className="font-semibold text-[18px]">All</span>
        </div>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] text-[#D2D2D2]">
          Live Streams
        </span>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] text-[#D2D2D2]">
          Customer Service
        </span>

        <span className="cursor-pointer hover:text-orange-400 text-[16px] text-[#D2D2D2]">
          Sale
        </span>
      </div>

      {/* 🔸 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFEFE6] shadow-md p-4 flex flex-col space-y-3 md:hidden z-50">
          {/* Search bar inside mobile menu */}
          <div className="flex items-stretch border border-[#ff6413] rounded-xl overflow-hidden">
            <select
              className="bg-gray-100 text-gray-600 text-sm px-3 py-1 outline-none"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option>All</option>
            </select>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 px-2 outline-none text-sm"
            />
            <button className="bg-[#ff6413] text-white flex items-center justify-center px-3">
              <FiSearch className="text-base" />
            </button>
          </div>

          {/* Menu items */}
          <span className="cursor-pointer hover:text-orange-600 font-poppins text-gray-700">
            All
          </span>
          <span className="cursor-pointer hover:text-orange-600 font-poppins text-gray-700">
            Live Streams
          </span>
          <span className="cursor-pointer hover:text-orange-600 font-poppins text-gray-700">
            Customer Service
          </span>
          <span className="cursor-pointer hover:text-orange-600 font-poppins text-gray-700">
            Sale
          </span>
        </div>
      )}
    </div>
  );
}
