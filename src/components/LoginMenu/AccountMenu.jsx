import React, { useEffect, useState } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { HiNewspaper } from 'react-icons/hi2';
import { LiaHomeSolid } from 'react-icons/lia';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { IoMdClose } from 'react-icons/io';
import { LuAlignJustify } from 'react-icons/lu';

function AccountMenu() {
  let title = "#613223";
  let bgcolor = "#E22733";
  let color = "#fff";

  let [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState("");

  const handleNavLinkClick = (index) => {
    setActiveIndex(index)
  };

  const handleHeaderClick = () => {
    setActiveIndex("")
  };

  return (
    <div>
      <div className='bg-beige overflow-hidden'>
        <Header bgcolor={bgcolor} color={color} title={title} onClick={handleHeaderClick} />

        <div className="pt-64 max-lg:pt-36 max-w-[1180px] px-[30px] mx-auto">
          <div className="flex items-start">

            <div className="overflow-hidden">
              <div className="flex items-center">
                {open ? <IoMdClose onClick={handleOpen} size={50} className='hidden max-lg:block absolute z-10 rounded-full text-white bg-[#e22733] p-2' /> : <LuAlignJustify onClick={handleOpen} size={50} className='hidden max-lg:block absolute z-10 rounded-full text-white bg-[#e22733] p-2' />}<h3 className='text-[60px] max-lg:ml-14 max-lg:absolute font-faro text-[#e22733] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px]'>My Account<span className='text-[#613223]'>.</span></h3>
              </div>
              <div className={`font-sofia ${!open ? "max-lg:absolute max-lg:left-[-500px]" : "max-lg:absolute left-5"} top-[235px] duration-700 bg-white border rounded-md border-[#F2DCCD] w-max py-10 max-lg:py-5 pl-8 max-lg:pl-6`}>
                <div className={`flex gap-x-3 items-center py-3 w-[250px] max-lg:w-[160px] border-[#e22733] ${activeIndex === 0 ? 'border-r-4' : ''}`}>
                  <MdOutlineAccountCircle className={`${activeIndex === 0 ? 'text-[#e22733]' : 'text-[#9CA5B9]'}  text-[25px] max-lg:text-[20px]`} />
                  <NavLink
                    to="/my-account/edit-account"
                    className='text-[19px] max-lg:text-[15.3px] hover:underline text-[#613223]'
                    onClick={() => handleNavLinkClick(0)}
                  >
                    Account Details
                  </NavLink>
                </div>
                <div className={`flex gap-x-3 items-center py-3 w-[250px] max-lg:w-[160px] border-[#e22733] ${activeIndex === 1 ? 'border-r-4' : ''}`}>
                  <HiNewspaper className={` text-[25px] max-lg:text-[20px] ${activeIndex === 1 ? 'text-[#e22733]' : 'text-[#9CA5B9]'} `} />
                  <NavLink
                    to="/my-account/order"
                    className='text-[19px] max-lg:text-[15.3px] hover:underline text-[#613223]'
                    onClick={() => handleNavLinkClick(1)}
                  >
                    Order History
                  </NavLink>
                </div>
                <div className={`flex gap-x-3 items-center py-3 w-[250px] max-lg:w-[160px] border-[#e22733] ${activeIndex === 2 ? 'border-r-4' : ''}`}>
                  <AiOutlineDollar className={` text-[25px] max-lg:text-[20px] ${activeIndex === 2 ? 'text-[#e22733]' : 'text-[#9CA5B9]'} `} />
                  <NavLink
                    to="/my-account/subscriptions"
                    className='text-[19px] max-lg:text-[15.3px] hover:underline text-[#613223]'
                    onClick={() => handleNavLinkClick(2)}
                  >
                    Subscriptions
                  </NavLink>
                </div>
                <div className={`flex gap-x-3 items-center py-3 w-[250px] max-lg:w-[160px] border-[#e22733] ${activeIndex === 3 ? 'border-r-4' : ''}`}>
                  <LiaHomeSolid className={` text-[25px] max-lg:text-[20px] ${activeIndex === 3 ? 'text-[#e22733]' : 'text-[#9CA5B9]'} `} />
                  <NavLink
                    to="/my-account/edit-address"
                    className='text-[19px] max-lg:text-[15.3px] hover:underline text-[#613223]'
                    onClick={() => handleNavLinkClick(3)}
                  >
                    Addresses
                  </NavLink>
                </div>
              </div>
            </div>
            <div className={`lg:w-[65%] ${open ? "relative max-lg:left-[200px] duration-300" : ""} w-full`}>
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AccountMenu;
