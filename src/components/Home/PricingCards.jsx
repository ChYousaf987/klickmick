import React from 'react';
import { FaShoppingBag, FaStore } from 'react-icons/fa';

const PricingCards = () => {
  return (
    <section className="bg-[#FFF1EB] pt-8 py-10 ">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Join Clickmick Today
        </h2>
        <p className="text-gray-600 mb-12">
          Choose your role & start your journey
        </p>

        {/* 🔹 Equal Height Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Buyer Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-start mb-2 ml-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaShoppingBag className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 justify-start items-start mb-2 ml-3 flex">For Buyers</h3>
              <p className="text-gray-600 text-sm mb-6 justify-start items-start flex ml-3">
                Register, Subscribe, and enjoy Live Auctions
              </p>

              <div className="grid justify-start items-center gap-8 mb-6 ml-16">
                {/* 🔹 6 Months Column */}
                <div className="flex justify-center items-end gap-10">
                  <span className="text-2xl text-gray-700 ">6 Months</span>
                  <span className="text-2xl font-bold text-green-600">$10</span>
                </div>

                {/* 🔹 1 Year Column */}
                <div className="flex justify-start items-end gap-20">
                  <span className="text-2xl text-gray-700">1 Year</span>
                  <span className="text-2xl font-bold text-green-600">$16</span>
                </div>
              </div>

              <ul className=" text-left text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span>
                  Access to all live streams
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Real-time bidding and purchases
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Email notifications from favorite sellers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Secure payment protection
                </li>
              </ul>
            </div>

            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition">
              Register as Buyer
            </button>
          </div>

          {/* ✅ Seller Card (Now same layout as Buyer) */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-start mb-2 ml-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaStore className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 justify-start items-start mb-2 ml-3 flex">For Sellers</h3>
              <p className="text-gray-600 text-sm mb-6 justify-start items-start flex ml-3">
                Stream your products and grow your audience
              </p>

              {/* 🔹 Commission Layout Same Style */}
              <div className="flex justify-center items-center gap-8 mb-6">
                <div className="grid justify-center items-end gap-1">
                  <span className="text-xl text-gray-700">Commission</span>
                  <span className="text-3xl font-bold  text-gray-600">7%</span>
                  <span className="text-lg  text-gray-600">Automatically calculate after each sale</span>
                </div>

                
              </div>

              <ul className="text-left text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Stream unlimited products
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Build your follower base
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Automatic payment processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-2xl font-bold">•</span> Shipping calculator included
                </li>
              </ul>
            </div>

            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition">
              Register as Seller
            </button>
          </div>
        </div>

        
      </div>

     
    </section>
  );
};

export default PricingCards;
