import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import MushroomSlider from './MushroomSlider'

function Mushroom() {
    let title = '#613223'
    let color = "#fff"
    let bgcolor = "#E22733"
    
    return (
        <div className='bg-beige'>
            <Header color={color} bgcolor={bgcolor} title={title} />
            <div className='pt-32 max-w-[1240px] mx-auto '>
                <div className="md:flex items-center px-[30px]">
                    <div className="order-1 max-md:max-w-[180px]">
                        <img src="/assets/img/Explore/Mushroom.webp" alt="" />
                    </div>
                    <div className="md:w-[90%] ">
                        <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Mushroom vs. Butterfly <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] font-turbinado text-[#613223]'>Popcorn.</span></p>
                        <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                        <p className='text-[20px] max-md:text-[17px] mb-20 font-sofia text-[#613223]'>We’ve been seeing a lot of questions lately about the different types of popcorn. So we thought we’d elaborate on the subject, but before digging into the details of popcorn itself, here’s a broad overview of the grain we know collectively as “CORN”.</p>
                    </div>
                </div>
                <div className="px-[30px]">
                    <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                        <img className='max-md:max-h-[241px] max-h-[520px] max-lg:max-h-[360px]  max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Corn.jpg" alt="" />
                        <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                            <h3 className='max-lg:text-[25px] text-[28px] text-white'>Dent Popcorn</h3>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#412015]'></div>
                            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Dent corn gets its name from the dimple (or dent) that forms on the top of each kernel as it dries. High in starch, dent corn is used for animal feed, and is also used for making corn syrups, bio-fuels and bio-plastics. Although not particularly good for eating, dent corn is an incredibly versatile crop.</p>
                        </div>
                    </div>
                    <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                        <span></span>
                        <img className='max-md:max-h-[241px] max-h-[450px] max-[1200px]:max-h-[420px]  max-lg:max-h-[330px]   max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/SweetCorn.jpg" alt="" />
                        <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                            <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>Sweet Corn</h3>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#612223]'></div>
                            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia text-[#412015]'>Higher in sugar than dent corn, sweet corn is the “corn on the cob” variety that Americans know and love. It is harvested in its immature stage, and enjoyed as a fresh food, rather than being left to dry.</p>
                        </div>
                    </div>
                    <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
                        <img className='max-md:max-h-[241px] min-h-[600px] max-lg:max-h-[420px] max-lg:min-h-0 max-[850px]:min-h-[500px]  max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Hominy.webp" alt="" />
                        <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
                            <h3 className='max-lg:text-[25px] text-[28px] text-white'>Hominy</h3>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#FAD455]'></div>
                            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Here’s a little known fact: Hominy is really just sweet corn that has been alkalized in a mineral lime bath. The soaking process softens the kernels, loosens the hulls, and also causes the kernels to double in size. Hominy has many uses. It can be coarsely ground to create grits, or mashed to make the masa which is a Mexican staple used to make tortillas, tamales, and even the beverage known as atole. (3) Imagine that without hominy, there’d be no tacos.</p>
                        </div>
                    </div>
                    <div className="md:flex justify-between relative md:px-[30px] mb-48 max-md:mb-20 ">
                        <span></span>
                        <img className='max-md:max-h-[241px] max-h-[520px] max-[1200px]:min-h-[480px] max-lg:max-h-[400px] max-lg:min-h-0 max-[850px]:min-h-[420px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tl-[100px]  md:rounded-br-[100px] duration-300' src="/assets/img/Explore/Popcorn.webp" alt="" />
                        <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute left-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pr-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tr-[80px] md:rounded-bl-[80px] max-md:rounded-br-[80px] text-white">
                            <h3 className='max-lg:text-[25px] text-[28px] text-white'>Popcorn</h3>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#FAD455]'></div>
                            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia'>Popcorn is a special type of corn possessing a very dense, moisture-resistant shell or hull. The strong hull allows pressure to build up inside the kernel when heated, until the whole kernel literally explodes! Although there are other whole grains including amaranth and sorghum which can also pop, popcorn is the most impressive!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-[30px]">
                        <h1 className='m-0 text-[60px] md:w-[50%] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Types of Popcorn.</h1>
                        <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    </div>
                    <div className="grid grid-cols-2 max-[815px]:grid-cols-1 gap-x-10 md:px-[30px]">
                        <div className="relative text-white">
                            <img className='max-md:w-full rounded-tr-[100px]' src="/assets/img/Explore/Card1.webp" alt="" />
                            <div className="bg-[#E7730D] relative bottom-24 max-md:bottom-16 pt-[5%]  pb-[4rem] max-md:pb-[12rem] px-[5%] rounded-bl-[100px] rounded-tr-[100px] max-w-[70%] max-[1200px]:max-w-[80%] max-lg:max-w-[90%] h-[500px] max-[1200px]:h-[450px] max-[815px]:h-[350px]  max-md:max-w-full max-md:h-auto">
                                <h4 className='text-[25px] max-md:text-[22px] mb-5'>Mushroom Popcorn</h4>
                                <p className='text-[20px] max-[1200px]:text-[17px]  max-md:text-[15px] font-sofia'>Its sturdy baseball shape (without those fragile butterfly wings) withstands the processes of candy-coating, and because of its exceptional surface area, accepts other flavors like cheddar cheese very well too. The resulting products are less prone to crushing, and once coated, will  tend to stay fresh and crispy much longer than their uncoated butterfly popcorn counterparts.</p>
                            </div>
                        </div>
                        <div className="relative max-md:bottom-52 text-white">
                            <img className='max-md:w-full rounded-tr-[100px]' src="/assets/img/Explore/Card2.webp" alt="" />
                            <div className="bg-[#84c4ec] relative bottom-24 max-md:bottom-20 pt-[5%] pb-[4rem] px-[5%] rounded-tr-[100px] rounded-bl-[100px] max-w-[70%] max-[1200px]:max-w-[80%] max-lg:max-w-[90%] h-[500px] max-[1200px]:h-[450px]  max-[815px]:h-[350px] max-md:max-w-full max-md:h-auto">
                                <h4 className='text-[25px] max-md:text-[22px] mb-5'>Butterfly Popcorn</h4>
                                <p className='text-[20px]  max-[1200px]:text-[17px] max-md:text-[15px] font-sofia'>Also sometimes referred to as “snowflake popcorn”, butterfly is well known for its use in theater-style and home-popped popcorn products, usually offered-up with nothing more than a little salt and perhaps some melted butter. Its relatively delicate shape means butterfly popcorn is best consumed fresh-popped for maximum crunch and freshness.</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-[30px]">
                        <div className=" min-[1200px]:w-[50%] ">
                            <h1 className='m-0 text-[60px] md:w-[50%] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Popcornopolis Mushroom Popcorn<span className='text-[#613223]'>.</span></h1>
                            <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                            <p className='text-[20px] max-lg:text-[18px] font-sofia text-[#613223]'>Perfect for confection-coated applications such as Popcornopolis Kettle Corn, Caramel Corn, and Zebra® Popcorn.</p>
                            <p className='text-[20px] my-16 max-lg:text-[18px] font-sofia text-[#613223]'>When we make a recipe that calls for the properties of mushroom popcorn, here again, we choose only the finest strains from the most reputable popcorn growers. Properly popped mushroom popcorn coated in our specialty caramel recipe is another one of those exceptional popcorn experiences.</p>
                        </div>
                        <div className="max-lg:hidden grid grid-cols-3 gap-10 max-[1400px]:gap-24 max-[1200px]:gap-10">
                            <div className="cards1 group ">
                                <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                                    <img src="/assets/img/data/zebra.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold'>Zebra®  Mini Cone Popcorn</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2'>The original Popcornopolis gourmet Caramel Corn drizzled with white and dark confectioner’s chocolates. A chocolatey dream.</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="cards1 group  ">
                                <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                                    <img src="/assets/img/data/caramelcorn.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold '>Caramel Corn Mini Cone Popcorn</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2 '>Who could resist the caramel popcorn that started it all, wrapped up in cute little cones, and a whole case of them?</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="cards1 group  ">
                                <NavLink to={"/shop/product/kettle-corn-mini-cone-popcorn"}>
                                    <img src="/assets/img/data/kettlecorn.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#84C4EC]  text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold'>Kettle Corn Mini Cone Popcorn</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2'>Sweet and salty makes a perfect combo. Each mini cone is like a tiny pop of joy to help lighten up your day.</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="cards1 group  ">
                                <NavLink to={"/shop/product/unicorn-popcorn®-tall-cone"}>
                                    <img src="/assets/img/data/Unicorn_Cones.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#613223] text-white py-[2rem] px-[50px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold'>Unicorn Popcorn® Mini Cone</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2'>This imaginative blend of natural fruit flavors sweet-tart icings with the classic crunch of gourmet popcorn is a real one-of-a-kind.</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="cards1 group  ">
                                <NavLink to={"/shop/product/cheddar-cheese-mini-cone-popcorn"}>
                                    <img src="/assets/img/data/cheedarcheese_mini.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold'>Cheddar Cheese Mini Cone Popcorn</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2'>Handfuls of crispy, crunchy popcorn thickly coated in cheese corn and neatly wrapped up in our cute mini cones.</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="cards1 group  ">
                                <NavLink to={""}>
                                    <img src="/assets/img/data/Cinnamon.webp" className='scale-[1.1]' alt="" />
                                    <div className="card-body relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]  h-[450px] max-[1200px]:h-[350px] rounded-tr-[100px] rounded-bl-[100px]">
                                        <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] font-sofia font-bold'>Cinnamon Toast Mini Cone Popcorn</h4>
                                        <p className='text-[20px] max-[1200px]:text-[18px] font-sofia py-2'>Churros aren’t the only, or even the best, way to enjoy the festive flavors of crunchy cinnamon and sugar.</p>
                                        <NavLink className=" inline"><button className='group-hover:scale-x-110 inline-flex items-center gap-4 font-sofia font-bold rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                    </div>

                                </NavLink>
                            </div>
                        </div>
                        <div className="max-lg:block hidden" >
                            <MushroomSlider />
                        </div>
                        <div className="mt-20 max-lg:hidden ">
                            <div className=" min-[1200px]:w-[51%] ">
                                <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13]'>Popcornopolis Butterfly Popcorn<span className='text-[#613223]'>.</span></h1>
                                <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                                <p className='text-[20px] max-lg:text-[18px] font-sofia  text-[#412015]'>Within each variety of popcorn, there’s an extremely wide range of quality, flavor, color and size. There are white butterfly strains and yellow ones—and some pop better than others. Believe it or not, no two strains look, taste, and crunch exactly the same when popped.</p>
                                <p className='text-[20px] max-lg:text-[18px] font-sofia my-16 text-[#412015]'>With that said, Popcornopolis has sourced an incredibly delicious strain of white butterfly corn to make our Nearly Naked Popcorn recipe. It has an unusually tender and crispy crunch, and once popped in our coconut oil and gently salted, it requires nothing more to deliver an amazingly sublime popcorn eating experience.</p>
                            </div>
                            <div className=" grid grid-cols-3 gap-x-5">
                                <div className="cards1 group  ">
                                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/perfeclysalted.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5]'>Nearly Naked Perfectly Salted</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink className=" inline"><button className=' group-hover:scale-x-110 inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="cards1 group  ">
                                    <NavLink to={"/shop/product/nearly-naked-white-cheddar-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/whitecheedar.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5] px-2'>Nearly Naked White Salted</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink className=" inline"><button className=' group-hover:scale-x-110 inline-flex items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="cards1 group  ">
                                    <NavLink to={"/shop/product/nearly-naked-jalapeno-lime-popcorn-4.5-oz-bag"}>
                                        <img src="/assets/img/data/Jalapeno.webp" className='scale-[1.1]' alt="" />
                                        <div className="card-body font-sofia font-bold relative bottom-20 bg-[#84C4EC] text-white py-[2rem] px-[40px] max-[1200px]:px-[20px]   rounded-tr-[100px] rounded-bl-[100px]">
                                            <h4 className='text-[33px] max-[1200px]:text-[25px] leading-[1.5]'>Nearly Naked Jalapeno Lime</h4>
                                            <p className='text-[20px] max-[1200px]:text-[18px] py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                                            <NavLink className=" inline"><button className='flex group-hover:scale-x-110  items-center gap-4 rounded-full text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] group-hover:bg-[#ffa400] py-2 px-12 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="px-[5%] overflow-hidden font-sofia">
                            <h4 className='text-[3vw]   text-[#E22733] mb-[5%] min-w-[250px] font-faro'>References</h4>
                            <p className='text-[17px] max-md:text-[15px] min-w-[200px]'>1.<NavLink to={"http://www.campsilos.org/mod3/index.shtml"} className="underline text-[#386cce]">http://www.campsilos.org/mod3/index.shtml</NavLink></p>
                            <p className='text-[17px] max-md:text-[15px] my-[5%] min-w-[200px]'>2.<NavLink to={"http://ngm.nationalgeographic.com/2011/07/food-ark/food-variety-graphic"} className="underline text-[#386cce] ">http://ngm.nationalgeographic.com/2011/07/food-ark/food-variety-graphic</NavLink></p>
                            <p className='text-[17px] max-md:text-[15px] min-w-[200px]'>3.<NavLink to={"http://www.huffingtonpost.com/2014/06/23/hominy-what-is-it_n_5515126.html"} className="underline text-[#386cce] ">http://www.huffingtonpost.com/2014/06/23/hominy-what-is-it_n_5515126.html</NavLink></p>
                        </div>




                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mushroom