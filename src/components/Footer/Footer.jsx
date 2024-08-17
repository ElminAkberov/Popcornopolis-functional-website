import React, { useState } from 'react';
import { FaArrowRightLong, FaXTwitter } from 'react-icons/fa6';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function Footer() {
    let [focused, setFocused] = useState(false);
    let [write, setWrite] = useState(false)
    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    let [email, setEmail] = useState('')
    let [error, setError] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const handleClick = () => {
        setError(emailRegex.test(email) ? false : true)
    }


    return (
        <div className=''>
            <div className="px-[30px] mx-auto ">
                <div className="flex max-md:justify-center mt-20">
                    <div className="flex max-md:flex-col items-center gap-x-40 min-[1200px]:mt-[210px]">
                        <div className='flex max-[900px]:flex-col max-md:flex-col max-md:items-center justify-items-start gap-x-3'>
                            <span className='font-turbinado text-[250px] max-[1321px]:text-[105px] max-md:text-[90px] text-[#613223] leading-none m-0'>100%</span>
                            <div className="flex flex-col mt-7 max-[1321px]:mt-1">
                                <p className='text-[80px] max-[1321px]:text-[36px] font-extrabold text-red-500 leading-none font-faro'>Satisfaction</p>
                                <p className='text-[80px] max-[1321px]:text-[36px] font-extrabold text-red-500 mb-10 leading-none font-faro'>Guarantee</p>
                            </div>
                        </div>
                        <div className='flex flex-col max-md:flex-col max-lg:items-center text-[#613223] font-bold mb-[128px] max-[1321px]:pt-28 max-xl:pt-40 max-md:pt-0'>
                            <img src="/assets/img/stars.svg" className='mb-5' alt="" />
                            <p className='text-[30px] max-[1321px]:text-[22px] w-56 max-lg:w-48 max-md:w-full max-md:text-center leading-none mb-2 font-faro'>Our customers recommend us</p>
                            <p className='text-[18px] max-[1321px]:text-[15px] w-56 max-lg:w-48 max-md:w-full max-md:text-center font-sofia'>Based on 735 verified customer reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className="py-[70px]  text-white font-bold">
                    <img src="/assets/img/bg-newsletter.jpg" className='absolute top-0 w-full h-[100%]' alt="" />

                    <div className="image absolute bottom-40 max-lg:bottom-44 max-[884px]:bottom-56 max-md:bottom-44 max-[631px]:bottom-52 z-10">
                        <img className='w-48 max-lg:w-28' src="/assets/img/footer-image.webp" alt="" />
                    </div>
                    <span className='triangle ml-24 max-lg:ml-8'></span>
                    <div className="flex justify-center items-center max-md:flex-col relative mx-auto px-[30px] gap-x-4">
                        <p className='font-faro text-[42px] min-[1200px]:pr-10 xl:ml-[70px] max-[1400px]:text-[36px] max-lg:text-[32px] max-md:text-[24px] w-[50%] max-lg:w-[52%] max-md:w-full font-bold'>
                            Sign up to receive exclusive offers and discounts<span className='text-[#FED455]'>.</span>
                        </p>
                        <div onFocus={handleFocus} onBlur={handleBlur} className="relative max-md:w-full">
                            <span className={`absolute text-[#817785] left-6 text-[14px] pointer-events-none transition-all font-sofia duration-300 ${(focused || write) ? 'top-0' : 'top-4'}`}>
                                Your e-mail address
                            </span>
                            <input
                                className={`w-full font-sofia py-4 pl-7 pr-36 rounded-[2.7rem]   text-black ${error ? 'border-2  border-[#e22733]' : ""}`}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                onInput={(e) => { !e.target.value ? setWrite(false) : setWrite(true) }}
                            />
                            <button onClick={handleClick} className={`absolute right-0 p-5  ${error ? "top-[2px]" : "top-[0px]"} hover:bg-[#ffa400] duration-300 rounded-full bg-[#FED455] `}>
                                <FaArrowRightLong className='text-black' />
                            </button>
                            <p className={`text-[13px] absolute  left-[25%] justify-center font-sofia font-normal text-[#e22733]  ${error ? '' : "hidden"}`}>Please fill in a valid email.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' text-white relative py-[100px] max-md:py-[27px] mx-auto '>
                <img src="/assets/img/bg-footer.jpg" className='absolute top-0 w-full h-[100%]' alt="" />
                <div className="px-[30px] relative ">
                    <div className="flex justify-between max-md:justify-center mb-4">
                        <div className="max-md:hidden">
                            <NavLink to={"/"}><img width={164} height={73} src="/assets/img/logo.svg" alt="" /></NavLink>
                        </div>
                        <div className="max-md:hidden ml-10 font-sofia">
                            <div className="font-bold lg:text-[16px] max-lg:text-[13px]">
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/customer-care/"} className="hover:border-b-2 hover:border-b-white">Customer Care</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/about/"} className="hover:border-b-2 hover:border-b-white">Our Story</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/faq/"} className="hover:border-b-2 hover:border-b-white">FAQs</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/tastings/"} className="hover:border-b-2 hover:border-b-white">Tastings</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/mushroom-vs-butterfly-popcorn/"} className="hover:border-b-2 hover:border-b-white">About Popcorn</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/shipping-information/"} className="hover:border-b-2 hover:border-b-white">Shipping and Returns</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/bulk-orders/"} className="hover:border-b-2 hover:border-b-white">Bulk Orders</NavLink>
                                </p>
                                <p className='inline-block mb-8 w-1/3'>
                                    <NavLink to={"/contact-us/"} className="hover:border-b-2 hover:border-b-white">Contact</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="max-md:flex max-md:flex-wrap justify-center font-sofia ">
                            <NavLink to={"https://www.facebook.com/popcornopolis"} target='_blank' className="flex items-center hover:underline ">
                                <GrFacebookOption size={30} className='bg-white p-2 text-[#F22F35] rounded-full mr-2 hover:opacity-75 duration-300' />
                                <p>Facebook</p>
                            </NavLink>
                            <NavLink to={"https://www.instagram.com/popcornopolis"} target='_blank' className='flex items-center hover:underline my-3 max-md:mx-5 '>
                                <IoLogoInstagram size={30} className='bg-white p-2 text-[#F22F35] rounded-full mr-2 hover:opacity-75 duration-300' />
                                Instagram
                            </NavLink>
                            <NavLink to={"https://x.com/popcornopolis"} className='flex items-center hover:underline ' target='_blank'>
                                <FaXTwitter size={30} className='bg-white p-2 text-[#F22F35] rounded-full mr-2 hover:opacity-75 duration-300 ' />
                                X
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex justify-between max-md:flex-col gap-x-2 font-sofia">
                        <div className='lg:text-[15px] w-[83%] max-[1400px]:w-[77%] max-lg:text-[13px] max-lg:w-[80%] max-md:w-full'>
                            <p className=''>
                                <strong className='mr-4 max-md:block'>© 2024 Barcel USA, LLC</strong>
                                <NavLink to='/terms-of-use/' className='border-r-2 border-r-white hover:underline pr-2'>Terms of use</NavLink>
                                <NavLink to='/privacy-policy/' className='border-r-2 border-r-white hover:underline px-2'>Privacy Policy</NavLink>
                                <NavLink to='/ca-supply-chain/' className='border-r-2 border-r-white hover:underline px-2'>CA Supply Chain</NavLink>
                                <NavLink to='/privacy-preferences/' className='border-r-2 border-r-white hover:underline px-2'>Do Not Sell or Share My Personal Information</NavLink>
                                <NavLink to='/about-our-ads/' className='border-r-2 border-r-white hover:underline px-2'>About Our Ads</NavLink>
                                <NavLink to='/accessibility/' className='border-r-2 border-r-white hover:underline px-2'>Accessibility</NavLink>
                                <NavLink to='/covid-19-response/' className='border-r-2 border-r-white hover:underline px-2'>COVID-19</NavLink>
                                <NavLink to={"https://barcel-usa.com/careers"} className='pl-2 hover:underline'>Join Our Team</NavLink>
                            </p>
                        </div>
                        <div className='lg:text-[16px] max-lg:text-[13px] max-lg:w-[30%] max-sm:w-[50%]'>
                            <p className='float-right max-md:float-left'>By <strong><NavLink to={"https://isadoradigitalagency.com/"} target='_blank' className="hover:underline">Isadora Digital Agency</NavLink></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
