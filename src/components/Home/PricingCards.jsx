import React from "react";
import { FaShoppingBag, FaStore } from "react-icons/fa";

const PricingCards = () => {
  return (
    <section className="bg-[#FFF1EB] pt-8 py-10">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2 font-montserrat">
          Join Clickmick Today
        </h2>
        <p className="text-gray-600 mb-12 font-montserrat">
          Choose your role & start your journey
        </p>

        {/* 🔹 Equal Height Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* ✅ Seller Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full">
            <div className="flex-1">
              <div className="flex justify-start mb-2 ml-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaStore className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#3c3c3c] mb-2 ml-3 font-montserrat text-left">
                For Buyers
              </h3>
              <p className="text-[#3c3c3c] text-sm mb-6 ml-3 font-montserrat text-left">
                Stream your products and grow your audience
              </p>

              <ul className="text-left text-sm text-gray-700 mb-8 ml-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-montserrat font-bold">•</span> Stream unlimited products
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-montserrat font-bold">•</span> Build your follower base
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-montserrat font-bold">•</span> Automatic payment processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-montserrat font-bold">•</span> Shipping calculator included
                </li>
              </ul>
            </div>

            <button className="w-full bg-orange-500 text-white font-semibold py-3 font-montserrat rounded-full hover:bg-orange-600 transition">
              Register as Seller
            </button>
          </div>

          {/* ✅ Buyer Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full">
            <div className="flex-1">
              <div className="flex justify-start mb-2 ml-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaShoppingBag className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#3c3c3c] mb-2 ml-3 font-montserrat text-left">
                For Sellers
              </h3>
              <p className="text-[#3c3c3c] text-sm mb-6 ml-3 font-montserrat text-left">
                Register, Subscribe, and enjoy Live Auctions
              </p>

              <div className="grid justify-start items-center gap-8 mb-6 ml-12">
                <div className="flex justify-start items-end gap-12">
                  <span className="text-2xl text-[#3c3c3c] font-montserrat">6 Months</span>
                  <span className="text-2xl font-bold text-green-600 font-montserrat">$10</span>
                </div>

                <div className="flex justify-start items-end gap-16">
                  <span className="text-2xl text-[#3c3c3c] font-montserrat">1 Year</span>
                  <span className="text-2xl font-bold text-green-600 font-montserrat">$16</span>
                </div>
              </div>

              <ul className="text-left text-sm text-gray-700 mb-8 ml-3">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Access to all live streams
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold font-montserrat">•</span> Real-time bidding and purchases
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold font-montserrat">•</span> Email notifications from favorite sellers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold font-montserrat">•</span> Secure payment protection
                </li>
              </ul>
            </div>

            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition font-montserrat">
              Register as Buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
