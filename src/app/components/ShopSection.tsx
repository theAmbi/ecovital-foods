import React from 'react'
import pottedPlant from '/public/potted-plant.png'
import soil from '/public/soil.png'
import Image from 'next/image'
import CustomButton from '../utils/Button'

const ShopSection = () => {
    return (
        <section className='w-full min-h-[200px] bg-white py-20 lg:py-48'>
            <div className=' max-w-[90%] mx-auto bg-heroBG min-h-[30vh] rounded-[15px] flex relative overflow-clip justify-center items-center md:min-h-[320px] lg:min-h-[469px] md:max-w-[65%] lg:rounded-[42px] xl:max-w-[55%]'>
                <Image src={soil} alt='soil' className='w-[35%] absolute -left-12 -bottom-4 md:w-[25%] lg:w-[30%] lg:-left-32 lg:-bottom-6 xl:w-[25%]' />
                <div className='transition'>
                    <h3 className='text-center font-semibold text-headingDark text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Shop Eco-Friendly <br />Products</h3>
                    <div className='max-w-fit mx-auto pt-10 md:pt-12 lg:pt-16 motion-safe:animate-scale-pulse transition-transform ease-in-out duration-300 hover:animate-none '>
                        <CustomButton bg='mainGreen' textColour='white' src='/shop'>Go to Shop</CustomButton>
                    </div>
                </div>
                <Image src={pottedPlant} alt='potted-plant' className='w-[35%] absolute -right-14 -top-10 md:w-[25%] lg:w-[30%] lg:-right-28 lg:-top-14 xl:w-[25%]' />
            </div>
        </section>
    )
}

export default ShopSection