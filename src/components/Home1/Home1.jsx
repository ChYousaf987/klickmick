import React from "react";
import Hero from "../Home/Hero";
import Recommendation from "./Recommendation";
import Previously from "./Previously";
import UpcomingStreams from "../Home/UpcomingStreams";
import Faqs from "../Home/Faqs";
import Category from "../Home1/Category";
import LiveVideo from "./LiveVideo";

const Home1 = () => {
  return (
    <>
      <Hero />
      <Category />
      <LiveVideo />
      {/* ✅ Replaced PricingCards + LiveShopping with these two */}
      <Recommendation />
      <Previously />
      <UpcomingStreams />
      <Faqs />
    </>
  );
};

export default Home1;
