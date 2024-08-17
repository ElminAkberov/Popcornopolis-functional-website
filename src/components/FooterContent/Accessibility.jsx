import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'

function Accessibility() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'> 
            <Header  title={title} bgcolor={bgcolor} color={color}/>
            <div className="mt-44">
                <div className="max-w-[1240px] mx-auto px-[30px]">
                    <h1 className=' text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#e40c13] mb-5'>Accessibility.</h1>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <div className='text-[20px] max-lg:text-[17px] w-[70%] font-sofia'>
                        <p className='mb-10'>Barcel USA, LLC is committed to ensuring that all individuals, including but not limited to those who are visually impaired, hearing impaired, or have other disabilities, can access all of the information and services offered by Barcel USA, LLC through its websites.</p>
                        <p>If you are having trouble accessing any portion of this website, please contact our Consumer Relations team, who are available 24 hours a day, 7 days a week at<NavLink className="text-[#477BDD]">1-800-354-3372</NavLink> or crelations@grupobimbo.com.</p>
                        <NavLink target='_blank' to={"https://allyant.com/"}><img className='w-[200px] h-p[' src="/assets/img/Allyant.webp" alt="" /></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Accessibility