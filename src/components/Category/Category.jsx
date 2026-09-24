import React from 'react'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import { Link } from "react-router-dom";

const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, Organic produce sourced daily from local farms.',
        image: FruitsCat,
        link: '/fruits'
    },
    {
        id: 2,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood.',
        image: SeaFoodCat,
        link: '/seaFood'
    },
    {
        id: 3,
        title: 'Dairy & Eggs',
        description: 'Fresh dairy products and farm eggs.',
        image: DairyCat,
        link: '/dairy'
    }
]

const Category = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <h1 className="text-4xl font-bold text-center mb-16">
                    <span className="text-orange-500">Shop</span> by Category
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {category.map(card => (
                        <div key={card.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                            <div className="h-[250px] flex justify-center items-center bg-gradient-to-b from-green-50 to-white p-6">
                                <img src={card.image} alt={card.title} className="h-[180px] object-contain transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-zinc-800 mb-3">{card.title}</h3>
                                <p className="text-zinc-600 leading-7 mb-6">{card.description}</p>
                                <Link to={card.link} className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg inline-block hover:opacity-90">See All</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category