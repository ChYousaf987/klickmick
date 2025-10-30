import React from 'react';

const Faqs = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-10 max-md:py-10"
      style={{
        background: 'linear-gradient(100.11deg, #E24D00 0%, #006CD1 100%)',
      }}
    >
      <div className="w-full max-w-xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 max-md:text-xl max-md:mb-6">
          Feel Free to Ask Question
        </h2>

        {/* Form */}
        <div className="space-y-5">
          {/* Name Input */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-4/5 px-4 py-2 bg-white text-gray-600 rounded-2xl text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
            />
          </div>

          {/* Email Input */}
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-4/5 px-4 py-2 bg-white text-gray-600 rounded-2xl text-base placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex justify-center">
            <textarea
              rows={4}
              placeholder="Text here"
              className="w-4/5 px-4 py-2 bg-white text-gray-600 rounded-2xl text-base placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
            />
          </div>

          {/* Submit Button (Reduced Width) */}
          <div className="pt-4 max-md:pt-2 flex justify-center">
            <button className="w-3/5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-3 rounded-2xl transition transform hover:scale-105 active:scale-95 shadow-lg">
              Register as Seller
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
