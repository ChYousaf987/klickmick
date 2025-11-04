import React from "react";
import { BsCalculator } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import {
    FiMail,
    FiMessageCircle,
    FiUsers,
    FiShield,
} from "react-icons/fi";

const features = [
    {
        icon: <FiMail className="w-6 h-6 text-white" />,
        title: "Email Notifications",
        description:
            "Participate in auctions or make instant purchases during live streams.",
    },
    {
        icon: <FiMessageCircle className="w-6 h-6 text-white" />,
        title: "Live Chat System",
        description:
            "Participate in auctions or make instant purchases during live streams.",
    },
    {
        icon: <FiUsers className="w-6 h-6 text-white" />,
        title: "Seller Friend System",
        description:
            "Participate in auctions or make instant purchases during live streams.",
    },
    {
        icon: <CgBox className="w-6 h-6 text-white" />,
        title: "Secure Payment Guarantee",
        description:
            "Participate in auctions or make instant purchases during live streams.",
    },
    {
        icon: < BsCalculator className="w-6 h-6 text-white" />,
        title: "Smart Calculator",
        description:
            "Participate in auctions or make instant purchases during live streams",
    },
    {
        icon: <FiShield className="w-6 h-6 text-white" />,
        title: "Buyer Protection",
        description:
            "Participate in auctions or make instant purchases during live streams",
    },
];

export default function PlatformFeatures() {
    return (
        <section className="bg-[#FFF1EB] py-16 px-6 sm:px-32 ">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-2">
                    Platform Features
                </h2>
                <p className="text-gray-600 mb-12 font-poppins">
                    Everything you need for a seamless shopping experience
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-left justify-items-center sm:justify-items-start">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 max-w-md w-full sm:w-auto mx-12"
                        >
                            {/* Icon */}
                            <div className="bg-[#ff6413] p-3 rounded-md flex items-center justify-center shadow-md shrink-0">
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0px] text-[#8D8D8D]">
                                    {feature.title}
                                </h3>
                                <p className="font-sans font-normal text-[14px] leading-[20px] tracking-[0px] text-[#8D8D8D]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
