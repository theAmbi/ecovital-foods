"use client";
import React, { useState, MouseEvent, FormEvent } from 'react'
import bottomWave from 'public/review-bottom-wave.svg'
import Image from 'next/image'
import axios from 'axios'


const CallToAction = () => {
    const [emailValue, setEmailValue] = useState<string>('');
    console.log(emailValue);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/route', {
                emailValue: emailValue
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                JSON.stringify({ message: 'Email sent successfully!' })
            } else {
                JSON.stringify({ message: 'Email unsuccessful!' })
            }
        } catch (error) {
            JSON.stringify({ message: 'An error occurred!' })
        }
    }


    return (
        <section className='w-full h-fit bg-headingDark'>
            <Image src={bottomWave} alt='' className='w-full' />
            <div className='pt-20 pb-16 lg:py-48'>
                <h3 className='text-3xl max-w-md mx-auto text-center text-white font-semibold md:text-4xl lg:text-5xl lg:max-w-6xl xl:text-6xl '>Join Our <span className='text-headingGreen'>Eco-Friendly</span> Community</h3>
                <p className='text-white max-w-sm mx-auto text-center py-10 text-[16px] md:py-7 lg:max-w-xl lg:text-[20px] lg:py-14'>Be part of the EcoVital Foods family and stay connected to a world of sustainable living and delicious plant-based recipes!</p>

                <div className='py-5 '>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col max-w-fit mx-auto container gap-4 lg:flex-row'>
                            <label htmlFor="email" className=''>
                                <input type="text" placeholder='please enter your email' className='w-[80vw] h-[64px] rounded-lg px-5 text-paragraphColor font-medium placeholder:font-normal placeholder:text-placeholder outline-none focus:ring-2 focus:ring-mainGreen lg:w-[520px] lg:h-[68px] lg:px-8' onChange={(e) => setEmailValue(e.target.value)} />

                            </label>
                            <button type='submit' className='max-w-[80vw] h-[64px] bg-headingGreen text-white rounded-lg font-semibold lg:w-[172px] lg:h-[68px] transition duration-300 hover:bg-ctaPressed focus:bg-ctaPressed' >Sign Up Now</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default CallToAction