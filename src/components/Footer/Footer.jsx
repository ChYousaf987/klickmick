// src/components/Footer.jsx
import React from "react";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";

const Footer = () => {
    return (
        <footer
            className="pt-10 py-1 px-6 text-gray-700"
            style={{
                background: "linear-gradient(180deg, #FFD2BA 0%, #6A7DA6 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* 🔸 Top Section: Two parent rows (each containing two columns) */}
                <div className="flex flex-col gap-8 mb-6 w-[70%] mx-auto">
                    {/* 🔹 Parent Row 1 */}
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Logo & Description */}
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                    <img src="/FooterLogo.png" alt="logo" />
                                </div>
                                <span className="text-xl font-bold font-montserrat text-white">
                                    Klickmick
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed max-w-xs font-montserrat text-[#2a2a2a]">
                                Connecting buyers and sellers through live shopping streams
                                across Ukraine, USA, and Europe.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-3 font-montserrat">Quick Links</h3>
                            <ul className="space-y-1 text-sm font-montserrat text-[#2a2a2a]">
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Categories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Live Streams
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Parent Row 2 */}
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {/* Support */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-2 font-montserrat">Support</h3>
                            <ul className="space-y-1 text-sm font-montserrat text-[#2a2a2a]">
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Payment Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Terms & Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-500 transition">
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-3 font-montserrat">Contact</h3>
                            <ul className="space-y-2 text-sm font-montserrat text-[#2a2a2a]">
                                <li className="flex items-center gap-2">
                                    <FiMail className="text-orange-500 text-lg" />
                                    <a
                                        href="mailto:support@klickmick.com"
                                        className="hover:text-orange-500 transition"
                                    >
                                        support@klickmick.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FiPhone className="text-orange-500 text-lg" />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FiGlobe className="text-orange-500 text-lg" />
                                    <span>USA, Europe, Ukraine</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Decorative Line */}
                <div className="relative my-0">
                    <div className="absolute inset-0 flex items-center">
                        {/* White Border Line */}
                        <div className="w-full border-t border-gray-500"></div>
                    </div>
                    <div className="relative flex justify-center">
                        {/* Center Gradient Circle Section */}
                        <div className="bg-gradient-to-b from-[#cfcecd] to-[#dae0ef] px-4">
                            
                        </div>
                    </div>
                </div>


                {/* Bottom Row (unchanged) */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#C9C9C9] max-md:text-xs ">
                    <p>© Klickmick Platform. All Rights Reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <span>We Accept:</span>
                        <div className="flex gap-2">
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                                VISA
                            </div>
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                                MC
                            </div>
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">
                                PP
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
