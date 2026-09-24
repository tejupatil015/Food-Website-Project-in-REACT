import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../productlist/Productlist";
import Card from "../Cardss/Card";

const CategoryPage = ({title,bgimage,categories=[]}) => {
  let filteritems = categories.includes('All') 
  ? ProductList  
  : ProductList.filter(item=> categories.includes(item.category))

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner title={title} bgimage={bgimage}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteritems.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;