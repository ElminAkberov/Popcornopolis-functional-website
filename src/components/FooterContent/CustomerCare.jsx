import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

function CustomerCare() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="mt-36  max-w-[1240px] mx-auto px-[30px]">
                <div className="md:flex max-md:flex-col items-center ">
                    <div className="order-1 ">
                        <img src="/assets/img/kernels.webp" className='md:float-right w-[20vw] ' alt="" />
                    </div>
                    <div className="md:w-[70%] max-md:order-2">
                        <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Customer <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] font-turbinado text-[#613223]'>Care.</span></p>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                        <p className='text-[20px] max-md:text-[17px] mb-10 text-[#613223] font-sofia'>Since 2006, Popcornopolis has been dedicated to making the best product available, and we back that up with our Unconditional 100% Guarantee. If you are not 100% satisfied, have questions about our product, or just want to tell us your thoughts on our products, please contact our Customer Service Team using the form below.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[988px] mx-auto px-[30px] font-sofia">
                <p className='text-[17px] max-lg:text-[15.5px] max-[550px]:text-[14px] text-[#613223] lg:text-center mb-[50px]'>Have questions? Here are some links to help quickly answer any questions you might have prior to contacting us:</p>
                <div className="mb-[60px]">
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/shipping-information/"}  className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]">Shipping Information</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/faq/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]">Frequently Answered Questions</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/corporate-gifts/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]">Corporate Gifts</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/fundraising/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]"> Fundraising</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/covid-19-response/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]"> COVID-19 Safety Response</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/privacy-policy/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]"> Privacy Policy</NavLink>
                    </div>
                    <div className="flex items-center gap-x-2 md:pl-[70px] mb-[15px] max-md:mb-[10px]">
                        <div className='w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                        <NavLink to={"/terms-of-use/"} className="text-[17px] text-[#386CCE] underline max-lg:text-[15.5px] max-[550px]:text-[14px]"> Terms of Use</NavLink>
                    </div>
                </div>
                <p className='text-[17px] max-lg:text-[15.5px] max-[550px]:text-[14px] text-[#613223]  mb-[50px]'>Still have questions, call us at</p>
                <p className='text-[17px] max-lg:text-[15.5px] max-[550px]:text-[14px] text-[#613223]  '>Toll Free:<strong>800.767.2489</strong></p>
                <p className='text-[17px] max-lg:text-[15.5px] max-[550px]:text-[14px] text-[#613223]  mb-[50px]'>Monday through Friday 8am-8pm EST. Calls outside normal business hours will be assisted by an answering service.</p>
            </div>
            <Footer />
        </div>
    )
}

export default CustomerCare