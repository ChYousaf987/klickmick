import React from "react";
import { FaShoppingBag, FaCheckCircle, FaTruck } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#FFEFE6] py-10 flex justify-center opacity-90">
        <div className="relative w-[95%] h- sm:w-[90%] lg:w-[85%] rounded-3xl shadow-md overflow-hidden flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-5 ">

          {/* 🔹 Blurred Background Layer */}
          <div
            className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center bg-no-repeat blur-[6px] brightness-75"
          ></div>

          {/* 🔹 Content Layer (above blur) */}
          <div className="relative z-10 lg:w-1/2 space-y-4 sm:space-y-5 text-center lg:text-left text-white py-20 pl-12">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white text-orange-600 font-medium px-3 py-1 rounded-full shadow-sm text-xs sm:text-sm">
              <FaShoppingBag className="text-orange-600 w-[24px] h-[24px] rotate-0 opacity-100" />
              <span className="font-opensans font-semibold text-[13px] leading-[100%] tracking-[0] text-right text-[#000000]">
                The Best Online Store
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-[#ff6413] pt-6 pb-2 leading-relaxed">
              <span>Shop Live,</span>
              <br />
              <span className="block mt-4">Connect Globally</span>
            </h1>


            <div className="w-[515px] h-[90px] pr-8">
              <p className="font-poppins font-normal text-[16px] leading-[150%] tracking-[-1px] text-gray-100 opacity-100">
                Experience the thrill of live shopping with Klickmick. Discover unique products,
                interact with sellers, and join a vibrant community of buyers and sellers
                across Ukraine, USA, and Europe.
              </p>
            </div>


            {/* Button */}
            <button className="bg-[#ff6413] hover:bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold transition duration-300 text-sm sm:text-base w-[320px] h-[63px]">
              Let’s Begin Your Journey
            </button>
          </div>

          {/* 🔹 RIGHT IMAGE SECTION */}
          <div className="relative right-[-10px] lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center z-10">
            {/* IMAGE */}
            <img
              src="/home.png"
              alt="Product Display"
              className="rounded-[36px] w-[75%] sm:w-[65%] lg:w-[55%] object-cover"
            />

            {/* ROTATED BORDERS */}
            <div className="absolute w-[240px] sm:w-[260px] md:w-[310px] h-[240px] sm:h-[260px] md:h-[310px] border-[2px] border-[#a2a2a2] rounded-[40px] rotate-[14deg]"></div>
            <div className="absolute w-[240px] sm:w-[260px] md:w-[310px] h-[240px] sm:h-[260px] md:h-[310px] border-[2px] border-[#a2a2a2] rounded-[40px] -rotate-[18deg]"></div>

            {/* FLOATING BADGES */}
            <div className="absolute top-2 sm:top-8 right-2 sm:right-16 bg-white shadow-lg px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-medium font-opensans">
              <FaCheckCircle className="bg-[#ff6413] text-white rounded-full p-1 text-xl" /> Verified Sellers
            </div>

            <div className="absolute bottom-28 left-4 sm:left-6 bg-white shadow-lg px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-medium font-opensans">
              <RiLockPasswordFill className="bg-[#ff6413] text-white rounded-full p-1 text-xl" /> Secure Payment
            </div>

            <div className="absolute bottom-2 sm:bottom-4 right-3 sm:right-12 bg-white shadow-lg px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm font-medium font-opensans">
              <FaTruck className="bg-[#ff6413] text-white rounded-full p-1 text-xl" /> Fast Delivery
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
