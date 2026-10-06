import React from 'react'
import Heading from '../Heding/Heading'
import { IoHeart } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import Basket from '../../assets/basket-full-vegetables.png'

const Value = () => {
    const leftValues = value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
       const rightValues = value.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex items-center  gap-7 '>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className=''>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Values" />

                <div className='flex  md:gap-5 mt-15 md:flex-row gap-15 flex-col'>
                    {/* left values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {leftValues}
                        
                    </div>

                    <div className='md:flex w-1/2 hidden'>
                        <img src={Basket}  />
                    </div>

                    {/* right values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                      {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Value

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact  that  a reader will be distracted by the readable.',
        icon: <IoHeart />
    }, {
        id: 2,
        title: 'Always Fresh ',
        para: 'It is a long established fact  that  a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety ',
        para: 'It is a long established fact  that  a reader will be distracted by the readable.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic ',
        para: 'It is a long established fact  that  a reader will be distracted by the readable.',
        icon: <FaSeedling />
    }

]