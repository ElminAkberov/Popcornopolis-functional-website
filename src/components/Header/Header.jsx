import React, { useState, useEffect, useContext } from 'react';
import { Disclosure, DisclosureButton, Menu, MenuButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RiShoppingBagLine } from 'react-icons/ri';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import Cart from '../Cart'
import "../../index.css"
import { Context } from '../../context/ContextProvider';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header({ bgcolor, color, title, onClick }) {
    const [basket, setBasket] = useContext(Context)
    let [data, setData] = useState("")
    const [isFixed, setIsFixed] = useState(false);
    let [click, setClick] = useState(false)
    let [show, setShow] = useState([])
    let [link, setLink] = useState("")
    let [order, setOrder] = useState(0)
    let [opens, setOpens] = useState("none")
    let [showHeader, setShowHeader] = useState({})
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let file = "/data.json"

        fetch(file).then(res => res.json()).then(res => {
            data = res;
            setData(res)
        })

        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.onscroll = handleScroll;
        let order = 0
        basket.map(item => (
            order += item.count
        )
        )
        setOrder(order)
    }, [basket]);

    const handleClick = () => {
        setClick(!click)
    }

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };

    const searchBox = (e) => {
        let searchs = data?.shop?.filter(item => {
            return (
                item.collections?.find(collection => collection.toLowerCase().includes(e.target.value.toLowerCase())) ||
                item.flavors?.find(flavor => flavor.toLowerCase().includes(e.target.value.toLowerCase())) ||
                item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                item.type.toLowerCase().includes(e.target.value.toLowerCase())
            )
        });

        setShow(searchs.length > 3 ? searchs.slice(0, 3) : searchs)
    };

    const shows = (e) => {
        setLink(e.target.innerText.toLowerCase().split(" ").join("-"));
    }

    useEffect(() => {
        basket && localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    const openCart = () => {
        setOpens(!opens)
    }

    const handleOpen = (e) => {
        let target = e.currentTarget.innerText;
        setShowHeader((prev) => ({
            ...prev,
            [target]: !prev[target]
        }));
    }

    return (
        <Disclosure as="nav" className={`duration-300  ${!opens ? "z-50" : "z-40"} ${isFixed ? `fixed py-3 max-lg:py-0 top-0 left-0 w-full   bg-white shadow-md ` : click ? "bg-white   absolute w-full" : 'bg-transparent absolute mt-[12px] w-full top-3 z-50'}`}>
            {({ open }) => (
                <>
                    <div style={{ display: opens }} >
                        <Cart open={opens} setOpen={setOpens} />
                    </div>
                    <div className={`bg-white max-lg:hidden fixed top-0 w-full h-[auto] z-30 shadow-lg rounded-br-[100px] ${isVisible ? 'popup-visible' : 'popup-hidden'}`}>
                        <div className="p-10 mx-auto   justify-center  max-w-[650px]  max-lg:mt-20">
                            <div className="font-sofia">
                                <input onInput={searchBox} type="text" className=' w-full py-2 rounded-full  border-2 border-[#613223] pl-5 placeholder:text-[#CFC1BC]' placeholder='what are you looking for?' />
                                <h2 className='text-[12px] mt-5'>Popular Search Terms</h2>
                                <div className="mt-5">
                                    {show.map((item, i) => {
                                        return (
                                            <div className="flex  items-center justify-between mt-2">
                                                <div className="flex items-center">
                                                    <img src={`${item.img}`} className='h-[40px]' alt="" />
                                                    <NavLink onClick={shows} to={link ? `/shop/product/${link}` : ""} className='ml-2 font-bold capitalize'>{item.name.split("-").join(" ")}</NavLink>
                                                </div>
                                                <p>Product</p>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                        </div>
                        <div className="absolute right-0 top-0 p-7  w-max "><IoIosClose onClick={togglePopup} className='bg-[#CFC1BC] rounded-full text-[#613223] cursor-pointer' strokeWidth={2} size={32} /></div>
                    </div>
                    <div className="mx-auto py-4 px-2 lg:px-8 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                <DisclosureButton onClick={handleClick} className="relative rounded-full inline-flex items-center justify-center bg-[#613223] p-2 text-white ">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon strokeWidth={2} className="block h-9 w-9" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex  flex-1 items-center justify-center lg:items-stretch lg:justify-between ">
                                {!click ?
                                    <NavLink to={"/"} className="flex flex-shrink-0 items-center gap-2 z-30">
                                        <img
                                            className='w-[200px] max-[1492px]:w-[170px] max-[1200px]:w-[150px] max-md:w-[135px]'
                                            src="/assets/img/logo.svg"
                                            alt="Your Company"
                                        />
                                    </NavLink>
                                    : <div className='flex gap-x-4'>
                                        <div className=" p-3 rounded-full bg-[#EDF0F7] ">
                                            <FaSearch onClick={togglePopup} size={25} className='cursor-pointer' />
                                        </div>
                                        <div className="p-3 rounded-full bg-[#EDF0F7]">
                                            <NavLink to={"/my-account"}><GoPerson onClick={onClick} strokeWidth={2} className='' size={28} /></NavLink>
                                        </div>

                                    </div>

                                }

                                <div className="flex flex-col ">
                                    <div className={`${isFixed ? "hidden" : ''} flex justify-end gap-x-3 mt-4 mb-1 max-lg:hidden text-[${title}]`}>
                                        <p className='border-r-2 font-sofia border-gray-600 px-3 hover:underline'><NavLink to={"/fundraising/"}>Fundraising </NavLink> </p>
                                        <p className='font-sofia hover:underline'><NavLink to={"/corporate-gifts/"}> Corporate Gifting</NavLink></p>
                                    </div>
                                    <div className={`${isFixed ? `mt-5 text-[#613223]` : `text-[${title}] `} flex items-center `}>
                                        <div className="hidden lg:ml-6 lg:block">
                                            <div className="flex items-center">
                                                <div className={`flex items-center  text-[20px] max-[1492px]:text-[16px] max-[1250px]:text-[14px] font-bold gap-8 max-[1500px]:gap-2 `}>
                                                    <div className="#link1 ">
                                                        <NavLink to={"/create-your-own/"} className=" uppercase create pb-[5px]">Create your own
                                                        </NavLink>
                                                    </div>
                                                    <div className="#link2 create explore relative ">
                                                        <NavLink to={"/shop/"} className='relative '>
                                                            <div className="flex items-center uppercase gap-x-2">Shop popcorn <FaAngleDown className={`${isFixed ? "text-[#e22733]" : ``}`} /></div>
                                                        </NavLink>

                                                        <div className='explore-content relative  z-50'>
                                                            <div style={{ borderRadius: "0 50px 0 50px" }} className="flex shadow-xl absolute translate-x-[-25%] max-[1492px]:translate-x-[-40%] mr-3 p-8 w-[980px] max-[1350px]:w-[910px] h-[360px] mt-[2px] z-50 text-[#613223] bg-white">
                                                                <div className="1 border-r border-[#E22733] z-50 pr-10 font-sofia font-bold">
                                                                    <h3 className='text-[#E22733] text-[11px]'>FLAVORS.</h3>
                                                                    <div className="grid grid-cols-2 gap-2 gap-x-12  mt-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header1.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group '><NavLink to={'/shop/product-flavor/chocolate/'} className="flex items-center relative"> <span> Chocolate</span> <span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header2.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product-flavor/caramel/"} className="flex items-center relative" ><span>Caramel</span><span className='invisible absolute group-hover:visible  right-[-10px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header3.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product-flavor/kettle/"} className="flex items-center relative" ><span>Kettle</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header4.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product-flavor/cheese/"} className="flex items-center relative" ><span>Cheese</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header5.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product-flavor/sweet/"} className="flex items-center relative" ><span>Sweet</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <div className="flex items-center gap-2">
                                                                            <img className='w-[40px] h-[40px]' src="/assets/img/Header6.webp" alt="" />
                                                                            <p className='text-[15px] hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className="flex items-center relative"><span>Spicy</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                    </div>
                                                                    <NavLink to={"/popcorn-flavors/"}>
                                                                        <button className='flex items-center gap-4 rounded-full mt-14 bg-[#FED455]  hover:bg-[#ffa400] duration-300 py-4 px-8 hovers text-[16px]'><NavLink to={"/popcorn-flavors/"}>All Flavors</NavLink><FaArrowRightLong className='hover_right' /></button>
                                                                    </NavLink>
                                                                </div>
                                                                <div className="2 ml-10  flex font-sofia ">
                                                                    <div className="2-1">
                                                                        <h3 className='text-[#E22733] text-[11px]'>TYPES.</h3>
                                                                        <div className="text-[#613233] text-[15px] mt-4 ">
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 relative group'><NavLink to={"/shop/product-flavor/cones/"} className="relative"><span>Cones</span> <span className='invisible absolute group-hover:visible top-1 right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 relative group'><NavLink to={"/shop/product-flavor/tins/"} className="relative"><span>Tins</span> <span className='invisible absolute group-hover:visible top-1 right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 relative group'><NavLink to={"/shop/product-flavor/gift-baskets/"} className="relative"><span>Gift Baskets</span> <span className='invisible absolute group-hover:visible top-1 right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span> </NavLink> </p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 relative group'><NavLink to={"/shop/product-flavor/bags/"} className="relative"><span>Bags</span> <span className='invisible absolute group-hover:visible top-1 right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                        <NavLink to={"/shop"}>
                                                                            <button className='flex items-center gap-4 rounded-full mt-[70px] bg-[#FED455] hover:bg-[#ffa400] duration-300 min-w-[150px]  py-4 pl-8 px-10 max-[1400px]:px-7 hovers font-sofia  text-[16px]'>Shop All <FaArrowRightLong className='hover_right' /></button>
                                                                        </NavLink>
                                                                    </div>
                                                                    <div className="2-2 font-sofia font-bold">
                                                                        <h3 className='text-[#E22733] text-[11px]'>COLLECTIONS.</h3>
                                                                        <div className="text-[#613233] text-[15px] mt-4 ">
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product-flavor/nearly-naked"} className="flex items-center relative"><span>Nearly Naked</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[10px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/zebra"} className="flex items-center relative"><span>Zebra® Popcorn</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-10px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} className="flex items-center relative"><span>Takis Fuego®</span><span className='invisible absolute group-hover:visible  right-[-20px] group-hover:right-[10px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink> </p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} className="flex items-center relative"><span>Double Drizzle</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[5px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300 group'><NavLink to={"/shop/unicorn-popcorn®"} className="flex items-center relative"><span>Unicorn Popcorn®</span><span className='invisible absolute group-hover:visible  right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="2-3 ml-16 max-xl:ml-10 relative">
                                                                        <div className="relative w-[190px] h-[190px] ">
                                                                            <div className="hover:opacity-80 duration-300">
                                                                                <img className="w-full h-full object-cover rounded-br-[25px]  opacity-80  rounded-tl-[25px]" src="/assets/img/350x350_Nav_Nearly_Naked.webp" alt="Best Sellers" />
                                                                                <div className="relative bottom-9 bg-gradient-to-t hover:underline hover:text-[#e22733] duration-300 from-white to-transparent text-[#613223] text-center p-2 rounded-br-[25px] rounded-tl-[25px]">
                                                                                    <NavLink to={"/shop/best-sellers"} className="font-sofia text-[17px] opacity-100 group relative"><span>Best Sellers</span><span className='invisible absolute group-hover:visible top-[5px] right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="#link3 create explore">
                                                        <NavLink to={"/shop/gifts"} href='#' className='relative '>
                                                            <div className="flex items-center uppercase gap-x-2">
                                                                Shop by occasion
                                                                <FaAngleDown className={`${isFixed ? "text-[#e22733]" : ''}`} />
                                                            </div>
                                                        </NavLink>
                                                        <div style={{ borderRadius: "0 50px 0 50px", }} className="absolute explore-content max-[1492px]:w-[220px] shadow-xl font-sofia font-bold text-[#613223] bg-white capitalize p-10 pr-14 mt-1 z-30 text-[15px] duration-300 ">
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/gifts"}>gifts</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/snacking"}>snacking</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/movie-night"}>movie night</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/family-favorites"}>family favorites</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/party-time/"}>party time</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/delicious-deals"}>deals</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/new-arrivals"}>new arrivals</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/shop/best-sellers"}>best sellers</NavLink></p>
                                                        </div>
                                                    </div>

                                                    <div className=" explore create">
                                                        <NavLink to={"/explore"} href='#' className='relative uppercase '>
                                                            <div className="flex items-center gap-x-2">
                                                                Explore
                                                                <FaAngleDown className={`${isFixed ? "text-[#e22733]" : ''}`} />
                                                            </div>
                                                        </NavLink>
                                                        <div style={{ borderRadius: "0 50px 0 50px" }} className="absolute w-[220px] shadow-2xl font-sofia font-bold bg-white text-[#613223] capitalize p-10 pr-12 mt-1 explore-content z-30 text-[15px]">
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/mushroom-vs-butterfly-popcorn/"}> about popcorn</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/gourmet-popcorn/"}>gourmet popcorn</NavLink></p>
                                                            <p className='mb-2 hover:text-[#E22733] hover:underline duration-300'><NavLink to={"/happiness"}>Happiness By The  Handful™</NavLink></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                                            <div className={`flex items-center max-lg:hidden `}>
                                                <FaSearch onClick={togglePopup} size={22} className=' mx-4 cursor-pointer' />

                                                <NavLink to={"/my-account/"}><GoPerson onClick={onClick} strokeWidth={2} className='mx-4' size={25} /></NavLink>
                                            </div>
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <MenuButton className="relative flex rounded-full   text-sm  focus:ring-offset-2 ">
                                                        <div>
                                                            {!click ?
                                                                <div onClick={openCart} style={{ backgroundColor: bgcolor, color: color }} className={`outline-none inline-block w-[55px] h-[55px] px-[12px]   relative  rounded-full text-xs font-medium uppercase leading-normal `}>
                                                                    <div>
                                                                        <RiShoppingBagLine strokeWidth={1.2} size={25} className='mt-[13px] outline-none ml-[2px] ' />
                                                                        <p className="ms-3 bg-[#613223] rounded-full px-[3px] font-sofia font-bold relative bottom-[12px]  text-white">{order}</p>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div onClick={openCart} className={` inline-block px-[14px] bg-[#fed455] outline-none text-[#613223] relative p-1 rounded-full text-xs font-medium uppercase leading-normal `}>
                                                                    <div >
                                                                        <RiShoppingBagLine strokeWidth={1.2} size={25} className='mt-[10px] outline-none ml-[2px]' />
                                                                        <p className="ms-3 bg-[#613223] rounded-full px-[5px] relative bottom-[12px] text-white">{order}</p>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </MenuButton>
                                                </div>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`lg:hidden absolute ${click ? "h-[100vh]" : ""}   w-full z-50 overflow-y-scroll`}>
                        <DisclosurePanel >
                            <div className="space-y-1 pb-3 pt-2 bg-white  ">
                                <div className='text-[22px]   text-start'>
                                    <div className={`text-[16px] absolute font-sofia ${isVisible ? 'relative popup-visible' : ' popup-hidden'}`}>
                                        <div className="px-[8%]">
                                            <input type="text" onInput={searchBox} className=' w-full  py-2 rounded-full  border-2 border-[#613223] pl-5 ' placeholder='what are you looking for?' />
                                        </div>

                                        <div className="mt-5 bg-[#EDF0F7] py-2">
                                            <h2 className='text-[#766965] font-bold px-[8%]  '>Popular Search Terms</h2>
                                            {show.map((item, i) => {
                                                return (
                                                    <div className="flex px-[8%] items-center justify-between mt-2">
                                                        <div className="flex items-center">
                                                            <img src={`${item.img}`} className='h-[40px]' alt="" />
                                                            <NavLink onClick={shows} to={`/shop/product/${link}`} className='ml-2 capitalize font-bold text-[#613223]'>{item.name.split("-").join(" ")}</NavLink>
                                                        </div>
                                                        <p className='text-[#613223]'>Product</p>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                    <div className="px-[8%]">
                                        <p className=' block py-2 font-sofia border-b font-bold'><NavLink to={"/create-your-own"} className="">Create your own</NavLink></p>
                                        <div className="">
                                            <div className="font-sofia border-b py-2">
                                                <p onClick={(es) => handleOpen(es)} className='flex items-center justify-between w-full font-bold'>Shop Popcorn{!showHeader['Shop Popcorn'] ? <MdOutlineKeyboardArrowDown className='text-red-600' /> : <MdOutlineKeyboardArrowUp className='text-red-600' />} </p>
                                                <div className={`pl-5 text-[17px] ${showHeader['Shop Popcorn'] ? '' : 'hidden'}`}>
                                                    <h3>FLAVORS.</h3>
                                                    <p><NavLink className='flex items-center my-3'><img className='w-[40px] h-[40px]' src="/assets/img/Header1.webp" alt="" />Chocolate</NavLink>
                                                    </p>
                                                    <p className='flex items-center mb-3'>
                                                        <img className='w-[40px] h-[40px]' src="/assets/img/Header2.webp" alt="" />
                                                        <NavLink to={'/shop/product-flavor/caramel/'}>Caramel</NavLink>
                                                    </p>
                                                    <p className='flex items-center mb-3'>
                                                        <img className='w-[40px] h-[40px]' src="/assets/img/Header3.webp" alt="" />
                                                        <NavLink to={"/shop/product-flavor/kettle/"}>Kettle</NavLink>
                                                    </p>
                                                    <p className='flex items-center mb-3'>
                                                        <img className='w-[40px] h-[40px]' src="/assets/img/Header4.webp" alt="" />
                                                        <NavLink to={"/shop/product-flavor/cheese/"}>Cheese</NavLink>
                                                    </p>
                                                    <p className='flex items-center mb-3'>
                                                        <img className='w-[40px] h-[40px]' src="/assets/img/Header5.webp" alt="" />
                                                        <NavLink to={"/shop/product-flavor/sweet/"}>Sweet</NavLink>
                                                    </p>
                                                    <p className='flex items-center mb-3'>
                                                        <img className='w-[40px] h-[40px]' src="/assets/img/Header6.webp" alt="" />
                                                        <NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"}>Spicy</NavLink>
                                                    </p>
                                                    <button className='flex items-center gap-4 rounded-full bg-[#FED455] py-2 px-2 font-bold hover:bg-[#ffa400]'><span className=''>All Flavors</span><FaArrowRightLong /></button>
                                                    <h3>TYPES.</h3>
                                                    <p className="my-5 mt-2"><NavLink to={"/shop/product-flavor/cones/"} >Cones</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/product-flavor/tins/"} >Tins</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/product-flavor/gift-baskets/"} >Gift Baskets</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/product-flavor/bags/"} >Bags</NavLink></p>
                                                    <h3>COLLECTIONS.</h3>
                                                    <p className="my-5 mt-2"><NavLink to={"/shop/product-flavor/nearly-naked"} >Nearly Naked</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/zebra"} >Zebra® Popcorn</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/product/popcornopolis®-takis-fuego®-tall-cone"} >Takis Fuego®</NavLink></p>
                                                    <p className="mb-5"><NavLink to={"/shop/bagged-popcorn/double-drizzle-popcorn-bag/"} >Double Drizzle</NavLink></p>
                                                    <p className="mb-5"><NavLink to={'/shop/unicorn-popcorn®'} >Unicorn Popcorn®</NavLink></p>
                                                    <div className="hover:opacity-80 duration-300">
                                                        <img className='w-full max-h-[110px] object-cover  rounded-bl-[25px] rounded-tr-[25px]' src="/assets/img/350x350_Nav_Nearly_Naked.webp" alt="" />
                                                        <div className="relative bottom-9 bg-gradient-to-t hover:underline hover:text-[#e22733] duration-300  from-white to-transparent  text-[#613223] text-center p-2">
                                                            <NavLink to={"/shop/best-sellers"} className="font-sofia font-bold text-[17px] opacity-100 group relative"><span>Best Sellers</span><span className='invisible absolute group-hover:visible top-[5px] right-[-15px] group-hover:right-[-20px] duration-200 text-[#e22733]'><FaArrowRightLong /></span></NavLink>
                                                        </div>
                                                    </div>
                                                    <button className='flex items-center gap-4 rounded-full bg-[#FED455] py-2 px-2 font-bold hover:bg-[#ffa400]'><NavLink to={"/shop"} className=''> Shop All </NavLink><FaArrowRightLong /></button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b">
                                            <p onClick={(es) => handleOpen(es)} className='flex font-sofia font-bold items-center justify-between w-full my-2'>Shop By Occasion {!showHeader['Shop By Occasion'] ? <MdOutlineKeyboardArrowDown className='text-red-600' /> : <MdOutlineKeyboardArrowUp className='text-red-600' />}</p>
                                            <div className={`pl-5  text-[17px] ${showHeader['Shop By Occasion'] ? '' : 'hidden'} font-sofia `}>
                                                <p className='my-5 block'><NavLink to={"/shop/gifts"}>Gifts</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/snacking"}>Snacking</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/movie-night"}>Movie Night</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/family-favorites"}>Family Favorites</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/party-time/"}>Party Time</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/delicious-deals"}>Deals</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/new-arrivals"}>New Arrivals</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/shop/best-sellers"}>Best Sellers</NavLink></p>
                                            </div>
                                        </div>
                                        <div className="mb-10">
                                            <p onClick={(es) => handleOpen(es)} className='flex items-center font-sofia font-bold justify-between w-full border-b py-2'>Explore {!showHeader['Explore'] ? <MdOutlineKeyboardArrowDown className='text-red-600' /> : <MdOutlineKeyboardArrowUp className='text-red-600' />}</p>
                                            <div className={`pl-3 font-sofia text-[17px] ${showHeader['Explore'] ? '' : 'hidden'}`}>
                                                <p className='mb-5 block'><NavLink to={"/mushroom-vs-butterfly-popcorn/"}>About Popcorn</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/gourmet-popcorn/"}>Gourmet Popcorn</NavLink></p>
                                                <p className='mb-5 block'><NavLink to={"/happiness"}>Happiness by the Handful™</NavLink></p>
                                            </div>

                                        </div>
                                        <div className="font-sofia  mb-28 text-[16px]">
                                            <div className="grid grid-cols-2 mb-16">
                                                <div className="">
                                                    <NavLink to={"/customer-care/"} className='mb-3 block'>Customer Care</NavLink>
                                                    <NavLink to={"/faq/"} className='mb-3 block'>FAQs</NavLink>
                                                    <NavLink to={"/mushroom-vs-butterfly-popcorn/"} className='mb-3 block'>About Popcorn</NavLink>
                                                    <NavLink to={"/bulk-orders/"} className='mb-3 block'>Bulk Orders</NavLink>
                                                    <NavLink to={"/fundraising/"} className='mb-3 block'>Fundraising</NavLink>
                                                </div>
                                                <div className="">
                                                    <NavLink to={"/about/"} className='mb-3 block'>Our Story</NavLink>
                                                    <NavLink to={"/tastings/"} className='mb-3 block'>Tasting</NavLink>
                                                    <NavLink to={"/shipping-information/"} className='mb-3 block'>Shipping and Returns</NavLink>
                                                    <NavLink to={"/contact-us/"} className='mb-3 block'>Contact</NavLink>
                                                    <NavLink to={"/corporate-gifts/"} className='mb-3 block'>Corporate Gifting</NavLink>
                                                </div>
                                            </div>

                                            <div className="flex gap-x-5 mb-16 justify-center">
                                                <div className="border-2 w-max rounded-full">

                                                    <NavLink to={"https://www.facebook.com/popcornopolis"} target='_blank'>
                                                        <svg className='p-[6px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                                        </svg>
                                                    </NavLink>
                                                </div>
                                                <div className="border-2 w-max rounded-full">
                                                    <NavLink to={"https://www.instagram.com/popcornopolis"} target='_blank'>
                                                        <svg className='p-[6px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                                            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                                        </svg>
                                                    </NavLink>
                                                </div>
                                                <div className="border-2 w-max rounded-full">
                                                    <NavLink to={"https://twitter.com/popcornopolis"} target='_blank'>
                                                        <svg className='p-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                                            <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" fill-rule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41" clip-rule="evenodd"></polygon><path fill="#616161" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
                                                        </svg>
                                                    </NavLink>
                                                </div>
                                                {/* <a href="https://iconscout.com/icons/facebook-logo-2019" class="text-underline font-size-sm" target="_blank">Facebook</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a> */}
                                            </div>
                                            <div className='text-center'>
                                                <p>© 2024 Barcel USA, LLC</p>
                                                <p>Site by Isadora Agency</p>
                                            </div>
                                        </div>

                                    </div>
                                </div >
                                <DisclosureButton>
                                </DisclosureButton>
                            </div >
                        </DisclosurePanel >

                    </div >
                </>
            )
            }
        </Disclosure >
    );
}
