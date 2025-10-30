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
      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full sm:w-[80%]">
          {/* 🎥 Video Area */}
          <div className="h-[65%]">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[370px] object-cover"
            ></video>
          </div>

          {/* Bottom Info */}
          <div className="p-5">
            <div className="flex items-center gap-4 my-7 mx-6">
              {/* 🔴 Red “L” Circle */}
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg">
                L
              </div>

              {/* Username */}
              <div className="flex items-center justify-center text-gray-800 font-bold text-lg">
                Lumia
              </div>

              {/* 👤 User Icon + Number */}
              <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                <FaUser className="text-gray-500" /> 1.2k
              </div>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              Join our live session and explore trending products from verified
              sellers in real time. Interact, shop, and enjoy!
            </p>
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
              <div className="flex items-center justify-center bg-black h-[350px]">
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
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-base">
                    L
                  </div>
                  <div className="flex items-center justify-center text-gray-800 font-bold text-lg">
                    Lumia
                  </div>
                  <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                    <FaUser className="text-gray-500" />{" "}
                    {Math.floor(Math.random() * 900 + 100)}+
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Catch our exclusive live event featuring top trending items
                  and interactive demos.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== View All Button ========== */}
      <div className="flex justify-center">
        <button className=" text-gray-800 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300">
          View All
        </button>
      </div>
    </div>
  );
}
