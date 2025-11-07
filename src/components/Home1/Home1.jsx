import React from 'react';
import Hero from '../Home/Hero';
import Categories from '../Home/Categories'
import LiveStreaming from '../Home/LiveStreaming';
import Recommendation from './Recommendation';
import Previously from './Previously';
import UpcomingStreams from '../Home/UpcomingStreams';
import Faqs from '../Home/Faqs';

const Home1 = () => {
  return (
   <>
    <Hero/>
    <Categories/>
    <LiveStreaming/>
    <Recommendation/>
    <Previously/>
    <UpcomingStreams/>
    <Faqs/>
   </>
  )
}

export default Home1
