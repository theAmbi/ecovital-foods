"use client";
import React, { useEffect, useState } from 'react'
import mobileLogo from 'public/logo_mobile.svg'
import logo from 'public/logo.svg'
import menu from 'public/menu.svg'
import cancel from 'public/cancel.svg'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomButton from '../utils/Button';

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const currentPath = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <header className={`z-50 fixed left-0 top-0 w-full transition-all duration-300 ease-in-out ${scrolling ? 'bg-white border-b' : 'bg-transparent'} outline-none`}>
            <nav className={` w-full min-h-[90px] flex items-center bg-transparent justify-between ${toggle ? 'h-fit bg-white' : 'min-h-[90px] '} ${scrolling ? 'h-[40px] md:h-[50px] lg:h-[30px]' : 'min-h-[90px]'}`}>
                <div className={`px-5 w-full flex justify-between items-center md:container md:px-0 lg:px-0 lg:container xl:container xl:px-0 py-12`}>
                    <div className="logo">
                        <Link href={"/"}>
                            <Image src={mobileLogo} alt='ecovital foods logo' className='md:hidden lg:hidden' />
                            <Image src={logo} alt='ecovital foods logo' className={`hidden transition duration-300 ease-in-out md:block md:w-[50%] lg:w-[80%] ${scrolling ? 'lg:scale-75' : ''}`} />
                        </Link>
                    </div>

                    <div className={`hamburger cursor-pointer p-3 rounded-md hover:bg-headingDark/10 lg:hidden transition-all `} onClick={() => setToggle(!toggle)}>
                        {toggle ? <Image src={cancel} alt='' /> : <Image src={menu} alt='' />}
                    </div>

                    <div className="desktop hidden lg:flex lg:justify-between items-center">
                        <div className="links flex text-[18px] gap-12 mr-28">
                            <Link href={"/recipes"} className={`${currentPath === '/recipes' ? 'text-mainGreen font-semibold' : ''}`}>Recipes</Link>
                            <Link href={"/sustainability"} className={`${currentPath === '/sustainability' ? 'text-mainGreen font-semibold' : ''}`}>Sustainability</Link>
                            <Link href={"/contact"} className={`${currentPath === '/contact' ? 'text-mainGreen font-semibold' : ''}`}>Contact</Link>
                        </div>


                    </div>

                    <div className={`shop transition duration-300 ease-in-out hidden lg:flex ${scrolling ? 'scale-90' : ''}`}>
                        <CustomButton src='/shop' bg='mainGreen' textColour='white' >Go to Shop</CustomButton>
                    </div>
                </div>
            </nav>
            {toggle && <div className='bg-white h-fit pt-8 pb-14 lg:hidden transition-all duration-300 ease-in-out'>
                <div className='px-5 w-full flex flex-col text-center text-[16px] gap-7 text-paragraphColor md:container'>
                    <Link href={"/recipes"} className={`${currentPath === '/recipes' ? 'text-mainGreen font-semibold' : ''}`}>Recipes</Link>
                    <Link href={"/sustainability"} className={`${currentPath === '/sustainability' ? 'text-mainGreen font-semibold' : ''}`}>Sustainability</Link>
                    <Link href={"/contact"} className={`${currentPath === '/contact' ? 'text-mainGreen font-semibold' : ''}`}>Contact</Link>
                    <Link href={"/shop"} className='py-4 bg-mainGreen font-medium text-white rounded-md mt-6'>Go to Shop</Link>
                </div>
            </div>}
        </header>
    )
}

export default Navbar