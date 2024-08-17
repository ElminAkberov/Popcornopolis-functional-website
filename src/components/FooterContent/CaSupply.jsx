import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function CaSupply() {
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    
    return (
        <div className='bg-beige'>
            <Header title={title} bgcolor={bgcolor} color={color}/>
            <div className="pt-32">
                <div className="max-w-[1240px] mx-auto px-[30px] ">
                    <h1 className='w-[60%] max-[1200px]:w-[70%] max-md:w-full text-[60px] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px] leading-none text-[#e40c13] mb-10'>CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT OF 2010.</h1>
                    <div className='mt-5 w-7 h-1 mb-7 bg-[#E22733]'></div>
                    <div className='w-[70%] max-[1200px]:w-[70%] max-md:w-full text-[20px] max-lg:text-[17.5px] font-sofia'>
                        <p className='mb-4'>Barcel USA LLC is committed to conducting all of its business in an ethical and legal manner. Grupo Bimbo, our parent company, has issued global policies stating that we do not accept or support the use of illegal, abusive, slavery or child labor, either within our business or with our suppliers. These policies are communicated and certified to by all employees. Further, our Barcel USA LLC Code of Business Conduct, which is also reviewed and certified to by all employees on an annual basis, reiterates that we expect our employees to act ethically and with the highest standards of integrity and abide by the law. Our sourcing employees also receive training in responsible sourcing and supplier management.</p>
                        <p className='mb-4'>Our suppliers are required to act in accordance with all applicable federal, state, local and foreign laws, rules and regulations, including laws addressing human trafficking and slavery. We require this of our suppliers through our agreements and purchase orders.</p>
                        <p className='mb-4'>We assess our supply chain through internal risk analysis, supplier self-assessment and the identification of high risk suppliers, if any. We may engage in verification measures with a supplier when we deem appropriate to evaluate and address risks of human trafficking and slavery, including possible site visits and audits (announced or unannounced) to ensure compliance. While we audit (both announced and unannounced) and assess the performance of our suppliers using both third-parties and internal resources, they do not currently include detailed assessments for human trafficking and slavery.</p>
                        <p className='mb-4'>In the event that we have reason to believe that a supplier is not in compliance with these standards, we will take corrective measures up to and including the potential removal of the supplier from our supply chain. Similarly, if an employee violates our Code of Business Conduct, we will take appropriate disciplinary measures up to and including dismissal.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CaSupply