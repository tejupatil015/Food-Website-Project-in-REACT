import React from 'react'
import bgAll from "../../assets/all-banner.jpg"
import CategoryPage from "../Catagorypage/Catagorypage";

const AllProducts = () => {
  return (
    <div>
        <h1>
               <CategoryPage title="All Products" bgimage={bgAll} categories={['All']}/>
        </h1>
    </div>
  )
}

export default AllProducts