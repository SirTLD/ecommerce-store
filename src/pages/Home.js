import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import News from '../components/News';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <News />
      <Navbar />
      <Slider />
      <Categories />
      {/* <Products /> */}
    </div>
  );
};

export default Home;
