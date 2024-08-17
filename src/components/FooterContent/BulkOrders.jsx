import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function BulkOrders() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
  
    return (
        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="pt-32 max-w-[1180px] mx-auto">
                <div className="md:flex justify-between items-center px-[30px]">
                    <div className="order-1 max-lg:max-w-[25vw]">
                        <img src="/assets/img/Bulk.webp" alt="" />
                    </div>
                    <div className="md:w-[70%] ">
                        <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[30px] leading-none text-[#E40C13]'>Wholesale Inquiries <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] max-md:text-[38px] font-turbinado text-[#613223]'>and</span> Bulk Orders.</p>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                        <p className='text-[20px] max-lg:text-[17px] mb-20 font-sofia'>At Popcornopolis, we create mouth-watering treats your customers will come back for, time and time again. Our wholesale team is available and happy to discuss the right line of Popcornopolis products for your Warehouse, Grocery,
                            Convenience Store, or Entertainment Venue. Call us today at 800-767-2489, or submit this form with your request. We look forward to speaking soon.</p>
                    </div>
                </div>
                <div className="bg-[#E22733] md:rounded-tr-[200px] lg:rounded-bl-[100px] max-lg:rounded-br-[100px]  mb-32 ">
                    <div className="px-[50px] pt-16 pb-28 ">
                        <h3 className='text-[60px] ml-20 max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[33px] max-[550px]:text-[30px]  text-white leading-none'>Request Information <span className='text-[#FED455]'>.</span></h3>
                        <div className='mt-5 w-7 h-1 mb-7 ml-20 bg-[#FED455]'></div>
                        <div className="text-white inputs px-[150px] max-lg:px-[100px] max-md:px-0 ">
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>Email*</p>
                                    <p></p>
                                </div>
                                <div>
                                    <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='e.g. email@domain.com' type="text" />
                                </div>
                            </div>
                            <div className="input2 mb-10">
                                <div className="flex justify-between gap-x-4">
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>First Name*</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Your First Name' type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>Second Name*</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Your Second Name' type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>Company</p>
                                    <p></p>
                                </div>
                                <div>
                                    <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='e.g. email@domain.com' type="text" />
                                </div>
                            </div>
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>Street Address</p>
                                    <p></p>
                                </div>
                                <div>
                                    <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Street Address' type="text" />
                                </div>
                            </div>
                            <div className="input2 mb-10">
                                <div className="flex justify-between gap-x-4">
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>City</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='City' type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>State</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='State' type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input2 mb-10">
                                <div className="flex justify-between gap-x-4">
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>Zip Code</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Zip Code' type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <div className="flex justify-between">
                                            <p className='text-[14px]'>Phone</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Phone Number' type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>I am interested in...*</p>
                                    <p></p>
                                </div>
                                <div>
                                    <select className='w-full px-[10px] font-sofia  py-[10px] text-[12px] rounded-[4px] bg-[#FAFBFD] text-black'>
                                        {["How can we help?", "Wholesale Orders", "Corporate Gifts", "Existing Website Order", "Fundraising"].map((item, i) => {
                                            return (
                                                <option>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>Order Number (optinal)</p>
                                    <p></p>
                                </div>
                                <div>
                                    <input className="w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px] rounded-[4px] bg-[#FAFBFD]" placeholder='Your Order Number' type="text" />
                                </div>
                            </div>
                            <div className="input1 mb-10">
                                <div className="flex justify-between">
                                    <p className='text-[14px]'>Description*</p>
                                    <p></p>
                                </div>
                                <div>
                                    <textarea placeholder='Your Message' className='w-full px-[10px] font-sofia text-[#413015] py-3 max-lg:py-[7px] placeholder:text-[14px]' rows={8}></textarea>
                                </div>
                            </div>
                            <button className='text-[#613223] bg-[#FED455] hover:bg-[#ffa400] duration-300 font-sofia font-bold flex float-right px-8 py-3 rounded-full text-[17px]'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between  max-[800px]:flex-wrap  min-[800px]:px-[30px]">
                    <div className="max-[800px]:mx-auto">
                        <img src="/assets/img/bulk1.webp" className='max-md:rounded-tr-[80px] p-2 rounded-bl-[100px] rounded-tr-[100px] max-md:rounded-bl-[80px] h-[274px] min-w-[250px] max-md:min-w-auto ' alt="" />
                        <div className="">
                            <p className='text-[25px] max-[1200px]:text-[22px] text-[#613223]'>Grocery</p>
                        </div>
                    </div>
                    <div className="max-[800px]:mx-auto">
                        <img src="/assets/img/bulk2.webp" className='max-md:rounded-tr-[80px] p-2 rounded-bl-[100px] rounded-tr-[100px] max-md:rounded-bl-[80px] max-h-[274px] min-w-[250px] max-md:min-w-auto ' alt="" />
                        <div className="">
                            <p className='text-[25px] max-[1200px]:text-[22px] text-[#613223]'>Convenience</p>
                        </div>
                    </div>
                    <div className="max-[800px]:mx-auto">
                        <img src="/assets/img/bulk3.webp" className='max-md:rounded-tr-[80px] p-2 rounded-bl-[100px] rounded-tr-[100px] max-md:rounded-bl-[80px] max-h-[274px] min-w-[250px] max-md:min-w-auto ' alt="" />
                        <div className="">
                            <p className='text-[25px] max-[1200px]:text-[22px] text-[#613223]'>And More...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BulkOrders