import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

function Shipping() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige overflow-hidden'>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="my-36  max-w-[1240px] mx-auto min-[1200px]:px-[30px] ">
                <div className="order-1 ">
                    <img src="/assets/img/kernel.webp" className='md:float-right w-[20vw] ' alt="" />
                </div>
                <div className="md:flex  max-md:flex-col items-center ">
                    <div className="  max-md:order-2">
                        <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Shipping  <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] font-turbinado text-[#613223]'>and </span>Returns.</p>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    </div>
                </div>
                <div className="">
                    <div className="max-w-[1024px] mt-32 mx-auto px-[30px] ">
                        <h3 className=' text-[#E40C13] mb-2 text-[53px] max-lg:text-[47px] max-md:text-[43px] max-[500px]:text-[40px] leading-none'>We Stand Behind Our Product</h3>
                        <div className='mt-5 w-7 h-1 mb-12 bg-[#E22733]'></div>
                        <div className="chapter1 mb-10">
                            <h5 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-5'>100% Satisfaction</h5>
                            <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
                                <strong>First things first.</strong> We want you to have a delightful experience, and your complete satisfaction is our #1 priority. So we back up the quality of every product we sell with an unconditional guarantee: If you are not 100% satisfied with the quality of the product, please <NavLink className="text-[#386cce] underline hover:no-underline" to={"/customer-care/"}>contact our customer service team.</NavLink> We’ll provide you a replacement or a refund. It’s that simple, and it’s our promise to you.
                            </div>

                        </div>
                        <div className="chapter1 mb-10">
                            <h5 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-5'>Quality Matters</h5>
                            <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
                                <p>From day one, we’ve insisted on using only the best quality ingredients and cooking processes. Our non-GMO corn is sourced exclusively from American family farms, and we pop that corn fresh daily. We enjoy making high-quality products, and we take pride in everything we produce. We know you’ll taste the difference.</p>
                            </div>

                        </div>
                        <div className="chapter1 mb-10">
                            <h5 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-5'>Our Customers Know Best</h5>
                            <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
                                <p>Throughout this website, you’ll find hundreds of reviews from customers like you. We have done our best to please each and every one of them, and we hope to do the same for you. Either way, please let us know how we’re doing.</p>
                            </div>

                        </div>
                        <div className="chapter2 mb-10 ">
                            <h3 className=' text-[#E40C13] mb-2 text-[53px] max-lg:text-[47px] max-md:text-[43px] max-[500px]:text-[40px] leading-none'>Shipping</h3>
                            <div className='mt-5 w-7 h-1 mb-12 bg-[#E22733]'></div>
                            <div className="chapter1 mb-10">
                                <h5 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-5'>When will my order ship?</h5>
                                <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-32">
                                    <p className='mb-10'>Orders will be shipped based on the service level selected.</p>
                                    <p className='mb-10'>For overnight and 2-day orders placed by 1 PM Pacific Time, we will ship the same business day. Orders placed after 1 PM will ship the following business day. Orders placed after 1 PM on Friday will ship the following Monday.</p>
                                    <p className='mb-10'>For standard, ground, saver, and other shipping methods, your order will leave our warehouse 3-5 business days after the order is placed and will then be subject to carrier specified delivery times. Please check with the carrier for more specific delivery times for your order.</p>
                                </div>
                                <h5 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-5'>What shipping methods are available?</h5>
                                <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
                                    <p className='mb-10'>Popcornopolis offers 3 different shipping methods for you to choose. Below is an outline of the requirements and restrictions associated with each service.</p>
                                </div>
                                <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px]  text-[#E40C13] mb-10'>Ground Shipping</h5>
                                <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-32">
                                    <p className='mb-10'>This is a competitively priced service that provides reliable delivery of your packages up to 70 lbs. to anywhere in the United States. This is our most common and least-expensive delivery method.</p>
                                    <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Est. Delivery Times: 2-5 business days within the contiguous U.S. and 3-7 business days to and from Alaska and Hawaii. Check estimated transit times on the chart below.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Service Days: Tuesday-Friday. Delivery is between 9am and 8pm. There is no shipping on Saturday, Sunday or Monday, so if you order late in the afternoon on Friday, your order may not ship until the following Tuesday and three days will be added to your transit time.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Delivery Area: Available throughout all 50 states.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Package Size and Weight: Up to 70 lbs. each; 108″ in length; 165″ in length plus girth (L+2W+2H). That’s a whole lot of gourmet popcorn!</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Exceptions: Ground Shipping cannot deliver to P.O. boxes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative ">
                                    <img src="/assets/img/Shop popcorn/Delivery.webp" className='w-full rounded-tl-[200px] max-md:rounded-br-[100px] max-md:rounded-tl-[100px] rounded-br-[200px]' alt="" />
                                    <p className='font-sofia font-bold text-[15px] max-lg:text-[13px] mb-20 mt-3'>Service schedules in business days Ground shipments (2016)</p>

                                    <img src="/assets/img/mix2.webp" className='absolute duration-300 max-md:max-h-[120px] max-md:right-0 max-md:bottom-0  right-[-100px] bottom-[-100px]' alt="" />
                                </div>
                                <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px]  text-[#E40C13] mb-10'>Express Shipping Saver</h5>
                                <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-32">
                                    <p className='mb-10'>Do you need your popcorn in a hurry, but do not want to pay expensive express shipping? Try Express Saver.</p>
                                    <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Est. Delivery Times: By 4:30 p.m. in 3 business days to most areas (by 7 p.m. to residences).</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Service Days: Monday-Friday Only. Order by 1:00 to guarantee shipping that day.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Delivery Area: Available throughout all 50 states.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Package Size and Weight: Up to 150 lbs. each; 119″ in length; 165″ in length plus girth (L+2W+2H). We double-dog-dare you to eat this much popcorn.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Exceptions: Not available for Alaska or Hawaii shipments.</p>
                                        </div>
                                    </div>

                                </div>
                                <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px]  text-[#E40C13] mb-10'>2-3 Day</h5>
                                <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-32">
                                    <p className='mb-10'>If you’re in a hurry but don’t need your gourmet popcorn package sent overnight, this is the way to go. It’ll cost a bit more but you won’t have to worry about missing an important date or somebody’s birthday.</p>
                                    <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Est. Delivery Times: By 4:30 p.m. in 2 business days to most areas (by 7 p.m. to residences).</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Deadlines: Your order must be placed by 1:00 p.m. to be shipped out on the same day. Orders placed after this time will be shipped out the following day and if placed on Friday, may not be shipped until the following Monday. Order your popcorn gifts and treats by 1:00 to be on the safe side.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Service Days: Monday-Friday Only.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Delivery Area: Available throughout all 50 states.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Package Size and Weight: Up to 150 lbs. each; 119″ in length; 165″ in length plus girth (L+2W+2H). We double-dog-dare you to eat this much popcorn.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-3'></span>
                                            <p className='ml-5 mb-2'>Exceptions: Delivery to some areas of Alaska & Hawaii in 3 business days, depending on destination ZIP code.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                        {/* <div className="chapter3-1">
                            <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] text-[#E40C13] mb-10'>What is Popcornopolis doing to prevent the spread?</h5>
                            <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
                                <div className='flex gap-x-3 '>
                                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                    <p className='ml-5 mb-2'>As a company, we have taken every precaution recommended by the CDC.</p>
                                </div>
                                <div className="chapter3-2">
                                    <div className='flex gap-x-3 '>
                                        <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                        <p className='ml-5 mb-2'>Earlier this month, we established new safety standards in response to COVID-19 including:</p>
                                    </div>
                                    <div className="ml-24 max-md:ml-5">
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>All employees are required to have their temperature scanned upon entry and are required to go home if there is any evidence of fever.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>All employees are required to remain home if they are showing any signs of illness.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>It is already normal practice in the food industry for production employees to wash their hands and refrain from touching their faces.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>We have strongly reiterated the importance of these practices and are monitoring for strict compliance. We have limited outside visitors and canceled all in-person meetings with vendors.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>We have eliminated all non-essential travel for all employees.</p>
                                        </div>
                                        <div className='flex gap-x-3 '>
                                            <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                                            <p className='ml-5 mb-2'>We have limited internal office meetings and other gatherings to no more than 5 people.</p>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </div> */}
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Shipping