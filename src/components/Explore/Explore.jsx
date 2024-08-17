import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className='pt-40 max-w-[1280px] mx-auto px-[30px] '>
      <div className="text-[#E40C13] text-[65px] max-md:text-[33px]">Discover More .</div>
      <div className='mt-2 w-7 h-1 my-5 bg-[#E22733]'></div>

      <div className=" ">
        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
          <img className='max-md:max-h-[241px] max-h-[560px] max-lg:max-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0   w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Corn.jpg" alt="" />
          <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
            <h3 className='max-lg:text-[25px] text-[28px] text-white'>Mushroom vs Butterfly</h3>
            <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal'>Within each variety of popcorn, there’s an extremely wide range of quality, flavor, color and size. There are white butterfly strains and yellow ones—and some pop better than others. Believe it or not, no two strains look, taste, and crunch exactly the same when popped.</p>
            <NavLink to={"/mushroom-vs-butterfly-popcorn/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]   py-2 px-12 hover:bg-[#ffa400] group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span> </span> <FaArrowRightLong /></button></NavLink>
          </div>
        </div>
        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
          <img className='max-md:max-h-[241px] max-h-[560px]  max-lg:max-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Tin.jpg" alt="" />
          <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
            <h3 className='max-lg:text-[25px] text-[28px] text-white'>Happiness by the Handful™</h3>
            <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal'>Whether it’s spending time with loved ones, taking a long walk in nature, or indulging in our favorite guilty pleasures (hello, chocolate!), there are countless ways to find happiness in our lives. And the best part? It doesn’t have to be complicated or expensive. Sometimes the simplest things bring us the most joy.</p>
            <NavLink to={"/happiness"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
          </div>
        </div>
        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
          <img className='max-md:max-h-[241px] max-h-[560px]  max-lg:max-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/LateNight.jpg" alt="" />
          <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
            <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>Late Night Snacking</h3>
            <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#412015]'>Sneaking a snack late at night can be both thrilling and satisfying, like a delicious little secret between you and your taste buds. And let’s be honest, sometimes there’s just no better time to indulge in a snack than in the middle of the night when you’re feeling a little peckish. So go ahead, sneak that snack, savor every bite, and enjoy the delicious thrill of breaking the rules just a little bit.</p>
            <NavLink to={"/shop/snacking"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
          </div>
        </div>
        <div className="md:px-[30px] max-md:text-center">
          <h3 className='text-[77px] max-[1200px]:text-[63px] max-lg:text-[47px] max-md:text-[33px]  text-[#613223] lg:w-[50%] leading-none'>Upcoming <span className='font-turbinado text-[115px] max-[1200px]:text-[75px] max-lg:text-[56px] max-md:text-[40px] text-[#E22733]'>Celebrations .</span></h3>
          <p className='text-[47px] max-[1200px]:text-[40px] max-lg:text-[28px] max-md:text-[22px] text-[#613223]'>Events and Occasions</p>
        </div>
        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
          <img className='max-md:max-h-[241px] max-h-[560px]  max-lg:max-h-[420px] max-[850px]:min-h-[420px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Valentine.jpg" alt="" />
          <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
            <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Valentine’s Day</h3>
            <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Looking for a unique and delectable gift to surprise your special someone this Valentine’s Day? Look no further. Cuddle up with your loved one, create precious memories, and savor the delightful moments together.</p>
            <p className='mb-10'>February 14, 2024</p>
            <NavLink to={"/valentines/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
          </div>
        </div>
        <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
          <img className='max-md:max-h-[241px] max-h-[560px]  max-lg:max-h-[420px] max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Easter.jpg" alt="" />
          <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
            <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>Easter</h3>
            <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
            <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#412015]'>Celebrate the joy and wonder of Easter with our delightful collection of treats and treasures. Whether you’re searching for the perfect gift, planning an egg hunt, or simply looking to add a touch of whimsy to your  basket, we’ve got everything you need to make this Easter extra special.</p>
            <p className='mb-10 font-sofia text-[#412015]'>March 30, 2024</p>
            <NavLink to={"/easter/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
          </div>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] max-h-[660px] max-[1200px]:min-h-[660px]  max-lg:min-h-[420px]  max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/SweetCorn.jpg" alt="" />
        <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Earth Day</h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Happy Earth Day, fellow eco-warriors. At Popcornopolis, we choose to celebrate Earth Day, every day. That’s why we’re excited to offer our customers some fun and creative ways to reuse our packaging. Who knew our cone packaging could be turned into hanging window planters? Not to mention, it’s a great way to flex those crafting skills and impress your friends with your upcycling prowess.</p>
          <p className='mb-10 font-sofia'>April 22, 2024</p>
          <NavLink to={"/earth-day/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] max-h-[580px] max-[1200px]:min-h-[580px]  max-lg:min-h-[420px]  max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/MotherDay.jpg" alt="" />
        <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Mother’s Day</h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Mother’s Day is a time to celebrate and honor the amazing women in our lives who have loved us unconditionally and made countless sacrifices for our well-being. And what better way to show your appreciation for your mom than by surprising her with a delicious and crunchy treat?</p>
          <p className='mb-10 font-sofia'>May 12, 2024</p>
          <NavLink to={"/mothers-day/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px]  min-h-[660px] max-[1200px]:min-h-[660px]  max-lg:min-h-[420px]  max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Bowl.jpg" alt="" />
        <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Pop of The Class</h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>As you watch your child or grandchild bask in the glow of their achievements, take a moment to reflect on all the support and encouragement you’ve provided along the way. You’ve been their rock, their sounding board, and their biggest cheerleader. With all the hard work and late nights that go into earning a degree, a graduate deserves a tasty treat to celebrate their achievement. Now it’s time to celebrate together and savor the success.</p>
          <p className='mb-10 font-sofia'>Graduation</p>
          <NavLink to={"/congrats-grads/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] max-h-[520px] max-[1200px]:min-h-[380px]  max-lg:max-h-[380px]  max-[850px]:min-h-[420px] max-md:min-h-0  w-[75%] max-md:w-full object-cover rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Fathers.jpg" alt="" />
        <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-[#412015]">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>Celebrate Fathers </h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#412015]'>Celebrate your father with a range of flavors to suit any dad’s taste, from sweet and savory to spicy. Give your dad a gift that’s both thoughtful and delicious with a gourmet popcorn gift.</p>
          <p className='mb-10 font-sofia'>June 16, 2024</p>
          <NavLink to={"/fathers-day/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] min-h-[600px] max-lg:min-h-[440px] max-[850px]:min-h-[480px] max-md:min-h-0 w-[75%] max-md:w-full  rounded-tr-[100px]  md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Halloween.webp" alt="" />
        <div className="bg-[#E7730D] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[61px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-white'>Happy Halloween</h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal'>Popcorn is the ultimate Halloween treat. Its versatility allows you to craft both sweet and savory flavors to suit every ghoul and goblin’s taste. Plus, it’s a healthier alternative to candy, making it a guilt-free option. So, pop up some spooky fun and enjoy the crunchiest delight this Halloween season.</p>
          <p className='mb-10 font-sofia'>October 31, 2024</p>
          <NavLink to={"/halloween/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] min-h-[660px] max-[1200px]:min-h-[600px] max-lg:min-h-[450px] max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px] object-cover md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/NewYear.jpg" alt="" />
        <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Winter Holiday Gift Guide</h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Add warmth to your winter holidays with a classic treat – popcorn. Whether by the fireside or under the twinkling lights, its cozy crunch brings the joy of the season to your gatherings. Share, savor, and make memories one delicious kernel at a time. Popcorn, the heartwarming taste of winter.</p>
          <p className='mb-10 font-sofia text-[#fff]'>March 30, 2024</p>
          <NavLink to={"/winter-holiday-gift-guide/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] min-h-[600px] max-[1200px]:max-h-[420px] max-lg:min-h-[380px] max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px] object-cover md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/diwali.jpg" alt="" />
        <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Diwali </h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Add warmth to your winter holidays with a classic treat – popcorn. Whether by the fireside or under the twinkling lights, its cozy crunch brings the joy of the season to your gatherings. Share, savor, and make memories one delicious kernel at a time. Popcorn, the heartwarming taste of winter.</p>
          <p className='mb-10 font-sofia text-[#fff]'>March 30, 2024</p>
          <NavLink to={"/shop/diwali/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Learn More</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] min-h-[600px] max-[1200px]:max-h-[420px] max-lg:min-h-[380px] max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px] object-cover md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Christmas.jpg" alt="" />
        <div className="bg-[#E22733] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Christmas </h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Share Christmas cheer with popcorn. Whether snuggled by the fireplace, enjoying festive movies, or stringing it on a tree, let each pop bring joy. Popcorn is the perfect holiday treat for sharing laughter and creating cherished moments. Elevate your celebration with this crunchy delight.</p>
          <p className='mb-10 font-sofia text-[#fff]'>December 25, 2025</p>
          <NavLink to={"/christmas/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#613223] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] max-h-[600px] max-[1200px]:min-h-[550px] max-lg:max-h-[420px] max-lg:min-h-0 max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px] object-cover md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Channukah.jpg" alt="" />
        <div className="bg-[#84C4EC] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#412015]'>Hanukkah </h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#613223]'></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#412015]'>Elevate your celebration with the crispy goodness of popcorn—each kernel a burst of happiness. Whether sweet or savory, let popcorn add a playful crunch to your Festival of Lights. Gather, share, and enjoy the festive spirit one delicious pop at a time.</p>
          <p className='mb-10 font-sofia text-[#412015]'>December 25, 2024 – January 2, 2025</p>
          <NavLink to={"/shop/hanukkah/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#412015] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
      <div className="md:flex relative md:px-[30px] mb-48 max-md:mb-20 ">
        <img className='max-md:max-h-[241px] max-h-[660px] max-[1200px]:min-h-[580px] max-lg:max-h-[450px] max-lg:min-h-0 max-[850px]:min-h-[460px] max-md:min-h-0  w-[75%] max-md:w-full  rounded-tr-[100px] object-cover md:rounded-bl-[100px] duration-300' src="/assets/img/Explore/Kwanzaa.jpg" alt="" />
        <div className="bg-[#613223] w-[30%] max-lg:w-[47%] max-md:w-full md:absolute right-0 top-20 lg:pt-[91px] max-[1200px]:pt-[50px] pt-[60px] pb-[50px] lg:px-[70px] max-lg:pl-[21px]  lg:min-w-[459px] max-md:px-[11%] max-md:py-[2rem]  md:rounded-tl-[100px] md:rounded-br-[100px] max-md:rounded-bl-[100px] text-white">
          <h3 className='max-lg:text-[25px] text-[28px] text-[#fff]'>Kwanzaa </h3>
          <div className='mt-5 w-7 h-1 mb-8 bg-[#FED455] '></div>
          <p className='pb-[22px] lg:text-[17px] max-lg:text-[14px] max-md:text-[16px] mb-8 max-[1200px]:mb-0 font-sofia font-normal text-[#fff]'>Embrace the spirit of unity and heritage during Kwanzaa with a shared bowl of popcorn. The satisfying crunch of popcorn embodies the principles of this celebration – Umoja (Unity), Kujichagulia (Self-Determination), and Ujima (Collective Work and Responsibility). Gather, enjoy, and create meaningful memories with every pop.</p>
          <p className='mb-10 font-sofia text-[#fff]'>December 26, 2024 – January 1, 2025</p>
          <NavLink to={"/shop/kwanzaa/"} className="group"><button className='font-sofia font-bold inline-flex items-center gap-4 rounded-full text-[17px] max-lg:text-[15px] md:py-3 text-[#412015] bg-[#FED455]  py-2 px-12 hover:bg-[#ffa400]  group-hover:scale-x-110 max-[1400px]:px-5 duration-300'><span className='group-hover:scale-x-90 duration-300'>Shop Now</span>  <FaArrowRightLong /></button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Explore