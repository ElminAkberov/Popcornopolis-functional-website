import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

function Contact() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className="pt-32">
                <div className="max-w-[1180px] mx-auto px-[30px]">
                    <div className="lg:flex justify-between ">
                        <div className="lg:w-[57%] mb-20">
                            <h1 className='text-[#E40c13]  text-[62px] max-md:text-[26px] mb-10 leading-none'>Contact Popcornopolis <span className='text-[#E7730D]'>.</span></h1>
                            <div className="py-6 px-10 border-dotted border border-red-600">
                                <p className='max-md:text-[14px] mb-5 font-sofia'>If you ever need anything, do not hesitate to connect with us. Reaching Popcornopolis has never been easier.</p>
                                <div className="font-sofia">
                                    <div className="lg:flex gap-x-4">
                                        <div className="input1 mb-10 lg:w-[50%]">
                                            <div className="flex justify-between">
                                                <p className='max-lg:text-[14px]'>Email*</p>
                                                <p></p>
                                            </div>
                                            <div>
                                                <input className="w-full px-[10px] py-[7px] lg:py-[10px] placeholder:text-[14px] rounded-[5px] bg-[#FAFBFD] border border-[#c5cee0]" placeholder='e.g. email@domain.com' type="text" />
                                            </div>
                                        </div>
                                        <div className="input1 mb-10 lg:w-[50%]">
                                            <div className="flex justify-between">
                                                <p className='max-lg:text-[14px]'>Phone Number</p>
                                                <p></p>
                                            </div>
                                            <div>
                                                <input className="w-full px-[10px] py-[7px] lg:py-[10px]  placeholder:text-[14px] rounded-[5px] bg-[#FAFBFD] border border-[#c5cee0]" placeholder='999-999-9999' type="text" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="lg:flex gap-x-4">
                                        <div className="input1 mb-10 lg:w-[50%]">
                                            <div className="flex justify-between">
                                                <p className='max-lg:text-[14px]'>First Name*</p>
                                                <p></p>
                                            </div>
                                            <div>
                                                <input className="w-full px-[10px] py-[7px] lg:py-[10px] placeholder:text-[14px] rounded-[5px] bg-[#FAFBFD] border border-[#c5cee0]" placeholder='Your First Name' type="text" />
                                            </div>
                                        </div>
                                        <div className="input1 mb-10 lg:w-[50%]">
                                            <div className="flex justify-between">
                                                <p className='max-lg:text-[14px]'>Last Name*</p>
                                                <p></p>
                                            </div>
                                            <div>
                                                <input className="w-full px-[10px] py-[7px] lg:py-[10px] placeholder:text-[14px] rounded-[5px] bg-[#FAFBFD] border border-[#c5cee0]" placeholder='Your Last Name' type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input1 mb-10">
                                        <div className="flex justify-between">
                                            <p className='max-lg:text-[14px]'>Team to Contact*</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <select className='w-full px-[10px] py-[10px] max-lg:text-[12px] rounded-sm bg-[#FAFBFD] text-black'>
                                                {["Public Relations", "Sales", "Fundraising", "Corporate Gifts", "Existing Website Order", "Website and Digital Team"].map((item, i) => {
                                                    return (
                                                        <option>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input1 mb-10">
                                        <div className="flex justify-between">
                                            <p className='max:lg:text-[14px]'>Description*</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <textarea placeholder='Your Message' className='w-full px-[10px] py-[7px] placeholder:text-[14px]' rows={8}></textarea>
                                        </div>
                                    </div>
                                    <button className='text-[#613223] bg-[#FED455] py-4 font-bold hover:bg-[#ffa400] duration-300   max-lg:py-3 mx-auto w-full rounded-full text-[17px]'>Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center font-sofia">
                            <div className="max-w-[400px]">
                                <img src="/assets/img/contact.webp" className='rounded-tr-[120px] mx-auto' alt="" />
                            </div>
                            <div className="text-[#613223]   bg-[#84C4EC] mt-[-100px] rounded-tr-[100px] rounded-bl-[60px] p-[30px] max-w-[400px]">
                                <div className="mb-8">
                                    <strong className='text-[21px] lg:text-[24px]'>Address</strong>
                                    <div className="max-lg:text-[14px]">
                                        <p>P. O. Box 976 </p>
                                        <p>Horsham, PA 19044</p>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <strong className='text-[21px] lg:text-[24px]'>Call Us</strong>
                                    <div className="max-lg:text-[14px]">
                                        <p>Toll-Free: <span className='underline font-extrabold'>800.767.2489*</span></p>
                                        <p> Monday through Friday 8am-8pm EST</p>
                                        <p>* Calls outside normal business hours will be assisted by an answering service</p>
                                    </div>
                                </div>
                                <div className="mb-8 ">
                                    <strong className='text-[21px] lg:text-[24px]'>Email Us</strong>
                                    <div className="">
                                        <p><NavLink className='max-lg:text-[14px] max-[350px]:text-[10px] underline hover:no-underline font-bold' to={"mailto:crelations@grupobimbo.com"}>crelations@grupobimbo.com</NavLink></p>
                                        <p><NavLink className='max-lg:text-[14px] max-[350px]:text-[10px] underline hover:no-underline font-bold' to={"mailto:fundraising@grupobimbo.com"}>fundraising@grupobimbo.com</NavLink></p>
                                    </div>
                                </div>
                                <button className='flex font-bold items-center gap-4 rounded-full text-[17px] max-md:text-[14px]  md:py-3 text-[#613223] bg-[#FED455] py-3 px-8 duration-300 hovers hover:bg-[#ffa400]'><NavLink to={"/customer-care/"}>Customer Service</NavLink> <FaArrowRightLong className='hover_right' /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Contact