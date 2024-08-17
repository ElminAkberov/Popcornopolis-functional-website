import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

function Preferences() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color}/>
            <div className="pt-32">
                <div className="max-w-[1240px] mx-auto px-[30px] ">
                    <h1 className='w-[60%] max-[1200px]:w-[70%] max-md:w-full text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#e40c13] mb-10'>Privacy Preferences.</h1>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <div className='w-[70%] max-[1200px]:w-[70%] max-md:w-full text-[20px] max-lg:text-[17.5px] font-sofia'>
                        <p className='mb-5'>Please click the “Cookie Settings” button below if you would like to opt-out of certain cookies or tracking tools.</p>
                        <p className='mb-5'>You may also visit our <NavLink to={"/privacy-policy/"} className="text-[#477BDD] ">Privacy Policy</NavLink> for more information about online advertising and your options.</p>
                        <p className='mb-5'>Keep in mind that your selections are specific to the device and browser you are using. If you want to opt-out on multiple devices or browsers, visit this page and click the “Cookie Settings” button below for each device and for each browser. Your selections are also deleted whenever you clear your browser’s cache.</p>
                        <p className='mb-5'>For more details on how we collect and use personal information, please visit our <NavLink to={"/privacy-policy/"} className="text-[#477BDD] ">Privacy Policy</NavLink>.</p>
                        <button className=' gap-4 rounded-2xl text-[17px] max-md:text-[14px]  md:py-3 text-[#613223] bg-[#Fcc154] py-3 px-8 duration-300'>Cookie Settings</button>
                        <p className='mb-5'>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Preferences