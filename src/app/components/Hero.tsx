import React from 'react'
import CustomButton from '../utils/Button'
import leaf from 'public/leaf_mobile.png'
import leafTablet from 'public/leaf_tablet.png'
import leafDesktop from 'public/leaf_desktop.png'
import Image from 'next/image'
import usersIcon from 'public/users.svg'
import ratingIcon from 'public/rating.svg'
import serviceIcon from 'public/service.svg'

const Hero = () => {
    return (
        <>
            <section className='w-full min-h-fit relative z-10  overflow-hidden'>
                <div className='pt-10 min-h-[90vh] overflow-hidden relative md:container md:min-h-screen lg:pt-48 lg:container lg:flex lg:static lg:min-h-screen '>
                    <div className="pt-32 md:pt-40 lg:pt-16 xl:pt-20">
                        <h2 className='text-headingDark font-bold text-4xl text-center md:text-5xl lg:text-left lg:text-6xl'>Nourish Your Body, <br />Care for Our Planet</h2>
                        <p className='text-paragraphColor text-center text-[14px] max-w-xs mx-auto pt-10 md:text-[16px] md:max-w-md lg:text-left lg:max-w-md lg:mx-0 lg:text-[18px] xl:max-w-xl xl:text-[20px] xl:pt-14'>Welcome to EcoVital Foods, where we blend culinary excellence with sustainability.
                            Discover mouthwatering plant-based recipes that are as good for you as they are for the Earth. </p>
                        <div className='max-w-fit mx-auto mt-10 lg:max-w-none lg:mt-14 xl:mt-16'>
                            <CustomButton src='/recipes' bg='mainGreen' textColour='white'>Get Delicious Recipes</CustomButton>
                        </div>
                    </div>

                    <div className="absolute scale-[190%] bottom-0 left-1/2 -translate-x-1/2 md:scale-[100%] lg:hidden">
                        <Image src={leaf} alt='' className='w-[900px] md:hidden' />
                        <Image src={leafTablet} alt='' className='hidden md:block scale-150' />
                    </div>

                    <div className='hidden md:hidden lg:block absolute right-0 top-0 z-0'>
                        <Image src={leafDesktop} alt='' className='xl:scale-110' />
                    </div>
                </div>

                <div className='w-auto'>
                    <div className="stats_mobile max-w-[85%] mx-auto bg-white rounded-lg py-8 px-6 flex justify-between absolute left-1/2 -translate-x-1/2 -bottom-[50px] w-full shadow-2xl shadow-slate-200 md:max-w-[65%] md:px-10 lg:hidden">
                        <div className="flex gap-3 items-center text-[15px] md:text-[16px]">
                            <Image src={usersIcon} width={16} alt='' className='w-[20px]' />
                            <h6 className='text-paragraphColor font-semibold'>1.5 million</h6>
                        </div>
                        <div className="flex gap-3 items-center text-[15px] md:text-[16px]">
                            <Image src={serviceIcon} width={16} alt='' className='w-[20px]' />
                            <h6 className='text-paragraphColor font-semibold'>10 years</h6>
                        </div>
                        <div className="flex gap-3 items-center text-[15px] md:text-[16px]">
                            <Image src={ratingIcon} width={16} alt='' className='w-[20px]' />
                            <h6 className='text-paragraphColor font-semibold'>4.8/5</h6>
                        </div>
                    </div>

                    <div className='hidden stats_desktop max-w-[78%] mx-auto bg-white rounded-lg py-14 px-10 lg:flex justify-between xl:justify-evenly absolute left-1/2 -translate-x-1/2 -bottom-[130px] w-full shadow-2xl shadow-slate-200 '>
                        <div className='flex flex-col gap-6'>
                            <Image src={usersIcon} width={40} alt='' className='w-[40px]' />
                            <p className='text-[16px] text-paragraphColor max-w-xs '>Over 1.5 million users worldwide have embraced EcoVital Foods&apos; plant-based recipes and sustainable living tips to date.</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <Image src={serviceIcon} width={40} alt='' className='w-[40px]' />
                            <p className='text-[16px] text-paragraphColor max-w-xs '>EcoVital Foods has been proudly serving the eco-conscious community for over 10 years.</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <Image src={ratingIcon} width={40} alt='' className='w-[40px]' />
                            <p className='text-[16px] text-paragraphColor max-w-xs '>We have an impressive average user rating of 4.8 out of 5 stars, reflecting the satisfaction and trust of our community.</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Hero