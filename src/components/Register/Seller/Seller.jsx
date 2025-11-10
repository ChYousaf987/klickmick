import React from "react";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6600] to-[#566990] p-4 sm:p-16">
      <div className="bg-[#FFE3D1] w-full max-w-4xl rounded-[40px] p-10 shadow-lg text-center">
        {/* Header */}
        <h2 className="text-[22px] sm:text-[34px] font-montserrat font-bold text-[#3c3c3c]">
          Select Your Plan
        </h2>
        <p className="text-[#3c3c3c] font-poppins text-sm sm:text-[16px] mt-1">
          Create Account & Start your Journey
        </p>

        {/* Dots */}
        <div className="flex justify-center items-center space-x-2 mt-3">
          <span className="w-3 h-3 bg-[#ff6413] rounded-full"></span>
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
        </div>

        {/* Plans Section */}
        <div className=" flex justify-between items-center sm:mx-40 mx-24 mt-5  ">
          <p className="text-[#FF6413] font-semibold text-[20px] max-sm:mx-auto ">
            Plan - 1
          </p>
          <p className="text-[#FF6413] max-sm:hidden font-semibold text-[20px] ">
            Plan - 2
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 ">
          {/* Plan 1 */}
          <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-lg transition-all duration-200 ">
            <h3 className="text-[20px] font-semibold  text-[#3c3c3c] font-poppins mb-1">
              Starter Seller Plan
            </h3>
            <p className="text-[16px]   text-[#3c3c3c] font-poppins mb-4">
              Duration: 6 Months
            </p>
            <h4 className="text-3xl font-bold text-green-600 mb-6">$10</h4>
            <ul className="text-[16px] text-[#3c3c3c] font-poppins space-y-2 text-left mb-6">
              <li className="flex items-center gap-2 max-sm:text-xs ">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Access to all seller tools
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs ">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Verified seller profile
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs  ">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Stream up to 100 products
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs ">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Email & stream notifications
              </li>
            </ul>

            <Link to="/regSeller">
              <button className="w-full bg-[#FF6600] text-white font-semibold py-2 rounded-[10px] hover:bg-orange-600 transition">
                Subscribe now
              </button>
            </Link>
          </div>

          {/* Plan 2 */}
          <p className="text-[#FF6600] font-semibold sm:hidden text-[20px]">
            Plan - 2
          </p>
          <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-lg transition-all duration-200">
            <h3 className="text-[20px] font-semibold  text-[#3c3c3c] font-poppins  mb-1">
              Pro Seller Plan
            </h3>
            <p className="text-[16px]   text-[#3c3c3c] font-poppins mb-4">
              Duration: 1 Year
            </p>
            <h4 className="text-3xl font-bold text-green-600 mb-6">$16</h4>
            <ul className="text-[16px] text-[#3c3c3c] font-poppins space-y-2 text-left mb-6">
              <li className="flex items-center gap-2 max-sm:text-xs">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Access to all seller tools
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Verified seller profile
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Stream up to 100 products
              </li>
              <li className="flex items-center gap-2 max-sm:text-xs">
                <span className="text-orange-500 text-xl font-bold">•</span>
                Email & stream notifications
              </li>
            </ul>
            <Link to="/regSeller">
              <button className="w-full bg-[#FF6600] text-white font-semibold py-2 rounded-[10px] hover:bg-orange-600 transition">
                Subscribe now
              </button>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#6B7280] font-sans text-[14px] mt-6">
          Note: A 7% service fee is automatically deducted from each sale at the
          end of the stream.
        </p>
      </div>
    </div>
  );
};

export default Seller;
