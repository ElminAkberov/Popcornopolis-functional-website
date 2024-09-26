import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function SecondStage() {
    const { pathName } = useParams()
    const [data, setData] = useState({ first: [], second: [], third: [] })
    useEffect(() => {
        fetch("/shop.json").then(res => res.json()).then(res => {
            let itemData = res[pathName]
            setData(itemData)
        })
    }, [pathName])

    return (
        <div className='lg:flex lg:gap-x-10 lg:mt-64 min-[1200px]:absolute max-[1200px]:ml-20 max-lg:ml-0 min-[1200px]:right-36 z-30'>
            <div className='relative max-md:bottom-40 z-10'>
                <NavLink to={`/shop/build-your-own-mini/${pathName}/first`} style={{ borderRadius: "0 3rem", background: data.bg }} className='flex mb-10 max-w-[500px] md:mx-auto  mx-[15%] max-[450px]:mx-[5%] '>
                    <div className="  ">
                        <img style={{ borderRadius: "0 4rem" }} className='w-[155px] lg:-z-10 lg:bottom-24  h-[200px] max-[356px]:h-[150px] md:absolute md:bottom-56  lg:min-w-[218px] lg:min-h-[340px] md:min-w-[500px]  duration-700  relative bottom-3 object-cover ' src={data?.first.map(item => item.img)} alt="" />
                    </div>
                    <div style={{ padding: "1.5rem 0rem 3.5rem 0" }} className="text-white group md:mt-[200px] lg:mt-0 md:m-auto flex flex-col gap-x-3 items-center mx-5 max-w-[200px]" >
                        <div className='flex items-center '>
                            <div>
                                <p className='text-[62px] leading-none'>{data?.first.map(item => item.cones)}</p>
                                <p className='md:hidden font-sofia ml-1'>Cones</p>
                            </div>
                            <div>
                                <p className='md:hidden ml-2'>From</p>
                                <p className='hidden md:block  font-sofia ml-2'>Cones</p>
                                <p className='text-[23px] lg:text-[19px] ml-2'>${data?.first.map(item => item.price)}</p>
                            </div>
                        </div>
                        <div className='max-md:m-auto lg:px-7'>
                            <button className='p-4 md:w-[450px]  lg:w-[150px] bg-[#fed455] group-hover:bg-[#FFA400] group-hover:scale-x-110 duration-300 text-black rounded-full font-sofia font-bold'>
                                <p className='group-hover:scale-x-90   duration-300'>Select</p>
                            </button>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className='relative max-md:bottom-40 z-10'>
                <NavLink to={`/shop/build-your-own-mini/${pathName}/second`}>
                    <div style={{ borderRadius: "0 3rem", background: data.bg }} className='flex mb-10 max-w-[500px] md:mx-auto  mx-[15%] max-[450px]:mx-[5%]'>
                        <div className="  ">
                            <img style={{ borderRadius: "0 4rem" }} className=' w-[155px] lg:-z-10 lg:bottom-24  h-[200px] max-[356px]:h-[150px] md:absolute md:bottom-56  lg:min-w-[218px] lg:min-h-[340px] md:min-w-[500px]     duration-700  relative bottom-3 object-cover ' src={data?.second.map(item => item.img)} alt="" />
                        </div>
                        <div style={{ padding: "1.5rem 0rem 3.5rem 0" }} className="group text-white md:mt-[200px] lg:mt-0 md:m-auto flex flex-col gap-x-3 items-center mx-5 max-w-[200px]" >
                            <div className='flex items-center '>
                                <div>
                                    <p className='text-[62px] leading-none'>{data?.second.map(item => item.cones)}</p>
                                    <p className='md:hidden font-sofia ml-1'>Cones</p>
                                </div>
                                <div>
                                    <p className='md:hidden ml-2'>From</p>
                                    <p className='hidden md:block  font-sofia ml-2'>Cones</p>
                                    <p className='text-[23px] lg:text-[19px] ml-2'>${data?.second.map(item => item.price)}</p>
                                </div>
                            </div>
                            <div className='max-md:m-auto lg:px-7'>
                                <button className='p-4 md:w-[450px] lg:w-[150px] bg-[#fed455] group-hover:bg-[#FFA400] group-hover:scale-x-110 duration-300 text-black rounded-full font-sofia font-bold'>
                                    <p className='group-hover:scale-x-90   duration-300'>Select</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className='relative max-md:bottom-40 z-10'>
                <NavLink to={`/shop/build-your-own-mini/${pathName}/third`}>
                    <div style={{ borderRadius: "0 3rem", background: data.bg }} className='flex mb-10 max-w-[500px] md:mx-auto  mx-[15%] max-[450px]:mx-[5%]'>
                        <div className="  ">
                            <img style={{ borderRadius: "0 4rem" }} className='w-[155px] lg:-z-10 lg:bottom-24  h-[200px] max-[356px]:h-[150px] md:absolute md:bottom-56  lg:min-w-[218px] lg:min-h-[340px] md:min-w-[500px]  duration-700  relative bottom-3 object-cover ' src={data?.third.map(item => item.img)} alt="" />
                        </div>
                        <div style={{ padding: "1.5rem 0rem 3.5rem 0" }} className="group text-white md:mt-[200px] lg:mt-0 md:m-auto flex flex-col gap-x-3 items-center mx-5 max-w-[200px]" >
                            <div className='flex items-center '>
                                <div>
                                    <p className='text-[62px] leading-none'>{data?.third.map(item => item.cones)}</p>
                                    <p className='md:hidden font-sofia ml-1'>Cones</p>
                                </div>
                                <div>
                                    <p className='md:hidden ml-2'>From</p>
                                    <p className='hidden md:block  font-sofia ml-2'>Cones</p>
                                    <p className='text-[23px] lg:text-[19px] ml-2 '>${data?.third.map(item => item.price)}</p>
                                </div>
                            </div>
                            <div className='max-md:m-auto lg:px-7'>
                                <button className='p-4 md:w-[450px] lg:w-[150px] bg-[#fed455] group-hover:bg-[#FFA400] group-hover:scale-x-110  duration-300 text-black rounded-full font-sofia font-bold'>
                                    <p className='group-hover:scale-x-90   duration-300'>Select</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </NavLink>
            </div>


        </div>
    )
}

export default SecondStage



























{/* <div>
<img src="/assets/img/minicard4.webp" alt="" />
</div>
<div>
<img src="/assets/img/minicard5.webp" alt="" />

</div> */}