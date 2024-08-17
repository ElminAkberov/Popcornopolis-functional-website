import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import AllFlavorsSlider from "./AllFlavorsSlider"

function AllFlavors() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="pt-64 max-lg:pt-10 ">
                <div className="flex justify-between max-lg:flex-col lg:items-center relative  max-lg:overflow-hidden lg:mb-20">
                    <div className='bg-[#E22733] lg:rounded-tr-[220px] lg:w-[40%] mt-20 leading-none h-[620px] max-xl:h-[500px] max-[1200px]:h-[460px] '>
                        <h1 className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] py-[180px] max-xl:py-[160px] max-lg:py-[40px] max-w-[600px] mx-auto mt-10 mb-0 text-white px-[30px] '><span className='font-turbinado text-[90px] max-[1200px]:text-[60px] text-[#FED455]'>Explore</span><p className='px-20 max-xl:px-10 max-lg:px-0'> Our Flavors <span className=' text-[#FED455]'>.</span></p> </h1>
                    </div>
                    <div className=" max-lg:w-full max-lg:relative max-lg:bottom-36">
                        <img className='min-h-[770px] max-xl:min-h-[700px] max-lg:min-h-max lg:top-0 lg:absolute lg:right-0 lg:-z-20  lg:rounded-bl-[150px] lg:w-[80%] object-cover' src="/assets/img/Corporate.webp" alt="" />
                    </div>
                </div>
                <div className="max-w-[1180px] mx-auto lg:mt-52 max-lg:px-[30px]">
                    <h4 className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px]  text-[#E22733] mb-5'>Our Brands<span className='text-[#613233]'>.</span></h4>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#e22733]'></div>
                    <p className='text-[20px] max-lg:text-[17px] min-[1200px]:w-[50%] text-[#613223] font-sofia'>Our popcorn is the crème de la crème of all popcorns out there. It’s not just a snack, it’s a delicious flavor experience that will have you reaching for more. Our secret recipe is a carefully crafted blend of the finest ingredients that makes our popcorn pop with flavor. Trust us, once you try our popcorn, you’ll never go back. Get ready to taste the difference with our popcorn.</p>

                </div>
                <div className='pt-32 max-w-[1240px] mx-auto '>
                    <div>
                        <div className="px-[30px]">
                            <div className="mt-5 max-lg:hidden ">

                            <div className=" grid grid-cols-3 gap-x-5">
                                <div className="cards1  ">
                                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/perfeclysalted.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5]'>Nearly Naked Perfectly Salted</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink><button className=' button-hover1 flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="cards1  ">
                                    <NavLink to={"/shop/product/nearly-naked-white-cheddar-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/whitecheedar.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] px-2'>Nearly Naked White Salted</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink><button className=' button-hover1 flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="cards1  ">
                                    <NavLink to={"/shop/product/nearly-naked-jalapeno-lime-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/Jalapeno.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#84C4EC] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5]'>Nearly Naked Jalapeno Lime</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink><button className='flex button-hover1  items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            </div>
                            <div className="max-lg:block hidden"><AllFlavorsSlider /></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto">
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[560px] max-[1200px]:min-h-[520px]  max-lg:min-h-[400px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Card1.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Zebra® Popcorn</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>We’ve earned our stripes when it comes to making Zebra® Popcorn. We’re not horsing around when it comes to delivering the best Zebra® popcorn, so saddle up and get ready for a wild ride of flavor with gourmet Caramel Corn coated in both white and dark confectioner’s chocolates.</p>
                        <NavLink to={"/shop/zebra/"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Zebra®</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[560px] max-lg:min-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card2.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-[#413015]'>Double Drizzle </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia text-[#413015]'>Our double drizzle popcorn is a flavor explosion that will leave your taste buds begging for more. With the perfect mix of white and dark, it’s a snacking sensation like no other. With every crunch and every drizzle, you’ll be transported to a world of pure popcorn pleasure.</p>
                        <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative  mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px]  min-h-[630px] max-[1200px]:min-h-[600px]   max-lg:min-h-[460px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Card3.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%]  max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Popcornopolis® Takis Fuego®</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Are you ready to feel the heat and taste the thunder? Our Popcornopolis® Takis Fuego® popcorn is the snack that’ll put your taste buds to the test. It’s a flavor explosion of spicy and tangy goodness that’ll have you reaching for more. It’s the ultimate test of flavor fortitude. Our Popcornopolis® Takis Fuego® popcorn is bold. So come on, folks, let’s get spicy.</p>
                        <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className="group inline-flex"> <button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[520px] max-[1200px]:min-h-[400px]  max-lg:max-h-[300px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card4.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-[#413015]'>Unicorn Popcorn®</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia text-[#413015]'>Are you ready to taste the rainbow and feel the magic? The snack that’ll make you believe in mythical creatures again. It’s the ultimate test of your mystical munching skills. Our Unicorn Popcorn® is so enchanting, it’ll make you feel like you’re in a fairytale.</p>
                        <NavLink to={"/shop/unicorn-popcorn®"} className="group inline-flex"> <button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
            </div>
            {/* lazim */}
            <div className="max-md:block hidden">
                <div className="bg-[#E22733] overflow-hidden">
                    <div className="relative  ">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className=' absolute h-[100%] w-full' width="932.297" height="497.424" viewBox="0 0 932.297 497.424">
                            <defs>
                                <clipPath id="clip-path1962">
                                    <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                                </clipPath>
                            </defs>
                            <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path1962)">
                                <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                    <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                                </g>
                            </g>
                        </svg>
                        <div className=" px-[8%] pb-10 md:flex max-w-[1180px] mx-auto">

                            <img src="/assets/img/Bowls.webp" className='mx-auto relative max-md:rounded-tl-[100px] md:rounded-tr-[100px]  max-md:rounded-br-[80px] md:rounded-bl-[120px]  my-5 w-full max-h-[220px]  object-cover' alt="" />
                            <div className="relative text-white">
                                <h3 className='text-[25px] '>Our <span className='font-turbinado'>Flavors</span><span className='text-[#fed455]'>.</span></h3>
                                <div className='mt-5 w-7 h-1 mb-7 bg-[#fed455]'></div>
                                <p className='font-sofia'>Our classic Caramel Corn, boasts a sweet, buttery flavor that will transport you to a nostalgic carnival or fair experience. If you are looking for something savory try our Cheddar Cheese flavor, which packs a punch with its bold and savory taste. For those with a sweet tooth, the kettle corn option offers a perfect combination of salty and sweet flavors, making it hard to put down.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-md:hidden block">
                <div className=" max-h-[600px] overflow-hidden  bg-[#e22733] relative flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='w-full h-full' width="932.297" height="497.424" viewBox="0 0 932.297 497.424">
                        <defs>
                            <clipPath id="clip-path1962">
                                <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                            </clipPath>
                        </defs>
                        <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path1962)">
                            <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                            </g>
                        </g>
                    </svg>
                    <div className="absolute bottom-16 max-[1200px]:bottom-10 px-[60px] flex gap-x-10 items-center justify-center max-w-[1180px] ">
                        <div className="w-[60%]">
                            <img src="/assets/img/Bowls.webp" className='rounded-bl-[150px]  top-0 rounded-tr-[100px] ' alt="" />
                        </div>
                        <div className="w-[40%] mt-20 text-white">
                            <h3 className='text-[25px] '>Our <span className='font-turbinado'>Flavors</span><span className='text-[#fed455]'>.</span></h3>
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#fed455]'></div>
                            <p className='max-[1200px]:text-[14.5px] font-sofia'>Our classic Caramel Corn, boasts a sweet, buttery flavor that will transport you to a nostalgic carnival or fair experience. If you are looking for something savory try our Cheddar Cheese flavor, which packs a punch with its bold and savory taste. For those with a sweet tooth, the kettle corn option offers a perfect combination of salty and sweet flavors, making it hard to put down.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto pt-32">
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[600px] max-lg:min-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card5.webp" alt="" />
                    <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Caramel Corn</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Caramel Corn is a truly irresistible snack that is sure to satisfy your sweet tooth cravings. With its crunchy texture and delectable caramel flavor, this popcorn will have you reaching for more with every bite. The popcorn kernels are perfectly popped and coated in sweet, velvety caramel, making each bite a heavenly experience.</p>
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Caramel</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative  mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px]  min-h-[620px] max-[1200px]:min-h-[600px]   max-lg:min-h-[460px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Card6.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%]  max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Cheddar Cheese </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Are you ready to feel the heat and taste the thunder? Our Cheedar Cheese  popcorn is the snack that’ll put your taste buds to the test. It’s a flavor explosion of spicy and tangy goodness that’ll have you reaching for more. It’s the ultimate test of flavor fortitude. Our Popcornopolis® Takis Fuego® popcorn is bold. So come on, folks, let’s get spicy.</p>
                        <NavLink to={"/shop/product-flavor/cheese/"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Cheedar</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[640px] max-lg:min-h-[450px] max-[850px]:min-h-[480px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card7.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-[#413015]'>Kettle Corn</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia text-[#413015]'>With each crunch, you’ll experience a mouthwatering combination of sweet and salty notes that dance across your taste buds. The buttery caramel coating perfectly complements the subtle saltiness of the popcorn, creating a flavor profile that’s irresistible. The texture is also incredibly satisfying – it’s crunchy on the outside but still soft and fluffy on the inside, giving you the perfect snacking experience.</p>
                        <NavLink to={"/shop/product-flavor/kettle/"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Kettle</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[540px] max-[1200px]:min-h-[0px]  max-lg:max-h-[420px] max-[850px]:min-h-[460px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Card8.webp" alt="" />
                    <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Chocolate Flavored Popcorn</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Indulge in our chocolate-flavored popcorn, where joy and sweetness come together in every bite. It’s the perfect snack for a moment of joy, a movie night, or simply to brighten up your day with a touch of deliciousness. So sit back, relax, and savor the joy with every kernel.</p>
                        <NavLink to={"/shop/product-flavor/chocolate/"} className="group inline-flex"><button className='font-sofia font-bold group-hover:scale-x-110 hover:bg-[#ffa400]  flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
            </div>

            <div className="max-md:block hidden">
                <div className="bg-[#E22733] overflow-hidden">
                    <div className="relative  ">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className=' absolute h-[100%] w-full' width="932.297" height="497.424" viewBox="0 0 932.297 497.424">
                            <defs>
                                <clipPath id="clip-path1962">
                                    <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                                </clipPath>
                            </defs>
                            <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path1962)">
                                <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                    <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                                </g>
                            </g>
                        </svg>
                        <div className=" px-[8%] pb-10 md:flex max-w-[1180px] mx-auto">

                            <img src="/assets/img/photo.webp" className='mx-auto relative max-md:rounded-tl-[100px] md:rounded-tr-[100px]  max-md:rounded-br-[80px] md:rounded-bl-[120px]  my-5 w-full max-h-[220px]  object-cover' alt="" />
                            <div className="relative text-white">
                                <h3 className='text-[25px] '>Taste The Difference<span className='text-[#fed455]'>.</span></h3>
                                <div className='mt-5 w-7 h-1 mb-7 bg-[#fed455]'></div>
                                <p className='font-sofia'>The taste of Popcornopolis popcorn is unparalleled, with a perfect balance of sweetness and saltiness that creates a delicious flavor explosion in the mouth. The texture is crunchy yet light, making it an ideal snack for any occasion. Each kernel is coated with a flavorful glaze that makes it hard to resist. The aroma of fresh popcorn fills the air as you take a bite, enhancing the overall sensory experience. Popcornopolis is a true delight for popcorn enthusiasts who appreciate high-quality ingredients and unparalleled taste.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-md:hidden block">
                <div className=" h-[800px] max-[1200px]:h-[600px] overflow-hidden  bg-[#e22733] relative flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='w-full h-full' width="932.297" height="497.424" viewBox="0 0 932.297 497.424">
                        <defs>
                            <clipPath id="clip-path1962">
                                <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                            </clipPath>
                        </defs>
                        <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path1962)">
                            <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                            </g>
                        </g>
                    </svg>
                    <div className="absolute bottom-16 max-[1200px]:bottom-10 px-[60px] justify-between flex gap-x-10 items-center  max-w-[1180px] ">
                        <div className="w-[60%] order-2">
                            <img src="/assets/img/photo.webp" className='rounded-br-[150px] mb-20 top-0 rounded-tl-[100px] ' alt="" />
                        </div>
                        <div className="w-[27%] max-lg:w-[45%] mt-36 text-white ">
                            <h3 className='text-[25px] '>Taste The Difference<span className='text-[#fed455]'>.</span></h3>
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#fed455]'></div>
                            <p className='max-[1200px]:text-[14.5px] font-sofia'>The taste of Popcornopolis popcorn is unparalleled, with a perfect balance of sweetness and saltiness that creates a delicious flavor explosion in the mouth. The texture is crunchy yet light, making it an ideal snack for any occasion. Each kernel is coated with a flavorful glaze that makes it hard to resist. The aroma of fresh popcorn fills the air as you take a bite, enhancing the overall sensory experience. Popcornopolis is a true delight for popcorn enthusiasts who appreciate high-quality ingredients and unparalleled taste.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default AllFlavors