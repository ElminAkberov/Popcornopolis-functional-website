import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function MainEndSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: { perView: 2.3, spacing: 40 },
        breakpoints: {
            '(max-width: 550px)': {
                slides: { perView: 2, spacing: 10 },
            },
            '(max-width: 400px)': {
                slides: { perView: 1.6, spacing: 10 },
            },
            '(max-width: 360px)': {
                slides: { perView: 1.5, spacing: 10 },
            },
            '(max-width: 300px)': {
                slides: { perView: 1.2, spacing: 15 },
            }
        }

    })
    return (
        <div ref={sliderRef} className='keen-slider relative bottom-8 px-[30px]'>
            <div className="cards relative keen-slider__slide">
                <NavLink to={"/shop/product/caramel-corn-tall-cone"}>
                    <div className="overflow-hidden rounded-tr-[100px]  rounded-bl-[100px] " >
                        <div className=" relative">
                            <img className=' image-hover' src="/assets/img/nearlyNaked2.webp" alt="" />
                            <button className='button-hover max-[1200px]:scale-90 max-[1200px]:pr-6 absolute bottom-2 right-0 flex items-center  gap-x-7 mt-3 pr-10 pl-4 py-3 mr-4 rounded-full max-lg:text-[14px] bg-[#FED455] '>
                                <p className='font-sofia font-bold '>Shop Now</p>
                                <FaArrowRightLong size={23} />
                            </button>
                        </div>
                    </div>
                    <span className='inline-block group text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] min-[1200px]:pb-10 capitalize'>
                        <span className='text-[#613223] max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-1'>
                            Caramel Corn Tall
                        </span>
                        <span className='capitalize inline-flex items-center '>
                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline text-[#613223]'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                        </span>
                    </span>
                    <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia font-bold">
                        <span className='text-[20px] mb-2 max-[1200px]:text-[18px] max-lg:text-[16px]  text-[#613223]'>Rachael and Lucas</span>
                        <span className='lg:h-[120px] text-[#612223] max-lg:text-[15px] opacity-70 font-normal'>We love spending quality one-on-one time together any chance we can get! @Popcornopolis makes that time even sweeter.</span>
                    </div>
                </NavLink>
            </div>
            <div className="cards relative keen-slider__slide">
                <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                    <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden  ">
                        <img className='image-hover ' src="/assets/img/nearlyNaked.webp" alt="" />
                        <button className='button-hover max-[1200px]:scale-90 max-[1200px]:pr-6 absolute bottom-2 right-0 flex items-center  gap-x-7 mt-3 pr-10 pl-4 py-3 mr-4 rounded-full max-lg:text-[14px] bg-[#FED455] '>
                            <p className='font-sofia font-bold '>Shop Now</p>
                            <FaArrowRightLong size={23} />
                        </button>
                    </div>
                    <span className='inline-block group text-[#613223] leading-none text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] min-[1200px]:pb-10 capitalize'>
                        <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-1'>
                            Nearly Naked Perfectly Salted Popcorn 4.5 oz
                        </span>
                        <span className='capitalize inline-flex items-center '>
                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                        </span>
                    </span>
                    <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia font-bold">
                        <span className='text-[20px] mb-2 max-[1200px]:text-[18px] max-lg:text-[16px]  text-[#613223]'>Felise F.</span>
                        <span className='lg:h-[120px] text-[#612223] max-lg:text-[15px] opacity-70 font-normal'>Loved EVERY SINGLE BITE!!! WANT TO ORDER MORE. S O O N!!</span>
                    </div>
                </NavLink>

            </div>
            <div className="cards relative keen-slider__slide">
                <NavLink to={"/shop/product/unicorn-popcorn®-tall-cone"}>
                    <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden ">
                        <img className='image-hover ' src="/assets/img/nearlyNaked3.webp" alt="" />
                        <button className='button-hover max-[1200px]:scale-90 max-[1200px]:pr-6 absolute bottom-2 right-0 flex items-center  gap-x-7 mt-3 pr-10 pl-4 py-3 mr-4 rounded-full max-lg:text-[14px] bg-[#FED455] '>
                            <p className='font-sofia font-bold '>Shop Now</p>
                            <FaArrowRightLong size={23} />
                        </button>
                    </div>
                    <span className='inline-block group text-[#613223] leading-none text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] min-[1200px]:pb-10 capitalize'>
                        <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-1'>
                            Unicorn Popcorn® Regular
                        </span>
                        <span className='capitalize inline-flex items-center '>
                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                        </span>
                    </span>
                    <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia font-bold">
                        <span className='text-[20px] mb-2 max-[1200px]:text-[18px] max-lg:text-[16px]  text-[#613223]'>Kasey M.</span>
                        <span className='lg:h-[120px] text-[#612223] max-lg:text-[15px] opacity-70 font-normal'>Popcornopolis has endless yummy flavors to choose from...They also make it easy for you to create your own assortment.</span>
                    </div>
                </NavLink>

            </div>
            <div className="cards relative keen-slider__slide">
                <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                    <div className="relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden ">
                        <img className='image-hover rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/nearlyNaked4.webp" alt="" />
                        <button className='button-hover max-[1200px]:scale-90 max-[1200px]:pr-6 absolute bottom-2 right-0 flex items-center  gap-x-7 mt-3 pr-10 pl-4 py-3 mr-4 rounded-full max-lg:text-[14px] bg-[#FED455] '>
                            <p className='font-sofia font-bold '>Shop Now</p>
                            <FaArrowRightLong size={23} />
                        </button>
                    </div>
                    <span className='inline-block group text-[#613223] leading-none text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] min-[1200px]:pb-10 capitalize'>
                        <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-1'>
                            Zebra® Mini Cone
                        </span>
                        <span className='capitalize inline-flex items-center '>
                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                        </span>
                    </span>
                    <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia font-bold">
                        <span className='text-[20px] mb-2 max-[1200px]:text-[18px] max-lg:text-[16px]  text-[#613223]'>Kayla H.</span>
                        <span className='lg:h-[120px] text-[#612223] max-lg:text-[15px] opacity-70 font-normal'>Best popcorn I’ve had in a long time. Nothing else like it and so delicious.</span>
                    </div>
                </NavLink>

            </div>



        </div>
    )
}

export default MainEndSlider