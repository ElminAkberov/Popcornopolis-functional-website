import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
function MushroomSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: { perView: 2, spacing: 10 },
        breakpoints: {

            '(max-width: 600px)': {
                slides: { perView: 1, spacing: 10 },
            },

        },
    })
    return (
        <div className='font-sofia ' >
            <div ref={sliderRef} className="keen-slider ">
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/zebra®-mini-cone-popcorn"}>
                        <img src="/assets/img/data/zebra.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#E7730D] text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[265px] max-md:min-h-[380px]  max-w-[390px] max-[600px]:max-w-full max-[600px]:min-h-[270px] max-[400px]:min-h-[360px] max-[300px]:min-h-[400px]  rounded-tr-[100px] rounded-bl-[80px]  duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold'>Zebra®  Mini Cone Popcorn</h4>
                            <p className='text-[16px] py-2'>The original Popcornopolis gourmet Caramel Corn drizzled with white and dark confectioner’s chocolates. A chocolatey dream.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1  keen-slider__slide">
                    <NavLink to={"/shop/product/caramel-corn-mini-cone-popcorn"}>
                        <img src="/assets/img/data/caramelcorn.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#E22733] text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[265px] max-md:min-h-[380px]  max-w-[390px] max-[600px]:max-w-full max-[600px]:min-h-[270px] max-[400px]:min-h-[360px] max-[300px]:min-h-[400px]  rounded-tr-[100px] rounded-bl-[80px]  duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold '>Caramel Corn Mini Cone Popcorn</h4>
                            <p className='text-[16px] py-2 '>Who could resist the caramel popcorn that started it all, wrapped up in cute little cones, and a whole case of them?</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1  keen-slider__slide">
                    <NavLink to={"/shop/product/kettle-corn-mini-cone-popcorn"}>
                        <img src="/assets/img/data/kettlecorn.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#84C4EC]  text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[265px] max-md:min-h-[380px]  max-w-[390px] max-[600px]:max-w-full max-[600px]:min-h-[270px] max-[400px]:min-h-[360px] max-[300px]:min-h-[400px] rounded-tr-[100px] rounded-bl-[80px]  duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold'>Kettle Corn Mini Cone Popcorn</h4>
                            <p className='text-[16px] py-2'>Sweet and salty makes a perfect combo. Each mini cone is like a tiny pop of joy to help lighten up your day.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="card1  keen-slider__slide">
                    <NavLink to={"/shop/product/unicorn-popcorn®-tall-cone"}>
                        <img src="/assets/img/data/Unicorn_Cones.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#613223] text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[275px]  max-w-[390px] max-md:min-h-[350px] max-[600px]:max-w-full max-[600px]:min-h-[275px] max-[400px]:min-h-[350px] max-[300px]:min-h-[420px] rounded-tr-[100px] rounded-bl-[100px] duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold'>Unicorn Popcorn® Mini Cone</h4>
                            <p className='text-[16px] py-2'>This imaginative blend of natural fruit flavors sweet-tart icings with the classic crunch of gourmet popcorn is a real one-of-a-kind.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1  keen-slider__slide">
                    <NavLink to={"/shop/product/cheddar-cheese-mini-cone-popcorn"}>
                        <img src="/assets/img/data/cheedarcheese_mini.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#E7730D] text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[275px]  max-w-[390px] max-md:min-h-[350px] max-[600px]:max-w-full max-[600px]:min-h-[275px] max-[400px]:min-h-[350px] max-[300px]:min-h-[420px] rounded-tr-[100px] rounded-bl-[100px] duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold'>Cheddar Cheese Mini Cone Popcorn</h4>
                            <p className='text-[16px] py-2'>Handfuls of crispy, crunchy popcorn thickly coated in cheese corn and neatly wrapped up in our cute mini cones.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1  keen-slider__slide">
                    <NavLink >
                        <img src="/assets/img/data/Cinnamon.webp" alt="" />
                        <div className="card-body relative bottom-32 max-[400px]:bottom-16 bg-[#E22733] text-white py-[2rem] max-[300px]:py-[1rem] px-[30px]  h-[275px]  max-w-[390px] max-md:min-h-[350px] max-[600px]:max-w-full max-[600px]:min-h-[275px] max-[400px]:min-h-[350px] max-[300px]:min-h-[420px] rounded-tr-[100px] rounded-bl-[100px] duration-300">
                            <h4 className='text-[19px] max-md:text-[24px] leading-[1.2] font-bold'>Cinnamon Toast Mini Cone Popcorn</h4>
                            <p className='text-[16px] py-2'>Churros aren’t the only, or even the best, way to enjoy the festive flavors of crunchy cinnamon and sugar.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full font-bold  text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
            </div>
            <div className="mt-20">
                <div className=" min-[1200px]:w-[51%] ">
                    <h1 className='m-0 text-[60px]  max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#E40C13] font-bold'>Popcornopolis Butterfly Popcorn<span className='text-[#613223]'>.</span></h1>
                    <div className='mt-5 w-7 h-1 mb-8 bg-[#E40C13]'></div>
                    <p className='text-[20px] max-lg:text-[18px]  text-[#412015]'>Within each variety of popcorn, there’s an extremely wide range of quality, flavor, color and size. There are white butterfly strains and yellow ones—and some pop better than others. Believe it or not, no two strains look, taste, and crunch exactly the same when popped.</p>
                    <p className='text-[20px] max-lg:text-[18px] my-16 text-[#412015]'>With that said, Popcornopolis has sourced an incredibly delicious strain of white butterfly corn to make our Nearly Naked Popcorn recipe. It has an unusually tender and crispy crunch, and once popped in our coconut oil and gently salted, it requires nothing more to deliver an amazingly sublime popcorn eating experience.</p>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/perfeclysalted.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#E7730D] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[300px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px] max-md:text-[25px]  leading-[1.2] font-bold'>Nearly Naked Perfectly Salted</h4>
                            <p className='text-[16px]  py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-white-cheddar-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/whitecheedar.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#E22733] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[330px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px]  max-md:text-[25px] leading-[1.2] font-bold'>Nearly Naked White Salted</h4>
                            <p className='text-[16px]   py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
                <div className="card1 keen-slider__slide">
                    <NavLink to={"/shop/product/nearly-naked-jalapeno-lime-popcorn-4.5-oz-bag"}>
                        <img src="/assets/img/data/Jalapeno.webp" className='max-[600px]:max-h-[380px] mx-auto' alt="" />
                        <div className="card-body relative bottom-20 bg-[#84C4EC] text-white py-[2rem] px-[20px]  max-[700px]:min-h-[200px] max-[300px]:min-h-[330px] rounded-tr-[80px] rounded-bl-[50px]">
                            <h4 className='text-[19px] max-md:text-[25px]  leading-[1.2] font-bold'>Nearly Naked Jalapeno Lime</h4>
                            <p className='text-[16px]  py-2'>Don’t let the name naked fool you. There’s definitely nothing bare about this savory salty popcorn flavor.</p>
                            <NavLink><button className='flex items-center gap-4 rounded-full  font-bold text-[18px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455] py-2 px-12 max-[1400px]:px-5 duration-300'>Shop Now <FaArrowRightLong /></button></NavLink>
                        </div>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MushroomSlider