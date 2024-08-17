import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function PoppableSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: { perView: 2, spacing: 20 },
        breakpoints: {
            '(max-width: 768px)': {
                slides: { perView: 2, spacing: 10 },
            },
            '(max-width: 550px)': {
                slides: { perView: 1.5, spacing: 10 },
            },
            '(max-width: 350px)': {
                slides: { perView: 1.1, spacing: 10 },
            }
        },
    });

    return (
        <div >
            <div ref={sliderRef} className="keen-slider ">
                <NavLink to={"/shop/snacking"} className="card1 keen-slider__slide  group">
                    <div className="imgs overflow-hidden">
                        <img className='group-hover:scale-[1.03] duration-300 rounded-tr-[12rem] max-[1200px]:rounded-tr-[6rem]' src="/assets/img/snacking1.webp" alt="" />
                    </div>
                    <div className="rounded-tr-[8rem] max-[1200px]:rounded-tr-[6rem] rounded-bl-[6rem] max-[1200px]:rounded-bl-[4rem] mr-[20%] max-[1492px]:mr-[10%] max-[1200px]:mr-[5%] bg-[#E7730D] relative bottom-[12.5%] max-[1200px]:bottom-[18%]  max-[1200px]:p-7 max-lg:p-8 p-10  pl-14 _and_text ">
                        <p className='text-white text-[34px] max-[1200px]:text-[25px]  max-lg:text-[21px] font-sofia font-bold'>Snacking</p>
                        <button className='   flex items-center gap-x-5  mt-3 pr-10 max-[1250px]:pr-5 max-[1200px]:pr-2 pl-6 py-[14px] mr-12 max-[1492px]:mr-8 max-[1200px]:mr-0  rounded-full max-lg:text-[14px] bg-[#FED455]  group-hover:bg-[#FFA400] group-hover:max-[1200px]:pr-6 group-hover:max-lg:pr-3  group-hover:max-[1200px]:pl-7 group-hover:max-lg:pl-7 group-hover:pr-12 group-hover:pl-8 duration-300'>
                            <p className='font-sofia font-bold text-[#613223] '>Shop Now</p>
                            <FaArrowRightLong className='mr-2' size={23} />
                        </button>
                    </div>
                </NavLink>
                <NavLink to={"/shop/movie-night"} className="card1 keen-slider__slide  group">
                    <div className="imgs overflow-hidden">
                        <img className='group-hover:scale-[1.03] duration-300 rounded-tr-[12rem] max-[1200px]:rounded-tr-[6rem]' src="/assets/img/snacking2.webp" alt="" />
                    </div>
                    <div className="rounded-tr-[8rem] max-[1200px]:rounded-tr-[6rem] rounded-bl-[6rem] max-[1200px]:rounded-bl-[4rem]  bg-[#613223] relative bottom-[12.5%] max-[1200px]:bottom-[18%] mr-[20%] max-[1492px]:mr-[10%] max-[1200px]:mr-[5%] max-[1200px]:p-7 max-lg:p-8 p-10 pl-14 _and_text ">
                        <p className='text-white text-[34px] max-[1200px]:text-[25px]  max-lg:text-[21px] font-sofia font-bold'>Movie Night</p>
                        <button className='  flex items-center gap-x-5  mt-3 pr-10 max-[1250px]:pr-5 max-[1200px]:pr-2 pl-6 py-[14px] mr-12 max-[1492px]:mr-8 max-[1200px]:mr-0 rounded-full max-lg:text-[14px] bg-[#FED455]  group-hover:bg-[#FFA400] group-hover:max-[1200px]:pr-6 group-hover:max-lg:pr-3  group-hover:max-[1200px]:pl-7 group-hover:max-lg:pl-7 group-hover:pr-12 group-hover:pl-8 duration-300'>
                            <p className=' font-sofia font-bold text-[#613223]  '>Shop Now</p>
                            <FaArrowRightLong className='mr-2' size={23} />
                        </button>
                    </div>
                </NavLink>
                <NavLink to={"/shop/party-time"} className="card1 keen-slider__slide  group">
                    <div className="imgs overflow-hidden">
                        <img className='group-hover:scale-[1.03] duration-300 rounded-tr-[12rem] max-[1200px]:rounded-tr-[6rem]' src="/assets/img/snacking3.webp" alt="" />
                    </div>
                    <div className="rounded-tr-[8rem] max-[1200px]:rounded-tr-[6rem] rounded-bl-[6rem] max-[1200px]:rounded-bl-[4rem] bg-[#E22733] relative bottom-[12.5%] max-[1200px]:bottom-[18%] mr-[20%] max-[1492px]:mr-[10%] max-[1200px]:mr-[5%] max-[1200px]:p-7 max-lg:p-8 p-10 pl-14 _and_text ">
                        <p className='text-white text-[34px] max-[1200px]:text-[25px]  max-lg:text-[21px] font-sofia font-bold'>Party Time</p>
                        <button className='  flex items-center gap-x-5  mt-3 pr-10 max-[1250px]:pr-5 max-[1200px]:pr-2 pl-6 py-[14px] mr-12 max-[1492px]:mr-8 max-[1200px]:mr-0 rounded-full max-lg:text-[14px] bg-[#FED455]  group-hover:bg-[#FFA400] group-hover:max-[1200px]:pr-6 group-hover:max-lg:pr-3  group-hover:max-[1200px]:pl-7 group-hover:max-lg:pl-7 group-hover:pr-12 group-hover:pl-8  duration-300 '>
                            <p className='font-sofia font-bold text-[#613223]   '>Shop Now</p>
                            <FaArrowRightLong className='mr-2' size={23} />
                        </button>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default PoppableSlider;
