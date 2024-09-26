import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { TbArrowsMoveVertical } from 'react-icons/tb';
import { VscSettings } from 'react-icons/vsc';
import { NavLink, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAngleRight } from 'react-icons/fa';
import "./new.css"
import { RiExpandUpDownFill } from 'react-icons/ri';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const Cones = ({ pathName }) => {
    let [data, setData] = useState({ bg: "", border: "" });
    let [collections, setCollections] = useState([]);
    let [flavors, setFlavors] = useState([]);
    let [types, setTypes] = useState([]);
    let [filteredData, setFilteredData] = useState([]);
    let [checkedCollections, setCheckedCollections] = useState([]);
    let [checkedFlavors, setCheckedFlavors] = useState([]);
    let [checkedTypes, setCheckedTypes] = useState([]);
    let [change, setChange] = useState("none")

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        let file = "/data.json"

        fetch(file).then(res => res.json()).then(res => {
            data = res;
            setData(res)

            const Collections = [...new Set(res.shop.flatMap(item => item.collections))]
            const Flavors = [...new Set(res.shop.flatMap(item => item.flavors))]
            const Types = [...new Set(res.shop.map(item => item.type))]

            setCollections(Collections)
            setFlavors(Flavors)
            setTypes(Types)

            setCheckedCollections([])
            setCheckedFlavors([])
            setCheckedTypes([])

            let setFirstData = res.shop.filter(item => item.flavors.includes(pathName) || item.type.includes(pathName) || item.collections.includes(pathName))
            
            if (pathName.length) {
                setFirstData = res.shop.filter(item => {
                    if (item.flavors.includes(pathName)) {
                        setCheckedFlavors([pathName]);
                        updateFilters([], [pathName], []);
                        return true;
                    } else if (item.type.includes(pathName)) {
                        setCheckedTypes([pathName]);
                        updateFilters([], [], [pathName]);
                        return true;
                    } else if (item.collections.includes(pathName)) {
                        setCheckedCollections([pathName]);
                        updateFilters([pathName], [], []);
                        return true;
                    }
                    return false;
                });
            }
            setFilteredData(setFirstData)

        })
    }, [pathName])
    const updateFilters = (newCheckedCollections, newCheckedFlavors, newCheckedTypes) => {
        setCheckedCollections(newCheckedCollections)
        setCheckedFlavors(newCheckedFlavors)
        setCheckedTypes(newCheckedTypes)


        const filteredData = data.shop.filter(item => {
            const matchCollection = newCheckedCollections.length === 0 || item.collections.find(c => newCheckedCollections.includes(c))
            const matchFlavors = newCheckedFlavors.length === 0 || item.flavors.find(f => newCheckedFlavors.includes(f))
            const matchType = newCheckedTypes.length === 0 || newCheckedTypes.includes(item.type)
            return matchCollection && matchFlavors && matchType
        });

        setFilteredData(filteredData)
        console.log(filteredData);
        
        const newCollections = [...new Set(filteredData.flatMap(item => item.collections))]
        
        const newFlavors = [...new Set(filteredData.flatMap(item => item.flavors))]
        console.log(newFlavors);
        const newTypes = [...new Set(filteredData.map(item => item.type))]
        
        setCollections(newCollections)
        setFlavors(newFlavors)
        setTypes(newTypes)
    };


    const handleSort = (sortType) => {
        let sortedData = [...filteredData];
        if (sortType == "Price Low-High") {
            sortedData.sort((a, b) => a.price - b.price)
        } else if (sortType == "Price High-Low") {
            sortedData.sort((a, b) => b.price - a.price)
        } else if (sortType == "Best Sellers") {
            sortedData.sort((a, b) => b.sale - a.sale)
        } else if (sortType == "Newest-Oldest") {
            sortedData.sort((a, b) => a.new - b.new)
        }

        setFilteredData(sortedData);
    };

    const handleClick = (es) => {
        handleSort(es.target.value);
    }
    const handleClose = (item, category) => {
        let newChecked;
        if (category === "collections") {
            newChecked = checkedCollections.filter(c => c !== item)
            setCheckedCollections(newChecked)
            updateFilters(newChecked, checkedFlavors, checkedTypes)

        } else if (category === "flavors") {
            newChecked = checkedFlavors.filter(f => f !== item)
            setCheckedFlavors(newChecked)
            updateFilters(checkedCollections, newChecked, checkedTypes)
        } else if (category === "types") {
            newChecked = checkedTypes.filter(t => t !== item);
            setCheckedTypes(newChecked)
            updateFilters(checkedCollections, checkedFlavors, newChecked)
        } else if (category === "All") {
            newChecked = []
            updateFilters(newChecked, newChecked, newChecked)
        }
    }

    const countItems = (items, category) => {
        let counts = {}
        items.forEach(item => {
            let categoryData = item[category]
            if (Array.isArray(categoryData)) {
                categoryData.forEach(value => {
                    if (!counts[value]) {
                        counts[value] = 1
                    } else {
                        counts[value]++
                    }
                })
            } else {
                
                if (!counts[categoryData]) {
                    counts[categoryData] = 1
                } else {
                    counts[categoryData]++
                }
            }
        })
        return counts;
    };

    const flavorCounts = countItems(filteredData, 'flavors');
    const collectionCounts = countItems(filteredData, 'collections');
    const typeCounts = countItems(filteredData, 'type');

    let [items, setItems] = useState({})

    const handleChange = (e) => {
        let target = e.target.innerText
        setItems(prevItem => ({
            ...prevItem,
            [target]: !prevItem[target]
        }))
    }

    return (
        <div className={`max-w-[1240px] px-[30px] mx-auto ${change == 'block' ? "z-[20] max-md:z-[50]" : "z-30"}   relative`}>
            <div className="filter my-20 max-[1492px]:my-32 max-md:my-10">
                <div className="flex  justify-between max-[500px]:flex-wrap gap-x-10">
                    <div className="flex flex-wrap items-center max-[500px]:w-full w-[100%] max-md:w-[50%]">
                        <div className="max-md:w-full">

                            <button onClick={() => setChange(change == "block" ? "none" : "block")} className="flex   w-full items-center gap-3 bg-[#fff]  pl-5 pr-16 py-3 rounded-full border-2 border-[#cfc1bc] ">
                                <VscSettings size={25} />
                                <p className='font-sofia font-bold '>Filter</p>
                            </button>
                            <div className="max-md:hidden block">
                                <div style={{ display: change }} className="absolute z-50  h-[300px] rounded-[20px] border-2 border-[#cfc1bc] bg-white overflow-y-scroll p-5">
                                    <div className=" flex gap-x-16 font-sofia font-bold">
                                        <div className=' '>
                                            <p className='text-[#e22733] mb-5 text-[12px]'>FLAVORS.</p>
                                            <div className=" ">
                                                {flavors.map((item, i) => (
                                                    <p key={i} className='text-[#412015] capitalize flex items-center mb-2 gap-x-1 '>
                                                        <div className="checkbox-container border-b text-[15px] border-[#F3D4CA]">
                                                            <input id={`flavorsid${i}`} name='flavors' onChange={() => {
                                                                const newChecked = new Set(checkedFlavors)
                                                                if (newChecked.has(item)) {
                                                                    newChecked.delete(item)
                                                                } else newChecked.add(item)
                                                                
                                                                updateFilters(checkedCollections, Array.from(newChecked), checkedTypes)
                                                            }} checked={checkedFlavors.includes(item)} type='checkbox' />
                                                            <label htmlFor={`flavorsid${i}`} className=' w-[150px] pb-1 ' >{item.split("-").join(" ")}</label><span className='font-normal '>({flavorCounts[item.split("-").join(" ")]})</span>
                                                        </div>
                                                    </p>
                                                ))}

                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-[#e22733] mb-5 text-[12px]'>COLLECTIONS.</p>
                                            {collections.map((item, i) => (
                                                <p key={i} className='text-[#613223] capitalize flex items-center mb-2 gap-x-1'>
                                                    <div className="checkbox-container border-b text-[15px] border-[#F3D4CA]">
                                                        <input
                                                            id={`collectionsid${i}`}
                                                            name='collections'
                                                            onChange={() => {
                                                                const newChecked = new Set(checkedCollections);
                                                                if (newChecked.has(item)) {
                                                                    newChecked.delete(item);
                                                                } else {
                                                                    newChecked.add(item);
                                                                }
                                                                updateFilters(Array.from(newChecked), checkedFlavors, checkedTypes);
                                                            }}
                                                            checked={checkedCollections.includes(item)}
                                                            type='checkbox'
                                                        />
                                                        <label className='w-[170px]  pb-1' htmlFor={`collectionsid${i}`}><span className='w-[75%]'>{item.split("-").join(" ")}</span> </label><span className='mb-1 font-normal'>({collectionCounts[item]})</span>
                                                    </div>
                                                </p>
                                            ))}
                                        </div>
                                        <div>
                                            <p className='text-[#e22733] mb-5 text-[12px]'>TYPES.</p>
                                            {types.map((item, i) => (

                                                <p key={i} className='text-[#412015] capitalize flex items-center mb-2 gap-x-1 '>
                                                    <div className="checkbox-container border-b text-[15px] border-[#F3D4CA]">
                                                        <input id={`typesid${i}`} name='types' onChange={() => {
                                                            const newChecked = new Set(checkedTypes)
                                                            if (newChecked.has(item)) {
                                                                newChecked.delete(item)
                                                            } else newChecked.add(item)
                                                            updateFilters(checkedCollections, checkedFlavors, Array.from(newChecked))
                                                        }} checked={checkedTypes.includes(item)} type='checkbox' />
                                                        <label className='w-[120px] pb-1' htmlFor={`typesid${i}`}>{item.split("-").join(" ")} </label><span className='mb-1 font-normal'>({typeCounts[item]})</span>
                                                    </div>

                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-md:block hidden ">
                                {change == "block" &&
                                    <div className="fixed inset-0 bg-black bg-opacity-40  z-20"></div>
                                }

                                <div style={{ display: change }} className="">
                                    <button onClick={() => setChange(change == "block" ? "none" : "block")} className='bg-[#E22733] fixed z-[999]  left-10 top-10 text-white p-3 rounded-full'><MdClose size={32} /></button>
                                    <div className="fixed  font-sofia font-bold bg-white  w-[70%] right-0 top-0 h-[100vh] z-[60] overflow-y-scroll px-[30px]">
                                        <p className='font-faro my-5 border-b  border-[#F3D4CA]'>Filter</p>
                                        <div className="  gap-x-24 ">
                                            <div className=" ">
                                                <div onClick={handleChange} className="flex justify-between items-center">
                                                    <p className='text-[#413015] my-3'>FLAVOR. </p><span className='text-[#e22733]'>{!items['FLAVOR.'] ? <IoChevronDown /> : <IoChevronUp />}</span>
                                                </div>
                                                {flavors.map((item, i) => (
                                                    <p key={i} className={`text-[#412015] capitalize  gap-x-1 ${!items['FLAVOR.'] && "hidden"}`}>
                                                        <div className="checkbox-container2 border-b text-[13px] border-[#F3D4CA]">
                                                            <input id={`flavorsid${i}`} name='flavors' onChange={() => {
                                                                const newChecked = new Set(checkedFlavors)
                                                                if (newChecked.has(item)) {
                                                                    newChecked.delete(item)
                                                                } else newChecked.add(item)
                                                                updateFilters(checkedCollections, Array.from(newChecked), checkedTypes)
                                                            }} checked={checkedFlavors.includes(item)} type='checkbox' />
                                                            <label htmlFor={`flavorsid${i}`} className=' pb-1' >{item.split("-").join(" ")}</label><span className='font-normal mb-1'>({flavorCounts[item.split("-").join(" ")]})</span>
                                                        </div>
                                                    </p>
                                                ))}

                                            </div>
                                            <div className=''>
                                                <div onClick={handleChange} className="flex items-center justify-between">
                                                    <p className='text-[#413015] my-3'>COLLECTIONS.</p><span className='text-[#e22733]'>{!items['COLLECTIONS.'] ? <IoChevronDown /> : <IoChevronUp />}</span>
                                                </div>
                                                {collections.map((item, i) => (
                                                    <p key={i} className={`capitalize text-[#412015] ${!items['COLLECTIONS.'] && "hidden"}`}>
                                                        <div className={`checkbox-container2 border-b text-[13px] border-[#F3D4CA] `}>
                                                            <input id={`collectionsid${i}`} name='collections' onChange={() => {
                                                                const newChecked = new Set(checkedCollections)
                                                                if (newChecked.has(item)) {
                                                                    newChecked.delete(item)
                                                                } else newChecked.add(item)
                                                                updateFilters(Array.from(newChecked), checkedFlavors, checkedTypes)

                                                            }} checked={checkedCollections.includes(item)} type='checkbox' />
                                                            <label htmlFor={`collectionsid${i}`}>{item.split("-").join(" ")}</label><span className=' font-normal'>({collectionCounts[item]})</span>
                                                        </div>
                                                    </p>
                                                ))}
                                            </div>
                                            <div className='mb-5'>
                                                <div onClick={handleChange} className="flex items-center justify-between">
                                                    <p className='text-[#413015] my-3'>TYPES.</p><span className='text-[#e22733]'>{!items['TYPES.'] ? <IoChevronDown /> : <IoChevronUp />}</span>
                                                </div>
                                                {types.map((item, i) => (
                                                    <p key={i} className={`text-[#412015] ${!items['TYPES.'] && "hidden"} capitalize`}>
                                                        <div className={` checkbox-container2 border-b text-[13px] border-[#F3D4CA]`}>
                                                            <input id={`typesid${i}`} name='types' onChange={() => {
                                                                const newChecked = new Set(checkedTypes)
                                                                if (newChecked.has(item)) {
                                                                    newChecked.delete(item)
                                                                } else newChecked.add(item)
                                                                updateFilters(checkedCollections, checkedFlavors, Array.from(newChecked))
                                                            }} checked={checkedTypes.includes(item)} type='checkbox' />
                                                            <label htmlFor={`typesid${i}`}>{item.split("-").join(" ")}</label><span className=' font-normal'>({typeCounts[item]})</span>
                                                        </div>
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {(checkedCollections).map(item => {
                            return (item &&
                                <div className="flex capitalize font-sofia font-bold items-center  bg-[#FFF3c8] px-2 py-1 rounded-full">
                                    <>
                                        <p>{item.split("-").join(" ")}</p>
                                        <button onClick={() => handleClose(item, "collections")}>
                                            <IoIosClose size={20} className='mt-1' />
                                        </button>
                                    </>
                                </div>
                            )
                        })}
                        {(checkedFlavors).map(item => {
                            return (
                                <div className="flex capitalize font-sofia font-bold items-center  bg-[#FFF3c8] px-2 py-1 rounded-full">
                                    <p>{item.split("-").join(" ")}</p>
                                    <button onClick={() => handleClose(item, "flavors")}>
                                        <IoIosClose size={20} className='mt-1' />
                                    </button>
                                </div>
                            )
                        })}
                        {(checkedTypes).map(item => {
                            return (
                                <div className="flex capitalize font-sofia font-bold items-center bg-[#FFF3c8] px-2 py-1 rounded-full">
                                    <p>{item.split("-").join(" ")}</p>
                                    <button onClick={() => handleClose(item, "types")}>
                                        <IoIosClose size={20} className='mt-1' />
                                    </button>
                                </div>
                            )
                        })}
                        {(checkedCollections.length > 0 || checkedFlavors.length > 0 || checkedTypes.length > 0) &&
                            <button className='font-sofia underline hover:no-underline text-[13px] font-bold ml-5' onClick={() => handleClose('', "All")}>Clear All</button>
                        }

                    </div>
                    <div className="flex max-md:w-[50%]   max-h-[52.2px] max-[500px]:w-full items-center gap-x-3 bg-[#fff] max-[436px]:mt-2 w-max pl-5 pr-10 py-3 rounded-full border-2 border-[#cfc1bc]">
                        <RiExpandUpDownFill size={25} className='min-w-[25px] min-h-[25px]' />
                        <select onChange={handleClick} className='selects  font-bold outline-none font-sofia cursor-pointer'>
                            {["Best Sellers", "Newest-Oldest", "Price Low-High", "Price High-Low"].map((item, i) => {
                                return (
                                    <option key={i}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="md:px-[30px] ">
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">

                        <div className="max-md:hidden block">
                            <div className='grid grid-cols-3 max-md:grid-cols-2 gap-x-3'>
                                {filteredData?.slice(0, 3).map((item, i) => (
                                    <NavLink key={i} to={`/shop/product/${item.name}`} className="flex">
                                        <div className={`card1 flex flex-col  relative  mb-20`}>
                                            <div className={` bg-[#FCF8F5] max-h-[256px]   border-[12px] border-transparent hover:border-[${item.border}] hover:bg-[${item?.bg}] rounded-tr-[90px] max-[500px]:rounded-tr-[60px] rounded-bl-[90px] max-[500px]:rounded-bl-[60px] duration-300`}>
                                                <img className=' px-[10px]  relative mx-auto bottom-20 max-lg:bottom-8 max-[550px]:bottom-5  max-md:w-[250px]' src={`${item.img}`} alt="" />
                                            </div>
                                            <div className="text-[#613223] ">
                                                {item.star &&
                                                    <img src="/assets/img/product/stars.webp" className='absolute mt-1' alt="" />
                                                }
                                                {item.latest &&
                                                    <p className='max-md:w-[40px] w-[80px] text-[18px] shadow-[0_0_0_10px_rgba(254,212,85,0.22)] max-md:shadow-[0_0_0_5px_rgba(254,212,85,0.22)] absolute rounded-full  max-md:text-[11px] rotate-[20deg] top-0 right-0 h-[80px] max-md:h-[40px] flex items-center justify-center  bg-[#fed455]'>NEW</p>
                                                }
                                                {/* <p style={{ boxShadow: "0 0 0 10px rgba(254,212,85,.22)" }} className='w-[80px] absolute rounded-full rotate-[20deg] top-0 right-0 h-[80px] flex items-center justify-center  bg-[#fed455]'>NEW</p> */}

                                                <span className='inline-block group text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                        {item.name.split("-").slice(0, -1).join(" ")}
                                                    </span>
                                                    <span className='capitalize inline-flex items-center '>
                                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> {item.name.split("-").slice(-1).join(" ")}</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-[#E22733]  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                                    </span>
                                                </span>

                                                <div className="flex font-sofia flex-col absolute bottom-[-30px]">
                                                    <span className='max-[1200px]:text-[14.5px]'>{item.pack}</span>
                                                    <strong className='text-[20px] max-[1200px]:text-[17px]'>${item.price}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                                <div className="  md:col-span-1 ">
                                    <div className="flex justify-between ">
                                        {filteredData.slice(3, 4).map((item, i) => (
                                            <NavLink key={i} to={`/shop/product/${item.name}`} className="flex">
                                                <div className="card1 flex flex-col  relative my-10 mb-20 ">
                                                    <div className={` bg-[#FCF8F5] max-h-[256px] border-[12px] border-transparent hover:border-[${item?.border}] hover:bg-[${item?.bg}] rounded-tr-[90px] max-[500px]:rounded-tr-[60px] rounded-bl-[90px] max-[500px]:rounded-bl-[60px] duration-300`}>
                                                        <img className=' px-[10px]  relative mx-auto bottom-20 max-lg:bottom-8 max-[550px]:bottom-5  max-md:w-[250px]' src={`${item.img}`} alt="" />
                                                    </div>
                                                    <div className=" text-[#613223]">
                                                        {item.star &&
                                                            <img src="/assets/img/product/stars.webp" className='absolutmt-1e mt-1' alt="" />
                                                        }
                                                        {item.latest &&
                                                            <p className='max-md:w-[40px] w-[80px] text-[18px] shadow-[0_0_0_10px_rgba(254,212,85,0.22)] max-md:shadow-[0_0_0_5px_rgba(254,212,85,0.22)] absolute rounded-full  max-md:text-[11px] rotate-[20deg] top-0 right-0 h-[80px] max-md:h-[40px] flex items-center justify-center  bg-[#fed455]'>NEW</p>
                                                        }
                                                        <span className='inline-block group text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                                            <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                                {item.name.split("-").slice(0, -1).join(" ")}
                                                            </span>
                                                            <span className='capitalize inline-flex items-center '>
                                                                <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> {item.name.split("-").slice(-1).join(" ")}</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-[#E22733]  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                                            </span>
                                                        </span>
                                                        {/* <p className='text-[24px] max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>{item.name.split("-").join(" ")}
                                                        </p> */}
                                                        <div className="flex font-sofia flex-col absolute bottom-[-30px]">
                                                            <span className='max-[1200px]:text-[14.5px]'>{item.pack}</span>
                                                            <strong className='text-[20px] max-[1200px]:text-[17px]'>${item.price}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                        <div className="absolute right-0 w-[65%] my-10">
                                            <div className="max-md:hidden relative">
                                                {filteredData.length > 3 && (
                                                    <div className="">
                                                        <div className="flex p-10 text-white relative overflow-hidden bg-[#E22733] h-[265px] rounded-tr-[80px] rounded-bl-[50px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='absolute w-full h-[100%] scale-[1.3] top-0 left-[-150px] ' width="1120" height="490" viewBox="0 0 1120 490">
                                                                <defs>
                                                                    <clipPath id="clip-path3348">
                                                                        <path id="Rect_8433348" data-name="Rect 8433348" d="M140,0h980a0,0,0,0,1,0,0V350A140,140,0,0,1,980,490H0a0,0,0,0,1,0,0V140A140,140,0,0,1,140,0Z" transform="translate(160 190)" fill="#673727"></path>
                                                                    </clipPath>
                                                                </defs>
                                                                <g id="Group_Masks_ 923348" data-name="Group Masks 92" transform="translate(-160 -190)" clip-path="url(#clip-path3348)">
                                                                    <g id="Group_14303348" data-name="Group 1430" transform="translate(-162.197 611.019) rotate(-59)">
                                                                        <path id="Shape_20853348" data-name="Shape  2085" d="M695.522,1081.631l-.057-43.5c-52.9-.549-147.027-6.419-150.542-161.049-2.129-93.82,26.045-171.332,50.844-242.327C613.952,582.7,631.6,530.34,650.5,479.464c26-69.981,50.4-165.384,39.338-256.945C673.624,88.268,609.6,36.183,552.266,12.816,474.441-18.9,397.794,14.8,321.584,43.177,269.3,62.642,216.5,76.313,164.422,96.565a396.156,396.156,0,0,1-107.637,25c-13.85,1.188-41.578-2.833-52.481,17.353-16.432,30.427,19.045,30.849,25.2,29.445,37.447-8.56,75.554-16.941,112.759-29.232,100.922-33.351,206.415-74.059,309.249-67.646,21.318,1.327,42.183,10.935,63.254,14.765,53.553,9.726,125.84,50.991,134.9,186.595,5.348,80.025-23.29,169.272-44.036,228.51L542.187,683.915c-31.9,93-71.36,207.127-51.138,330.35,7.587,46.239,33.376,67.272,54.088,75.733C594.31,1110.1,646.246,1089.37,695.522,1081.631Z" transform="translate(28.351 0)" fill="#CE242F" fill-rule="evenodd"></path>
                                                                        <path id="Shape_20863348" data-name="Shape  2086" d="M723.9,953.12c-42.142-.21-84.289,26.763-126.52,29.949-17.349,1.307-36.471,2.888-53.482-4.955-60.473-27.886-71.508-131.8-54.941-233.2,27.952-171.109,103.627-284.615,143.609-441.6,15.229-59.8,23.382-135.813,2.484-195.33C604.714,21.58,549.3,17.7,501.622,8.327,386.539-14.295,274.976,13.315,161.2,41.752,119.767,52.11,78.11,62.968,36.464,70.114,28.957,71.406-4.418,67.222.49,93.925,4.62,116.39,23.5,97.434,31.15,95.333c31-8.526,65.123-23.308,96.225-24.023,87.172-2.017,172.3-48.011,260.2-39.289,40.7,4.037,87.453,18.8,121.3,66.79,43.242,61.31,47.992,164.287,32.306,255.881-8.944,52.226-28.023,100.086-44.019,144.582-29.04,80.78-60.749,159.16-83.29,247.983C397,813.734,377.927,908.685,404.681,977.267c18.918,48.5,45.756,39.3,73.312,39.583,58.851.61,115.956,6.061,172.882-16.9C668.054,993.016,723.248,994.565,723.9,953.12Z" transform="translate(0 146.629)" fill="#CE242F" fill-rule="evenodd"></path>
                                                                        <path id="Shape_20873348" data-name="Shape  2087" d="M0,53.73c117.516,1.062,230.525-41.773,345.28,39.531,47.359,33.554,104.648,83.606,99.218,205.787-2.994,67.34-29.157,128.192-46.929,181.508-43.005,129.02-98.787,289.231-76.821,452.114l34.181.354c-7.439-39.279-20.048-70.348-20.079-115.329-.03-38.818,8.786-79.922,15.974-114.955,20.968-102.191,56.3-185.008,84.531-278.255,25.125-82.975,66.41-178.524,38.333-282.118C453.212,66.817,403.309,30.447,363.98,18.182,282.068-7.349,203.455-.49,121.28,6.014c-30.837,2.44-61.375,15.8-92.263,19.8C15.249,27.594.167,16.737,0,53.73Z" transform="translate(39.205 229.585)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                                                        <path id="Shape_20883348" data-name="Shape  2088" d="M0,19.16.018,33.114c95.734-7.427,196.631-18.874,289.565,44.87,43.938,30.134,90.36,91.974,86.961,199.742-2.515,79.821-25.55,149.274-44.773,215.822C298.649,608.225,259.8,739.115,259.98,876.538l37.466.389c-5.4-135.558,24.631-267.5,62.362-376.111C384.6,429.45,426.128,338.735,429.3,246.877c3.648-105.8-54.038-162.458-95.464-190.52C229.21-14.521,107.424-8.153,0,19.16Z" transform="translate(33.926 285.032)" fill="#CE242F" fill-rule="evenodd" opacity="0.95"></path>
                                                                        <path id="Shape_20893348" data-name="Shape  2089" d="M206,809.133c7.029.073,20.311,5.43,26.225-3.312,7.143-10.561,9.1-49.3,11.567-66.013,6.735-45.743,17.612-92.577,27.5-135.818C303,465.215,352.2,299.577,299.846,154.27c-9.434-26.183-20.868-45.964-33.562-65.09-14.365-21.651-34.017-37.61-51.044-47.733C161.083,9.248,107.077,2.265,51.12,1.684,38.68,1.555.729-9.256.013,25.591c-1,48.68,55.892,31.313,71.7,37.931,67.438,28.237,149.536,38.05,192.285,167.123,44.413,134.1-2.194,331.6-31.008,460.16C224.678,727.879,208.6,768.458,206,809.133Z" transform="translate(25.776 351.792)" fill="#CE242F" fill-rule="evenodd"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div className='relative' >
                                                                <p className='text-[42px] max-[1400px]:text-[36px] max-lg:text-[16px]'>Create your own<span className='text-[#Fed455]'>.</span></p>
                                                                <div className='w-7 h-1 mb-2 bg-[#FED455] '></div>

                                                                <p className="w-[60%] max-[1200px]:w-[50%] font-sofia  font-bold max-lg:text-[15px] pb-2">Mix & match flavors and create a hand-picked bundle that's just right for you!</p>
                                                                <NavLink to={"/create-your-own/"} className={"group"}><button className='flex items-center gap-4 rounded-full  max-lg:text-[15px] text-[#613223] bg-[#FED455] hover:bg-[#ffa400] py-2 px-8 duration-300 font-sofia font-bold group-hover:scale-x-110'><span className='group-hover:scale-x-90 duration-300'>Let's Go</span> <FaArrowRightLong className='mt-1' /></button></NavLink>
                                                            </div>
                                                        </div>
                                                        <img src="/assets/img/Explore/cones.webp" className='absolute bottom-[-60px] max-[1492px]:right-28 right-44' alt="" />

                                                        <img className='absolute right-[-30px] bottom-0 max-[1200px]:scale-[0.9]' src="/assets/img/Shop popcorn/trio.webp" alt="" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                        <div className="max-md:block hidden my-20">
                            <div className='grid max-md:grid-cols-2 gap-x-3'>
                                {filteredData.slice(0, 4).map((item, i) => (
                                    <NavLink key={i} to={`/shop/product/${item.name}`} className="relative">
                                        <div className="card1 flex flex-col   mb-20  ">
                                            <div className={` bg-[#FCF8F5] max-h-[256px] max-md:max-h-[150px] border-[12px] border-transparent w-full  hover:border-[${item?.border}] hover:bg-[${item?.bg}] rounded-tr-[50px]  rounded-bl-[50px]  duration-300`}>
                                                <img className=' px-[10px]  relative mx-auto bottom-20 max-lg:bottom-8 max-[550px]:bottom-5  max-md:max-h-[150px]' src={`${item.img}`} alt="" />
                                            </div>
                                            <div className=" text-[#613223]">
                                                {item.star &&
                                                    <img src="/assets/img/product/stars.webp" className='absolute mt-1' alt="" />
                                                }
                                                {item.latest &&
                                                    <p className='w-[40px]  shadow-[0_0_0_5px_rgba(254,212,85,0.22)] absolute rounded-full text-[11px] rotate-[20deg] top-0 right-0 h-[40px] flex items-center justify-center  bg-[#fed455]'>NEW</p>
                                                }

                                                <span className='inline-block group text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                        {item.name.split("-").slice(0, -1).join(" ")}
                                                    </span>
                                                    <span className='capitalize inline-flex items-center '>
                                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> {item.name.split("-").slice(-1).join(" ")}</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-[#E22733]  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                                    </span>
                                                </span>
                                                <div className="flex font-sofia flex-col absolute bottom-[50px]">
                                                    <span className='max-[1200px]:text-[14.5px]'>{item.pack}</span>
                                                    <strong className='text-[20px] max-[1200px]:text-[17px]'>${item.price}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                            <div className=" ">
                                <div className="max-md:block ">
                                    {filteredData.length > 3 && (
                                        <div className="">
                                            <div className="flex py-14 px-8 text-white bg-[#E22733] rounded-tl-[80px] rounded-br-[50px] relative">
                                                <div className='w-[60%]'>
                                                    <img src="/assets/img/Explore/cones.webp" className='absolute top-[-60px] left-0' alt="" />
                                                    <p className='text-[27px] mt-5'>Create your own<span className='text-[#Fed455]'>.</span></p>
                                                    <div className='w-7 h-1 mb-2 bg-[#FED455] '></div>
                                                    <p className=" pb-2 leading-[1.5] font-sofia font-bold">Mix & match flavors and create a hand-picked bundle that's just right for you!</p>
                                                </div>
                                                <div className="">
                                                    <img className=' scale-[0.9] max-[600px]:scale-[0.8] max-[600px]:w-[65%] absolute top-[-80px] right-[0px] duration-300' src="/assets/img/Shop popcorn/trio.webp" alt="" />
                                                    <div className="absolute bottom-4 right-4 ">
                                                        <NavLink to={"/create-your-own/"}><button className=' rounded-full w-[85px] h-[85px] relative  max-lg:text-[15px] text-[#613223] bg-[#FED455] hover:px-10 hover:bg-[#ffa400]  font-sofia font-bold  duration-300'>Let's Go</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    <span className='hover:border-[#B5DCF4]'></span>
                    <span className='hover:bg-[#84C4EC]'></span>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">

                        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-x-6">
                            {filteredData.slice(4).map((item, i) => (
                                <NavLink key={i} to={`/shop/product/${item.name}`} className="md:flex relative">
                                    <div className="card1 flex flex-col mb-20">
                                        <div className={` bg-[#FCF8F5] max-h-[256px] max-md:max-h-[150px] border-[12px] border-transparent hover:border-[${item?.border}] hover:bg-[${item?.bg}] rounded-tr-[90px] max-md:rounded-tr-[50px] max-md:rounded-bl-[50px]   rounded-bl-[90px]  duration-300`}>
                                            <img className=' px-[10px]  relative mx-auto bottom-20 max-lg:bottom-8 max-[550px]:bottom-5  max-md:w-[150px]' src={`${item.img}`} alt="" />
                                        </div>
                                        <div className="text-[#613223] ">
                                            {item.star &&
                                                <img src="/assets/img/product/stars.webp" className='absolute mt-1' alt="" />
                                            }
                                            {item.latest &&
                                                <p className='max-md:w-[40px] w-[80px] text-[18px] shadow-[0_0_0_10px_rgba(254,212,85,0.22)] max-md:shadow-[0_0_0_5px_rgba(254,212,85,0.22)] absolute rounded-full  max-md:text-[11px] rotate-[20deg] top-0 right-0 h-[80px] max-md:h-[40px] flex items-center justify-center  bg-[#fed455]'>NEW</p>
                                            }
                                            <div className="">
                                                <span className=' inline-block group text-[24px] mt-5   max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] max-md:text-[14px] duration-300  pr-2'>
                                                        {item.name.split("-").slice(0, -1).join(" ")}
                                                    </span>
                                                    <span className='capitalize inline-flex items-center '>
                                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px]  max-md:text-[14px] duration-300 inline'> {item.name.split("-").slice(-1).join(" ")}</span> <FaAngleRight className='max-md:hidden  p-1 inline  text-white rounded-full bg-[#E22733]  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                                    </span>
                                                </span>
                                                <div className="flex font-sofia flex-col absolute bottom-[50px]">
                                                    <span className='max-[1200px]:text-[14.5px]'>{item.pack}</span>
                                                    <strong className='text-[20px] max-[1200px]:text-[17px]'>${item.price}</strong>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {!filteredData.length > 0 &&
                        <span className='text-[25px] flex justify-center font-sofia font-bold text-[#613223]'>Nothing Found.</span>
                    }
                </div>

            </div>




        </div >
    );
};

export default Cones;
