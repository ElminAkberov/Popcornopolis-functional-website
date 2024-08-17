import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Covid() {
  let title = "#613223"
  let bgcolor = "#e22733"
  let color = "#fff"
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className='bg-beige'>
      <Header title={title} bgcolor={bgcolor} color={color} />
      <div className="pt-32 max-md:pt-24  max-w-[1240px] mx-auto px-[30px] ">
        <div className="md:flex justify-between max-md:flex-col items-center ">
          <div className="order-1 ">
            <img src="/assets/img/Covid.webp" className='md:float-right w-[18vw] max-[1200px]:w-[20vw] max-md:w-[130px] ' alt="" />
          </div>
          <div className="md:w-[70%] max-md:order-2">
            <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>COVID-19 <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] max-md:text-[40px] font-turbinado text-[#613223]'>Response.</span></p>
            <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
            <p className='text-[20px] max-md:text-[17px] mb-10 text-[#613223] font-sofia'>Last updated: 3/23/2020 3:24 PM</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-[988px] mx-auto px-[30px] ">
          <h3 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13] mb-2'>Valued Customers and Friends,</h3>
          <div className="text-[17px] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10 '>During this unprecedented time of COVID-19 concern, we have compiled our responses to your most-often asked questions. Please know that we are doing everything we can to keep the Popcornopolis facility running safely, and are looking after the health and well-being of our team members—and by extension, the safety of the products we ship you. Reach us any time by email or by phone if you have additional questions or concerns. Thank you for your continued support. Without you, there would be no Popcornopolis—and we never forget that.</p>
            <p className='mb-10 '>Stay safe, <br />Team Popcornopolis</p>
          </div>

          <div className="chapter1 mb-10">
            <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] text-[#E40C13] mb-10'>Is the packaging safe?</h5>
            <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>We want to assure you that every precaution has been taken to ensure shipments leave our facility free of any contamination.</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>The CDC has issued the following statement. “In general, because of poor survivability of these coronaviruses on surfaces, there is likely very low risk of spread from food products or packaging that are shipped over a period of days or weeks at ambient, refrigerated, or frozen temperatures.”</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>With respect to our shipping boxes, a recent study by the National Institute of Health found that COVID-19 can survive up to 24 hours on cardboard. Warehousing and shipping times normally exceed 24 hours, but like all goods, shipments may be exposed to others in transit to you.</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>We recommend that you handle all shipments carefully and follow the protocols of hand washing as recommended the National Institute of Health.</p>
              </div>
            </div>

          </div>
          <div className="chapter2 mb-10">
            <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] text-[#E40C13] mb-10'>Is the food safe?</h5>
            <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>We want to assure you that the food supply is safe.</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>The CDC has issued the following statement. “Currently, there is no evidence to support transmission of COVID-19 associated with food.”</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>Popcornopolis always takes food safety very seriously and we regularly receive unannounced audits of our facility and manufacturing practices. During the most recent unannounced audit our resulting score was 99.6%. (A+)</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>It is already normal practice in the food industry for production employees to wash their hands and refrain from touching their faces. We have strongly reiterated the importance of these practices and are monitoring for strict compliance.</p>
              </div>
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>Our production facility uses food grade sanitizers and has significantly increased the sanitization schedule.</p>
              </div>
            </div>

          </div>
          <div className="chapter3-1">
            <h5 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] text-[#E40C13] mb-10'>What is Popcornopolis doing to prevent the spread?</h5>
            <div className="text-[17px] md:pl-[60px] max-lg:text-[15px] text-[#613223] font-sofia">
              <div className='flex gap-x-3 '>
                <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                <p className='ml-5 mb-2'>As a company, we have taken every precaution recommended by the CDC.</p>
              </div>
              <div className="chapter3-2">
                <div className='flex gap-x-3 '>
                  <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                  <p className='ml-5 mb-2'>Earlier this month, we established new safety standards in response to COVID-19 including:</p>
                </div>
                <div className="ml-24 max-md:ml-5">
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>All employees are required to have their temperature scanned upon entry and are required to go home if there is any evidence of fever.</p>
                  </div>
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>All employees are required to remain home if they are showing any signs of illness.</p>
                  </div>
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>It is already normal practice in the food industry for production employees to wash their hands and refrain from touching their faces.</p>
                  </div>
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>We have strongly reiterated the importance of these practices and are monitoring for strict compliance. We have limited outside visitors and canceled all in-person meetings with vendors.</p>
                  </div>
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>We have eliminated all non-essential travel for all employees.</p>
                  </div>
                  <div className='flex gap-x-3 '>
                    <span className='w-[8px] h-[8px] absolute  bg-[#E40C13] rounded-full mt-2'></span>
                    <p className='ml-5 mb-2'>We have limited internal office meetings and other gatherings to no more than 5 people.</p>
                  </div>

                </div>
              </div>
            </div >
          </div>
        </div>

      <Footer />
      </div>
    </div>
  )
}

export default Covid