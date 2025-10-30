import React from "react";
import Categories from "./Categories";
import LiveStreaming from "./LiveStreaming";
import LiveShopping from "./LiveShopping";
import PricingCards from "./PricingCards";
import UpcomingStreams from "./UpcomingStreams"
import Faqs from "./Faqs"
import Hero from "./Hero";
export default function HeroSection() {
  return (
    <>
      

      {/* CATEGORY SECTION */}
      <Hero/>
      <Categories />
      <LiveStreaming />
      <LiveShopping />
      <PricingCards />
      <UpcomingStreams />
      <Faqs />
    </>
  );
}
