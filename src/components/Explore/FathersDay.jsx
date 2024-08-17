import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import FatherDaySlider from './FathersDaySlider'

function Earth() {
    let title = '#613223'
    let color = "#fff"
    let bgcolor = "#E22733"
    
    return (
        <div className='bg-beige'>
            <Header color={color} bgcolor={bgcolor} title={title} />
            <div className='pt-32 max-w-[1240px] mx-auto px-[30px]'>
                <div className="  ">
                    <div className="md:flex justify-between">
                        <img src="/assets/img/Explore/Fathers.webp" className='object-contain order-2' alt="" />
                        <div className="md:w-[45%]">
                            <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Celebrate <span className='font-turbinado text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] max-md:text-[40px]'>Father’s</span> Day  <span className='text-[#613223] font-turbinado'>.</span></h1>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                        </div>
                    </div>
                    <p className='text-[20px] max-lg:text-[17px] text-[#613223] md:w-[70%] font-sofia'>Celebrate your father with a range of flavors to suit any dad’s taste, from sweet and savory to spicy. You can even choose from different packaging options, such as gift boxes, tins, and baskets, to make your gift extra special. Give your dad a gift that’s both thoughtful and delicious with a gourmet popcorn gift.</p>
                </div>
            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto mt-20">

                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] max-h-[480px]   max-lg:max-h-[350px]    max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Cue.webp" alt="" />
                    <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>The Perfect Balance</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Just like the perfect balance of sweet and salty, you’ve always known how to balance work and play, family and friends, and all the challenges that come your way.</p>
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[680px] max-lg:min-h-[450px] max-[850px]:min-h-[500px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card2.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] mr-5'>Double the Sweetness </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Looking for a fun and tasty way to show your dad some love? Well, have you considered getting him some double drizzle popcorn? Not only is it a delicious snack, but it also comes with the added bonus of making you look like the coolest kid on the block. So why settle for boring old popcorn when you could double up on the drizzle and double up on the fun?</p>
                        <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[620px] max-lg:min-h-0   max-lg:max-h-[380px] max-[850px]:min-h-[480px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Fathers.jpg" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Create Dad’s Dream Snack</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#Fed455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>A unique and thoughtful gift: While traditional gifts like ties or socks can be useful, they may not be as memorable or exciting. The possibilities of combinations you can create with Create Your Own assortment are endless. Pick his favorite flavors to give him the gift as unique as he is.</p>
                        <NavLink to={"/create-your-own/"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Create Your Own</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] max-h-[530px] max-lg:max-h-[400px] max-[850px]:max-h-[450px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/LateNight.jpg" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>Give Dad a Fiery Kick </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Why settle for boring old popcorn when you can give your dad a taste of the bold and exciting with Popcornopolis® Takis Fuego® popcorn? Trust us, his taste buds will thank you.</p>
                        <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 font-sofia font-bold hover:bg-[#ffa400] group-hover:scale-x-110 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>

            </div>
            <div className="md:flex max-w-[1180px] mx-auto ">
                <div className="pl-[30px] md:max-w-[400px] mt-20 md:max-h-[200px] min-[1200px]:max-h-[180px] ">
                    <h3 className='text-[42px]  max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#E22733] leading-[1.2] '>The Cool Dad</h3>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <p className='text-[19px] max-lg:text-[17px] max-md:text-[19px] text-[#613223] font-sofia'>He’s the life of the party and the first to pick up the new trends. Have him share your Popcornopolis family memories. Popcornopolis isn’t just any ordinary popcorn brand. Staying connected with us is easy and fun, break out the popcorn and let us know your thoughts.</p>
                </div>
                <div className="absolute  max-md:relative right-0 max-md:left-[-5vw] max-[550px]:left-0 duration-300 md:w-[50%]">
                    <div className="rounded-ss-[10rem] max-md:rounded-ss-[7rem] bg-[#E22733] max-md:py-16  max-md:w-full duration-150">
                        <div className="max-md:pl-[20%] py-40 max-[1200px]:py-20 px-20 min-[1200px]:max-w-[580px]  max-md:py-0">
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#FED455]'></div>
                            <p className='text-[25px] max-lg:text-[22px] leading-[1.2] text-white'>So whether you’re a die-hard fan or a first-time popcorn lover, staying connected with Popcornopolis is a must-do. Who knows, you might just discover your new favorite flavor or make some popcorn-loving friends along the way.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] mx-auto">
                <div className="max-[980px]:max-w-[600px] max-md:hidden ">
                    <div className="mt-64 max-[1200px]:mt-32 max-lg:mt-52 grid grid-cols-4 max-lg:grid-cols-3 max-[980px]:grid-cols-2    gap-x-10 px-[30px]">
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card21.webp" alt="" />
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel & Kettle Popcorn
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Valerie</span>
                                    <span className='lg:h-[120px] text-[17px] opacity-70 text-[#612223]'>Just tried the Caramel Corn. By far, the VERY BEST Caramel Corn I have Ever tried!!!! I am booked!</span>
                                </div>
                            </NavLink>

                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card23.webp" alt="" />
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Double Drizzle
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Antoinette</span>
                                    <span className='lg:h-[120px] text-[17px] opacity-70 text-[#612223]'>Popcorn Perfection</span>
                                </div>
                            </NavLink>


                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card22.jpg" alt="" />
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Classic Stripe 2-Gallon Tin Classic
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Assortment</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col lg:absolute bottom-[-120px] font-sofia">
                                    <span className='text-[20px] mb-2 text-[#412015] font-bold'>Lizzy</span>
                                    <span className='lg:h-[120px] text-[17px] opacity-70 text-[#612223]'>Excellent product. I purchased it as a gift for a friend. She loved it!</span>
                                </div>
                            </NavLink>


                        </div>

                    </div>
                </div>
                <div className="max-md:block hidden">

                    <FatherDaySlider />
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Earth