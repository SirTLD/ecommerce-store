import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import News from '../components/News';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
