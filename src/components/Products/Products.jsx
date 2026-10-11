import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Productlist from '../productlist/Productlist';
import Card from '../Cardss/Card';

const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
  const [activeTab, setActivetab] = useState('All');

  const filteredItems = activeTab === 'All'
    ? Productlist
    : Productlist.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map((product) => (
    <Card
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Products" />

        <div className='flex flex-wrap gap-3 justify-center mt-10'>
          {categories.map((catagory) => (
            <button
              key={catagory}
              className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === catagory ? 'bg-gradient-to-b from-red-600 to-orange-500 text-white' : 'bg-zinc-100 '}`}
              onClick={() => setActivetab(catagory)}
            >
              {catagory}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
          {renderCards}
        </div>

        <div className='mt-15 mx-auto w-fit'>
          <Link to="/allproducts" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg inline-block hover:opacity-90">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;


