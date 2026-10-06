import React from 'react'
import CategoryPage from '../Catagorypage/Catagorypage'
import bgSeafood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <CategoryPage
      title="Meat & SeaFood"
      bgimage={bgSeafood}
      categories={['SeaFood','Meat']}
    />
  )
}

export default SeaFood