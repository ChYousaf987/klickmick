import React from "react";
import { FaShoppingBag, FaStore } from "react-icons/fa";

const PricingCards = () => {
  return (
    <section className="bg-[#FFF1EB] pt-8 pb-12">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2 font-montserrat">
          Join Clickmick Today
        </h2>
        <p className="text-gray-600 mb-10 font-montserrat">
          Choose your role & start your journey
        </p>

        {/* 🔹 Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {/* ✅ Buyers Card */}
          <div className="bg-white rounded-3xl p-6 gap-y-6 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-start mb-2 ml-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaStore className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#3c3c3c] my-3 ml-3 font-montserrat text-left">
                For Buyers
              </h3>
              <p className="text-[#3c3c3c] text-sm mb-4 ml-3 font-montserrat text-left">
                Stream your products and grow your audience
              </p>

              <ul className="text-left text-sm text-gray-700 space-y-1 ml-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-xl font-bold">•</span> Stream unlimited products
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-xl font-bold">•</span> Build your follower base
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-xl font-bold">•</span> Automatic payment processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-xl font-bold">•</span> Shipping calculator included
                </li>
              </ul>
            </div>

            <button className="w-full sm:w-[95%] bg-[#e24d00] text-white font-semibold py-2.5 mx-auto font-montserrat rounded-[16px] hover:bg-orange-600 transition">
              Register as Buyer
            </button>
          </div>

          {/* ✅ Seller Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col gap-y-2 justify-between">
            <div className="flex justify-start mb-2 ml-3">
              <div className="bg-orange-500 p-3 rounded-full">
                <FaShoppingBag className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#3c3c3c] mb-2 ml-3 font-montserrat text-left">
              For Sellers
            </h3>
            <p className="text-[#3c3c3c] text-sm mb-4 ml-3 font-montserrat text-left">
              Register, Subscribe, and enjoy Live Auctions
            </p>

            <div className="grid justify-start gap-5 mb-4 ml-0 sm:ml-12">
              <div className="flex justify-start items-end gap-10 sm:gap-10">
                <span className="text-lg text-[#3c3c3c] font-montserrat">6 Months</span>
                <span className="text-xl font-bold text-green-600 font-montserrat">$10</span>
              </div>

              <div className="flex justify-start items-end gap-14 sm:gap-14">
                <span className="text-lg text-[#3c3c3c] font-montserrat">1 Year</span>
                <span className="text-xl font-bold text-green-600 font-montserrat pl-4">$16</span>
              </div>
            </div>

            <ul className="text-left text-sm text-gray-700 space-y-1 ml-0 sm:ml-3">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl font-bold">•</span> Access to all live streams
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl font-bold">•</span> Real-time bidding and purchases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl font-bold">•</span> Email notifications from favorite sellers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-xl font-bold">•</span> Secure payment protection
              </li>
            </ul>

            <button className="w-full sm:w-[95%] mx-auto bg-[#e24d00] text-white font-semibold py-2.5 rounded-[16px] hover:bg-orange-600 transition font-montserrat">
              Register as Seller
            </button>
            <p className="w-full sm:w-[460px] h-[21px] text-[#6a7282] opacity-100 pt-2 font-poppins font-normal text-[12px] leading-[100%] text-center mx-auto">
              A 7% commission will be automatically calculated and applied to each sale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
