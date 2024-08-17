import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Tastings() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div>
            <Header  title={title} bgcolor={bgcolor} color={color}/>
            <div className="pt-64 max-lg:pt-10 ">
                <div className="flex justify-between max-lg:flex-col lg:items-center relative  max-lg:overflow-hidden lg:mb-20">
                    <div className='bg-[#E22733] lg:rounded-tr-[220px] lg:w-[40%] mt-20 leading-none h-[620px] max-xl:h-[500px] max-[1200px]:h-[460px] '>
                        <h1 className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] py-[180px] max-xl:py-[160px] max-lg:py-[40px] max-w-[600px] mx-auto mt-10 mb-0 text-white px-[30px] '><span className='font-turbinado text-[90px] max-[1200px]:text-[60px] text-[#FED455]'>Popcornopolis</span><p className='px-20 max-xl:px-10 max-lg:px-0'> Roadshows & Tastings <span className=' text-[#FED455]'>.</span></p> </h1>
                    </div>
                    <div className=" max-lg:w-full max-lg:relative max-lg:bottom-36">
                        <img className='min-h-[770px] max-xl:min-h-[700px] max-lg:min-h-max lg:top-0 lg:absolute lg:right-0 lg:-z-20  lg:rounded-bl-[150px] lg:w-[80%] object-cover' src="/assets/img/tastings.webp" alt="" />
                    </div>
                </div>
                <div className="max-w-[988px] mx-auto lg:mt-52 max-lg:px-[30px]">
                    <h4 className='text-[42px] max-lg:text-[37px] max-md:text-[33px] text-[#E22733] mb-5'>Dear Friends,</h4>
                    <p className='text-[17px] max-lg:text-[15px] font-sofia'>In order to help ensure customer safety with respect to Coronavirus/COVID-19, Costco Roadshow & Tasting Events have been suspended. Thank you for understanding.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tastings