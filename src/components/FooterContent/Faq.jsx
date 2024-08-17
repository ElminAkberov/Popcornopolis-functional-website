import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { GoPlus } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import { FiMinus } from 'react-icons/fi'

function FAQ() {
    let [open, setOpen] = useState(false)
    const handleClick = (items, index) => {
        setOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }
    
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    let faq = [
        {
            "question": "Where can I buy your premium product?",
            "answer": "Right here on Popcornopolis.com, of course! Join the Popcornopolis Email Club to receive online discounts, seasonal promotions, popcorn gift ideas and the latest updates about our newest gourmet popcorn recipes. They’re also sold in many fine retail, wholesale and entertainment venues across our nation."
        },
        {
            "question": "Does Popcornopolis offer free samples?",
            "answer": "We sure do! Along with the millions of free popcorn samples we’ve handed out during our Costco Roadshows and Tastings over the years, you can also sample any of our gourmet recipes at Popcornopolis retail stores — fresh from the warmers, and absolutely FREE. Although we can’t offer you free samples online, our 100% satisfaction guarantee means you can order with confidence."
        },
        {
            "question": "What does gourmet mean?",
            "answer": "“Gourmet” is a word used to describe food made with high-quality ingredients and expert preparation. It also refers to a person who enjoys and is familiar with gourmet foods and artful cooking. So if you enjoy the taste of Popcornopolis gourmet popcorns, you may be a gourmet yourself!"
        },
        {
            "question": "Is Popcornopolis popcorn gluten-free?",
            "answer": "Yes! If you’re on the lookout for gluten-free snacks, everything we make is gluten-free. Popcornopolis is a gluten-free facility."
        },
        {
            "question": "What's the best oil to pop popcorn?",
            "answer": "There are many ways to pop popcorn — and for the culinary experts at Popcornopolis, coconut oil wins, hands down. Popping kernels in high-grade coconut oil gives our popcorn a buttery taste, and the classic crunch our fans have enjoyed for decades."
        },
        {
            "question": "Where does popcorn come from?",
            "answer": "Most American popcorn is grown in the “corn belt” – which includes Indiana, Illinois, Iowa, Missouri, Nebraska and Kansas. We’re fortunate to work with expert, caring Midwestern farming families who harvest the highest quality of kernels for our gourmet recipes."
        },
        {
            "question": "Do you offer any Non-GMO certified products?",
            "answer": "Yes, Our Nearly Naked, Kettle Corn Organic Chili Lime, Organic Kettle, Organic Nearly Naked, Organic Golden Turmeric Organic Caramel Kiss and Organic Butter up! products are certified Non-GMO by the Non-GMO Project."
        },
        {
            "question": "Do you offer kosher products?",
            "answer": "Yes, Popcornopolis Kettle Corn, Nearly Naked Perfectly Salted, and Nearly Naked Jalapeno Lime popcorns are certified kosher by the Orthodox Union. The OU is the world’s most recognized and trusted kosher certification agency."
        },
        {
            "question": "Where can I find nutrition information?",
            "answer": "Nutrition information can be found on our product pages, packaging, or by contacting customer service for product-specific information requests."
        },
        {
            "question": "What snack should I eat?",
            "answer": "Go where the love is: Popcornopolis! We’re known for our delicious gourmet gifts but you deserve a gift, too – treat yourself to any of our unique popcorn varieties, ranging from time-honored and taste to indulgently innovative. We’re so convinced you’ll love what our chefs cook up, we guarantee you’ll find our popcorn 100% delicious!"
        },
        {
            "question": "What is the best gift?",
            "answer": "The best gift you can give anyone is love, caring and thoughtful consideration. For a delicious way to say it all, give the gift of Popcornopolis. It’s popped with love, seasoned with care and packaged with thoughtful consideration of fun, style and presentation."
        },
        {
            "question": "What should I bring to a party?",
            "answer": "By all means, bring yourself! Everybody wants to see you. You’ll also want to bring something for everyone to enjoy. Popcornopolis gourmet gift tins are the perfect plus-one for all kinds of get-togethers, from small dinner gatherings to football tailgate parties. By bringing one of our attractive tins that serve up to 35 popcorn lovers in a variety of mouthwatering flavors, you’ll be noted as a guest of honor and crowd-pleasing generosity."
        },
        {
            "question": "What gifts should I give clients and co-workers?",
            "answer": "Take a look at our corporate gift catalog — in it, you’ll find numerous ways to show business clients, contacts, and co-workers your appreciation, while ensuring they remember you, too. With business gifts for every budget, convenient discounts, and personalization options, Popcornopolis makes corporate gift-giving easy."
        },
        {
            "question": "How much popcorn is served in your gift tins?",
            "answer": "Our 2-Gallon Popcorn Tin serves popcorn for 20 or more people. Our 3.5-Gallon Tin serves 35 or more."
        },
        {
            "question": "How large are your cones?",
            "answer": "We offer three cone sizes on this website and in our retail locations.",
            "title1": "Mini Cones",
            "subtitle1": "Our cute-as-a-button Mini Cones make great small gifts, party favors, stocking stuffers, office handouts, and more. Measuring 11″ tall, each contains a single serving of popcorn and weighs between .87 and 2.7 oz depending on the flavor. Sold in our mini gift baskets and convenient cases of 40.",
            "title2": "Tall Cones",
            "subtitle2": "Tall Cones make delightful holiday, birthday, or hostess gifts year-round. At 15″ tall, each holds between 1.75-8 oz depending on the flavor you select. Featured in Popcornopolis Gift Baskets and our create your own assortment program.",
            "title3": "Regular Cones",
            "subtitle3": "Regular Cones are a colossal mound of popcorn bliss built for endless sharing. At 17″ tall, each holds between 2.75-12 oz depending on the flavor you select. Available at select retailers nationwide.",
        },
        {
            "question": "Can you take popcorn on a plane?",
            "answer": "Solid food items, including popcorn, can be transported in carry-ons or checked baggage. However, always check with TSA for the latest updates on food and travel restrictions, and know that the final decision of item allowance rests with the TSA officer at checkpoint."
        },
        {
            "question": "What are my options for shipping?",
            "answer": "For all shipping and delivery questions, please see our shipping information page, or call our friendly customer service team at 800-767-2489."
        },
        {
            "question": "What are your coupon terms?",
            "answer": "Coupons are for a limited time only. They can be canceled at any time without notification.Coupons may only be used once.Coupons cannot be combined with any other coupon or discount.Coupons cannot be redeemed on purchases with sale or clearance merchandise.Coupons have no cash value.Coupons cannot be used on previous purchases.Coupons are only valid at https://popcornopolis.com on continental US orders only.                Void where prohibited.Restrictions may apply.Barcel USA reserves the right to make updates to coupon without notification."
        },
        {
            "question": "Does Popcornopolis charge sales tax?",
            "answer": "Yes, sales tax is charged on shipped orders."
        },
    ]
    return (

        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color} />
            <div className=''>
                <div className="my-36  max-w-[1240px] mx-auto px-[30px] ">
                    <div className="order-1 ">
                        <img src="/assets/img/Faq.webp" className='md:float-right w-[20vw] ' alt="" />
                    </div>
                    <div className="md:flex  max-md:flex-col items-center ">
                        <div className="w-[55%] max-[1200px]:w-[42%]  max-md:order-2">
                            <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[44px] max-md:text-[33px] leading-none text-[#E40C13]'>Frequently Asked <span className='text-[90px] max-[1200px]:text-[60px] max-lg:text-[53px] font-turbinado text-[#613223]'>Questions.</span></p>
                            <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1240px] mx-auto lg:px-[30px]">
                    <div className="lg:flex justify-between ">
                        <div className="max-lg:pr-[8%] lg:w-[40%] ">
                            <div className="max-lg:px-[8%] bg-[#84C4EC] rounded-tr-[80px] p-20 pt-0 relative">
                                <h4 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#412015] pt-10'>Is Popcorn Corn?<span className='text-[#612223]'>.</span></h4>
                                <div className='mt-5 w-7 h-1 mb-7 bg-[#7F441D]'></div>
                                <p className='text-[17px] max-lg:text-[15px] max-md:text-[17.5px] text-[#412015] font-sofia'>Popcorn is a special type of corn, with each kernel holding water inside a hard-shelled “hull.” When the popcorn is heated, the pressure builds, the kernel explodes, and…pop! You’ve got a puffed-up, crunchy snack. We pop our corn in coconut oil to give it a buttery taste and a satisfying crunch.</p>
                                <div className=" max-lg:relative max-lg:top-12  max-lg:right-[-15vw] absolute min-[1200px]:left-[100px] lg:w-[40%] ">
                                    <img src="/assets/img/Faq2.webp" className='rounded-tl-[80px] min-h-[320px] max-w-[400px] max-[1200px]:max-w-[370px] max-lg:min-h-[535px] max-md:min-h-0 max-lg:max-w-full duration-300 object-cover rounded-br-[80px]' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:float-right lg:w-[50%] max-lg:px-[30px]">
                            {

                                faq.slice(0, 1).map((item, index) => (
                                    <div className=" flex flex-col">
                                        <div onClick={() => handleClick(item, index)} className="flex gap-x-5  border-b  border-b-[#F3D3C9] cursor-pointer justify-between  text-[#613223]">
                                            <h3 className='text-[24px] max-lg:text-[1.3rem]  py-[20px]'>{item.question}</h3>
                                            <span>{open[index] ? <FiMinus className='text-[40px] text-red-600 mt-4' /> : <GoPlus className='text-[40px] text-red-600 mt-4' />}</span>
                                        </div>

                                        <div className="">
                                            <p className={`max-lg:text-[14px] ${!open[index] ? 'hidden' : ''} max-md:text-[16px]  font-sofia py-[20px] `}>{item.answer}<NavLink className="text-[#386cce] underline">Click here to learn where to buy</NavLink></p>
                                        </div>
                                    </div>

                                ))
                            }
                            {
                                faq.slice(1, 8).map((item, index) => (
                                    <div className=" flex flex-col">
                                        <div onClick={() => handleClick(item, index + 1)} className="flex gap-x-5 border-b  border-b-[#F3D3C9] cursor-pointer justify-between  text-[#613223]">
                                            <h3 className='text-[24px] max-lg:text-[1.3rem]  py-[20px] leading-none'>{item.question}</h3>
                                            <span>{open[index + 1] ? <FiMinus className='text-[40px] text-red-600 mt-2' /> : <GoPlus className='text-[40px] text-red-600 mt-2' />}</span>
                                        </div>
                                        <div className="">
                                            <p className={` ${!open[index + 1] ? 'hidden' : ''} max-lg:text-[14px]  max-md:text-[16px] py-[20px] font-sofia`}>{item.answer}</p>
                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="lg:max-w-[800px] mx-auto px-[30px] mt-64 max-lg:mt-10">
                    {faq.slice(8, 14).map((item, index) => (
                        <div className=" flex flex-col ">
                            <div onClick={(item) => handleClick(item, index + 8)} className="flex gap-x-5 cursor-pointer border-b py-2 border-b-[#F3D3C9]  justify-between  text-[#613223]">
                                <h3 className='text-[24px] max-lg:text-[1.3rem] py-[5px]'>{item.question}</h3>
                                <span>{open[index + 8] ? <FiMinus className='text-[40px] text-red-600' /> : <GoPlus className='text-[40px] text-red-600' />}</span>
                            </div>
                            <div className="">
                                <p className={` ${!open[index + 8] ? 'hidden' : ''} max-lg:text-[14px]  max-md:text-[16px] font-sofia`}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                    {faq.slice(14, 15).map((item, index) => (
                        <div className=" flex flex-col ">
                            <div onClick={(item) => handleClick(item, index + 14)} className="flex gap-x-5 cursor-pointer border-b py-2 border-b-[#F3D3C9]  justify-between  text-[#613223]">
                                <h3 className='text-[24px] max-lg:text-[1.3rem] py-[5px]'>{item.question}</h3>
                                <span>{open[index + 14] ? <FiMinus className='text-[40px] text-red-600' /> : <GoPlus className='text-[40px] text-red-600' />}</span>
                            </div>
                            <div className="">
                                <p className={` ${!open[index + 14] ? 'hidden' : ''} max-lg:text-[14px]  max-md:text-[16px] font-sofia`}>
                                    {item.answer}
                                    <div className="">
                                        <p className='text-[20px] max-lg:text-[14px] font-bold  font-faro max-md:text-[16px] font-sofia'>{item.title1}</p>
                                        <p className=' max-lg:text-[14px]  max-md:text-[16px] '>{item.subtitle1}</p>
                                        <p className='text-[20px] max-lg:text-[14px] font-bold  font-faro max-md:text-[16px] font-sofia'>{item.title2}</p>
                                        <p className=' max-lg:text-[14px]  max-md:text-[16px] '>{item.subtitle2}</p>
                                        <p className='text-[20px] max-lg:text-[14px] font-bold font-faro  max-md:text-[16px] font-sofia'>{item.title3}</p>
                                        <p className='max-lg:text-[14px]  max-md:text-[16px] '>{item.subtitle3}</p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    ))}
                    {faq.slice(15, 17).map((item, index) => (
                        <div className=" flex flex-col ">
                            <div onClick={(item) => handleClick(item, index + 15)} className="flex gap-x-5 cursor-pointer border-b py-2 border-b-[#F3D3C9]  justify-between  text-[#613223]">
                                <h3 className='text-[24px] max-lg:text-[1.3rem] py-[5px]'>{item.question}</h3>
                                <span>{open[index + 15] ? <FiMinus className='text-[40px] text-red-600' /> : <GoPlus className='text-[40px] text-red-600' />}</span>
                            </div>
                            <div className="">
                                <p className={`max-lg:text-[14px]  ${!open[index + 15] ? 'hidden' : ''} max-md:text-[16px] font-sofia`}>
                                    {item.answer}</p>
                            </div>
                        </div>
                    ))}
                    {faq.slice(17, 18).map((item, index) => (
                        <div className=" flex flex-col ">
                            <div onClick={(item) => handleClick(item, index + 17)} className="flex gap-x-5 cursor-pointer border-b py-2 border-b-[#F3D3C9]  justify-between  text-[#613223]">
                                <h3 className='text-[24px] max-lg:text-[1.3rem] py-[5px]'>{item.question}</h3>
                                <span>{open[index + 17] ? <FiMinus className='text-[40px] text-red-600' /> : <GoPlus className='text-[40px] text-red-600' />}</span>
                            </div>
                            <div className="">
                                <p className={`max-lg:text-[14px]  ${!open[index + 17] ? 'hidden' : ''} max-md:text-[16px] font-sofia`}>
                                    <p>Coupons are for a limited time only. They can be canceled at any time without notification.</p>
                                    <p>Coupons may only be used once.</p>
                                    <p>Coupons cannot be combined with any other coupon or discount.</p>
                                    <p>Coupons cannot be redeemed on purchases with sale or clearance merchandise.</p>
                                    <p>Coupons have no cash value.</p>
                                    <p>Coupons cannot be used on previous purchases.</p>
                                    <p>Coupons are only valid at https://popcornopolis.com on continental US orders only.</p>
                                    <p>Void where prohibited.</p>
                                    <p>Restrictions may apply.</p>
                                    <p>Barcel USA reserves the right to make updates to coupon without notification.</p>
                                </p>
                            </div>
                        </div>
                    ))}
                    {faq.slice(18).map((item, index) => (
                        <div className=" flex flex-col ">
                            <div onClick={(item) => handleClick(item, index + 18)} className="flex gap-x-5 cursor-pointer border-b py-2 border-b-[#F3D3C9]  justify-between  text-[#613223]">
                                <h3 className='text-[24px] max-lg:text-[1.3rem] py-[5px]'>{item.question}</h3>
                                <span>{open[index + 18] ? <FiMinus className='text-[40px] text-red-600' /> : <GoPlus className='text-[40px] text-red-600' />}</span>
                            </div>
                            <div className="">
                                <p className={`max-lg:text-[14px]  ${!open[index + 18] ? 'hidden' : ''} max-md:text-[16px] font-sofia`}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ