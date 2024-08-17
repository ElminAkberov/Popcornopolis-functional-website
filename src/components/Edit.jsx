import React, { useContext, useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { IoCheckmark } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { BsTruck } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'
import EditSlider from './EditSlider'
import { Context } from '../context/ContextProvider'
import { RiInformationLine } from 'react-icons/ri'

function Edit() {
    let length;
    let title = "#613223"
    let bgcolor = "#e22733"
    let color = "#fff"
    let [open, setOpen] = useState(false)
    let [total, setTotal] = useState(0)
    const [basket, setBasket] = useContext(Context)
    let [basketItem, setBasketItem] = useState(basket)
    const [returnListCalled, setReturnListCalled] = useState(false)
    let [count, setCount] = useState(1)


    useEffect(() => {
        let sum = 0
        let itemSet = {}
        basket.map(item => {

            if (itemSet[item.diff ? item.diff : item.names]) {
                itemSet[item.diff ? item.diff : item.names].count += item.count;
            } else {
                itemSet[item.diff ? item.diff : item.names] = { ...item };
            }
            sum += item.price * item.count
        })
       
        setBasketItem(Array.from(new Set(Object.values(itemSet))))
        setTotal(sum)
    }, [basket])


    let [removedList, setRemovedList] = useState([])
    let [control, setControl] = useState(false)

    const handleChange = (index, e, names) => {

        let updateItem = [...basketItem]
        updateItem[index].count = +e.target.value
        setCount(+e.target.value)
        setBasketItem(updateItem)
        setControl(true)
    }

   

    const deleteItem = (names, price, diff) => {

        let newBasket = basket.filter(item => !(item.names === names && item.price === price && item.diff === diff))
        setBasket(newBasket)
        let newFilter = basketItem.filter(item => !(item.names === names && item.price === price && item.diff === diff))
        setBasketItem(newFilter)

        let returns = basketItem.find(item => (item.names === names && item.price === price && item.diff === diff))

        setRemovedList(returns)
        setReturnListCalled(false)
        setControl(true)
    }


    const handleUpdateCart = () => {
        if (control) {
            const filteredBasket = basketItem.filter(item => item.count > 0)
            setBasket(filteredBasket)
            setBasketItem(filteredBasket)
        }
    };
    const returnList = () => {
        setRemovedList("")
        if (!returnListCalled && removedList) {
            let { count, names, price, cartImg, diff, quantityss, adds, subname, adlar } = removedList

            setBasket(prev => [
                ...prev,
                { count, names, price, cartImg, diff, quantityss, adds, subname, adlar }
            ])
            setBasketItem(prev => [
                ...prev,
                { count, names, price, cartImg, diff, quantityss, adds, subname, adlar }
            ])
            setReturnListCalled(true)
        }
    }

    return (
        <div className='bg-beige'>
            <Header let title={title} color={color} bgcolor={bgcolor} />
            <div>
                <div className="pt-96 max-[1200px]:pt-32 max-w-[1100px] mx-auto max-[1200px]:px-[4%]">
                    <h3 className='text-[60px] text-[#e22733] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px]'>Your Cart<span className='text-[#613223]'>.</span></h3>
                    <div className='mt-3 w-7 h-1 mb-7 bg-[#e22733]'></div>
                    {basketItem.length > 0 &&
                        <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#f4fff7] border rounded-sm px-5 py-4 border-[#4ab866]">
                            <IoCheckmark className='text-white bg-[#4ab866] rounded-full p-1' size={28} />
                            <p>Customer matched zone "US Domestic"</p>
                        </div>
                    }
                    {
                        removedList.names &&
                        <div className="font-sofia flex items-center gap-x-3 bg-[#f4fff7] border rounded-sm px-5 py-4 border-[#4ab866]">
                            <IoCheckmark className='text-white bg-[#4ab866] rounded-full p-1' size={28} />
                            <p className='capitalize'>{removedList.names.split("-").join(' ')}<span className='normal-case'> removed.</span><button onClick={returnList} className='text-[#386cce]'>Undo?</button></p>
                        </div>
                    }

                    {!basketItem.length > 0 ?
                        <>
                            <div className="font-sofia mt-5 flex items-center mb-5 gap-x-3 bg-[#f4f8ff] border rounded-sm px-5 py-4 border-[#007cba]">
                                <RiInformationLine className='text-white bg-[#007CBA] rounded-full p-1' size={28} />
                                <p>Your cart is currently empty.</p>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={handleUpdateCart} className='bg-[#e22733] font-sofia   font-bold text-white  text-center py-2 px-10 text-[20px] rounded-full'><NavLink to={"/shop/"}>Return to shop</NavLink></button>
                            </div>
                        </>
                        :
                        <>
                            <div className="max-md:block bg-white hidden">
                                <table className='w-full max-md:text-[14px] p-5  border border-black mt-10 font-sofia'>
                                    {basketItem.map((item, index) => (
                                        <>
                                            <thead className=''>
                                                <tr className='border-b '>
                                                    <th className={`${item.subname && "float-right"} py-2  text-right`}>Product:</th>
                                                    <td className='max-md:text-[14px]  capitalize text-right py-2 px-2'>{item.names.split('-').join(" ")}{`${item.subname ? `-${item.subname}` : ``}`}

                                                        {item.subname &&
                                                            <>
                                                                <p className='flex justify-between'><span className='ml-4'>Cones Price:</span> <span>{item.price.toFixed(2)}</span></p>
                                                                <span ><span className='float-left  ml-4'>Flavours:</span>
                                                                    {
                                                                        Array.isArray(item.quantityss) &&
                                                                        item.quantityss.map(flavors => {
                                                                            return (
                                                                                flavors.count > 0 && <span>{flavors.name} {`${item.subname == 'Mini' ? `${item.subname} Cone Popcorn` : `${item.subname} Cone`}`}(Qty:{item.subname == "Mini" ? `${flavors.count * 10}` : `${flavors.count}`} {item.adlar.includes(flavors.name) && `Price : (+ $${flavors.count * item.adds}.00)`}) <br /></span>
                                                                            )
                                                                        })
                                                                    }

                                                                </span>
                                                            </>
                                                        }
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody className=''>
                                                <tr className='border-b '>
                                                    <th className='py-2 text-right'>Price:</th>
                                                    <td className='text-right max-md:text-[15px] px-2'>${item.price.toFixed(2)}</td>
                                                </tr>
                                                <tr className='border-b'>
                                                    <th className='tex-top relative bottom-5 text-right'>Quantity:</th>
                                                    <td className='text-right max-md:text-[15px] '><div className='flex items-center flex-col float-right justify-end'><input className='border-black w-[35px] relative left-2 border py-2 text-center my-2  ' value={item.count} onChange={(e) => handleChange(index, e, item.names)} /><span className='px-2' onClick={() => deleteItem(item.names, item.price, item.diff)}>Remove</span></div> </td>
                                                </tr>
                                                <tr className='border-b-2 border-[#F3E0D4]'>
                                                    <th className='py-2 text-right'>SubTotal:</th>
                                                    <td className='px-2 w-max text-right max-md:text-[15px]'>${(item.price * item.count).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    ))}


                                </table>
                                <div className="font-sofia flex max-[600px]:flex-col gap-x-3 p-3 my-5">
                                    <input type="text" className='border-black border py-2 pl-3 min-[600px]:w-[50%]' placeholder='Coupon code' />
                                    <button className='min-[600px]:w-[50%] max-[600px]:mt-4 bg-[#fed455] text-[#613223] text-[17px] font-bold rounded-full py-2'>Apply Coupon</button>
                                </div>
                                <button onClick={handleUpdateCart} className='bg-[#e22733] font-sofia text-[17px]  font-bold text-white w-full text-center py-2 rounded-full'>Update cart</button>
                            </div>
                            <div className="max-md:hidden block">
                                <div className=" border my-5 py-5 px-3 bg-white border-[#613223] ">
                                    <table className=' ' style={{ width: "100%" }}>
                                        <thead className='text-[19px] '>
                                            <tr className=' '>
                                                <td></td>
                                                <td>Product</td>
                                                <td>Price</td>
                                                <td>Quantity</td>
                                                <td>Subtotal</td>
                                            </tr>
                                        </thead>
                                        <tbody className=' font-sofia  text-[22px] '>
                                            {basketItem.map((item, index) => (
                                                <tr key={index} className=''>

                                                    <td><NavLink className={"inline-flex"} to={item.subname ? `/create-your-own` : `/shop/product/${item.names}`}><img src={item?.cartImg} width={70} alt="" /></NavLink></td>
                                                    <td className={`capitalize ${item.subname ? "text-[16px] pb-5 " : "text-[22px] font-bold"} `}>
                                                        {item.names.split('-').join(' ')}{`${item.subname ? `-${item.subname}` : ``}`}
                                                        {item.subname &&
                                                            <>
                                                                <p>Cones Price: {item.price.toFixed(2)}</p>
                                                                <span>Flavours:
                                                                    {
                                                                        Array.isArray(item.quantityss) &&
                                                                        item.quantityss.map(flavors => {
                                                                            return (
                                                                                flavors.count > 0 && <span>{flavors.name} {`${item.subname == 'Mini' ? `${item.subname} Cone Popcorn` : `${item.subname} Cone`}`}(Qty:{item.subname == "Mini" ? `${flavors.count * 10}` : `${flavors.count}`} {item.adlar.includes(flavors.name) && `Price : (+ $${flavors.count * item.adds}.00)`}) <br /></span>
                                                                            )
                                                                        })
                                                                    }

                                                                </span>
                                                            </>
                                                        }
                                                    </td>
                                                    <span className='hidden'>{item.subname ? length = (item.quantityss.filter(flavors => flavors.count > 0).map(flavors => flavors.name)).length : ''}</span>
                                                    <td>${item.price.toFixed(2)}</td>
                                                    <td className={`${item.subname ? `relative  max-h-[100px]  ${length == 4 ? "top-[50px]" : length == 3 ? "top-[40px]" : length == 2 ? "top-[30px]" : length == 1 ? "top-[20px]" : ""}` : "mt-3"} flex flex-col   my-auto`}>
                                                        <input
                                                            type="text"
                                                            className={`  w-[40px] border border-black rounded-sm py-1 text-center`}
                                                            value={item.count}
                                                            onChange={(e) => handleChange(index, e, item.names)}
                                                        />
                                                        <span onClick={() => deleteItem(item.names, item.price, item.diff)} className='text-[13px] cursor-pointer underline hover:no-underline'>Remove</span>
                                                    </td>
                                                    <td>${(item.price * item.count).toFixed(2)}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                    <div className="flex items-center px-[10px] justify-between font-sofia">
                                        <div className=" my-4 flex  gap-x-4 text-[20px] ">
                                            <input className='border border-black px-2' type="text" placeholder='Coupon code' />
                                            <button className='font-bold py-2 bg-[#fed455] px-5 rounded-full'>Apply Coupon</button>
                                        </div>
                                        <div className="">
                                            <button onClick={handleUpdateCart} className={`font-bold py-2 bg-[#e22733] text-[20px] text-white px-6 rounded-full ${control ? "pointer-events-auto" : 'pointer-events-none opacity-75'}`}>Update Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-md:flex-col">
                                <div className="w-[50%] max-md:w-full ">
                                    <h3 className='text-[38px] text-[#613223]'>You may be interested in...</h3>
                                    <div className="cards max-[600px]:hidden  w-full mt-[50px] text-[#613223]   grid grid-cols-2 max-md:grid-cols-3 ">

                                        <div className="card1  flex flex-col items-center pr-[20px]">
                                            <NavLink to={"/shop/product/caramel-corn-regular-cone"}>
                                                <div className=" bg-[#FDFAF7] max-h-[180px] max-lg:max-h-[150px]  border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                                    <img className='max-w-[190px] max-lg:max-w-[150px]  relative bottom-12 mx-3' src="/assets/img/data/caramelcorn_long.webp" alt="" />
                                                </div>
                                                <div className="px-[10px]">
                                                    <p className='my-4 text-[25px] max-[1200px]:text-[18px] hovers leading-[1]'><span>Caramel Corn Regular Cone</span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                                                    <p className='font-sofia'>Pack of 12</p>
                                                    <strong className='font-sofia text-[19px]'>$71.99</strong>
                                                </div>

                                            </NavLink>
                                        </div>
                                        <div className="card1  flex flex-col items-center pr-[20px]">
                                            <NavLink to={"/shop/product/cheddar-cheese-tall-cone"}>
                                                <div className="bg-[#FDFAF7] max-h-[180px] max-lg:max-h-[150px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                                    <img className='max-w-[190px] max-lg:max-w-[150px] mx-auto relative bottom-12' src="/assets/img/data/cheedarcheese_long.webp" alt="" />
                                                </div>
                                                <div className="px-[10px]">
                                                    <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Cheddar Cheese Tall Cone</span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                                                    <p className='font-sofia'>Pack of 12</p>
                                                    <strong className='font-sofia text-[19px]'>$59.99</strong>
                                                </div>
                                            </NavLink>

                                        </div>
                                        <div className="card1 flex flex-col items-center pr-[20px]">
                                            <NavLink to={"/shop/product/cinnamon-toast-mini-cone"}>
                                                <div className="bg-[#FDFAF7] max-h-[180px] max-lg:max-h-[150px] border-[12px] border-transparent hover:border-[#F1AB6E] hover:bg-[#E7730D] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                                    <img className='max-w-[190px] max-lg:max-w-[150px] mx-auto relative bottom-12' src="/assets/img/data/Cinnamon.webp" alt="" />
                                                </div>
                                                <div className="px-[10px]">
                                                    <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Cinnamon Toast Mini Cone </span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                                                    <p className='font-sofia'>Pack of 40</p>
                                                    <strong className='font-sofia text-[19px]'>$69.99</strong>
                                                </div>
                                            </NavLink>

                                        </div>
                                        <div className="card1 flex flex-col items-center pr-[20px]">
                                            <NavLink to={"/shop/product/pumpkin-spice-tall-cone"}>
                                                <div className="bg-[#FDFAF7] max-h-[180px] max-lg:max-h-[150px] border-[12px] border-transparent hover:border-[#F1AB6E] hover:bg-[#E7730D] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                                    <img className='max-w-[190px] max-lg:max-w-[150px] mx-auto relative bottom-12' src="/assets/img/data/pump.webp" alt="" />
                                                </div>
                                                <div className="px-[10px]">
                                                    <p className='my-4 text-2xl max-[1200px]:text-[18px] hovers leading-none'><span>Pumpkin Spice Tall Cone</span><span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p>
                                                    <p className='font-sofia'>Pack of 12</p>
                                                    <strong className='font-sofia text-[19px]'>$71.99</strong>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="max-[600px]:block hidden">
                                        <EditSlider />
                                    </div>
                                </div>
                                <div className="w-[50%] max-md:w-full bg-white border-[#F3DBCD] border  h-max p-5">
                                    <h3 className='text-[22px] max-[1200px]:text-[19px]'>Cart Totals</h3>
                                    <div className="font-sofia max-md:flex ">
                                        <p className='text-[18px] max-lg:text-[16px] max-md:text-[14.5px] my-5'>Enter your address to view shipping options.</p>
                                        <p onClick={() => setOpen(!open)} className='flex gap-x-2 cursor-pointer text-[#386CCE] underline items-center text-[18px] max-lg:text-[16px] max-md:text-[14.5px]'>Calculate shipping <span className='underline'><BsTruck /></span></p>
                                    </div>
                                    {open &&
                                        <div className="font-sofia">
                                            <select className='border w-full my-5 text-[19px] max-md:text-[14.5px] border-black ' name="country">
                                                <option>United States (US)</option>
                                            </select>
                                            <select className='border w-full text-[19px] max-md:text-[14.5px] border-black' name="" id="">

                                                <option value="">State/Country</option>
                                                {["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Georgia", "Hawaii", "Indiana", "Louisiana", "Mississippi", "South Carolina", "Tennessee", "Texas", "West Virginia", "Armed Forces (AA)", "Armed Forces (AE)", "Armed Forces (AP)"].map((item, i) => {
                                                    return (
                                                        <option className='text-[16px]'>{item}</option>
                                                    )
                                                })}
                                            </select>
                                            <input placeholder='City' type="text" className='block border my-2 border-black placeholder:text-[14px]' />
                                            <input placeholder='Postcode/ ZIP' className='border block border-black placeholder:text-[14px]' type="text" />
                                            <button className='text-[20px] max-md:text-[14.5px] text-white bg-[#e22733] font-bold p-2 px-5 mt-5 rounded-full'>Update</button>
                                        </div>
                                    }
                                    <div className="max-md:hidden block">
                                        <table className='w-full mt-10 '>
                                            <thead className='font-sofia text-[20px] '>
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td className='font-bold'>${total.toFixed(2)}</td>
                                                </tr>
                                            </thead>
                                            <tbody className='font-sofia text-[20px] border-b'>
                                                <tr>
                                                    <td className='relative bottom-3'>Tax</td>
                                                    <td className='font-bold w-[50%]'>Taxes will be calculated at checkout</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className='text-[20px] '>
                                                <tr>
                                                    <td className='py-5'>Total</td>
                                                    <td>${total.toFixed(2)}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <button className='w-full'><p className='flex justify-center py-2 items-center text-[20px] font-sofia rounded-full bg-[#e22733] text-[#fff] font-bold '><MdLock /><span><NavLink to={"/checkout"}>Proceed to checkout</NavLink></span></p></button>
                                    </div>
                                    <div className="max-md:block hidden">
                                        <table className='w-full font-bold p-5  mt-10 font-sofia'>
                                            <thead className=''>
                                                <tr className='border-b'>
                                                    <th className='py-2 text-right'>Subtotal:</th>
                                                    <td className=' text-right px-2'>${total}</td>
                                                </tr>
                                            </thead>
                                            <tbody className=''>
                                                <tr className='border-b '>
                                                    <th className='py-3 text-right'>Tax:</th>
                                                    <td className='text-right  px-2'>Taxes will be calculated at checkout</td>
                                                </tr>

                                                <tr className=''>
                                                    <th className='py-2  text-right text-[18px] font-faro'>Total:</th>
                                                    <td className='px-2 w-max text-right font-faro '>${total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className='w-full'><p className='flex justify-center py-2 items-center text-[17px] font-sofia rounded-full bg-[#e22733] text-[#fff] font-bold '><MdLock /><span><NavLink to={"/checkout/"}>Proceed to checkout</NavLink></span></p></button>

                                    </div>
                                </div>

                            </div>
                        </>
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Edit