import React, { useState } from "react";
import { Link } from "react-router-dom";
const Upload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-[#3b82f6] px-4 py-14">
      <div className="bg-[#FFD8C4] w-[600px] rounded-2xl shadow-lg flex flex-col items-center p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold font-montserrat text-[#3c3c3c] mb-1">
          Upload Your Image
        </h2>
        <p className="text-[16px] text-[#3c3c3c] font-poppins mb-5 text-center">
          Create Account & Start your Journey
        </p>

        {/* Image Preview */}
        <div className="w-[220px] h-[220px] rounded-lg overflow-hidden bg-gray-200 mb-5">
          <img
            src="/uploadimg.png"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Upload Button */}
        <label className="w-[260px] cursor-pointer">
          <div className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 font-medium text-center py-2 rounded-[16px]">
            Upload
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* Register Button */}
        <Link to="/home1">
        <button className="w-[260px] mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-[16px] font-semibold transition-all duration-200">
          Register
        </button>
        </Link>
        

        {/* Note */}
        <p className="text-[10px] text-[#6b7280] mt-5 text-center leading-snug max-w-[95%]">
          NOTE: The VisionAds platform is not responsible if the client enters
          an incorrect address and the package is returned by the postal
          service.
        </p>
      </div>
    </div>
  );
};

export default Upload;
