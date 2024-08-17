import React, { useEffect } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5';
import { NavLink, useParams } from 'react-router-dom'

function Subs() {
    
    return (
        <div className='pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px] font-sofia '>
            <div className="bg-white border-[#F2DCCD] rounded-md border p-10 pt-20 max-lg:pt-10">
                <h3 className='text-[26px] max-lg:text-[23.5px] font-faro '>Subscriptions</h3>

                <p className='text-[20px] max-lg:text-[17.3px]   border p-5 max-lg:p-3 border-[#F2DCCD] rounded-md'><span><span className='gap-x-3'><IoCheckmarkCircle className='text-[#613223] text-[23px] absolute mt-[4px]' /><span className='ml-6'>You have no active subscriptions.</span></span><NavLink to={"/shop/"} className="font-bold text-[#386cce] text-[20px] inline-flex max-lg:text-[17.3px] ">Browse products</NavLink></span></p>
            </div>
        </div>
    )
}

export default Subs