import React, { useContext, useEffect, useState } from 'react';
import { IoMdClose, IoMdLock } from 'react-icons/io';
import { Context } from '../context/ContextProvider';
import { IoGitMerge } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const OffCanvasMenu = ({ open, setOpen }) => {
    const toggleMenu = () => {
        setOpen(open === "none" ? "block" : "none");
    };
    const [basket, setBasket] = useContext(Context);
    let [total, setTotal] = useState(0);
    let [combined, setCombined] = useState([]);
    let [key2, setKey2] = useState("")
    useEffect(() => {
        let itemSet = {}
        let key;
        basket.forEach(item => {
            let arr = []
            console.log(item.quantityss)
            if (item.quantityss) {
                item.quantityss.map(items => {
                    if (items.count > 0) {
                        arr.push(`${items.name}-${items.count}`)
                        key = item.names === "create-your-own" ? `${item.names}-${item.price}-${arr.join("")}` : item.names;
                        setKey2(key)
                    }
                })
            }else {
                key = item.names === "create-your-own" ? `${item.names}-${item.price}` : item.names;
            }

            if (itemSet[key]) {
                itemSet[key].count += item.count;
            } else {
                itemSet[key] = { ...item }
            }
        });

        let combined = Object.values(itemSet);
        setCombined(combined)

        let sum = 0
        combined.forEach(item => {
            sum += item.price * item.count
        })

        setTotal(sum.toFixed(2));
    }, [basket])

    const deleteItem = (names, price, key2) => {
        let newChecked = basket.filter(item => !(item.names === names && item.price === price && item.diff === key2));
        setBasket(newChecked);

        let newCombined = combined.filter(item => !(item.names === names && item.price === price && item.diff === key2));
        setCombined(newCombined);
    }


    return (
        <>
            <div style={{ display: open }} className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
            <div style={{ display: open }} className="fixed font-sofia right-0 z-[52] h-[100vh] top-0 bg-white w-[35%]  max-[1400px]:w-[40%] max-[1200px]:w-[50%] max-lg:w-[55%] max-md:w-[80%] max-[550px]:w-full transition-transform duration-300 px-[30px]">
                <div className="flex items-center border-b justify-between pt-10">
                    <p className='text-[21px] font-faro'>My Cart</p>
                    <IoMdClose size={32} onClick={toggleMenu} className='cursor-pointer' />
                </div>
                <div className={`h-[70vh] ${combined.length > 5 && "overflow-y-scroll"}  mt-4`}>
                    <table className=''>
                        {combined?.length > 0 ?
                            <thead>
                                <tr>
                                    <th></th>
                                    <td className='pl-2'>Product</td>
                                    <td className='px-5'>Quantity</td>
                                    <td className='text-right'>Price</td>
                                </tr>
                            </thead>
                            : "Your cart is empty. Start shopping!"
                        }
                        <tbody className=''>
                            {combined?.map((item, index) => (
                                <tr key={index} className='text-[#613223] '>

                                    <td className='mx-auto w-[37px] max-lg:w-[40px] float-left md:mt-4  pb-2.5'><NavLink to={`/shop/product/${item.names}`} ><img src={item?.cartImg} alt='' /></NavLink></td>
                                    <td className='text-[20px] font-bold max-md:text-[14px]  max-[550px]:text-[12.5px] capitalize pl-2  pb-2.5'>
                                        {item.names?.split('-').join(" ")}{`${item.subname ? `-${item.subname}` : ``}`}
                                        <span className='hidden'>{item.adds}</span>
                                        {item.pack &&
                                            <p className='text-[16px] max-md:text-[14px] font-normal max-[550px]:text-[12.5px] lowercase   pb-2.5'>({item.pack})</p>
                                        }
                                    </td>
                                    <td className='h-[20px] m-10  pb-2.5'>
                                        <div className="w-[30px] h-[30px] mx-auto text-[#613223] border border-black rounded-sm text-[18px] text-center">{item.count}</div>
                                    </td>
                                    <td className='text-[20px] text-right  max-md:text-[17px]  '>
                                        <p>${(item.count * item.price).toFixed(2)}</p>
                                        <button onClick={() => deleteItem(item.names, item.price, item.diff)} className='font-normal underline text-[12px] text-[#613223]'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="">
                    {combined.length > 0 ?
                        <div className='relative '>
                            <div className='flex border-y-2 '>
                                <p className='block w-full font-bold text-[18px]'>Subtotal</p>
                                <p className='font-bold text-[18px]'>${total}</p>
                            </div>
                            <div className="flex justify-between mt-4 max-lg:text-[13px]">
                                <NavLink to={"/cart/"} className='font-bold bg-[#EDF0F7] hover:bg-white border border-[#D8E0F0] duration-300 p-1 px-8 rounded-full'><button>Edit Cart</button></NavLink>
                                <NavLink className='flex w-[67%] text-white rounded-full justify-center py-[7px] bg-[#e22733] duration-300 hover:bg-[#a7002f] items-center' to={"/checkout/"}>
                                    <button className='flex'>
                                        <IoMdLock size={20} />
                                        Checkout
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;
