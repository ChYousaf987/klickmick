import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import added

const LiveVideo = () => {
  return (
    <>
      <div className="bg-[#FFEFE6] min-h-screen py-8 px-4 sm:px-6 md:px-10 w-full">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-start sm:text-center">
          Live Streaming
        </h1>

        {/* ========== SECTION 1: Single Big Card ========== */}
        <div className="flex justify-center mb-5 sm:mb-10 w-full">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-[1184px] sm:w-[90%] md:w-[80%]">
            {/* 🎥 Video Area */}
            <div className="h-[280px] sm:h-[360px] md:h-[440px]">
              <video
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>
            </div>

            {/* Bottom Info */}
            <div className="p-4 sm:p-5 md:p-6">
              <Link to="/CreatorPage">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-2 cursor-pointer">
                  {/* 🔴 Red “L” Circle */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#ff6413] flex items-center justify-center text-white font-montserrat font-bold text-[18px] sm:text-[20px] md:text-[22px]">
                    L
                  </div>

                  {/* Username */}
                  <div className="text-black font-montserrat font-bold text-[18px] sm:text-[20px] md:text-[22px]">
                    Lumia
                  </div>

                  {/* 👤 User Icon + Number */}
                  <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                    <FaUser className="text-gray-500" /> 789
                  </div>
                </div>
              </Link>

              {/* 📝 Description */}
              <div className="w-full sm:w-[90%] md:w-[552px] mt-4 text-gray-700">
                <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[120%]">
                  Illuminate your natural beauty with LUMÉA — a minimal skincare
                  line crafted to restore your skin’s glow, balance, and
                  confidence. Clean. Calm. Effortlessly radiant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: Three Smaller Cards ========== */}
        <div className="w-full sm:w-[95%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* 🎥 Video Area */}
                <div className="flex items-center justify-center bg-black h-[280px] sm:h-[320px] md:h-[400px]">
                  <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>
                </div>

                {/* Bottom Info */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#ff6413] flex items-center justify-center text-white font-montserrat font-bold text-[18px] sm:text-[20px] md:text-[20px]">
                      L
                    </div>
                    <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                      <FaUser className="text-gray-500" />{" "}
                      {Math.floor(Math.random() * 789)}
                    </div>
                  </div>

                  <p className="font-poppins font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[120%] text-gray-700 text-start">
                    Illuminate your natural beauty with LUMÉA — a minimal skincare
                    line crafted to restore your skin’s glow, balance, and
                    confidence. Clean. Calm. Effortlessly radiant.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== View All Button ========== */}
        <div className="flex justify-center">
          <button className="text-gray-800 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveVideo;
