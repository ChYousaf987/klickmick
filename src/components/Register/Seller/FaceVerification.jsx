import React from "react";

const FaceVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-400 to-blue-400 px-4 py-16">
      {/* Card */}
      <div className="bg-[#FFCBB1] rounded-3xl shadow-lg w-[50%] p-8 text-center 
                      max-sm:w-[90%] max-sm:p-6 max-sm:rounded-2xl max-sm:shadow-md">
        {/* Title */}
        <h2 className="text-[32px] font-bold text-[#3c3c3c] font-montserrat mb-1 
                      max-sm:text-[24px] max-sm:mb-2">
          Facial Verification
        </h2>
        <p className="text-[16px] text-[#3c3c3c] font-poppins mb-6 
                      max-sm:text-[14px] max-sm:mb-4">
          Create Account & Start your Journey
        </p>

        {/* Steps */}
        <div className="flex justify-center gap-1 mb-6 max-sm:mb-4">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i > 2 ? "bg-orange-500" : "bg-[#8888]"
              } max-sm:w-2.5 max-sm:h-2.5`}
            ></span>
          ))}
        </div>

        {/* Face Image Section */}
        <div className="relative w-[320px] h-[400px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl flex flex-col items-center justify-center shadow-md overflow-hidden mx-auto 
                        max-sm:w-[260px] max-sm:h-[320px] max-sm:rounded-2xl max-sm:mt-4">
          {/* Face Image (background) */}
          <img
            src="/bg-image.jpg"
            alt="Face Scan"
            className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl pt-4"
          />

          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

          {/* Top Instruction */}
          <p className="text-[#ffffff] text-sm font-poppins font-semibold absolute top-6 z-20 
                        max-sm:text-xs max-sm:top-4">
            Point your face directly to Camera
          </p>

          {/* Face Scan Container */}
          <div className="relative mt-20 z-20 max-sm:mt-16">
            {/* Brighter Dashed Oval Border */}
            <div className="absolute inset-0 flex items-center justify-center mb-20">
              <div className="w-36 h-44 rounded-[100%] border-[3px] border-dashed border-white/90 
                              max-sm:w-28 max-sm:h-36"></div>
            </div>

            {/* Transparent Space */}
            <div className="w-36 h-40 rounded-full max-sm:w-28 max-sm:h-32"></div>
          </div>

          {/* Progress Text */}
          <div className="text-[#ffffff] z-20 font-poppins relative -bottom-[30px] 
                          max-sm:-bottom-[20px]">
            <p className="text-sm mt-10 font-semibold max-sm:text-xs max-sm:mt-6">
              80%
            </p>
            <p className="text-xs max-sm:text-[11px]">Scanning Progress</p>
          </div>
        </div>

        {/* Register Button */}
        <button className="mt-6 w-[65%] bg-[#ff6413] text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition 
                           max-sm:w-[80%] max-sm:py-2.5 max-sm:text-sm">
          Register
        </button>

        {/* Note */}
        <p className="text-xs font-sans text-[#6b7280] mt-4 max-sm:text-[11px] max-sm:mt-3">
          Note: A 7% service fee is automatically deducted from each sale at the end of the stream.
        </p>
      </div>
    </div>
  );
};

export default FaceVerification;
