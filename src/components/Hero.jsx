import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

function Hero() {
    return (

        <section>
            <div className="max-w-[1400px] mx-auto px-10 flex  md:flex-row flex-col items-center md:pt-25  p-35 min-h-screen">
                {/* Hero Content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-3 rounded-full'>Export Best Quality...</span>

                    <h1 className='md:text-7xl/20 font-bold mt-5 text-5xl/14'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City</h1>

                    <p className='text-zinc-600  text-lg max-w-[530px] mt-5 mb-10'>
                        Bred for high content of beneficial substance. Our products are all fresh and healthy.</p>

                    <Button content='shop Now' />
                </div>
                {/* Hero image */}
                <div className='flex-1'>
                    <img src={Grocery} alt='hero image' />
                </div>
            </div>
        </section>
    )
}

export default Hero