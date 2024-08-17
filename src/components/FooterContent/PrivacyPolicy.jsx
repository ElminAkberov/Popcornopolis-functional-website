import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function PrivacyPolicy() {
  let color = "#fff"
  let bgcolor = "#e22733"
  let title = "#613223"
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className='bg-beige '>
      <Header color={color} bgcolor={bgcolor} title={title} />
      <div className="my-36  max-w-[1240px] mx-auto px-[30px] ">

        <div className="  max-md:flex-col items-center ">
          <div className="  max-md:order-2">
            <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Privacy Policy<span className='font-turbinado text-[#fed455]'>.</span></p>
            <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
          </div>
          <i className='font-sofia   text-[#613223] text-[20px] '>EFFECTIVE DATE: May 31, 2024</i>
          <p className='w-[65%] max-lg:w-full font-sofia mt-5 text-[#613223] text-[20px]'>Please read below and learn how Barcel USA LLC. and its affiliates (“we”, “us”, or “our”) collect, protect, share and use your information, including, without limitation, on our websites, interactive features, applications, and social network pages (“Platforms”).</p>
          <p className='w-[65%] max-lg:w-full font-sofia mt-5 text-[#613223] text-[20px]'>If you are a California resident, click here to view “Your California Privacy Rights,” in Section 5, and our notice at collection for information provided pursuant to California law.</p>
        </div>
        <div className='w-[65%] leading-none mt-10'>
          <h3 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] text-[#E40C13]'>
          1. INFORMATION WE COLLECT ON OUR PLATFORMS.
          </h3>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-10">
            <p className='mt-5'>We collect, receive, and develop several categories of personal information about you, depending on the nature of your interactions with us. For example:</p>
          </div>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>We Collect Contact Information.</strong> We collect contact information and identifiers such as your name, email, telephone number, social media account handles, and home address. If our Platform allows you to create an account, we collect a username and password from you. We also collect business contact information on our Platforms for our business customers, including a job title, company name, and business email or telephone number.</p>
          </div>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>We Collect Demographic Information.</strong> We may collect information such as your gender, birth date, and age.</p>
          </div>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>We Collect Location Information.</strong>We collect information about your general location, using your zip code and IP address.</p>
          </div>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>We Collect Audio, Visual, or Similar Information.</strong>We collect photos and videos you submit in connection with a promotion, or that you send to us through our Platforms. If you participate in a video call with us as part of a promotion prize, we may record that call. . If you participate in a survey or focus group, we may record videos or take photos of you, including of your interactions with our products. For certain Platform features, if you give permission, our Platform can access the camera and microphone on your device.</p>
          </div>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>We Collect Internet and Network Activity Information.</strong></p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default PrivacyPolicy