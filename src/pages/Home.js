import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import News from '../components/News';

const Home = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
