import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import MotherDaysSlider from './MotherDaysSlider'

function Congrats() {
    let title = '#613223'
  let color = "#fff"
  let bgcolor= "#E22733"
  
    return (
        <div className='bg-beige'>
            <Header color={color} bgcolor={bgcolor} title={title} />
            <div className='pt-32 max-w-[1240px] mx-auto px-[30px]'>
                <div className=" min-[1200px]:w-[70%] ">
                    <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Pop To The Top Of Class: Gifts For Your Grad   <span className='text-[#613223] font-turbinado'>.</span></h1>
                    <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    <p className='text-[20px] max-lg:text-[17px] text-[#613223] font-sofia'>Do you know someone about to graduate? Unless you’re living with that person, chances are he or she has been holed up in a room somewhere preparing for finals. When the fateful graduation day finally approaches, we have some unique graduation gift ideas guaranteed to please.</p>
                </div>
            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto mt-20">
                
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[480px]   max-lg:max-h-[400px] max-lg:min-h-0  max-[850px]:min-h-[480px]  max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Tin.jpg" alt="" />
                    <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Classic Striped 2-Gallon Classic Assortment Tin </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#Fed455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Who wouldn’t love to receive a tin of delicious gourmet popcorn as a graduation gift? With all the hard work and late nights that go into earning a degree, a graduate deserves a tasty treat to celebrate their achievement.</p>
                        <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[650px] max-lg:min-h-[480px] max-[850px]:min-h-[500px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/mini.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>A Unique Bundle</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Put together a basket at home with their favorite items, using Create Your Own Assortment or getting their favorite single mini cone flavor. Make it a memorable grad gift customized just for them.  Their bundle of unique talents, passions, and perspectives are what brought them to this special graduation day. Make them a bundle at home, just as unique as them. </p>
                        <NavLink to={"/create-your-own"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Create Your Own</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="px-[80px] my-20">
                    <h3 className='text-[42px] max-[1200px]:text-[37px] max-md:text-[32px] text-[#E22733]'>Savor The Success</h3>
                    <p className="font-sofia text-[17px] max-[1200px]:text-[15px] text-[#613223]">As you watch your child or grandchild bask in the glow of their achievements, take a moment to reflect on all the support and encouragement you’ve provided along the way. You’ve been their rock, their sounding board, and their biggest cheerleader. You’ve believed in them when they didn’t believe in themselves, and you’ve helped them become the person they are today. Now, it’s time to celebrate together and savor the moment.</p>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[620px]    max-lg:min-h-[420px] max-[850px]:min-h-[480px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Cue.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>Sweet New Beginnings</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#Fed455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>As your grad embarks on their exciting new journey, what better way to celebrate than with a little sweetness? Caramel popcorn is the perfect treat to match their sweet new beginnings. Just like this delicious caramel popcorn, their future is looking sweet and full of possibilities. So, gift them this crunchy and sugary treat to enjoy while they embark on their exciting new journey.</p>
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[540px] max-lg:min-h-[420px] max-[850px]:min-h-[440px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/LateNight.jpg" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>Ignite The Future </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>

                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Just like the fire that ignites Popcornopolis® Takis Fuego®, your grad has the potential to achieve great things and make a positive impact on the world. The snack is a fun and playful way to acknowledge their potential and encourage them to keep striving for success.</p>
                        <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[540px] max-lg:min-h-[420px] max-[850px]:min-h-[440px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Unicorn.webp" alt="" />
                    <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#fff]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>Dreaming Big</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#fed455]'></div>

                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Unicorn Popcorn® is a perfect gift for your grad because it embodies the spirit of big dreams, is a playful and unique gift, and serves as a reminder to stay positive and embrace individuality.</p>
                        <NavLink to={"/shop/product/unicorn-popcorn®-mini-cone"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[580px] max-lg:min-h-[420px] max-[850px]:min-h-[480px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card2.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>Double The Drizzle, Double The Celebration </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>

                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Snacks from home can bring a sense of comfort and familiarity to college life. By gifting your grad with double drizzle popcorn, you’re giving them a taste of comfort that they can enjoy whenever they need a little pick-me-up.</p>
                        <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
            </div>
       
         

            <Footer />
        </div>
    )
}

export default Congrats