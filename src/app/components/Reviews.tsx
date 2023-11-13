import React from 'react'
import Image from 'next/image'
import topWave from 'public/review-top-wave.svg'
import { reviews } from '../../../userReviews'
import quote from '/public/quote.svg'
import filledStar from 'public/star-filled.svg'
import outline from 'public/star-outline.svg'

// const truncateText = (text: string, maxWords: number) => {
//     const words = text.split(" ");
//     if (words.length <= maxWords) {
//         return text;
//     }
//     return words.splice(0, maxWords).join(" ") + "...";
// }

const Reviews: React.FC = () => {
    return (
        <section className='w-full bg-white h-fit pt-28 relative'>
            <h3 className='text-3xl text-center text-headingDark font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>Here from <span className='text-mainGreen'>our users!</span></h3>

            <div className=''>
                <Image src={topWave} alt='' className='w-full' />
                <div className=" reviews w-full min-h-[50vh] py-20 bg-reviewGray lg:pt-14 lg:pb-32 ">
                    <div className='container flex flex-col flex-wrap items-center  md:grid md:grid-cols-2 lg:grid-cols-3 max-w-fit gap-10 '>
                        {reviews.map(({ id, name, review, stars, outlinedStar }) => {
                            return <div key={id} className='max-w-[320px] mx-auto bg-white py-10 px-4 text-paragraphColor rounded-2xl md:max-w-[330px] lg:max-w-[340px] lg:px-6 xl:max-w-[390px] xl:h-[400px] '>
                                <div className='flex justify-between flex-col'>
                                    <Image src={quote} alt='' className='select-none' />
                                    <div className='flex py-5 self-end'>
                                        <div className='flex'>
                                            {Array.from({ length: stars }).map((_, index) => (
                                                <Image key={index} src={filledStar} alt='' className='select-none' />
                                            ))}
                                        </div>
                                        {outlinedStar ? <Image src={outline} alt='' /> : null}
                                    </div>
                                </div>
                                <p className='py-4 '>{review}</p>
                                <p className='font-semibold text-lg pt-2'>{name}</p>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Reviews