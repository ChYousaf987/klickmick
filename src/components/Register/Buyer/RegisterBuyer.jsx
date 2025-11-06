import React from "react";
import { FaUser, FaEnvelope, FaLock, FaGlobe } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RegisterBuyer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6600] to-[#566990] py-10 px-4">
      <div className="bg-[#FFCBB1] w-full max-w-4xl opacity-100 rounded-[60px] p-6 sm:p-[96px] shadow-lg max-md:rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-2xl font-montserrat font-bold text-[#3c3c3c]">
            Register as Buyer
          </h2>
          <p className="text-[#3c3c3c] font-poppins text-sm sm:text-base mt-1">
            Create Account & Start your Journey
          </p>
        </div>

        <form className="space-y-6">

          {/* Nick Name */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaUser className="text-lg " />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 max-sm:text-left sm:text-left">
                Nick Name
              </label>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                />
                <button type="button" className="text-green-600 rounded-full px-2 py-[2px] text-xs hidden sm:flex">
                  <IoMdCheckmark className="size-[15px]" />
                </button>
              </div>
            </div>
          </div>

          {/* First & Last Name */}
          <div className="flex sm:flex-row sm:justify-center sm:items-center flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaUser className="text-lg" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-sm:flex-col">
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left ">
                  First Name
                </label>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                  Last Name
                </label>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaEnvelope className="text-lg" />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                Email
              </label>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaLock className="text-lg" />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                Password
              </label>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaGlobe className="text-lg" />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                Address
              </label>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                />
              </div>
            </div>
          </div>

          {/* Zip + Phone (kept both) */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaGlobe className="text-lg" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-sm:flex-col">
              {/* Zip Code */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                  Zip Code
                </label>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left sm:ml-12">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 w-full">
                  {/* icon shown on desktop only */}
                  <div className="items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex hidden max-sm:hidden">
                    <FiPhone className="text-lg" />
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1 w-full max-sm:rounded-xl">
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* City + Country (kept both) */}
          <div className="flex sm:flex-row flex-col items-start gap-3 w-full max-sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex max-sm:hidden">
              <FaGlobe className="text-lg" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-sm:flex-col">
              {/* City */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left">
                  City
                </label>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full max-sm:mx-0 max-sm:rounded-xl">
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-[#3c3c3c] mb-1 max-sm:text-left sm:text-left sm:ml-12">
                  Country
                </label>
                <div className="flex items-center gap-3 w-full">
                  <div className="items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex hidden max-sm:hidden">
                    <FaGlobe className="text-lg" />
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1 w-full max-sm:rounded-xl">
                    <input
                      type="text"
                      placeholder="Enter country"
                      className="flex-1 bg-transparent outline-none text-[#a4a4a4]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Link to="/upload">
            <div className="flex justify-center">
              <button className="w-4/5 sm:w-[467px] bg-orange-500 text-white my-7 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-200">
                Continue
              </button>
            </div>
          </Link>

          <p className="text-xs text-gray-500 text-center mt-2">
            NOTE: The Solokart platform is not responsible for lost orders or incorrect addresses and packages not received by the postal service.
          </p>
        </form>
      </div>
    </div>
  );
}
