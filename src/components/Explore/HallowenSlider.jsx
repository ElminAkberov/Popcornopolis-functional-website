import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function HallowenSlider() {
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
        <div className=''>

            <div >
                <div ref={sliderRef} className="keen-slider mt-32 max-[1200px]:mt-2 max-lg:mt-10  ">
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal1.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Caramel Corn Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Luna</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70 text-[17px]'>Popcorn, my kind of howlin' good snack! It's got that crunch I crave between moonlit hunts. Who needs bones when you've got kernels? #SheWolfSnack</span>
                            </div>
                        </NavLink>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/kettle-corn-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Hal2.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Kettle Corn Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Frank</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70 text-[17px]'>Delicious popcorn, electrifying taste! Bolts of flavor shock my senses. A monster-sized treat for my reanimated cravings. #FrankenYum</span>
                            </div>
                        </NavLink>


                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal3.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Zebra® Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Drac</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70 text-[17px]'>Trick or treat? More like treat or treat. This popcorn's so fangtastic, it's a vamp's dream. #PopcornVampireTreat</span>
                            </div>
                        </NavLink>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/cheddar-cheese-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Hal4.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Cheddar Cheese Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Morgana Spellcaster</span>
                                <span className='lg:h-[120px] text-[#612223] opacity-70 text-[17px]'>This popcorn's spellbinding. Perfect for brewing up movie night magic. It's so bewitchingly tasty, I almost traded my broomstick. #WitchyMunchies</span>
                            </div>
                        </NavLink>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HallowenSlider