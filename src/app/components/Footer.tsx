import React from 'react'
import footerWave from 'public/footer-top-wave.svg'
import Image from 'next/image'
import logo from 'public/logo.svg'
import googlePlay from 'public/footer/get-on-google-play.svg'
import appStore from 'public/footer/get-on-app-store.svg'

const Footer: React.FC = () => {
    return (
        <footer className='bg-reviewGray w-full h-fit'>
            <Image src={footerWave} alt='' className='w-full' />
            <div className='container px-5 py-20'>
                <div>
                    <Image src={logo} alt='' className='w-[33%]' />
                    <p className='text-paragraphColor py-5 max-w-xs text-md'>Nourishing You, Nurturing the Planet – One Bite at a Time</p>
                </div>

                <div className='py-10'>
                    <h6 className='uppercase text-headingDark font-semibold'>quick links</h6>
                    <div className='text-paragraphColor flex flex-col gap-2 pt-3 lg:pt-6'>
                        <p>Shop our Products</p>
                        <p>Try our Recipes!</p>
                        <p>Learn more about us</p>
                    </div>
                </div>
                <div className='py-10'>
                    <h6 className='uppercase text-headingDark font-semibold'>download our app</h6>
                    <div className='flex gap-2 pt-3 lg:pt-6 '>
                        <Image src={googlePlay} alt='get-on-google-play' className='lg:w-[20%]' />
                        <Image src={appStore} alt='get-on-app-store' className='lg:w-[20%]' />
                    </div>
                </div>

                <div className='py-10'>
                    <h6 className='uppercase text-headingDark font-semibold'>join our newsletter</h6>
                    <div className='text-paragraphColor flex flex-col gap-2 pt-3 md:gap-3 lg:gap-4 lg:pt-6'>
                        <input type="text" className='max-w-[295px] h-[50px] rounded-md px-3 placeholder:text-placeholder placeholder:font-light text-paragraphColor outline-none focus:ring-2 focus:ring-mainGreen lg:max-w-[330px] lg:h-[56px] lg:px-5' placeholder='please enter your email' maxLength={40} />
                        <button className='max-w-[295px] h-[50px] rounded-md bg-mainGreen text-white uppercase font-medium cursor-pointer lg:max-w-[330px] lg:h-[56px]'>sign up now</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer