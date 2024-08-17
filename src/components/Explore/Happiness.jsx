import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import HappinessSlider from './HappinessSlider'

function Happiness() {
    let title = "#613223"
    let bgcolor = "#E22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header bgcolor={bgcolor} color={color} title={title} />
            <div>
                <div className="pt-44 max-w-[1180px] px-[30px] mx-auto">
                    <h1 className='m-0 text-[60px] md:w-[50%] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[30px] leading-none text-[#E40C13]'>Happiness By The Handful™.</h1>
                    <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    <div className="text-[20px] max-lg:text-[17px] text-[#613223] md:w-[75%]">
                        <p className='mb-10 font-sofia'>Welcome to happiness, let’s kick off our shoes and get ready to explore what makes us smile, laugh, and feel all warm and fuzzy inside.</p>
                        <p className='font-sofia'>Whether it’s spending time with loved ones or taking a long walk in nature there are countless ways to find happiness in our lives. And the best part? Sometimes the simplest things bring us the most joy. However you find bliss, we’ve got your snack match, the perfect way to break up your daily routine and add a touch of indulgence to your day.</p>
                    </div>
                    <div className="">
                        <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <span></span>
                            <img className='max-md:max-h-[241px] min-h-[630px] max-[1200px]:min-h-[560px]  max-lg:min-h-[460px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Tin2.webp" alt="" />
                            <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-white'>We Are Thankful</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Expressing gratitude and giving back to others are two important ways to find joy and purpose in life. One way to show appreciation for others is by giving them a gift that brings joy and delight. Our tins and gift baskets are a perfect way to spread positivity. Popcorn gift baskets and tins are a perfect gift for any occasion, whether it’s a birthday, holiday, or just to say thank you.</p>
                                <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <img className='max-md:max-h-[241px] min-h-[560px] max-lg:min-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Nearly_Naked.webp" alt="" />
                            <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-white'>We Are Active</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Living an active lifestyle is not just about exercising regularly, it’s also about taking care of yourself with better for you and delicious food. It provides energy and sustenance for your workout, thanks to its simple ingredients. After a workout, it can be a satisfying snack that helps to replenish your body.</p>
                                <NavLink to={"/shop/product-flavor/nearly-naked/"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold  hover:bg-[#ffa400]  gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                        <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <span></span>
                            <img className='max-md:max-h-[241px] min-h-[700px] max-[1200px]:min-h-[620px]  max-lg:min-h-[540px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Caramel4.webp" alt="" />
                            <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-white'>We Are Present</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Being present in the moment and indulging in small moments can bring immense joy and fulfillment to our lives. It’s easy to get caught up in the hustle and bustle of daily life and forget to appreciate the little things that make life worth living.</p>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Savor the rich, buttery flavor of your popcorn and the sweet, indulgent taste of the caramel. You deserve it. Every bite is like a little piece of heaven, with the perfect balance of sweetness and crunchiness that is sure to leave you completely satisfied.</p>
                                <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag/"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <img className='max-md:max-h-[241px] min-h-[600px] max-lg:min-h-[420px] max-[850px]:min-h-[460px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Spicy.webp" alt="" />
                            <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>We Are Unique</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia  text-[#412015]'>Being yourself and embracing your uniqueness is an incredibly empowering and courageous thing to do. When you allow yourself to be daring and bold, you open up a world of possibilities. This is exactly what Popcornopolis® Takis Fuego® popcorn does – it pushes the boundaries of traditional popcorn flavors and invites you to try something new and exciting.</p>
                                <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                        <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <span></span>
                            <img className='max-md:max-h-[241px] min-h-[700px] max-[1200px]:min-h-[620px]  max-lg:min-h-[540px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Unicorn.webp" alt="" />
                            <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-white'>We Are Creative</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>When we stay true to who we are, we are able to live authentically, expressing ourselves in a way that is genuine and honest. This allows us to form deeper connections with those around us, as we share our true selves with others.</p>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Unicorn Popcorn® is a perfect example of the magic that can happen when creativity is combined with authenticity. This colorful and vibrant snack is a playful and whimsical treat that brings joy to those who indulge in it.</p>
                                <NavLink to={"/shop/product/unicorn-popcorn®-mini-cone/"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                        <div className="md:flex  relative md:px-[30px] mb-48 max-md:mb-20 ">
                            <img className='max-md:max-h-[241px] min-h-[750px] max-[1200px]:min-h-[670px]  max-lg:min-h-[540px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Double_Drizzle.webp" alt="" />
                            <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                                <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>We Are Creative</h3>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia  text-[#412015]'>When we stay true to who we are, we are able to live authentically, expressing ourselves in a way that is genuine and honest. This allows us to form deeper connections with those around us, as we share our true selves with others.</p>
                                <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia  text-[#412015]'>Unicorn Popcorn® is a perfect example of the magic that can happen when creativity is combined with authenticity. This colorful and vibrant snack is a playful and whimsical treat that brings joy to those who indulge in it.</p>
                                <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className="group"><button className='inline-flex group-hover:scale-x-110 items-center font-sofia font-bold gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex max-w-[1180px] mx-auto ">
                    <div className="px-[30px] md:max-w-[400px] mt-20 md:max-h-[200px] min-[1200px]:max-h-[180px] ">
                        <h3 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#E22733] leading-[1.2]'>We Are Connected</h3>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                        <p className='text-[19px] max-lg:text-[17px] max-md:text-[19px] text-[#613223] font-sofia'>Popcornopolis isn’t just any ordinary popcorn brand – it’s a community of popcorn lovers who share a passion for delicious, gourmet popcorn that’s bursting with flavor. Staying connected with us is easy and fun, break out the popcorn and let us know your thoughts.</p>
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
                                <NavLink to={"/shop/product/nearly-naked-22-oz-bag"}>
                                    <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card.webp" alt="" />
                                    <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                        <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                            Nearly Naked 22 oz
                                        </span>
                                        <span className='capitalize inline-flex items-center '>
                                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                        </span>
                                    </span>
                                    <div className="flex flex-col lg:absolute font-sofia font-bold text-[#613223] bottom-[-120px]">
                                        <span className='text-[20px] mb-2 text-[#412015]'>Kathy S.</span>
                                        <span className='lg:h-[120px] font-normal opacity-70 text-[#612223]'>Delicious and crunchy. It is a very satisfying treat with just a few ingredients. The package arrived on time and the contents protected.</span>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="card1 relative">
                                <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"}>
                                    <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card22.jpg" alt="" />

                                    <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                        <span className=' max-[1200px]:text-[18px] mb-5 max-lg:text-[16px] duration-300  pr-2'>
                                            Classic Stripe 2-Gallon Tin Classic
                                        </span>
                                        <span className='capitalize inline-flex items-center '>
                                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Assortment</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                        </span>
                                    </span>
                                    <div className="flex flex-col lg:absolute font-sofia font-bold text-[#613223] bottom-[-120px]">
                                        <span className='text-[20px] mb-2 text-[#412015]'>James R.</span>
                                        <span className='lg:h-[120px] font-normal opacity-70 text-[#612223]'>Wonderful, best popcorn I have ever had. This is or second tin and it will not be our last!!</span>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="card1 relative">
                                <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                                    <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/MiniCones.webp" alt="" />

                                    <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                        <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                            Caramel Corn Mini Cone
                                        </span>
                                        <span className='capitalize inline-flex items-center '>
                                            <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                        </span>
                                    </span>
                                    <div className="flex flex-col lg:absolute font-sofia font-bold text-[#613223] bottom-[-120px]">
                                        <span className='text-[20px] mb-2 text-[#412015]'>Gloria J.</span>
                                        <span className='lg:h-[120px] font-normal opacity-70 text-[#612223]'>Your popcorn is a great comfort food. I sent this assortment as a "thinking of you" gift. It was well received and consumed the moment it was delivered.</span>
                                    </div>
                                </NavLink>

                            </div>

                        </div>
                    </div>
                    <div className="max-md:block hidden">

                        <HappinessSlider />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Happiness