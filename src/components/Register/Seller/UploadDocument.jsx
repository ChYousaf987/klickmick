import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
const UploadDocument = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6600] to-[#566990] px-4 py-20">
      {/* Main Card */}
      <div className="bg-[#FFCBB1] w-full max-w-[820px] rounded-[40px] shadow-lg p-6 sm:p-10 text-center">

        {/* Header */}
        <h2 className="text-[22px] sm:text-[28px] font-bold text-[#3c3c3c] font-montserrat">
          Register as Seller
        </h2>
        <p className="text-[#3c3c3c] font-poppins text-sm sm:text-[15px] mt-1">
          Create Account & Start your Journey
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center items-center space-x-2 mt-3">
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          <span className="w-3 h-3 bg-[#8888] rounded-full"></span>
        </div>

        {/* Upload Boxes */}
        <div className="mt-10 space-y-6">
          {/* Box 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[85%] sm:w-[75%]">
              <p className="text-[#3c3c3c] font-poppins text-left mb-1 text-[13px]">
                Proof of Company Registration
              </p>
              <div className="border-2 border-dashed border-[#90A4AE] rounded-xl p-6 h-32 hover:border-orange-500 transition bg-[#d7d7d7] flex justify-center items-center">
                <button className="flex items-center justify-center mx-auto bg-orange-100 hover:bg-orange-200 text-[#FF6600] font-semibold px-3 py-2  rounded-lg border border-dashed border-orange-400 transition w-[60%] max-sm:w-[80%] max-sm:text-xs">
                  <FiUploadCloud className="mr-2" /> Upload Document
                </button>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[85%] sm:w-[75%]">
              <p className="text-[#3c3c3c] font-poppins text-left mb-1 text-[13px]">
                Copy of ID or Citizen’s Kaarar
              </p>
              <div className="border-2 border-dashed border-[#90A4AE] rounded-xl p-6 h-32 hover:border-orange-500 transition bg-[#d7d7d7] flex justify-center items-center">
                <button className="flex items-center justify-center mx-auto bg-orange-100 hover:bg-orange-200 text-[#FF6600] font-semibold px-3 py-2 rounded-lg border border-dashed border-orange-400 transition w-[60%]  max-sm:w-[80%] max-sm:text-xs max-sm:mt-0">
                  <FiUploadCloud className="mr-2" /> Upload Document
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="mt-10">
          <h3 className="text-[16px] font-semibold text-[#3c3c3c] font-poppins mb-1">
            Upload Your Image
          </h3>
          <p className="text-[#3c3c3c] text-sm font-poppins mb-4">
            Create Account & start your Journey
          </p>

          {/* Circular Upload Area */}
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#FF6600] bg-white shadow-inner flex items-center justify-center">
            <img
              src="/home.png"
              alt="Upload Preview"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Upload Button */}
          <div className="mt-4">
            <button className="w-[60%] mx-auto border border-dashed border-[#FF6413] text-[#FF6413] font-semibold py-2 rounded-[10px] hover:bg-orange-100 transition font-opensans text-[18px] max-sm:w-[80%] max-sm:text-[16px]">
              Upload
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <Link to="/face">
        <button className="w-[60%] mx-auto bg-[#FF6413] text-white font-semibold py-3 rounded-[10px] hover:bg-orange-600 transition mt-6 font-opensans text-[18px] max-sm:w-[80%] max-sm:text-[16px]">
          Continue
        </button>
        </Link>
        

        {/* Footer Note */}
        <p className="text-xs text-[#6B7280] font-sans mt-3">
          Note: API image limits & documents required for all users of this stream.
        </p>
      </div>
    </div>
  );
};

export default UploadDocument;
