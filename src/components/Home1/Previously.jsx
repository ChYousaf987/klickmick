import React from "react";
import { FaUser } from "react-icons/fa";

const Previously = () => {
    // Array of recommended videos
    const recommendedVideos = [
        {
            id: 1,
            video: "/video.mp4", // replace with your actual video file path
            likes: 789,
        },
        {
            id: 2,
            video: "/video.mp4",
            likes: 789,
        },
        {
            id: 3,
            video: "/video.mp4",
            likes: 789,
        },
        {
            id: 4,
            video: "/video.mp4",
            likes: 789,
        },
    ];

    return (
        <div className="bg-[#FFEFE6] py-10 px-4 md:px-10 rounded-lg max-sm:py-2">
            {/* Header Section */}
            <div className="sm:w-[95%] md:w-[90%] mx-auto mb-8">
                <h2 className="text-[22px] sm:text-[24px] font-semibold text-gray-800">
                    Previously Watched
                </h2>
            </div>

            {/* Grid Section */}
            <div className="w-full sm:w-[95%] md:w-[90%] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {recommendedVideos.map((videoItem) => (
                        <div
                            key={videoItem.id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* 🎥 Video Area */}
                            <div className="flex items-center justify-center bg-black h-[280px] sm:h-[300px] ">
                                <video
                                    src={videoItem.video}
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
                                    <span className="font-semibold text-gray-800 text-[14px] sm:text-[15px] md:text-[16px]">
                                        LUMÉA
                                    </span>
                                    <div className="flex items-center ml-auto gap-2 text-gray-600 font-medium">
                                        <FaUser className="text-gray-500" /> {videoItem.likes}
                                    </div>
                                </div>

                                <p className="font-poppins font-normal text-sm leading-[120%] tracking-[0px] text-gray-700 text-start line-clamp-2">
                                    Illuminate your natural beauty with LUMÉA — a minimal skincare line crafted to restore your skin’s glow, balance, and confidence. Clean. Calm. Effortlessly radiant.
                                </p>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Previously;
