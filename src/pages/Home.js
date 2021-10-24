import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import News from '../components/News';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
