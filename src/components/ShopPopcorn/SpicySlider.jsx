import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function SpicySlider() {
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: { perView: 3, spacing: 2 },
        breakpoints: {
            '(max-width: 768px)': {
                slides: { perView: 2.2, spacing: 10 },
            },
            '(max-width: 550px)': {
                slides: { perView: 1.8, spacing: 10 },
            },
            '(max-width: 400px)': {
                slides: { perView: 1.1, spacing: 10 },
            }
        }
    })
    return (
        <div className=''>
            <div ref={sliderRef} className="keen-slider mt-20 gap-x-5 text-[#613223]">
                <div className="card1  flex flex-col items-center px-[40px] keen-slider__slide">
                    <div className=" bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px] relative bottom-5 mx-3' src="/assets/img/data/caramelcorn_long.webp" alt="" />
                    </div>
                    <NavLink to={"/shop/product/caramel-corn-tall-cone"} className="block">
                        <div className="">
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Caramel Corn Tall
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                          
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$71.99</strong>
                        </div>
                    </NavLink>
                </div>
                <div className="card1 flex flex-col items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px] mx-3 relative bottom-5' src="/assets/img/data/cheedarcheese_long.webp" alt="" />
                    </div>
                    <NavLink to={"/shop/product/cheddar-cheese-tall-cone"}>
                        <div className="">
                          
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Cheedar Cheese Tall
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                       
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$59.99</strong>
                        </div>
                    </NavLink>

                </div>
                <div className="card1 flex flex-col items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent hover:border-[#A0847B] hover:bg-[#613223] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px] mx-3 relative bottom-5' src="/assets/img/data/perfeclysalted.webp" alt="" />
                    </div>
                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                        <div className="">
                     
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Nearly Naked Perfectly Salted Popcorn 4.5 oz
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                          
                            <p className='font-sofia'>Pack of 8</p>
                            <strong className='font-sofia text-[19px]'>$27.99</strong>
                        </div>
                    </NavLink>

                </div>
                <div className="card1 flex flex-col items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px] mx-3 relative bottom-5' src="/assets/img/data/zebra_tall.webp" alt="" />
                    </div>
                    <NavLink to={"/shop/product/zebra®-popcorn-tall-cone"}>
                        <div className="">
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Cheedar Cheese Tall
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$71.99</strong>
                        </div>
                    </NavLink>
                </div>
                {/* <div className="card1 flex flex-col  items-center px-[40px] keen-slider__slide ">
                    <div className=" bg-[#FBF4EE] border-[12px] border-[#F9EFE7] hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px]   relative bottom-5 mx-3' src="/assets/img/data/caramelcorn_long.webp" alt="" />
                    </div>
                    <div className="">
                        <p className='my-4 text-[25px] max-[1200px]:text-[18px] '>Caramel Corn Tall Cone <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                        <p className='font-sofia'>Pack of 12</p>
                        <strong className='font-bold font-sofia'>$71.99</strong>
                    </div>
                </div>
                <div className="card1 flex flex-col  items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] border-[12px] border-[#F9EFE7] hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px] z-50  mx-3 relative bottom-5' src="/assets/img/data/cheedarcheese_long.webp" alt="" />
                    </div>
                    <div className="">
                        <p className='my-4 text-2xl max-[1200px]:text-[18px] '>Cheddar Cheese Tall Cone <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                        <p className='font-sofia'>Pack of 12</p>
                        <strong className='font-bold font-sofia'>$71.99</strong>
                    </div>
                </div>
                <div className="card1 flex flex-col  items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] border-[12px] border-[#F9EFE7] hover:border-[#A0847B] hover:bg-[#613223] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px]   mx-3 relative bottom-5' src="/assets/img/data/perfeclysalted.webp" alt="" />
                    </div>
                    <div className="">
                        <p className='my-4 text-2xl max-[1200px]:text-[18px] '>Nearly Naked Perfectly Salted Popcorn 4.5 oz Bag <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                        <p className='font-sofia'>Pack of 12</p>
                        <strong className='font-bold font-sofia'>$71.99</strong>
                    </div>
                </div>
                <div className="card1 flex flex-col  items-center px-[40px] keen-slider__slide">
                    <div className="bg-[#FBF4EE] border-[12px] border-[#F9EFE7] hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                        <img className='max-w-[212px]   mx-3 relative bottom-5' src="/assets/img/data/zebra_tall.webp" alt="" />
                    </div>
                    <div className="">
                        <p className='my-4 text-2xl max-[1200px]:text-[18px] '>Zebra® Popcorn Tall Cone <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                        <p className='font-sofia'>Pack of 12</p>
                        <strong className='font-bold font-sofia'>$71.99</strong>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SpicySlider