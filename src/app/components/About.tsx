import React from 'react'
import CustomButton from '../utils/Button'
import Image from 'next/image'
import model from '/public/model.png'
// import wave from 'public/about-wave.svg'

const About: React.FC = () => {
    return (
        <section className='w-full min-h-[50vh] bg-white relative pb-10 md:pb-12'>
            <div className='max-w-[85%] mx-auto pt-48 pb-16 flex flex-col justify-between md:flex-row md:pt-32 lg:max-w-auto lg:container lg:flex-row lg:items-center lg:pt-48'>
                <div>
                    <h3 className='text-3xl text-headingDark font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>What our brand <br /><span className='text-mainGreen'>is all about</span></h3>
                    <p className='text-paragraphColor max-w-sm py-5 text-[14px] md:py-7 lg:max-w-xl lg:text-[20px] lg:py-14'>At EcoVital Foods, we&apos;re passionate about crafting plant-based solutions for a sustainable future. Our mission: delicious, eco-friendly meals that nourish you and the planet. Join us in the journey towards greener, healthier living.</p>
                    <div className='my-3 md:my-5'><CustomButton src='/recipes' bg='headingDark' textColour='white'>Learn More</CustomButton></div>
                </div>

                {/* <div className='self-end justify-self-end bg-yellow-100'>
            <Image src={model} alt='smiling female farmer' className='w-[70%]' />
        </div> */}

                <Image src={model} alt='smiling female farmer' className='w-[70%] self-end justify-self-end md:w-[45%] md:mt-32 lg:w-auto lg:mt-0' />
            </div>

            {/* <Image src={wave} alt='' className=' absolute bottom-0 left-0 border' /> */}
        </section>
    )
}

export default About