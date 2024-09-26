import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import SecondStage from './SecondStage'
import '../../index.css'
import { NavLink, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Create() {
    const { pathName } = useParams()
    const [data, setData] = useState({ first: [], second: [], third: [] })
    useEffect(() => {
        fetch("/shop.json").then(res => res.json()).then(res => { setData(res[pathName]) })
    }, [pathName])
    let bgcolor = '#e22733'
    let color = "white"
    let title = "#613223"
    return (
        <div className='overflow-hidden '>
            <Header bgcolor={bgcolor} color={color} title={title} />
            <div className=" ">
                <div className="es after:h-[39.5rem] max-[450px]:after:h-[43.5rem] after:-z-10"></div>
                <div className=" max-w-[1180px] mx-auto pt-[150px] pb-[120px] max-md:pb-[220px] px-[30px]">
                    <div className="flex justify-between max-[1200px]:flex-col max-[1200px]:px-0 text-[#613223]">
                        <div className="w-[43%] max-[1200px]:w-full z-20 mt-20">
                            <p className='font-sofia text-[18px] font-bold'>3 simple steps</p>
                            <h4 className='text-[42px] max-md:text-[42px] leading-none'><span className='text-[#C90910]  min-[1200px]:text-[63px] font-turbinado'>Create</span> your own assortment<span className='text-[#E7730D]'>.</span></h4>
                            <div className='mt-2 w-6 h-1 my-2 bg-[#E7730D]'></div>
                            <p className='max-md:text-[17.56px] text-[17px] max-md:hidden w-[70%] max-[1200px]:w-full font-sofia'>Whether your personality is salty, sweet, or somewhere in between, you’ve got plenty of flavors to explore. Signature cones in two sizes, plus a new pouch option for lasting freshness…</p>
                            {data.name == "Mini Cones" ?
                                <img src="/assets/img/product/Cones.webp" className='max-h-[250px] absolute left-0 min-[1492px]:left-24  z-10 bottom-[-80px] max-[1492px]:bottom-[-180px] max-[1200px]:hidden' alt="" />
                                : <img src="/assets/img/product/Big.webp" className='max-h-[250px] absolute z-10 left-0 min-[1492px]:left-24 bottom-[-80px] max-[1492px]:bottom-[-180px] max-[1200px]:hidden' alt="" />
                            }
                        </div>
                        <div className="w-[510px] max-[1200px]:w-full  min-[1200px]:mt-24 max-[1200px]:px-[30px]">
                            <div className='body relative min-[1492px]:right-[-40px]'>
                                <div className="container">
                                    <div className="progress-container-2">
                                        <div className="progress" id="progress"></div>
                                        <div className="circle-container mr-5">
                                            <NavLink to="/create-your-own">
                                                <div className="circle active bg-[#E22733] text-white"><i className="fab fa-js"></i>1</div>
                                                <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] absolute left-[-20px] max-md:left-[-30px] max-[550px]:left-[-25px] font-sofia ">
                                                    <p>Size</p>
                                                    <strong>{data.name}</strong>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="circle-container">
                                            <a href="">
                                                <div className="circle active bg-[#E22733] text-white"><i className="fab fa-js"></i>2</div>
                                                <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] translate-x-[-10px]  max-md:translate-x-[-12px] font-sofia fon">Quantity</div>
                                            </a>
                                        </div>
                                        <div className="circle-container">
                                            <a href="">
                                                <div className="circle active bg-[#84C3EE]"><i className="fab fa-js"></i>3</div>
                                                <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px]  max-md:translate-x-[-10px] font-sofia">Flavors</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-[1200px]:hidden ">
                                <SecondStage data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-[1200px]:hidden">
                <SecondStage data={data} />

            </div>
            <Footer />
        </div>
    )
}

export default Create