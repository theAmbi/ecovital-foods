"use client";
import React, { useState } from 'react'
import mobileLogo from 'public/logo_mobile.svg'
import logo from 'public/logo.svg'
import menu from 'public/menu.svg'
import cancel from 'public/cancel.svg'
import Image from 'next/image'
import Link from 'next/link';
import CustomButton from '../utils/Button';

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <header className=''>
            <nav className={`w-full min-h-[90px] flex items-center bg-transparent justify-between ${toggle ? 'h-fit bg-white' : 'min-h-[90px] z-40 absolute top-0 left-0'}`}>
                <div className={`px-5 w-full flex justify-between items-center md:container md:px-0 lg:px-0 lg:container py-12`}>
                    <div className="logo">
                        <Link href={"/"}>
                            <Image src={mobileLogo} alt='ecovital foods logo' className='md:hidden lg:hidden' />
                            <Image src={logo} alt='ecovital foods logo' className='hidden md:block md:w-[50%] lg:w-[80%]' />
                        </Link>
                    </div>

                    <div className={`hamburger cursor-pointer p-3 rounded-md hover:bg-headingDark/10 lg:hidden`} onClick={() => setToggle(!toggle)}>
                        {toggle ? <Image src={cancel} alt='' /> : <Image src={menu} alt='' />}
                    </div>

                    <div className="desktop hidden lg:flex lg:justify-between items-center">
                        <div className="links flex text-[18px] gap-12 mr-28">
                            <Link href={"/recipes"}>Recipes</Link>
                            <Link href={"/sustainability"}>Sustainability</Link>
                            <Link href={"/contact"}>Contact</Link>
                        </div>


                    </div>

                    <div className="shop hidden lg:flex ">
                        <CustomButton src='/shop' bg='mainGreen' textColour='white' >Go to Shop</CustomButton>
                    </div>
                </div>
            </nav>
            {toggle && <div className='bg-white h-fit pt-8 pb-14 lg:hidden'>
                <div className='px-5 w-full flex flex-col text-center text-[16px] gap-7 text-paragraphColor md:container'>
                    <Link href={"/recipes"}>Recipes</Link>
                    <Link href={"/sustainability"}>Sustainability</Link>
                    <Link href={"/contact"}>Contact</Link>
                    <Link href={"/shop"} className='py-4 bg-mainGreen font-medium text-white rounded-md mt-6'>Go to Shop</Link>
                </div>
            </div>}
        </header>
    )
}

export default Navbar