import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import Cones from './ShopPopcorn/Cones'
import { useParams } from 'react-router-dom'
import Footer from './Footer/Footer'

function Sweet() {
    const { name } = useParams()
    const [data, setData] = useState({ title: '', font: '', backgroundColor: '' })

    const parts = data.title.split(data.font);


    useEffect(() => {
        fetch("/shop.json").then(res => res.json()).then(res => { setData(res[name]); })
    }, [name])
    let bgcolor = '#E22733'
    let color = "white"
    let title = "#613223"

    return (
        <div className='bg-beigess '>
            <span className='max-md:bg-[#E22733]'></span>
            <span className='max-md:bg-[#84C4EC]'></span>
            <span className='max-md:bg-[#E7730D]'></span>
            <span className='max-md:bg-[#006838]'></span>
            <div className="">

                <Header bgcolor={bgcolor} color={color} title={title} />
                <div className={`  max-md:bg-[${data.backgroundColor}]`}>
                    <div className='px-[30px] max-w-[1180px] md:pt-52 pt-16 mx-auto  duration-300'>
                        <div style={{ background: data.backgroundColor }} className={` flex justify-between text-white max-md:text-center leading-[0.9] max-md:leading-[1.2] bg-[] rounded-tl-[120px] rounded-br-[100px] duration-300`}>
                            <div className="md:pl-20 md:mr-16 max-md:w-full  pt-14 max-lg:w-[70%]">
                                <p style={{ color: data.titlecolor }} className='text-[19px] max-lg:text-[17px] mb-5'>{data.subtitle}</p>
                                <div className="w-[]">
                                    <span style={{ color: data.titlecolor }} className=' text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[33px]  inline'>
                                        {parts[0]}
                                    </span>
                                    <span style={{ color: data.fontcolor }} className=' text-[90px] max-[1200px]:text-[60px] max-lg:text-[55px] max-md:text-[39px]  font-turbinado'>
                                        {data.font}
                                    </span>
                                    <span style={{ color: data.titlecolor }} className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[33px]  inline'>
                                        {parts[1]}.
                                    </span>
                                </div>
                            </div>
                            <div className="inline max-md:hidden relative bottom-4  max-md:top-2 ">
                                {/* <img src="/assets/img/Fund.webp" className='absolute max-w-[150px] top-20 left-[-60px]' alt="" /> */}
                                <img className=' object-cover min-h-[300px] rounded-tl-[120px] float-right rounded-br-[120px] ml-10' src={`${data.img}`} alt="" />
                            </div>
                        </div>
                        <div className="hidden max-md:block relative top-2">
                            {/* <img src="/assets/img/Fund.webp" className='absolute max-w-[100px] top-0 left-[0px]' alt="" /> */}
                            <img className='max-h-[179px] w-full object-cover rounded-tl-[80px] rounded-br-[80px]' src={`${data.img}`} alt="" />
                        </div>
                    </div>
                </div>
                <Cones pathName={name} />
            <Footer />
            </div>
        </div>
    )
}

export default Sweet