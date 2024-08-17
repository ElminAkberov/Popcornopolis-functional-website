import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function MushroomSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: { perView: 2.6, spacing: 50 },
        breakpoints: {

            '(max-width: 600px)': {
                slides: { perView: 2, spacing: 50 },
            },
            '(max-width: 400px)': {
                slides: { perView: 1.5, spacing: 50 },
            },
            '(max-width: 300px)': {
                slides: { perView: 1.2, spacing: 20 },
            },

        },
    })
    return (
        <div >

            <div >
                <div ref={sliderRef} className="keen-slider mt-32 max-[1200px]:mt-2 max-lg:mt-10  ">
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card12.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Caramel & Kettle Popcorn
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col font-sofia lg:absolute bottom-[-120px]">
                                <span className='text-[20px] mb-2 font-bold text-[#412015]'>Valerie</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70'>Just tried the Caramel Corn. By far, the VERY BEST Caramel Corn I have Ever tried!!!! I am booked!</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={""}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card13.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Unicorn Popcorn® Mini
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col font-sofia lg:absolute bottom-[-120px]">
                                <span className='text-[20px] mb-2 font-bold text-[#412015]'>Carol C.</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70'>If I could give this popcorn 10 gold stars for excellence and taste, done! It’s tangy, mouth-watering with hint of buttery delicious. Absolutely the BEST!!</span>
                            </div>
                        </NavLink>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card22.jpg" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Classic Stripe 2-Gallon Tin Classic
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Assortment</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col font-sofia lg:absolute bottom-[-120px]">
                                <span className='text-[20px] mb-2 font-bold text-[#412015]'>Lizzy</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70'>Excellent product. I purchased it as a gift for a friend. She loved it!</span>
                            </div>
                        </NavLink>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default MushroomSlider