import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function TermsOfUse() {
  let color = "#fff"
  let bgcolor = "#e22733"
  let title = "#613223"
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Header color={color} bgcolor={bgcolor} title={title} />
    <div className='bg-beige'>
      <div className="my-36  max-w-[1240px] mx-auto px-[30px] ">

        <div className="  max-md:flex-col items-center ">
          <div className="  max-md:order-2">
            <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Terms of Use <span className='font-turbinado text-[#fed455]'>.</span></p>
            <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
          </div>
          <p className='font-sofia mb-5 font-bold text-[#613223] text-[20px]'>Last Updated on September 1, 2021</p>
          <p className='w-[65%] max-md:w-full font-sofia  text-[#613223] text-[20px]'>PLEASE READ THESE TERMS CAREFULLY AS YOUR ACCESS AND USE OF THE SITE CONSTITUTES AGREEMENT TO ALL TERMS, CONDITIONS AND NOTICES CONTAINED OR REFERENCED HEREIN.</p>
        </div>

      </div>
      <div className="max-w-[988px] mx-auto px-[30px]">
        <div className=" ">
          <hr />
          <h3 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] font-faro  text-[#E40C13] mb-10'>Who we are</h3>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia mb-32">
            <p>Popcornopolis.com and its related websites and social media platforms (the “Sites”) are operated by Barcel USA, LLC (“Barcel USA,” “Popcornopolis,” “we,” “us,” or “our”).  We’re glad you’re here.  These terms of use (“Terms”) apply to our Sites.  We hope you will familiarize yourself with these Terms, because they reflect our understanding of how our Sites operate, what you can expect from us, and what we expect from you.  Think of them as playground rules.  And of course, if there’s anything you don’t understand, ask us, either by sending us a note at crelations@grupobimbo.com or calling our customer service line at 310-414-6700 so you can speak with a real person.</p>
          </div>
          <h3 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] font-faro  text-[#E40C13] mb-10'>These Terms of Use</h3>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            <p className='mb-10'><strong>This is a legally binding agreement between you and Popcornopolis.</strong> These terms of use (“Terms of Use” or “Agreement”) apply to all Sites. We hope you will familiarize yourself with these Terms, because they reflect our understanding of how our Sites operate, what you can expect from us, and what we expect from you.</p>
            <p className='mb-10'>These Terms of Use and our Privacy Policy make up our online policies. Each time you access the Sites, you are agreeing to these Terms. If you do not wish to be bound by these Terms of Use, you may not access or use the Sites. You represent that you are of legal age to form a binding contract (you must consult your parent or legal guardian if you are under the age of majority and in no event may you be under the age of 13).</p>
          </div>
          <h3 className='text-[35px] max-lg:text-[32px] max-md:text-[28px] font-faro  text-[#E40C13] mb-10'>Modifications to Terms of Use</h3>
          <div className="text-[17px] leading-[1.8] max-lg:text-[15px] text-[#613223] font-sofia">
            
            <p className='mb-10'>As we learn and grow, we update our Terms, so please check back often. These Terms of Use were last updated on or around the date provided above. We reserve the right to make changes to any Terms at any time, however, Popcornopolis shall provide notification to you in advance of substantive changes becoming effective, such as by posting a notification on the Sites or by email. If you continue to access and use the Sites, including any of our Products and Services, after the effective date of such changes, then such access and use will be deemed an acceptance of and an agreement to follow and be bound by the Terms as changed. The revised Terms supersede all previous notices or statements regarding the Sites. For this reason, we encourage you to review these Terms any time you access or use the Site, and recommend that you print a copy for your records. Upon our request, you agree to accept or sign a non-electronic version of these Terms of Service and any other policies or agreements set forth or available on or through the Sites.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default TermsOfUse