"use client";
import React, { useEffect, useState } from 'react'
import aboutWave from 'public/about-wave.svg'
import info from 'public/info.svg'
import arrowRight from 'public/arrow-right.svg'
import Image from 'next/image'
import { recipes } from '../../../recipeDetails'

const Recipes: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);


    return (
        <section className='w-full min-h-[70vh] bg-headingDark relative'>
            <Image src={aboutWave} alt='' className='absolute top-0 left-0' />
            <div className='pt-28 max-w-[85%] mx-auto'>
                <h3 className='text-[27px] text-center text-white font-semibold max-w-md mx-auto md:text-[35px] lg:text-5xl xl:text-6xl'>Our users <span className='text-headingGreen'>love </span><br /> these <span className='text-headingGreen'>recipes</span></h3>
                <div className='my-10 py-2 flex flex-wrap gap-9 justify-center pb-32 '>
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

                            {activeCard === index ? (<p className='text-white font-normal pt-10 pb-4 px-5 transition duration-300'>{details}</p>) :
                                (<div className='flex flex-col gap-5 pt-10 px-5'>
                                    <h5 className='font-semibold text-headingDark text-xl group-hover:text-white duration-300'>
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
        </section>
    )
}

export default Recipes