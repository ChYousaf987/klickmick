import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FiVideo ,FiShoppingCart} from "react-icons/fi";
import { TbBox } from "react-icons/tb";

const steps = [
  {
    id: "01",
    icon: <FaUserCheck className="w-7 h-7 text-[#ff6413]" />,
    title: "Register and Subscribe",
    description: "Create your account and choose your subscription plan to get started.",
  },
  {
    id: "02",
    icon: <FiVideo className="w-7 h-7 text-[#ff6413]" />,
    title: "Join Live Streams",
    description: "Browse upcoming streams and join live shopping events with your favorite sellers.",
  },
  {
    id: "03",
    icon: <FiShoppingCart className="w-7 h-7 text-[#ff6413]" />,
    title: "Place Bids or Buy Instantly",
    description: "Participate in auctions or make instant purchases during live streams.",
  },
  {
    id: "04",
    icon: <TbBox className="w-7 h-7 text-[#ff6413]" />,
    title: "Get Notified & Track Orders",
    description: "Receive updates and track your orders from purchase to delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFF1EB] py-16 px-6 sm:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-montserrat text-start sm:text-center">
          How It Works
        </h2>
        <p className="text-gray-600 mb-10 font-montserrat text-start sm:text-center">
          Get started in four simple steps
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-8 justify-items-center pt-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-[#C7B6AD] rounded-xl shadow-md px-6 py-7 w-[90%] sm:w-[75%] md:w-[70%] max-w-sm text-center"
            >
              {/* Number Circle */}
              <div className="absolute -top-5 transform -translate-x-14 bg-[#ff6413] text-white rounded-full w-14 h-12 flex items-center justify-center font-semibold text-sm">
                {step.id}
              </div>

              {/* Icon */}
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-sm">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-poppins font-semibold text-[20px] leading-[100%] tracking-[0px] text-center text-[#3C3C3C]">
                {step.title}
              </h3>
              <p className="font-sans font-normal text-[14px] leading-[20px] tracking-[0px] text-center text-[#6B7280]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
