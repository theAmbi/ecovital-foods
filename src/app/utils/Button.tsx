import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    src: string,
    bg: string,
    textColour: string,
    children: React.ReactNode,
}

const CustomButton: React.FC<ButtonProps> = ({ src, bg, textColour, children }) => {
    return (
        <Link href={src} className='font-semibold lg:font-bold '>
            <button className={`p-5 rounded-lg text-center text-[14px] bg-${bg} text-${textColour} lg:rounded-xl lg:text-[18px] lg:py-5 lg:px-7 focus:ring-4 focus:ring-lime-500/50 hover:scale-105 hover:transform transition-transform duration-200 ease-linear`}>{children}</button>
        </Link>
    )
}

export default CustomButton