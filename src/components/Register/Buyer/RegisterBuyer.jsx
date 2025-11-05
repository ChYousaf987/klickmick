import React from "react";
import { FaUser, FaEnvelope, FaLock, FaGlobe } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";

export default function RegisterBuyer() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6600] to-[#566990]  py-20">
            <div
                className="bg-[#FFCBB1] w-auto h-auto opacity-100 rounded-[60px]
        pt-[96px] pr-[100px] pb-[96px] pl-[100px] gap-[10px] shadow-lg"
            >
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[22px] font-montserrat font-bold text-[#3c3c3c]">
                        Register as Buyer
                    </h2>
                    <p className="text-[#3c3c3c] font-poppins text-sm mt-1">
                        Create Account & Start your Journey
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Nick Name */}
                    <div>
                        <div className="flex items-start gap-3">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaUser className="text-lg" />
                            </div>

                            {/* Label + Input */}
                            <div className="flex flex-col flex-1">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                    Nick Name
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                    <button
                                        type="button"
                                        className="text-green-600 rounded-full px-2 py-[2px] text-xs"
                                    >
                                        <IoMdCheckmark className="size-[15px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* First & Last Name */}
                    <div>
                        <div className="flex items-start gap-3">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaUser className="text-lg" />
                            </div>

                            {/* Label + Inputs */}
                            <div className="flex flex-col flex-1">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                    First & Last Name
                                </label>
                                <div className="flex gap-4">
                                    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-1/2">
                                        <input
                                            type="text"
                                            placeholder="Search here"
                                            className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                        />
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-1/2">
                                        <input
                                            type="text"
                                            placeholder="Search here"
                                            className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaEnvelope className="text-lg" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                    Email
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                    <input
                                        type="email"
                                        placeholder="Search here"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaLock className="text-lg" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                    Password
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                    <input
                                        type="password"
                                        placeholder="Search here"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaGlobe className="text-lg" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                    Address
                                </label>
                                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zip + Phone */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaGlobe className="text-lg" />
                            </div>

                            <div className="flex flex-col flex-1">
                                <div className="flex gap-4">
                                    {/* Zip Code */}
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                            Zip Code
                                        </label>
                                        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                            <input
                                                type="text"
                                                placeholder="Search here"
                                                className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Number with icon outside */}
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 ml-12">
                                            Phone Number
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md ">
                                                <FiPhone className="text-lg" />
                                            </div>
                                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Search here"
                                                    className="w-full bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* City & Country */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md mt-6">
                                <FaGlobe className="text-lg" />
                            </div>

                            <div className="flex flex-col flex-1">
                                <div className="flex gap-4">
                                    {/* City */}
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1">
                                            City
                                        </label>
                                        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                                            <input
                                                type="text"
                                                placeholder="Search here"
                                                className="flex-1 bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold "
                                            />
                                        </div>
                                    </div>

                                    {/* Country with icon outside */}
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#3c3c3c] font-poppins mb-1 ml-12">
                                            Country
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-[#FF6413] to-[#FF8342] text-white rounded-full shadow-md ">
                                                <FaGlobe className="text-lg" />
                                            </div>
                                            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Search here"
                                                    className="w-full bg-transparent outline-none text-[#a4a4a4] font-opensans font-semibold "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="w-[467px] h-[px] bg-orange-500 text-white py-3 rounded-lg  ml-44  font-medium hover:bg-orange-600 transition-all duration-200 mt-3"
                    >
                        Continue
                    </button>

                    {/* Note */}
                    <p className="text-xs text-gray-500 text-center mt-2">
                        NOTE: The Solokart platform is not responsible for lost orders or
                        incorrect addresses and packages not received by the postal service.
                    </p>
                </form>
            </div>
        </div>
    );
}
