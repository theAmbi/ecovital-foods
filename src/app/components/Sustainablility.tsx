import React from 'react'
import CustomButton from '../utils/Button'
import sustainability from '/public/sustainability.png'
import Image from 'next/image'
import bottomWave from '/public/about-bottom-wave.svg'

const SustainablilitySection: React.FC = () => {
    return (
        <div className='relative '>
            <Image src={bottomWave} alt='' className='w-full top-0 left-0 bg-white' />
            <section className='w-full min-h-[50vh] bg-white relative pb-10 md:pb-12 overflow-hidden'>
                <div className='max-w-[85%] mx-auto pt-48 pb-16 flex flex-col justify-between md:flex-row-reverse md:pt-32 lg:max-w-auto lg:container lg:flex-row-reverse lg:items-center lg:pt-48 '>
                    <div className='text-right self-end'>
                        <h3 className='text-3xl text-headingDark font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>Our<span className='text-mainGreen'> Sustainability</span><br />Commitment</h3>
                        <p className='text-paragraphColor max-w-sm py-5 text-[14px] md:py-7 lg:max-w-xl lg:text-[20px] lg:py-14 '>At Ecovital Foods, we&apos;re on a mission to nourish both you and our planet. We believe that every meal has the power to make a positive impact. That&apos;s why we&apos;re committed to sustainability in every step of our journey.</p>
                        <div className='my-3 md:my-5'><CustomButton src='/sustainability' bg='headingDark' textColour='white'>Learn More</CustomButton></div>
                    </div>

                    {/* <div className='self-end justify-self-end bg-yellow-100'>
                    <Image src={model} alt='smiling female farmer' className='w-[70%]' />
                </div> */}

                    <Image src={sustainability} alt='person holding leaf planted in soil' className='w-[70%] self-start justify-self-start md:w-[45%] md:mt-32 lg:w-auto lg:mt-0' />
                </div>

                {/* <Image src={wave} alt='' className=' absolute bottom-0 left-0 border' /> */}
            </section>
        </div>
    )
}

export default SustainablilitySection;