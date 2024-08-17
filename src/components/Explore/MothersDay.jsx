import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import MotherDaysSlider from './MotherDaysSlider'

function Earth() {
    let title = '#613223'
    let color = "#fff"
    let bgcolor = "#E22733"
    
    return (
        <div className='bg-beige'>
            <Header color={color} bgcolor={bgcolor} title={title} />
            <div className='pt-32 max-w-[1240px] mx-auto px-[30px]'>
                <div className=" min-[1200px]:w-[70%] ">
                    <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Pop Into Mom’s Heart  <span className='text-[#613223] font-turbinado'>.</span></h1>
                    <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    <p className='text-[20px] max-lg:text-[17px] text-[#613223] font-sofia'>Mother’s Day is a time to celebrate and honor the amazing women in our lives who have loved us unconditionally and made countless sacrifices for our well-being. And what better way to show your appreciation for your mom than by surprising her with a delicious and crunchy treat? No matter what type of mom you have, they are all amazing in their own unique way, and we should cherish and appreciate them every day.Here are some of the most positive and funny types of moms that we all know and love.</p>
                </div>
            </div>
            <div className="max-w-[1180px] px-[30px] mx-auto mt-20">
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[630px] max-lg:min-h-[420px] max-[850px]:min-h-[460px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Tin.jpg" alt="" />
                    <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] '>For The Supermom </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#Fed455]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>Your mom seems to do it all – she’s the CEO of her own company, the president of the PTA, and she still manages to find time to bake cookies for the school fundraiser. You admire her work ethic and determination, and you can always count on her to be there. If movie night is the highlight of the week for your family, there’s no better gift than a tin.</p>
                        <NavLink to={"/shop/product/classic-stripe-2-gallon-tin-classic-assortment"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[480px]   max-lg:min-h-[420px]    max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Cue.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>For The Bookworm</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>You know how much she loves to curl up with a good book and a tasty snack. And what could be better than a bag of delicious caramel and kettle popcorn to munch on while diving into her latest read? She will savor the rich, buttery flavor of the popcorn and the sweet, indulgent taste of the caramel.</p>
                        <NavLink to={"/shop/product/caramel-&-kettle-popcorn-bag"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[760px] max-lg:min-h-[520px] max-[850px]:min-h-[580px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/LateNight.jpg" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>For The Cool Mom </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>She’s always up for a good time, and she’s not afraid to let loose and have fun with her kids. Whether it’s dancing to their favorite songs or trying out a new skateboard trick, she’s always game. Being yourself and embracing your uniqueness is an incredibly empowering and courageous thing to do. If you’re looking for a snack that matches your mom’s fun-loving personality, we’ve got just the snack for you, Popcornopolis® Takis Fuego®. She’s always on-trend and up-to-date with the latest and greatest, she’ll love the hottest new snack.</p>
                        <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[580px] max-lg:min-h-0   max-lg:max-h-[380px] max-[850px]:min-h-[480px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Unicorn.webp" alt="" />
                    <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>For The Cheerleader Mom</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#Fed455]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>She’s always there to cheer on her kids, whether it’s at a soccer game or a science fair. She’s the loudest one in the crowd, and she’ll never let her child feel discouraged or unsupported. Unicorn Popcorn® is a perfect example of her personality, bright and vibrant.</p>
                        <NavLink to={""} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <img className='max-md:max-h-[241px] min-h-[630px] max-lg:min-h-[420px] max-[850px]:min-h-[460px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Card2.webp" alt="" />
                    <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#413015]">
                        <h3 className='max-lg:text-[25px] text-[28px] '>For The Caring Mom </h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <div className='mt-5 w-7 h-1 mb-8 '></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia '>She prioritizes her own physical and emotional well-being as well as the well-being of her family. She’s compassionate, empathetic, and nurturing. She understands the importance of taking care of herself. That’s why she would love double drizzle popcorn – it’s a delicious, comforting treat that can be enjoyed guilt-free during a moment of relaxation.</p>
                        <NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] group-hover:scale-x-110 font-sofia font-bold'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span> <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
                <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                    <span></span>
                    <img className='max-md:max-h-[241px] min-h-[480px]   max-lg:min-h-[420px]    max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Corporate.webp" alt="" />
                    <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                        <h3 className='max-lg:text-[25px] text-[28px] text-white'>For The Unique Mom</h3>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
                        <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Looking for a gift that’s as unique as your mom? Look no further than creating your own assortment of treats that’s tailor-made just for her. Whether your mom has a sweet tooth or loves savory snacks, you can handpick the perfect combination of treats to create a one-of-a-kind gift that’s as sweet as she is.</p>
                        <NavLink to={"/create-your-own/"} className={"group"}><button className='inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 pr-12 pl-5 max-[1400px]:px-5 duration-300  hover:bg-[#ffa400] hover:pr-14 hover:pl-6 font-sofia font-bold'>Create Your Own <FaArrowRightLong /></button></NavLink>
                    </div>
                </div>
            </div>
            <div className="md:flex max-w-[1180px] mx-auto ">
                <div className="pl-[30px] md:max-w-[400px] mt-20 md:max-h-[200px] min-[1200px]:max-h-[180px] ">
                    <h3 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#E22733] leading-[1.2]'>She's Trendsetter Mom</h3>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <p className='text-[19px] max-lg:text-[17px] max-md:text-[19px] text-[#613223] font-sofia'>She’s the life of the party and the first to pick up the new trands. Have her share your Popcornopolis family memories. Popcornopolis isn’t just any ordinary popcorn brand. Staying connected with us is easy and fun, break out the popcorn and let us know your thoughts.</p>
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
                                <img className='rounded-tr-[100px] rounded-bl-[100px]' src="/assets/img/Explore/Card12.webp" alt="" />

                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Caramel & Kettle Popcorn
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col font-sofia  lg:absolute bottom-[-120px]">
                                    <span className='text-[20px] mb-2 font-bold text-[#412015]'>Valerie</span>
                                    <span className='lg:h-[120px] opacity-70 text-[17px] text-[#612223]'>Just tried the Caramel Corn. By far, the VERY BEST Caramel Corn I have Ever tried!!!! I am booked!</span>
                                </div>
                            </NavLink>

                        </div>
                        <div className="card1 relative">
                            <NavLink to={"/shop/product/unicorn-popcorn®-mini-cone"}>
                                <img className='rounded-tr-[100px] rounded-bl-[100px] ' src="/assets/img/Explore/Card13.webp" alt="" />
                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                        Unicorn Popcorn® Mini
                                    </span>
                                    <span className='capitalize inline-flex items-center '>
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Popcorn</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col font-sofia  lg:absolute bottom-[-120px]">
                                    <span className='text-[20px] mb-2 font-bold text-[#412015]'>Carol C.</span>
                                    <span className='lg:h-[120px] opacity-70 text-[17px] text-[#612223]'>If I could give this popcorn 10 gold stars for excellence and taste, done! It’s tangy, mouth-watering with hint of buttery delicious. Absolutely the BEST!!</span>
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
                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Assortment</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                    </span>
                                </span>
                                <div className="flex flex-col font-sofia  lg:absolute bottom-[-120px]">
                                    <span className='text-[20px] mb-2 font-bold text-[#412015]'>Lizzy</span>
                                    <span className='lg:h-[120px] opacity-70 text-[17px] text-[#612223]'>Excellent product. I purchased it as a gift for a friend. She loved it!</span>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div className="max-md:block hidden">

                    <MotherDaysSlider />
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Earth