import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
function EditSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: { perView: 2, spacing: 10 },
        breakpoints: {

            '(max-width: 600px)': {
                slides: { perView: 1.8, spacing: 2 },
            },
            '(max-width: 450px)': {
                slides: { perView: 1.5, spacing: 2 },
            },
            '(max-width: 350px)': {
                slides: { perView: 1.2, spacing: 2 },
            },

        },
    })
    return (
        <div  className="">
            <div ref={sliderRef} className="cards keen-slider w-full mt-[50px] text-[#613223]   ">

                <div className="card1  flex flex-col items-center  keen-slider__slide">
                    <NavLink to={"/shop/product/caramel-corn-tall-cone"}>
                        <div className=" bg-[#Fdfaf7]   border-[12px] border-[#FCF6F2] hover:border-[#FDF9F6] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                            <img className='  relative bottom-5 mx-auto' src="/assets/img/data/caramelcorn_long.webp" alt="" />
                        </div>
                        <div className="px-[40px]">
                            <p className='my-4 text-[25px] max-[1200px]:text-[18px] hovers leading-[1]'><span>Caramel Corn Tall Cone</span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$71.99</strong>
                        </div>

                    </NavLink>
                </div>
                <div className="card1  flex flex-col items-center  keen-slider__slide">
                    <NavLink to={"/shop/product/cheddar-cheese-tall-cone"}>
                        <div className="bg-[#FDFAF7]  border-[12px] border-[#FDF9F6] hover:border-[#FDFAF8] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                            <img className='  mx-auto relative bottom-5' src="/assets/img/data/cheedarcheese_long.webp" alt="" />
                        </div>
                        <div className="px-[40px]">
                            <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Cheddar Cheese Tall Cone</span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$59.99</strong>
                        </div>
                    </NavLink>

                </div>
                <div className="card1 flex flex-col items-center  keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                        <div className="bg-[#FDFAF7]  border-[12px] border-[#FDF9F6] hover:border-[#A0847B] hover:bg-[#613223] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                            <img className='  mx-auto relative bottom-5' src="/assets/img/data/Cinnamon.webp" alt="" />
                        </div>
                        <div className="px-[40px]">
                            <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Cinnamon Toast Mini Cone </span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                            <p className='font-sofia'>Pack of 40</p>
                            <strong className='font-sofia text-[19px]'>$69.99</strong>
                        </div>
                    </NavLink>

                </div>
                <div className="card1 flex flex-col items-center  keen-slider__slide">
                    <NavLink to={"/shop/product/zebra®-popcorn-tall-cone"}>
                        <div className="bg-[#FDFAF7]  border-[12px] border-[#FCF6F2] hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                            <img className='  mx-auto relative bottom-5' src="/assets/img/data/zebra_tall.webp" alt="" />
                        </div>
                        <div className="px-[40px]">
                            <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Zebra® Popcorn Tall Cone</span><span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                            <p className='font-sofia'>Pack of 12</p>
                            <strong className='font-sofia text-[19px]'>$71.99</strong>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default EditSlider