import React from 'react'
import { IoHeart } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import Button from "../Button/Button"

const Card = ({image,name,price}) => {
    return (
        <div className='bg-zinc-100 p-5 rounded-xl'>
            {/* card icons */}
            <div className='flex justify-between '>
                <span className='text-3xl text-zinc-300'>
                    <IoHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg'>
                    <LuPlus />
                </button>
            </div>


            {/* card image */}

            <div className='w-full h-50'>
                 <img src={image} className='w-full h-full object-content'/> 
            </div>


            {/* Card content */}
            <div  className='text-center'>
                <h3 className='text-2xl font-semibold '>{name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Card