import React from 'react';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Products from '../Products/Products';
import Discount from '../Discount/Discount';
import Value from '../Values/Value';
import Process from '../Process/Process';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Products />
      <Discount />
      <Value />
      <Process />
      <Testimonials />
    </>
  );
};

export default Home;