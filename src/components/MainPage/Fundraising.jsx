import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import Footer from '../Footer/Footer'

function Fundraising() {
    let color = "#613223"
    let bgcolor = "#fed455"
    let title= "#fff"
    
    return (
        <div>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="max-lg:hidden block">
                <div style={{ borderRadius: "0 0 0 100px ", }} className="bg-[#E22733] lg:flex pt-32 mx-auto max-lg:h-auto  h-[56vh]">
                    <div className='lg:block hidden '>
                        <div className="w-[40%]  rounded-tr-[200px] h-[300px] mt-10 px-[30px] bg-[#fff] absolute">
                            <div className="min-[1400px]:w-[70%] pr-10 mt-16 min-[1200px]:pl-20">
                                <h1 className='text-[60px] max-[1200px]:text-[50px] text-[#E22733] leading-none'>The <span className='font-turbinado text-[90px] max-[1200px]:text-[60px] text-[#613223]'>best</span> tasting fundraiser ever.</h1>
                            </div>
                        </div>
                        <div className='bg-[#E22733] h-[60vh] px-[30px]  mb-[200px] rounded-bl-[200px] absolute right-0 w-[60%]'>
                            <div className="w-[60%] flex flex-col float-right text-white  relative top-[10rem]">
                                <div className="">
                                    <img src="/assets/img/Fund.webp" className=' absolute left-[-200px] top-[-100px] ' alt="" />
                                    <img src="/assets/img/Fund2.webp" className='absolute right-20 top-10 max-[1200px]:max-h-[100px]' alt="" />
                                    <img src="/assets/img/Fund1.webp" className='absolute top-48  max-[1200px]:max-h-[100px]' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[988px] mx-auto py-44 ">
                    <h3 className='text-[42px] text-[#E22733]'>Classic <span className='text-[63px] font-turbinado text-[#613223]'>Brochure</span> Fundraiser</h3>
                    <p className='text-[17px] leading-[1.8] font-sofia'>Once you complete your registration with our partner Gateway Fundraising, you will receive brochures for your sellers and you will be ready to start selling our yummy popcorn. Your sellers collect orders and payment. At the end, you place one simple order and deliver to your customers.</p>
                </div>
                <div className="max-w-[1180px]  mx-auto max-[1200px]:px-[2%] ">
                    <div className="flex  mb-52  gap-x-10">
                        <div className='w-[32%]'>
                            <h2 className='text-[60px] max-[1200px]:text-[50px] leading-none text-[#613223]'>
                                <span className='font-turbinado text-[90px] max-[1200px]:text-[60px] text-[#E22733]'>Taste</span> and Quality.
                            </h2>
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#Fed455]'></div>

                            <p className='text-[18px] text-[#613223] font-sofia'>From the very beginning, we’ve used only the finest ingredients, our own original recipes and small-batch cooking processes. Our popular Caramel and famous Zebra popcorn, with stripes of white and dark confectioner’s chocolate, put Popcornopolis on the map, and our dedication to taste and quality will ensure your supporters come back year after year.</p>
                        </div>
                        <div className="bg-[#e22733] h-[70vh] w-[60%] relative rounded-tl-[200px] max-[1200px]:rounded-tl-[100px] max-[1200px]:rounded-br-[100px]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='relative w-full  bg-[#e22733] h-[auto] rounded-full' width="932.297" viewBox="0 0 932.297 497.424">
                                <defs>
                                    <clipPath id="clip-path2593">
                                        <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                                    </clipPath>
                                </defs>
                                <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path2593)">
                                    <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                        <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                        <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                        <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                        <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                        <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                                    </g>
                                </g>
                            </svg>
                            <img src="/assets/img/Fund3.webp" alt="" className=' w-full absolute bottom-[-50px] max-[1200px]:bottom-[-30px]  right-[-50px]  rounded-tl-[230px] max-[1200px]:rounded-tl-[100px] rounded-br-[150px] max-[1200px]:rounded-br-[100px] duration-300' />
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-lg:block hidden">
                <div className="bg-[#E22733] pt-28 z-[-10] rounded-bl-[100px] relative overflow-hidden ">
                    <img src="/assets/img/Fund.webp" className='max-h-[200px] max-md:max-h-[150px] mx-auto' alt="" />
                    <img src="/assets/img/Fund2.webp" className='max-h-[75px] absolute right-[-20px] bottom-1 ' alt="" />
                </div>
                <img src="/assets/img/Fund1.webp" className='max-h-[70px]  absolute right-0 ' alt="" />
                <div className="px-[8%] pt-10">
                    <h1 className='text-[44px] max-md:text-[32px] mb-14 text-[#E22733] leading-none'>The <span className='font-turbinado text-[53px] max-md:text-[40px] text-[#613223]'>best</span> tasting fundraiser ever.</h1>
                    <h3 className='text-[37px] max-md:text-[32px] text-[#E22733]'>Classic <span className='text-[56px] max-md:text-[50px] font-turbinado text-[#613223]'>Brochure</span> Fundraiser</h3>
                    <p className='text-[15px] leading-[1.8] font-sofia'>Once you complete your registration with our partner Gateway Fundraising, you will receive brochures for your sellers and you will be ready to start selling our yummy popcorn. Your sellers collect orders and payment. At the end, you place one simple order and deliver to your customers.</p>
                </div>
                <div className="">
                    <div className="bg-[#e22733] h-[70vw] w-[95%] relative left-[-10px] rounded-tl-[70px]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='relative  float-right w-auto h-[100%]' width="932.297" height="497.424" viewBox="0 0 932.297 497.424">
                            <defs>
                                <clipPath id="clip-path2593">
                                    <path id="Rect_1190" data-name="Rect 1190" d="M0,0H932.3a0,0,0,0,1,0,0V337.424a160,160,0,0,1-160,160H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(-156.211 0)" fill="#CE242F"></path>
                                </clipPath>
                            </defs>
                            <g id="Group_Masks_129" data-name="Group Masks 129" transform="translate(156.211)" clip-path="url(#clip-path2593)">
                                <g id="Group_2645" data-name="Group 2645" transform="translate(96.308 969.779) rotate(-99)">
                                    <path id="Shape_2259" data-name="Shape 2259" d="M852.589,44.033l7.3,54.959C783.583,90.711,648.645,82.16,669.8,276.975c12.842,118.2,66.68,220.938,114.539,314.865,35.093,68.871,69.459,138.036,105.387,205.537,49.419,92.849,100.838,217.553,100.4,331.386-.636,166.907-84.256,221.867-163.1,241.67-107.01,26.879-223.418-28.711-338.291-77.5-78.809-33.47-157.377-59.7-236.025-94.132-52.526-22.994-108.317-40.058-159.687-49.86-20.2-3.852-59.565-3.474-78.735-30.833-28.892-41.239,22.27-35.754,31.394-32.936,55.531,17.171,111.986,34.228,167.8,56.073,151.406,59.27,310.661,128.611,458.08,137.953,30.562,1.94,59.064-6.663,88.844-7.928,75.689-3.206,173.082-43.09,163.159-212.921C917.722,958.121,861.224,840.478,821.212,762.1L698.624,520.628c-61.848-122.935-138.2-273.862-129.9-426.153,3.112-57.147,36.788-79.351,65.264-86.53C701.593-9.11,780.113,25.893,852.589,44.033Z" transform="translate(-107.936 127.776) rotate(-9)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2260" data-name="Shape 2260" d="M883.108,168.38C823.738,159.428,759.857,105.8,699.8,91.243c-24.672-5.975-51.89-12.793-74.571-3.657C544.6,120.074,546.253,288.417,586.4,458.731c67.739,287.386,193.212,490.633,275.57,757.463,31.37,101.643,55.452,228.369,35.848,321.574-28.452,135.31-105.928,129.46-171.581,134.345-158.481,11.788-320.318-58.2-485.407-130.044-60.127-26.166-120.646-53.2-180.536-74.137-10.8-3.779-57.151-4.267-54.654-47.07,2.1-36.011,31.857-.69,42.986,4.45,45.115,20.853,95.66,52.675,139.622,60.713,123.216,22.549,250.837,116.923,373.294,121.982,56.7,2.344,120.164-11.608,159.93-83.006,50.8-91.222,40.446-259.418,3.166-413.414-21.257-87.807-56.078-170.676-85.994-247.334C584.329,725.083,526.651,589.269,480.166,438.314c-34.788-112.978-90.072-222.2-63.714-329.013C435.089,33.766,516.914-3.612,555.711,2,638.57,13.979,688.368,25.006,772.418,75.31,797.781,90.489,875.329,100.121,883.108,168.38Z" transform="translate(304.373 -55.497)" fill="#CE242F" fill-rule="evenodd"></path>
                                    <path id="Shape_2261" data-name="Shape 2261" d="M5.352,1150.858c184.443,20.231,369.909,99.984,535.2,9.381,68.217-37.391,148.99-95.634,117.906-264.623C641.327,802.477,588.989,713.983,551.224,637.4,459.84,452.07,342.625,221.5,347.072,1.606l53.64,5.822C396.275,60.06,382.2,100.45,390.452,162.287c7.118,53.366,28.557,111.507,46.316,161,51.807,144.373,122.6,264.759,184.174,398.175,54.792,118.72,137.294,257.711,112.3,394.96-18.226,100.1-89.919,140.891-149.448,150.494-123.987,19.983-248.77-3.958-379.083-28.068-48.9-9.047-99.347-33.05-148.615-44.246C34.136,1189.607,12.442,1201.751,5.352,1150.858Z" transform="translate(13.901 24.191) rotate(-7)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2262" data-name="Shape 2262" d="M7.722,1132.017l-2.547-19.182c151.787,27.882,312.427,62.243,446.679-8.244,63.473-33.321,125-109.777,99.764-258.574-18.686-110.21-67.7-209.953-110.183-305C368.226,377.235,283.026,190.1,257.945,1.194l58.794,6.381C333.276,192.957,404.813,379.9,484.144,536.2c52.124,102.7,134.118,235.086,156.051,361.967,25.261,146.142-54.918,213.389-114.826,244.326C374.071,1220.631,181.547,1189.4,7.722,1132.017Z" transform="matrix(0.998, -0.07, 0.07, 0.998, 18.874, -5.437)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Shape_2263" data-name="Shape 2263" d="M127.166.884c7.5.814,21.032-2.529,28.453,6.393,8.963,10.778,15.926,47.268,20.657,63.21,12.946,43.64,30.456,88.821,46.455,130.517,51.34,133.813,124.738,294.952,87.017,424.316-6.8,23.31-16.537,40.38-27.706,56.679C269.4,700.45,250.4,712.912,233.468,720.244,179.612,743.565,122.751,743.315,63,736.83c-13.283-1.442-52.5,3.906-57.641-28.784-7.184-45.668,55.821-22.275,71.887-26.481,68.551-17.947,155.09-16.816,184.581-132.2,30.639-119.878-43.993-310.5-90.944-434.391C157.344,79.247,135.054,39.264,127.166.884Z" transform="matrix(0.985, -0.174, 0.174, 0.985, 146.375, 232.624)" fill="#CE242F" fill-rule="evenodd"></path>
                                </g>
                            </g>
                        </svg>
                        <img src="/assets/img/Fund3.webp" alt="" className='absolute w-full ml-[4%] bottom-[-20px] rounded-tl-[70px]' />
                    </div>
                    <div className="mt-20 px-[30px]">
                        <h2 className='text-[44px] max-md:text-[32px] max-[1200px]:text-[50px] leading-none text-[#613223]'>
                            <span className='font-turbinado text-[53px] max-md:text-[40px] text-[#E22733]'>Taste</span> and Quality.
                        </h2>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#Fed455]'></div>
                        <p className='text-[18px] text-[#613223] mb-10 font-sofia'>From the very beginning, we’ve used only the finest ingredients, our own original recipes and small-batch cooking processes. Our popular Caramel and famous Zebra popcorn, with stripes of white and dark confectioner’s chocolate, put Popcornopolis on the map, and our dedication to taste and quality will ensure your supporters come back year after year.</p>
                    </div>
                </div>
            </div>

            <div className="md:max-w-[1180px] mx-auto">
                <div className=" flex max-md:flex-col justify-between gap-x-5 bg-[#e22733]  max-md:text-center text-white md:rounded-tr-[70px] md:rounded-bl-[70px] max-md:rounded-br-[70px] md:overflow-hidden md:max-h-[200px]">
                    <img src="/assets/img/kids.webp" className=' md:order-2 max-md:mx-auto object-cover md:w-[50%]' alt="" />
                    <p className='text-[42px] max-[1200px]:text-[30px] max-md:text-[37px] md:py-[30px] md:pl-[70px] min-[1200px]:pr-[100px] max-md:pb-20 max-md:pt-5 leading-[1.2]'>Fundraising never tasted so good.</p>
                </div>
            </div>
            <div className="max-w-[988px] mx-auto max-[1200px]:px-[30px] mt-20">
                <h3 className='text-[53px] max-[1200px]:text-[47px] max-md:text-[42px] text-[#e22733]'>Start Your Fundraiser.</h3>
                <div className='mt-5 w-7 h-1 mb-7 bg-[#e22733]'></div>
                <div className="text-[17px] max-[1200px]:text-[15px] overflow-hidden">
                    <p className='text-[17px] max-[1200px]:text-[15px] text-[#613223] mb-10 font-sofia'>The Popcornopolis team at Barcel USA is pleased to announce that we have partnered with Gateway Fundraising to support our fundraising business. Gateway Fundraising is a well-established company and has been successfully working with fundraising customers for over 40 years.</p>
                    <p>
                        <NavLink style={{ textShadow: "0px 1px 0px #810e05", boxShadow: "3px 4px 0px 0px #864D1C", fontFamily: "Arial" }} className=' inline-block bg-[#FBC02D]  p-8 rounded-2xl border-[6px] border-[#F57F17] text-[17px] max-[1200px]:text-[15px]' to={"https://popcornfundraising.org/?_gl=1*1g7zy40*_gcl_au*OTM2OTkwMDE4LjE3MTYzODY3Nzg.*_ga*NDc0NTEyOTczLjE3MTYzODY3NzU.*_ga_ZJKVF32PDW*MTcyMTQ2ODE2NC4xOTQuMS4xNzIxNDcxOTQ1LjU5LjAuMjAxODE3NDc5MQ..#contact"}>
                            Get started with our Partner Gateway Fundraising
                        </NavLink>
                    </p>
                    <div className="font-sofia">
                        <p className='mt-10 mb-1'>Below you will find their contact information to get your fundraising event started.</p>
                        <p className='mb-2'>Call at <NavLink className="text-[#386cce] underline hover:no-underline">909-476-7870 </NavLink > and ask for Veronica or email at <NavLink className=" text-[#386cce] underline hover:no-underline">veronica@gatewayfundraising.com</NavLink></p>
                        <p className='mb-2'>Contact Gateway Fundraising today to start your new fundraiser.</p>
                        <p className='mb-2'>Active Fundraisers If you have questions about an existing fundraiser or need to check the status of your order with</p>
                        <p className='mb-2'>Popcornopolis, please contact our Fundraising team at:<NavLink className="text-[#386cce] underline hover:no-underline"> fundraising@grupobimbo.com</NavLink></p>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Fundraising