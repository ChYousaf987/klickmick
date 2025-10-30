import React from "react";
import { FaUser } from "react-icons/fa";

export default function LiveStreaming() {
  return (
    <div className="bg-[#FFEFE6] min-h-screen py-8 px-4 sm:px-10 w-full">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
        Live Streaming
      </h1>

      {/* ========== SECTION 1: Single Big Card ========== */}
      <div className="flex justify-center mb-10 w-[1184px] px-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full sm:w-[80%]">
          {/* 🎥 Video Area */}
          <div className="h-[65%]">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[470px] object-cover rounded-[20px]"
            ></video>
          </div>

          {/* Bottom Info */}
          <div className="p-5">
            <div className="flex items-center gap-8 mt-12 mx-6">
              {/* 🔴 Red “L” Circle */}
              <div className="w-8 h-8 rounded-full bg-[#ff6413] flex items-center justify-center text-white font-montserrat font-bold text-[20px] leading-[100%] tracking-[0px] text-center">
                L
              </div>

              {/* Username */}
              <div className="w-8 h-8 flex items-center justify-center text-black font-montserrat font-bold text-[20px] leading-[100%] tracking-[0px] text-center">
                Lumia
              </div>

              {/* 👤 User Icon + Number */}
              <div className="flex items-center pl-52 gap-2 text-gray-600 font-medium">
                <FaUser className="text-gray-500" /> 789
              </div>
            </div>

            {/* 📝 Description */}
            <div className="w-[552px] h-[65px]  left-[36px] opacity-100 text-gray-700">

              <div className="w-[552px] left-[36px] opacity-100 text-gray-700">
                <p className="font-poppins font-normal text-[16px] leading-[120%] tracking-[0px] pt-8 text-gray-700 mx-6">
                  Illuminate your natural beauty with LUMÉA — a minimal skincare line crafted
                  to restore your skin’s glow, balance, and confidence. Clean. Calm.
                  Effortlessly radiant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 2: Three Smaller Cards ========== */}
      <div className="w-full sm:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 "
            >
              {/* 🎥 Video Area */}
              <div className="flex items-center justify-center bg-black h-[380px]">
                <video
                  src="/video.mp4" // ✅ Same video for all cards
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>

              {/* Bottom Info */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-full bg-[#ff6413] flex items-center justify-center text-white font-montserrat font-bold text-[20px] leading-[100%] tracking-[0px] text-center">
                L
              </div>
                  <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                    <FaUser className="text-gray-500" />{" "}
                    {Math.floor(Math.random() * 789)}
                  </div>
                </div>

                  <p className="font-poppins font-normal text-[12px] leading-[120%] tracking-[0px] pt-2 text-gray-700 mx-6">
                 Illuminate your natural beauty with LUMÉA — a minimal skincare line crafted to restore your skin’s glow, balance, and confidence. Clean. Calm. Effortlessly radiant.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== View All Button ========== */}
      <div className="flex justify-center">
        <button className=" text-gray-800 font-medium px-6 rounded-full hover:bg-gray-100 transition-all duration-300">
          View All
        </button>
      </div>
    </div>
  );
}
