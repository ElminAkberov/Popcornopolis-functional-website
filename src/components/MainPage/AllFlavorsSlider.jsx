import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function CorporateSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: { perView: 2, spacing: 10 },
        breakpoints: {

            '(max-width: 600px)': {
                slides: { perView: 1, spacing: 10 },
            },

        },
    })
    return (
        <div >
            <div ref={sliderRef} className="keen-slider">
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/perfeclysalted.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[300px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px] max-md:text-[25px]  leading-[1.2] font-bold'>Nearly Naked Perfectly Salted</h4>
                            <p className='text-[16px]  py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-white-cheddar-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/whitecheedar.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[330px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px]  max-md:text-[25px] leading-[1.2] font-bold'>Nearly Naked White Salted</h4>
                            <p className='text-[16px]   py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-jalapeno-lime-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/Jalapeno.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#84C4EC] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[330px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px] max-md:text-[25px]  leading-[1.2] font-bold'>Nearly Naked Jalapeno Lime</h4>
                            <p className='text-[16px]  py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CorporateSlider