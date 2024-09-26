import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import Cart from '../Cart'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { FaListUl } from 'react-icons/fa'
import Footer from '../Footer/Footer'
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../../context/ContextProvider'

function Create3() {
    let bgcolor = '#e22733'
    let color = "white"
    let title = "#613223"

    const { pathName, quantity } = useParams()
    const [data, setData] = useState({ first: [], second: [], third: [], flavor: [] })
    const [info, setInfo] = useState([])
    const [cash, setCash] = useState(0);
    const [target, setTarget] = useState([]);
    let [total, setTotal] = useState(0)
    const [count, setCount] = useState({})

    useEffect(() => {
        fetch("/shop.json")
            .then(res => res.json())
            .then(res => {
                let itemData = res[pathName];
                setData(itemData);
                let items = itemData.flavor.map(item => item)
                setInfo(items);
                const flavor = itemData.flavor.map(item => ({ name: item.name, count: 0 }));
                setCount(flavor);
            });
    }, [pathName]);

    let cones;
    data[quantity].map(item => cones = item.cones);
    let [initialQuatity, setInitialQuantity] = useState("")
    let [conesQuantity, setConesQuantity] = useState("")
    useEffect(() => {
        data[quantity].map(item => {
            setConesQuantity(item.quantity)
            setInitialQuantity(item.quantity)
        });
        if (data[quantity]) {
            data[quantity].map(item => setCash(item.price));
        }
    }, [data]);
    let [open, setOpen] = useState(false)
    let arr = new Array(conesQuantity).fill("div")

    let sum = 0

    const additionCones = (e) => {
        // (count).forEach(item => sum += item)
        setOpen(!open)
        if (!open) {
            setConesQuantity(conesQuantity + +data[quantity].map(item => item.addition >= 10 ? item.addition / 10 : item.addition))
            data[quantity].map(item => setCash(cash + item.additionPrice))
        } else {
            setConesQuantity(conesQuantity - +data[quantity].map(item => item.addition >= 10 ? item.addition / 10 : item.addition))
            data[quantity].map(item => setCash(cash - item.additionPrice))
            setTarget(target.slice(0, initialQuatity))
        }

    }

    useEffect(() => {
        if (Array.isArray(count)) {
            const updatedCount = count.map(item => {
                const targetCount = target.filter(t => t.name == item.name).length;
                sum += targetCount
                return { ...item, count: targetCount };
            });
            setCount(updatedCount);
            setTotal(sum)
        }

    }, [target])



    const handleCount = (e, name) => {
        count.forEach(item => sum += item.count);
        if (sum < conesQuantity) {
            setCount(prevCount => prevCount.map(item => {
                if (item.name === name) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            }));
            setTotal(sum + 1);
        }
        data.flavor.map(item => {
            if (item.add && item.name == name) {
                return (
                    setCash(sum < conesQuantity ? cash + item.add : cash)
                )
            }
        })
        let image;
        info.filter(item => {
            if (item.name == name) {
                image = item.img
            }
        })

        setTarget(prevTarget => {
            if (target.length < conesQuantity) {
                return [...prevTarget, { name, image }]
            }
            return prevTarget;
        })

    };

    const handleDecrease = (e, name) => {

        if (total > 0) {
            count.forEach(item => sum += item.count);
            if (total > 0 && count[name] > 0) {
                setCount(prevCount => prevCount.map(item => {
                    if (item.name === name) {
                        return { ...item, count: item.count - 1 };
                    }
                    return item;
                }));
                setTotal(sum - 1);
            }
        }
        data.flavor.map(item => {

            if (item.add && item.name == name) {
                count?.map(items => {
                    if (items.name == name) {
                        return (
                            setCash(items.count > 0 ? cash - item.add : cash)
                        )
                    }
                })
            }
        })


        setTarget((prev) => {
            let newTarget = [...prev]
            let index = newTarget.findLastIndex(item => item.name == name)
            if (index > -1) {
                newTarget.splice(index, 1)
            }
            return newTarget;
        })
    }


    const [isScaled, setIsScaled] = useState(false);


    useEffect(() => {
        if (total === conesQuantity) {
            setIsScaled(true);
            setTimeout(() => {
                setIsScaled(false);
            }, 300);
        }

    }, [total, conesQuantity]);


    const [basket, setBasket] = useContext(Context)
    let [opens, setOpens] = useState("none")
    let [number, setNumber] = useState(1)
    let quantityss = count
    useEffect(() => {
        basket && localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    const openCart = () => {

        let names = "create-your-own"
        let diff;
        let arr = []
        let subname = data.name.split(" ")[0]
        quantityss.map(item => {
            if (item.count > 0) {
                arr.push(`${item.name}-${item.count}`)
            }
        })
        setOpens(!opens)

        let cartImg = "/assets/img/createcart.webp"
        let count = number
        let price = cash
        let adds;
        let adlar = []
        data.flavor.map(item => {
            if (item.add) {
                adds = item.add
                adlar.push(item.name)
            }
        })
        diff = `create-your-own-${cash}-${arr.join("")}`

        setBasket((prevBasket) => [
            ...prevBasket,
            { count, names, price, adds, quantityss, diff, cartImg, subname, adlar }
        ])
    }
    const handleDelete = (index) => {
        setTarget((prev) => {
            const newArr = [...prev];
            newArr.splice(index, 1);
            return newArr;
        });
    };

    return (
        <div>

            <div className='z-30' style={{ display: opens }} >
                <Cart open={opens} setOpen={setOpens} />
            </div>
            <div className='overflow-hidden'>
                <Header bgcolor={bgcolor} color={color} title={title} />
                <div className=" h-[90vh] max-md:h-[70vh] max-[350px]:h-[75vh]">
                    <div className="es after:h-[36.5rem] max-[450px]:after:h-[43.5rem] after:-z-10"></div>

                    <div className=" max-w-[1180px] mx-auto pt-[200px] max-md:pt-[120px] pb-[120px] max-md:pb-[220px] px-[30px] ">
                        <div className="flex justify-between max-[1200px]:flex-col max-[1200px]:px-0 text-[#613223]">
                            <div className="w-[43%] max-[1200px]:w-full z-20">
                                <p>3 simple steps</p>
                                <h4 className='text-[42px] max-md:text-[42px] leading-none mt-5 mb-10'><span className='text-[#C90910] lg:text-[63px] font-turbinado'>Create</span> your own assortment<span>.</span></h4>
                            </div>
                            <div className="w-[510px] max-[1200px]:w-full">

                                <div className='body '>
                                    <div className="container">
                                        <div className="progress-container-3">
                                            <div className="progress" id="progress"></div>
                                            <div className="circle-container mr-5">
                                                <NavLink to={`/create-your-own/`}>
                                                    <div className="circle active bg-[#E22733] text-white"><i className="fab fa-js"></i>1</div>
                                                    <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] absolute left-[-18px] max-md:left-[-30px] max-[550px]:left-[-25px] font-sofia">
                                                        <p>Size</p>
                                                        <strong>{data.name}</strong>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="circle-container translate-x-2 ">
                                                <NavLink to={`/create-your-own/build-quantity/${pathName}`}>
                                                    <div className="circle active bg-[#E22733]  text-white"><i className="fab fa-js"></i>2</div>
                                                    <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px] translate-x-[-10px] font-sofia max-md:translate-x-[-20px]">
                                                        <p>Quantity</p>
                                                        <strong>{cones} Cones</strong>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="circle-container">
                                                <a href="">
                                                    <div className="circle active bg-[#E22733] text-white"><i className="fab fa-js"></i>3</div>
                                                    <div className="text-[#613233] text-[20px] max-md:text-[16px] max-[550px]:text-[14px]  max-md:translate-x-[-10px] font-sofia">Flavors</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="hidden max-md:block  text-center ">
                                    Choose from 4 Flavors
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1180px] md:mx-auto">
                    <div className=' relative z-10 bottom-40 max-[1492px]:bottom-32 max-[1200px]:bottom-[-13px] max-md:top-0    md:px-[30px] gap-x-7  min-[1024px]:grid min-[1024px]:grid-cols-2'>
                        {/* thirdstage1 */}
                        <div className="max-md:hidden ">
                            <div className=' text-white'>
                                <div style={{ borderRadius: "0 4rem", background: data.bg }} className={`kornlar ${conesQuantity <= 6 && "max-h-[400px]"}   p-10 justify-between  flex`}>
                                    <div className='relative  bottom-32 text-center leading-none h-max'>
                                        <img className='w-[130px] max-lg:w-[116px]' src="/assets/img/third1.webp" alt="" />
                                        <div className=" relative right-2 ">
                                            <h3 className='text-[29px] max-lg:text-[27px] w-[90%] mx-auto'>{data.name}</h3>
                                            <p className='font-sofia '> {data[quantity] && data[quantity].some(item => item.subcones) ? `${conesQuantity} Packs of ${data[quantity].find(item => item.subcones).subcones}` : `${conesQuantity} Cones`}</p>
                                        </div>
                                    </div>
                                    <div className="w-[60%] ">
                                        <h5 className='font-sofia font-bold'>Your Selections</h5>
                                        {
                                            arr.map((item, i) => {
                                                return (
                                                    <div key={i} className="relative">
                                                        <div style={{
                                                            background: !target[i] ? data.inputbg : data.selectbg
                                                        }} className={`font-sofia flex  pl-2 py-[10px] rounded-md mb-1 mt-1`}>{i + 1}.<span>
                                                                {target[i] &&
                                                                    <span className='flex justify-between '>
                                                                        <div className="flex justify-between font-sofia ">
                                                                            <img src={`${target[i].image}`} className='max-w-[21.5px] mx-3' alt="" />
                                                                            <p >{target[i].name}</p>
                                                                            <button onClick={() => handleDelete(i)} className='absolute right-2 bottom-3 text-[12px]' style={{ marginLeft: '5px', cursor: 'pointer' }}>{data[quantity].some(item => item.subcones) && `x${data[quantity].map(item => item.subcones)}`} <span className='ml-1'>X</span></button>
                                                                        </div>
                                                                    </span>
                                                                }
                                                            </span></div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="max-lg:mt-10">
                            {/* thirdstage2 */}
                            <div className="bg-[#F8EBE2] md:rounded-tl-[4rem] md:rounded-br-[4rem] max-md:bg-[#FAF3ED]">
                                <p className='text-center font-sofia font-semibold max-md:hidden'>4 Flavors Available</p>
                                <div className="yazi grid grid-cols-3 max-md:grid-cols-2 gap-x-5 ">
                                    {
                                        info.map((flavor, index) => (
                                            <div key={index}>
                                                {

                                                }
                                                <div className={`card1 flex flex-col items-center my-7 md:relative circ ${!count.find(item => item.name === flavor.name)?.count ? "circ" : "circs"}`}>
                                                    <div style={{ borderRadius: "0 2rem" }} className="flex flex-col  items-center max-md:bg-[#FDF9F6] w-full py-4 mb-2">
                                                        <img src={`${flavor.img}`} className='md:scale-[0.67] max-w-[100px]' alt="" />
                                                        <p className="text-[14px] md:hidden">{flavor.name}</p>
                                                        {flavor.add &&
                                                            <p style={{ boxShadow: " 0 0 0 .4rem rgba(254, 212, 85, .22)" }} className='absolute bottom-36 max-md:bottom-40 max-md:right-0  right-2 bg-[#FED455] text-[#613223] text-[12px] rounded-full max-md:py-4 py-6 max-md:px-1 px-[13px] rotate-[15deg] top'>+${flavor.add}.00</p>}
                                                    </div>
                                                    <div className="z-10 font-sofia ">
                                                        <button onClick={(e) => handleDecrease(e, flavor.name)} className='px-[8px] inline-flex items-center justify-center mt-[2px] max-md:px-[12px]  text-white rounded-full bg-[#613223] max-md:text-[26px]'><span className=' relative bottom-[2px] max-md:bottom-1'>-</span></button>
                                                        <span className={`max-md:text-[23px] relative max-md:bottom-[2px] font-bold bottom-[2px] mx-4 md:mx-3 ${count.find(item => item.name === flavor.name)?.count ? "" : ""}`}>{count.find(item => item.name === flavor.name)?.count || 0}</span>
                                                        <button onClick={(e) => handleCount(e, flavor.name)} className={`px-[8px] max-md:px-[12px]  rounded-full ${total == conesQuantity ? "bg-[#E4E4EC] text-[#613223]" : "bg-[#613223] text-white"}  max-md:text-[26px]`}> <span className=' relative bottom-[2px]'>+</span> </button>
                                                    </div>
                                                    <p className="text-[20px] max-md:text-[17px] max-md:hidden mt-5 text-[#613223] px-2 text-center leading-none">{flavor.name}</p>
                                                </div>
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="boxes fixed w-full  bottom-0 bg-white z-10 shadow-inner">

                    <div className="flex py-8 max-w-[1180px] mx-auto px-[30px] justify-between bottom-0 text-[#613223] items-center ">
                        <div className="flex gap-x-10 max-md:hidden">
                            <div className="">
                                <h3 className='text-[19px] max-lg:text-[17px]'><b className='text-[30px] max-lg:text-[26px]'>{data.add ? (+total * data.add) : total} </b> of<b className='text-[30px] max-lg:text-[26px]'> {data.add ? conesQuantity * data.add : conesQuantity}</b> cones</h3>
                            </div>
                            <span className='border-r border-r-black'></span>
                            {data[quantity].map(item => {
                                return (
                                    item.addition &&
                                    <div className="flex items-center">
                                        <p onClick={additionCones} className='underline font-sofia font-bold cursor-pointer '>{!open ? `Add ${data[quantity].map(item => item.addition)} ${data.name} for ${data[quantity].map(item => item.additionPrice)}.00 ` : `Remove ${data[quantity].map(item => item.addition)} ${data.name}`}</p><span onClick={additionCones} className='w-[25px] h-[25px] ml-2 rounded-full bg-red-600 px-1 text-center text-white cursor-pointer' >{open ? '-' : '+'}</span>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className="flex max-md:flex-col items-center max-md:w-full">
                            <div className="md:hidden flex justify-between w-full items-center">
                                <div className="flex items-center text-[21px] text-[#e22733]">
                                    <FaListUl className='mr-2' />{data.add ? (+total * data.add) : total}/{data.add ? conesQuantity * data.add : conesQuantity}
                                </div>
                                <div className="text-[21px]">
                                    ${cash.toFixed(2)}
                                </div>
                            </div>
                            <span className='text-[30px] max-lg:text-[26px] mr-7 max-md:hidden'> ${cash.toFixed(2)}</span>
                            <button className={` bg-[#fed455] ${total == conesQuantity ? " opacity-100  pointer-events-auto  duration-300" : 'opacity-70 '} ${isScaled && "scale-110"} pointer-events-none py-3 px-14 flex rounded-full w-full justify-center font-sofia font-bold items-center duration-300`}><p onClick={openCart}>Add to Bag</p> <HiOutlineArrowLongRight size={30} className='pt-1' /></button>
                        </div>

                    </div>

                </div>
            </div >
            <Footer />
        </div >
    )
}

export default Create3