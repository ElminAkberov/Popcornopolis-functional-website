import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function NewYearSlider() {
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
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Ch1.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Caramel Corn Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Pippin</span>
                                <span className='lg:h-[120px] text-[#612223] text-[15px] opacity-70'>This popcorn is a delight. The festive packaging mirrors my holiday spirit. Perfect for my Christmas events and taste buds alike. 🍿🎄 #PopcornMagic #FrostyFeasting</span>
                            </div>
                        </NavLink>

                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/kettle-corn-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Ch2.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Kettle Corn Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Tundra</span>
                                <span className='lg:h-[120px] text-[#612223] text-[15px] opacity-70'>Kettle popcorn, a winter wonder. The sweet and salty dance on my taste buds like snowflakes in a flurry. In my Santa hat, I savor the festive explosion—each pop a celebration. A polar bear's delight in every kernel.</span>
                            </div>
                        </NavLink>


                    </div>
                    <div className="card1 relative keen-slider__slide">
                        <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                            <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Ch3.webp" alt="" />
                            <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                    Zebra®  Corn Mini Cone
                                </span>
                                <span className='capitalize inline-flex items-center '>
                                    <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                </span>
                            </span>
                            <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                <span className='text-[20px] mb-2 text-[#412015] font-bold'>Sage</span>
                                <span className='lg:h-[120px] text-[#612223] text-[15px] opacity-70'>Zebra popcorn, a Christmas delight. Stripes of caramel and chocolate twinkle like holiday lights in the snowy woods. I savor this festive treat, blending sweet and salty flavors in a merry celebration. Perfect for the season's magic.</span>
                            </div>
                        </NavLink>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default NewYearSlider