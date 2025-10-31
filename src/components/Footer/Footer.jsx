// src/components/Footer.jsx
import React from "react";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";

const Footer = () => {
    return (
        <footer
            className="pt-10 pb-6 px-5 sm:px-6 md:px-10 text-gray-700"
            style={{
                background: "linear-gradient(180deg, #FFD2BA 0%, #6A7DA6 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* 🔸 Top Section */}
                <div className="flex flex-col gap-10 mb-8 w-full md:w-[90%] lg:w-[70%] mx-auto">
                    {/* 🔹 Parent Row 1 */}
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {/* Logo & Description */}
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src="/FooterLogo.png" alt="logo" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl font-bold font-montserrat text-white">
                                    Klickmick
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed max-w-full md:max-w-xs font-montserrat text-[#2a2a2a]">
                                Connecting buyers and sellers through live shopping streams
                                across Ukraine, USA, and Europe.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-3 font-montserrat">Quick Links</h3>
                            <ul className="space-y-1 text-sm font-montserrat text-[#2a2a2a]">
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Home</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Categories</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Live Streams</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* 🔹 Parent Row 2 */}
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {/* Support */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-2 font-montserrat">Support</h3>
                            <ul className="space-y-1 text-sm font-montserrat text-[#2a2a2a]">
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Contact Us</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Payment Security</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Terms & Privacy</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition hover:font-bold">Help Center</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex-1">
                            <h3 className="font-semibold text-white mb-3 font-montserrat">Contact</h3>
                            <ul className="space-y-2 text-sm font-montserrat text-[#2a2a2a]">
                                <li className="flex items-center gap-2 flex-wrap">
                                    <FiMail className="text-orange-500 text-lg" />
                                    <a href="mailto:support@klickmick.com" className="hover:text-orange-500 transition break-words hover:font-bold">
                                        support@klickmick.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 flex-wrap">
                                    <FiPhone className="text-orange-500 text-lg" />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-2 flex-wrap">
                                    <FiGlobe className="text-orange-500 text-lg" />
                                    <span>USA, Europe, Ukraine</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Decorative Line */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-500"></div>
                        </div>
                        <div className="relative flex justify-center">
                            
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#C9C9C9] gap-3 md:gap-0 max-md:text-xs">
                    <p>© Klickmick Platform. All Rights Reserved.</p>
                    <div className="flex items-center gap-3 md:gap-6 flex-wrap">
                        <span>We Accept:</span>
                        <div className="flex gap-2 flex-wrap">
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">VISA</div>
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">MC</div>
                            <div className="w-10 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">PP</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
