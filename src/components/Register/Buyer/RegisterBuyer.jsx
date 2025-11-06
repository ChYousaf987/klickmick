import React from "react";
import { FaUser, FaEnvelope, FaLock, FaGlobe } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

export default function RegisterBuyer() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6600] to-[#566990] py-10 px-4">
            <div className="bg-[#FFCBB1] w-full max-w-4xl opacity-100 rounded-[60px] p-6 sm:p-[96px] shadow-lg">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[22px] sm:text-2xl font-montserrat font-bold text-[#3c3c3c]">
                        Register as Buyer
                    </h2>
                    <p className="text-[#3c3c3c] font-poppins text-sm sm:text-base mt-1">
                        Create Account & Start your Journey
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Nick Name */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        <div className="flex sm:flex-none items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaUser className="text-lg sm:block hidden" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                Nick Name
                            </label>
                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                />
                                <button type="button" className="text-green-600 rounded-full px-2 py-[2px] text-xs hidden sm:flex">
                                    <IoMdCheckmark className="size-[15px]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* First & Last Name */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaUser className="text-lg sm:block hidden" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                    First Name
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                    Last Name
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaEnvelope className="text-lg sm:block hidden" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                Email
                            </label>
                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaLock className="text-lg sm:block hidden" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                Password
                            </label>
                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaGlobe className="text-lg sm:block hidden" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                Address
                            </label>
                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Zip + Phone */}
                    {/* Zip + Phone */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        {/* Icon for this section (like other fields) */}
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaGlobe className="text-lg sm:block hidden" />
                        </div>

                        {/* Inputs */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            {/* Zip Code */}
                            <div className="flex flex-col w-full">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                    Zip Code
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter zip code"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col w-full">
                                <div className="flex flex-col w-4/5 mx-auto sm:w-full">
                                    {/* Label aligned with input only */}
                                    <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 sm:ml-12 ml-0">
                                        Phone Number
                                    </label>

                                    <div className="flex items-center gap-3">
                                        {/* Icon outside input */}
                                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex hidden">
                                            <FiPhone className="text-lg" />
                                        </div>

                                        {/* Input field */}
                                        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1">
                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* City + Country */}
                    <div className="flex sm:flex-row flex-col items-start gap-3 w-full">
                        {/* Icon for this section */}
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6 sm:mt-6 sm:flex sm:w-10 sm:h-10 sm:visible invisible sm:visible">
                            <FaGlobe className="text-lg sm:block hidden" />
                        </div>

                        {/* Inputs */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            {/* City */}
                            <div className="flex flex-col w-full">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 text-center sm:text-left">
                                    City
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-4/5 mx-auto sm:w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter city"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div className="flex flex-col w-full">
                                <div className="flex flex-col w-4/5 mx-auto sm:w-full">
                                    {/* Label aligned with input only */}
                                    <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 sm:ml-12 ml-0">
                                        Country
                                    </label>

                                    <div className="flex items-center gap-3">
                                        {/* Icon outside input */}
                                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md sm:flex hidden">
                                            <FaGlobe className="text-lg" />
                                        </div>
                                        {/* Input field */}
                                        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1">
                                            <input
                                                type="text"
                                                placeholder="Enter country"
                                                className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Continue Button */}
                    <div className="flex justify-center">
                        <button className="w-4/5 sm:w-[467px] bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 mt-3">
                            Continue
                        </button>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-gray-500 text-center mt-2">
                        NOTE: The Solokart platform is not responsible for lost orders or incorrect addresses and packages not received by the postal service.
                    </p>
                </form>
            </div>
        </div>
    );
}
