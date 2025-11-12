import React, { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiX,
  FiBell,
  FiUser,
} from "react-icons/fi";

export default function Navbar({ showIcons }) {
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

        {/* 🔸 Center: Search Bar */}
        <div className="hidden md:flex items-stretch border border-[#ff6413] rounded-lg overflow-hidden w-3/4 max-w-xl">
          <select
            className="bg-gray-100 text-gray-600 text-sm px-4 py-1 outline-none"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
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

        {/* 🔸 Right Side Icons */}
        <div className="flex items-center space-x-5">
          {showIcons ? (
            <>
              {/* User Icon */}
              <div className="relative">
                <FiUser className="text-2xl text-black cursor-pointer" />
                <span className="absolute -top-2 -right-2 w-[14px] h-[14px] bg-[#ff6413] text-white text-[10px] flex items-center justify-center rounded-full">
                  1
                </span>
              </div>

              {/* Notification Icon */}
              <div className="relative">
                <FiBell className="text-2xl text-black cursor-pointer" />
                <span className="absolute -top-2 -right-2 w-[14px] h-[14px] bg-[#ff6413] text-white text-[10px] flex items-center justify-center rounded-full">
                  1
                </span>
              </div>

              {/* 🟠 Cart Icon */}
              <div className="relative">
                <FiShoppingCart className="text-2xl text-black cursor-pointer" />
                <span className="absolute -top-2 -right-2 w-[14px] h-[14px] bg-[#ff6413] text-white text-[10px] flex items-center justify-center rounded-full">
                  1
                </span>
              </div>

              {/* 🟢 Profile Picture */}
              <div className="relative">
                <img
                  src="/uploadimg.png"
                  alt="Profile"
                  className="w-9 h-9 rounded-full border border-[#ff6413] object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
            </>
          ) : (
            /* 🟠 Default: Only Cart Icon */
            <div className="relative">
              <FiShoppingCart className="text-2xl text-black cursor-pointer" />
              <span className="absolute -top-2 -right-2 w-[14px] h-[14px] bg-[#ff6413] text-white text-[10px] flex items-center justify-center rounded-full">
                1
              </span>
            </div>
          )}

          {/* Hamburger (mobile only) */}
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

      {/* 🔸 Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFEFE6] shadow-md p-4 flex flex-col space-y-3 md:hidden z-50">
          <div className="flex items-stretch border border-[#ff6413] rounded-xl overflow-hidden">
            <select
              className="bg-gray-100 text-gray-600 text-sm px-3 py-1 outline-none"
              style={{ WebkitAppearance: "none", MozAppearance: "none" }}
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
