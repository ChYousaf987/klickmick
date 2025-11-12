import React from "react";
import { FaUser, FaSmile, FaDollarSign, FaStar } from "react-icons/fa";

const CreatorPage = () => {
    return (
        <div className="min-h-screen bg-[#FFEDE4] py-8 px-6 flex justify-center">
            <div className="w-[96%] grid grid-cols-1 md:grid-cols-[2fr_1fr] ">
                {/* ===== Left Section ===== */}
                <div className="bg-[#FFEDE4] rounded-2xl">
                    {/* Video */}
                    <div className="relative rounded-xl overflow-hidden ml-10">
                        <video
                            src="/video1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[1114px] h-[300px] md:h-[380px] object-cover rounded-xl"
                        ></video>

                        {/* Live Label */}
                        <div className="absolute top-4 left-4  text-white text-sm font-semibold px-2 py-1 rounded-full">
                            Live
                        </div>
                    </div>

                    {/* Bid Section */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start    gap-3 mt-6">
                        <p className="text-lg ml-32 font-bold font-montserrat text-gray-700">Add your Bid</p>

                        <div className=" flex ">
                            <button className="bg-[#ff6413] border  px-4 py-2 rounded-s-full flex items-center ">
                                <span className="text-white text-lg font-bold">−</span>
                            </button>

                            <button className="border-t-2 border-b-2 border-[#ff6413] text-[#09b100] px-8 py-2 flex items-center  font-semibold">
                                <FaDollarSign /> 10
                            </button>

                            <button className="bg-[#ff6413] border px-4 py-2 rounded-e-full flex items-center gap-2">
                                <span className="text-white text-lg font-bold">+</span>
                            </button>
                        </div>
                        <div className="w-11 h-11 bg-[#ff6413] rounded-full flex items-center justify-center text-white font-medium text-[15px]">
                            Bid
                        </div>
                          <p className="text-lg  font-medium font-opensans text-[#000000]">or </p>
                        <button className="bg-orange-500 text-white px-10 py-2 rounded-md font-semibold hover:bg-orange-600">
                            Buy Now
                        </button>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-gray-800  pl-6 mb-4">
                            Comments
                        </h3>

                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className=" p-4 pl-6"       
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                            <FaUser size={14} />
                                        </div>
                                        <p className="font-semibold text-gray-700">Alex White</p>
                                    </div>
                                    <p className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0px] text-[#000000] bg-[#FFEDE4]  flex justify-center">
                                        Lorem ipsum dolor sit amet consectetur. Eu pellentesque sit massa erat. Lorem ac tortor aenean sit. Amet amet augue id aliquam orci amet. Quis in vitae a dignissim hendrerit. Suspendisse fusce ut semper egestas orci pellentesque non. Ornare interdum felis rhoncus adipiscing iaculis posuere. Morbi pretium purus diam pulvinar vulputate. Aliquet porttitor phasellus risus duis vivamus dapibus tortor ornare arcu.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Right Profile Card ===== */}
                <div className="flex flex-col items-center md:items-start bg-[#FFEDE4]">
                    <div className=" w-full md:w-[300px]  p-6 static ml-9 space-y-4 pl-6 top-10">
                        {/* Avatar */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                L
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800 text-lg flex items-center gap-16">
                                    LUMÉA{"  "}
                                    <span className="flex items-center text-yellow-400 text-sm">
                                        <FaStar className="mr-1 size-3" /> 4.5
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="font-poppins font-normal text-[12px] sm:text-[12px] md:text-[12px] leading-[120%] tracking-[0px] text-gray-700 text-start">
                            Illuminate your natural beauty with LUMÉA — a minimal skincare
                            line crafted to restore your skin’s glow, balance, and
                            confidence. Clean. Calm. Effortlessly radiant.
                        </p>

                        {/* Button */}
                        <button className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-all">
                            Add as a Friend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorPage;
