"use client";
import React, { useEffect, useState } from 'react'
import aboutWave from 'public/about-wave.svg'
import info from 'public/info.svg'
import arrowRight from 'public/arrow-right.svg'
import Image from 'next/image'
import { recipes } from '../../../recipeDetails'
import { desktopRecipes } from '../../../recipeDetails'
import { bigCard } from '../../../recipeDetails'

const Recipes: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);


    return (
        <section className='w-full min-h-[70vh] bg-headingDark relative'>
            <Image src={aboutWave} alt='' className='absolute top-0 left-0 w-full' />
            <div className='pt-28 max-w-[85%] mx-auto md:pt-36 lg:pt-64 xl:pt-[400px]'>
                <h3 className='text-3xl text-center text-white font-semibold max-w-md mx-auto md:text-4xl lg:text-5xl lg:hidden xl:hidden'>Our users <span className='text-headingGreen'>love </span><br /> these <span className='text-headingGreen'>recipes</span></h3>
                <h3 className='hidden text-3xl text-center text-white font-semibold max-w-md mx-auto md:text-4xl lg:text-5xl xl:text-6xl lg:block xl:block lg:max-w-2xl xl:max-w-3xl'>Our users <span className='text-headingGreen'>love </span> these <span className='text-headingGreen'>recipes</span></h3>
                <div className='mt-10 py-10 flex flex-wrap gap-9 justify-center pb-32 md:mt-16 lg:hidden '>
                    {recipes.map(({ id, img, title, details }, index) => {
                        return <div key={id} className='max-w-[300px] pb-5 bg-white rounded-xl group hover:bg-mainGreen transition-colors overflow-hidden' onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
                            <Image src={img} alt={title} width={447} height={298} className='rounded-t-xl h-[146px] object-cover transition-transform transform group-hover:scale-110 duration-500' />
                            {/* {activeCard ? <p className='text-white font-normal px-5 pt-10 pb-4'>{details}</p> : <div className='pt-10 px-5 flex flex-col gap-5'>
                                <h5 className='font-semibold text-headingDark text-xl group-hover:text-white duration-300'>{title}</h5>
                                <div className='self-end'>
                                    <Image src={info} alt='' className='self-end cursor-pointer group-hover:hidden' />
                                    <Image src={arrowRight} alt='' className='hidden self-end cursor-pointer group-hover:block ' />
                                </div>
                            </div>} */}

                            {activeCard === index ? (<p className='text-white font-normal text-[14px] pt-10 pb-4 px-5 transition duration-300'>{details}</p>) :
                                (<div className='flex flex-col gap-5 pt-10 px-5'>
                                    <h5 className='font-semibold text-headingDark text-xl group-hover:text-white duration-300 md:text-lg '>
                                        {title}
                                    </h5>
                                    <div className='self-end'>
                                        <Image src={info} alt='' className='self-end cursor-pointer group-hover:hidden' />
                                        <Image src={arrowRight} alt='' className='hidden self-end cursor-pointer group-hover:block' />
                                    </div>
                                </div>)
                            }

                        </div>
                    })}
                </div>

                {/* desktop */}
                <div className='hidden mt-10 py-10 flex-wrap gap-6 justify-center pb-32 md:mt-16 lg:flex'>
                    {bigCard.map(({ id, img, title, details }) => {
                        return <div key={id} className='max-w-[380px] h-fit pb-20 bg-white rounded-xl group hover:bg-mainGreen transition-colors overflow-hidden cursor-pointer'>
                            <Image src={img} alt='title' width={447} height={298} className='rounded-t-xl h-[240px] object-cover transition-transform transform group-hover:scale-110 duration-500' />
                            <div className='pt-12 px-5'>
                                <h5 className='font-semibold text-headingDark text-2xl group-hover:text-white duration-300 max-w-[280px] '>{title} </h5>
                                <p className='text-paragraphColor text-[16px] pt-10 group-hover:text-white cursor-pointer'>{details}</p>
                            </div>
                        </div>
                    })}
                    <div className='grid grid-cols-2 grid-rows-2 gap-6'>
                        {desktopRecipes.map(({ id, img, title, details }, index) => {
                            return <div key={id} className='max-w-[300px] pb-5 bg-white rounded-xl group hover:bg-mainGreen transition-colors overflow-hidden cursor-pointer' onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(null)}>
                                <Image src={img} alt={title} width={447} height={298} className='rounded-t-xl h-[200px] object-cover transition-transform transform group-hover:scale-110 duration-500' />
                                {/* {activeCard ? <p className='text-white font-normal px-5 pt-10 pb-4'>{details}</p> : <div className='pt-10 px-5 flex flex-col gap-5'>
                                <h5 className='font-semibold text-headingDark text-xl group-hover:text-white duration-300'>{title}</h5>
                                <div className='self-end'>
                                    <Image src={info} alt='' className='self-end cursor-pointer group-hover:hidden' />
                                    <Image src={arrowRight} alt='' className='hidden self-end cursor-pointer group-hover:block ' />
                                </div>
                            </div>} */}

                                {activeCard === index ? (<p className='text-white font-normal text-[14px] pt-10 pb-4 px-5 transition duration-300'>{details}</p>) :
                                    (<div className='flex flex-col gap-5 pt-10 px-5'>
                                        <h5 className='font-semibold text-headingDark text-xl group-hover:text-white duration-300 md:text-lg lg:text-[22px] lg:text-paragraphColor'>
                                            {title}
                                        </h5>
                                        <div className='self-end'>
                                            <Image src={info} alt='' className='self-end cursor-pointer group-hover:hidden' />
                                            <Image src={arrowRight} alt='' className='hidden self-end cursor-pointer group-hover:block' />
                                        </div>
                                    </div>)
                                }

                            </div>
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Recipes