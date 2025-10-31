// src/components/UpcomingStreams.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import stream1 from "/Fashion.jpg";
import stream2 from "/Electronics.jpg";
import stream3 from "/HomeDecor.jpg";
import stream4 from "/Beauty.jpg";
import stream5 from "/Jewelry.jpg";

const UpcomingStreams = () => {
  const streams = [
    { id: 1, name: "FashionGuru", category: "Fashion", time: "21:15m", reminderSet: false, image: stream1 },
    { id: 2, name: "TechDeals", category: "Electronics", time: "31:30m", reminderSet: true, image: stream2 },
    { id: 3, name: "HomeStyler", category: "Home Decor", time: "34:45m", reminderSet: false, image: stream3 },
    { id: 4, name: "BeautyBox", category: "Beauty", time: "Tomorrow", reminderSet: false, image: stream4 },
    { id: 5, name: "JewelryWorld", category: "Jewelry", time: "Tomorrow", reminderSet: false, image: stream5 },
  ];

  return (
    <section className="bg-[#FFF1EB] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 pt-12 gap-4 lg:gap-0">
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-gray-800 max-md:text-lg">
              Upcoming Live Streams
            </h3>
            <p className="text-sm text-gray-600 font-montserrat max-md:text-xs">
              Set reminders for your favorite sellers
            </p>
          </div>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-50 font-montserrat transition max-md:text-sm max-md:px-2 max-md:py-1">
            View All
          </button>
        </div>

        {/* Infinite Auto-Scroll Swiper */}
        <div className="py-10 group">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={3000}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            allowTouchMove={true} // allow swipe on mobile
            className="pl-2 sm:pl-4 md:pl-6 lg:pl-10"
          >
            {[...streams, ...streams].map((stream, index) => (
              <SwiperSlide key={index} className="pb-2">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="h-40 sm:h-48 md:h-52 relative overflow-hidden">
                    <img
                      src={stream.image}
                      alt={stream.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                      {stream.time}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={stream.image}
                        alt="img"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border"
                      />
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-gray-800">
                          {stream.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 font-montserrat">
                          {stream.category}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-full text-sm sm:text-base font-medium bg-orange-500 text-white hover:bg-orange-600 transition font-montserrat">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UpcomingStreams;
