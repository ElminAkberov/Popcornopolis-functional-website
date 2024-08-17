import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

function Ads() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header  title={title} bgcolor={bgcolor} color={color}/>
            <div className="mt-32 ">
                <div className="max-w-[1240px] mx-auto px-[30px]">
                    <h1 className=' text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#e40c13] mb-10'>About Our Ads.</h1>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                </div>
                <div className="max-w-[988px] mx-auto border-t-2 px-[30px]">
                    <h3 className='text-[42px] max-lg:text-[37px] max-md:text-[32px] max-[500px]:text-[30px] mb-10 leading-none text-[#e40c13]'>ADVERTISING /BEHAVIORAL TARGETING; HOW TO OPT-OUT.</h3>
                    <div className="text-[17px] max-lg:text-[15px] font-sofia">
                        <p className='mb-12'>We and our third-party advertising partners display targeted advertising, cross-context behavioral advertising, and interest-based advertising using information from cookies and tracking tools and inferences gathered about you over time and across websites, apps, or other platforms. These ads can be served on websites, on social media, in apps, and in emails. The ads may be based on your browsing habits, purchases, location, or online activities. The ads can be about our products or other companies’ products and services. We and our third-party partners gather information about you for this purpose from the cookies, pixels, tags, web beacons, and other tracking tools described in this Privacy Notice. Our partners might also link your name or email address to other information they collect.</p>
                        <p className='mb-12'>As part of these practices, we also share information with third-party advertising partners though tracking tools on our Sites. These third-party partners include social media platforms, analytics companies, data brokers, and third-party advertisers. Personal information received by these third parties is also subject to their privacy policies. These third parties can share your information with others and use the information for their own marketing purposes or the marketing purposes of others. This may include the delivery of targeted advertising, cross-context behavioral advertising, and interest-based advertising. We do not control certain privacy settings and preferences maintained by our social media platform partners like Facebook and Twitter. If you wish to make changes to those settings and preferences, you may do so by visiting the settings page of the appropriate social media platform.</p>
                        <p className='mb-12'>You can opt-out of sale / targeted advertising on our Platforms. You can opt out of the “sale” of your personal information, as well as certain types of “targeted advertising” on our Site (as these terms are defined under applicable laws and as described in this Privacy Notice). Your request will be processed and fulfilled in accordance with applicable laws. To make a request, click <NavLink to={'/privacy-preferences/'} className="text-[#386cce]">Do Not Sell or Share My Personal Information here</NavLink> , or in the footer of our Platforms.</p>
                        <p className='mb-12'>You can control certain cookies and tracking tools. Your browser or device may give you the ability to control cookies or other tracking tools. How you do so depends on the browser. To control flash cookies, you can go<span className='cursor-pointer text-[#384cce]'> here.</span> Why? Because flash cookies cannot be controlled through your browser settings. The Digital Advertising Alliance also offers tools to opt out of certain interest-based advertising by visiting optout.aboutads.info and <span className='cursor-pointer text-[#384cce]'>optout.privacyrights.info</span>. If you block or reject cookies and tracking tools, certain features on our Platforms may not work, and not all of the tracking describe in this Notice will stop.</p>
                        <p className='mb-12'>Our Do Not Track Policy: Some browsers have “do not track” features that allow you to tell a website not to track you. We will respond to opt-out preference signals to the extent required by law for your browser or device (such as Global Privacy Control,<span className='overflow-hidden '><NavLink to={" https://globalprivacycontrol.org/"} className="text-[#384cce] "> https://globalprivacycontrol.org/</NavLink></span>), but we cannot link this information to your account and we do not respond to “do not track” signals. Your selections are specific to the device, website, and browser you are using, and are deleted whenever you clear your browser’s cache.</p>
                        <p className='mb-12 overflow-hidden'>Google Analytics: Our platforms use Google Analytics, including certain advertising features to better understand our users, create audiences for our ads, and to evaluate and improve our platforms. For more information on how to opt out for these tools, please visit https://tools.google.com/dlpage/gaoptout and <p className="text-[#386cce] underline"><NavLink to="http://www.google.com/safetycenter/tools/#manage-your-ads-preferences" >http://www.google.com/safetycenter/tools/#manage-your-ads-preferences</NavLink></p> </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ads