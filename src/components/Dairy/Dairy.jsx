import React from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import bgDairy from '../../assets/dairy-banner.jpg';

const Dairy = () => {
  return (
    <div className="p-10">
      <CategoryPage title="Dairy & Eggs" bgimage={bgDairy} categories={['Dairy']} />
    </div>
  );
};

export default Dairy;