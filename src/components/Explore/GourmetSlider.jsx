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
                        <NavLink to={"/shop/product/caramel-corn-tall-cone"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card5.jpg" alt="" />
                            <p className=' text-[24px] inline-block max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223]'>
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel Corn Tall
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                            </p>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Daniel M.</span>
                                <span className='lg:h-[120px] text-[15px] text-[#612223] opacity-70'>This is by far the best caramel corn I have had. I have tried about five other vendors and none of them can match the quality of Popcornopolis Caramel corn.</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card22.jpg" alt="" />
                            <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223]'>
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Classic Stripe 2-Gallon Tin Classic
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Assortment</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                            </p>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>D. Brown</span>
                                <span className='lg:h-[120px] text-[15px] text-[#612223] opacity-70'>We love caramel corn but you can’t go wrong with any of the flavors from Popcornopolis. Once the tin is opened, its game on! Lol It’s gone in no time.</span>
                            </div>
                        </NavLink>


                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/MiniCones.webp" alt="" />
                            <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223] pr-4'>
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel Corn Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                            </p>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Jennifer</span>
                                <span className='lg:h-[120px] text-[15px] text-[#612223] opacity-70'>By far the best Caramel Popcorn on the planet.</span>
                            </div>
                        </NavLink>


                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card4.jpg" alt="" />
                            <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223] pr-8'>
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel Corn Mini Cone
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>

                            </p>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Valerie</span>
                                <span className='lg:h-[120px] text-[15px] text-[#612223] opacity-70'>Just tried the Caramel Corn. By far, the VERY BEST Caramel Corn I have Ever tried!!!! I am booked!</span>
                            </div>
                        </NavLink>


                    </div>
                    {/* <div className="card1 relative keen-slider__slide">
                        <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card5.jpg" alt="" />
                        <p className=' text-[24px] inline-block max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223]'>Caramel Corn Tall Popcorn
                            <FaAngleRight className='p-1 inline mb-2 text-white rounded-full bg-red-600 lg:ml-5 max-lg:ml-2 text-[23px] max-lg:text-[20px]' />
                        </p>
                        <div className="flex flex-col lg:absolute bottom-[-120px]">
                            <span className='text-[20px] mb-2 text-[#412015]'>Daniel M.</span>
                            <span className='lg:h-[120px] text-[#612223]'>This is by far the best caramel corn I have had. I have tried about five other vendors and none of them can match the quality of Popcornopolis Caramel corn.</span>
                        </div>
                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card22.jpg" alt="" />
                        <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223]'>Classic Stripe 2-Gallon Tin Classic Assortment
                            <FaAngleRight className='p-1 inline mb-2 text-white rounded-full bg-red-600 lg:ml-5 max-lg:ml-2 text-[23px] max-lg:text-[20px]' />
                        </p>
                        <div className="flex flex-col lg:absolute bottom-[-120px]">
                            <span className='text-[20px] mb-2 text-[#412015]'>D. Brown</span>
                            <span className='lg:h-[120px] text-[#612223]'>We love caramel corn but you can’t go wrong with any of the flavors from Popcornopolis. Once the tin is opened, its game on! Lol It’s gone in no time.</span>
                        </div>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/MiniCones.webp" alt="" />
                        <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223] pr-8'>Caramel Corn Mini Cone Popcorn
                            <FaAngleRight className='p-1 inline mb-2 text-white rounded-full bg-red-600 lg:ml-5 max-lg:ml-2 text-[23px] max-lg:text-[20px]' />

                        </p>
                        <div className="flex flex-col lg:absolute bottom-[-120px]">
                            <span className='text-[20px] mb-2 text-[#412015]'>Jennifer</span>
                            <span className='lg:h-[120px] text-[#612223]'>By far the best Caramel Popcorn on the planet.</span>
                        </div>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card4.jpg" alt="" />
                        <p className='inline-block text-[24px] max-lg:text-[15px] mb-11 max-lg:mb-10 max-[1200px]:mb-16  leading-[1.2] text-[#613223] pr-12'>Caramel & Kettle Popcorn Bag
                            <FaAngleRight className='p-1  inline mb-2 text-white rounded-full bg-red-600 lg:ml-5 max-lg:ml-2 text-[23px] max-lg:text-[20px]' />

                        </p>
                        <div className="flex flex-col lg:absolute bottom-[-120px]">
                            <span className='text-[20px] mb-2 text-[#412015]'>Valerie</span>
                            <span className='lg:h-[120px] text-[#612223]'>Just tried the Caramel Corn. By far, the VERY BEST Caramel Corn I have Ever tried!!!! I am booked!</span>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MushroomSlider