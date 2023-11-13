import React from 'react'
import Image from 'next/image'
import enviroFest from '/public/partners/envirofest.png'
import greenEats from '/public/partners/greeneats.png'
import greenSteps from '/public/partners/greensteps.png'
import plantPower from '/public/partners/plantpower.png'

const Partners: React.FC = () => {
    return (
        <section className='w-full bg-white h-fit pt-24 lg:pt-40 xl:pt-48 '>
            <div className='container px-10 md:px-0'>
                <h3 className='text-3xl text-center text-headingDark font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>Our <span className='text-mainGreen'>Partners</span></h3>
                <div className='py-20 grid grid-cols-2 place-items-center gap-y-10 lg:grid-cols-4 lg:py-36 xl:pt-44 xl:pb-10'>
                    <Image src={enviroFest} alt='enviro-fest' className='cursor-pointer saturate-0 w-[70%] md:w-[50%] lg:w-[70%] transition duration-300 ease-in-out hover:saturate-100 hover:-translate-y-4' title='enviro-fest' />
                    <Image src={plantPower} alt='plant-power' className='cursor-pointer saturate-0 w-[70%] md:w-[50%] lg:w-[70%] transition duration-300 ease-in-out hover:saturate-100 hover:-translate-y-4' title='plant-power' />
                    <Image src={greenEats} alt='green-eats' className='cursor-pointer saturate-0 w-[70%] md:w-[50%] lg:w-[70%] transition duration-300 ease-in-out hover:saturate-100 hover:-translate-y-4' title='green-eats' />
                    <Image src={greenSteps} alt='green-steps' className='cursor-pointer saturate-0 w-[70%] md:w-[50%] lg:w-[70%] transition duration-300 ease-in-out hover:saturate-100 hover:-translate-y-4 ' title='green-steps' />
                </div>
            </div>
        </section>
    )
}

export default Partners