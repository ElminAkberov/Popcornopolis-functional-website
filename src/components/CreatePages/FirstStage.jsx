import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function FirstStage() {
    let [show, setShow] = useState({
        "mini": false,
        "tall": false
    })
    const handleShow = (e) => {
        setShow(prev => ({
            ...prev,
            [e]: !prev[e]

        }))
    }
    return (
        <>
            {show['mini'] ?
                <img src="/assets/img/product/Cones.webp" className='max-h-[250px] absolute z-10 bottom-[-30px] left-20 max-[1492px]:bottom-[-180px] max-[1200px]:hidden' alt="" />
                : show['tall'] ? <img src="/assets/img/product/Big.webp" className='max-h-[250px] absolute z-10 bottom-[-30px] left-20 max-[1492px]:bottom-[-180px] max-[1200px]:hidden' alt="" /> :
                    <img src="/assets/img/Explore/Create.webp" className='max-h-[250px] absolute z-10 bottom-[-30px] left-20 max-[1492px]:bottom-[-180px] max-[1200px]:hidden' alt="" />

            }
            <div className="relative z-20 min-[1200px]:absolute lg:flex md:mt-40 mx-10  max-lg:mx-[10%] bottom-10 max-[1492px]:bottom-[-50px] max-md:bottom-52 max-[560px]:bottom-28 lg:gap-x-5">
                <div onMouseEnter={() => handleShow('mini')} onMouseLeave={() => handleShow('mini')} className='flex group  cursor-pointer  md:flex-col  relative  bg-[#F28220] py-2 px-[4%] max-w-[500px] mx-auto  max-[380px]:mx-[5%] [1200px]:w-[50%] text-white max-[1200px]:px-[15%] min-[1200px]:px-[45px] min-[1200px]:top-36' style={{ borderRadius: "0 50px 0 50px" }} >
                    <img className='w-[46%] scale-[1.1] group-hover:scale-[1.2] object-contain duration-300 max-lg:w-[26%] max-[380px]:bottom-0 max-md:bottom-0 max-md:h-[160px] max-[600px]:h-[100px] md:m-auto  relative bottom-24 max-lg:bottom-16' src="/assets/img/minicard1.webp" alt="" />
                    <NavLink to={"/create-your-own/build-quantity/mini-cones"} className=' m-auto  items-center'>
                        <div className="md:text-center ">
                            <h4 className='text-[30px] leading-none'>Mini Cones</h4>
                            <p className='absolute top-20 right-0 rotate-90 font-sofia font-bold max-md:hidden text-[18px]'>11"Tall</p>
                            <p className='font-sofia font-semibold mb-1'>40-70 Cones</p>
                            <p className='font-sofia font-semibold text-[17px]'>From<strong> $79.99</strong></p>
                        </div>
                        <div className="flex  relative max-md:right-6 max-md:top-5 md:justify-center mb-10">
                            <button className='mt-5  p-4 max-md:p-3 max-md:px-10 px-12 text-black bg-[#FED455] group-hover:bg-[#FFA400] group-hover:scale-x-110 duration-300 rounded-full font-sofia font-bold'>
                                <p className="group-hover:scale-x-90   duration-300">Select</p>
                            </button>
                        </div>

                    </NavLink>
                </div>
                <div onMouseEnter={() => handleShow('tall')} onMouseLeave={() => handleShow('tall')} className='flex cursor-pointer md:flex-col relative group  bg-[#F22F34] py-2 px-[4%] max-w-[500px] mx-auto  max-lg:mt-20 max-[380px]:mx-[5%] [1200px]:w-[50%] text-white max-[1200px]:px-[15%] min-[1200px]:px-[45px] min-[1200px]:top-36 ' style={{ borderRadius: "0 50px 0 50px" }} >
                    <img className='w-[46%] scale-[1.45] scale-x-[1.65] object-contain group-hover:scale-[1.6] group-hover:scale-x-[1.75] duration-300 max-lg:w-[26%] md:m-auto  relative bottom-24 max-md:bottom-0 max-md:h-[160px] max-[600px]:h-[100px] max-lg:bottom-16' src="/assets/img/minicard1.webp" alt="" />
                    <NavLink to={"/create-your-own/build-quantity/tall-cones"} className=' m-auto  items-center'>
                        <div className="md:text-center ">
                            <h4 className='text-[30px] leading-none'>Tall Cones</h4>
                            <p className='absolute top-20 right-0 rotate-90 font-sofia font-bold max-md:hidden text-[18px]'>15"Tall</p>
                            <p className='font-sofia font-semibold mb-1'>6-18 Cones</p>
                            <p className='font-sofia font-semibold text-[17px]'>From<strong> $32.99</strong></p>
                        </div>
                        <div className="flex md:justify-center relative max-md:right-6 max-md:top-5 mb-10">
                            <button className='mt-5 p-4 max-md:p-3 max-md:px-10 px-12 text-black bg-[#FED455] group-hover:bg-[#FFA400] group-hover:scale-x-110 duration-300 rounded-full font-sofia font-bold'>
                                <p className="group-hover:scale-x-90   duration-300">Select</p>
                            </button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default FirstStage