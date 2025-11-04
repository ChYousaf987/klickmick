import React from 'react';
import { FiShield, FiCheckCircle, FiTruck, FiMessageCircle } from 'react-icons/fi';

const LiveShopping = () => {
  return (
    <>
      <div className="bg-[#FFC1A1] py-16 px-2 sm:px-20 max-md:py-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 max-md:text-center max-md:text-lg">
            Connect Sellers Through Live Shopping
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6  ">
            {/* Secure Payments */}
            <div className="bg-[#3C3C3C] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow max-md:w-[90%] mx-auto">
              <div className="bg-orange-500 p-3 rounded-full">
                <FiShield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Secure Payments</h3>
              <p className="text-gray-400 text-sm">Protected transactions</p>
            </div>

            {/* Verified Sellers */}
            <div className="bg-[#3C3C3C] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow max-md:w-[90%] mx-auto">
              <div className="bg-orange-500 p-3 rounded-full">
                <FiCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Verified Sellers</h3>
              <p className="text-gray-400 text-sm">Trusted community</p>
            </div>

            {/* Fast Delivery */}
            <div className="bg-[#3C3C3C] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow max-md:w-[90%] mx-auto">
              <div className="bg-orange-500 p-3 rounded-full">
                <FiTruck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Quick shipping</p>
            </div>

            {/* Live Interaction */}
            <div className="bg-[#3C3C3C] rounded-2xl p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow max-md:w-[90%] mx-auto">
              <div className="bg-orange-500 p-3 rounded-full">
                <FiMessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Live Interaction</h3>
              <p className="text-gray-400 text-sm">Real-time chat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveShopping;
