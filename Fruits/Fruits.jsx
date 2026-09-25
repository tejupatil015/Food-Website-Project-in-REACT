import React from 'react'
import CategoryPage from '../Catagorypage/Catagorypage'
import bgfruits from  '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CategoryPage title="Fruits & Veggies" bgimage={bgfruits} categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits