import React, { useEffect } from 'react'

import FirstStage from './FirstStage'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Create() {
    let bgcolor = '#e22733'
    let color = "white"
    let title = "#613223"
    useEffect(() => {
    }, [])
    return (
        <div className='overflow-hidden '>
            <Header bgcolor={bgcolor} color={color} title={title} />
            <div className="es after:h-[39.5rem] max-[450px]:after:h-[43.5rem] after:-z-10"></div>
            <div className=" xl:h-[80vh] px-[30px]">
                <div className=" max-w-[1180px] mx-auto pt-[120px] max-md:pt-[120px] pb-[120px] max-md:pb-[220px]">
                    <div className="flex justify-between max-[1200px]:flex-col max-[1200px]:px-0">
                        <div className="w-[43%] max-[1200px]:w-full text-[#613223] z-20 min-[1200px]:mt-20 mb-10">
                            <p className='font-sofia font-bold text-[19px] '>3 simple steps</p>
                            <h4 className='text-[42px] max-md:text-[42px] leading-none '><span className='text-[#C90910] lg:text-[63px] font-turbinado'>Create</span> your own assortment<span className='text-[#E7730D]'>.</span></h4>
                            <div className='mt-2 w-6 h-1 my-2 bg-[#E7730D]'></div>
                            <p className='max-md:text-[17.56px] font-sofia'>Whether your personality is salty, sweet, or somewhere in between, you’ve got plenty of flavors to explore. Signature cones in two sizes, plus a new pouch option for lasting freshness…</p>
                            {/* <img src="/assets/img/Explore/Create.webp" className='max-h-[250px] absolute z-10 bottom-0 max-[1492px]:bottom-[-100px] max-[1200px]:hidden' alt="" /> */}
                        </div>
                        <div className="w-[510px] mt-10 max-[1200px]:w-full">
                            <div className='body '>
                                <div className="container">
                                    <div className="progress-container ">
                                        <div className="progress" id="progress"></div>
                                        <div className="circle-container mr-5 ">
                                            <a href="">
                                                <div className="circle active bg-[#E22733] text-white"><i className="fab fa-js"></i>1</div>
                                                <div className="text-[#613233]  text-[20px] max-md:text-[16px] max-[550px]:text-[14px] absolute left-[-20px] font-sofia font-semibold">Select Size</div>
                                            </a>
                                        </div>
                                        <div className="circle-container">
                                            <a href="">
                                                <div className="circle active bg-[#84C3EE]"><i className="fab fa-js"></i>2</div>
                                                <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] translate-x-[-10px] font-sofia font-semibold max-md:translate-x-[-15px]">Quantity</div>
                                            </a>
                                        </div>
                                        <div className="circle-container">
                                            <a href="">
                                                <div className="circle active bg-[#84C3EE]"><i className="fab fa-js"></i>3</div>
                                                <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] font-sofia font-semibold max-md:translate-x-[-10px]">Flavors</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" max-[1200px]:hidden">
                                <FirstStage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-[1200px]:hidden ">
                <FirstStage />
            </div>
                <Footer />
        </div>
    )
}

export default Create