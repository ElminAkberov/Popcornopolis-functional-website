import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaRegStar, FaStar } from 'react-icons/fa6'
import { NavLink, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import Header from './Header/Header'
import SpicySlider from './ShopPopcorn/SpicySlider'
import Cart from './Cart'
import Footer from './Footer/Footer'
import { Context } from '../context/ContextProvider'
import { IoMdClose } from 'react-icons/io'

function Page2() {
    const [basket, setBasket] = useContext(Context)


    let [change, setChange] = useState("Premium Ingredients")
    const [data, setData] = useState({ info1: [], info2: [] });
    const [price, setPrice] = useState(0)
    let [count, setCount] = useState(1)
    let [open, setOpen] = useState("none")
    let bgcolor = data.bagbgcolor
    let color = data.bagcolor
    let title = data.color
    let [img, setImg] = useState(null)
    let [cartImg, setCartImg] = useState("")
    const { names } = useParams();

    useEffect(() => {
        fetch("/shop.json")
            .then(res => res.json())
            .then(res => {
                const itemData = res[names];
                setData(itemData);
                if (itemData) {
                    setPrice(+itemData.price);
                }
            });
    }, [names]);
    useEffect(() => {
        fetch("/data.json").then(res => res.json()).then(res => {
            const itemData = res
            if (itemData) {
                setImg(itemData);
            }
        });

    }, [])
    let image;
    useEffect(() => {
        if (img && names) {
            image = img?.shop?.find(item => item?.name === names);
            setCartImg(image.img);

        }
    }, [img, names]);
    useEffect(() => {
        basket && localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    
    const changePrice = (cash) => {
        cash === "One-time purchase" ? setPrice(+data.price) : setPrice(+data.save);
    };
    let images;
    const openCart = () => {
        let pack = data.pack

        images = image?.img


        setOpen(!open)
        setBasket((prevBasket) => [
            ...prevBasket,
            { count, names, price, pack, cartImg }
        ])
    }

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        setCount(value);
    };
    const changeImage = (text) => {
        setChange(text.currentTarget.getAttribute('data-type'))
    }
    let [review, setOpenReview] = useState(false)
    let [error, setError] = useState({})
    let [errorNote, setErrorNote] = useState({
        name: "",
        note: ""
    })
    const handleError = (e) => {
        const { name, value } = e.target
        setError(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const sendReview = (e) => {

        if (!(error["note"] && error['name'])) {
            e.preventDefault()
            setErrorNote({
                name: !error['name'] ? "This is a required field" : "",
                note: !error['note'] ? "This is a required field" : ""
            });
        }
    }
    let stars = [1, 2, 3, 4, 5]
    let [colors, setColors] = useState(stars.map(() => false))
    const rateStar = (name, index) => {
        const newColor = colors.map((item, i) => i <= index)
        setColors(newColor)


    }
    return (
        <div className='overflow-hidden'>
            <Header bgcolor={bgcolor} color={color} title={title} />


            <div style={{ display: open }} className="">
                <Cart open={open} setOpen={setOpen} />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ fill: data.fill }} className='max-lg:hidden  absolute max-[1300px]:left-[-120px] left-0' width="620" height="220" viewBox="0 0 620 220">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rect_1786" data-name="Rect 1786" width="620" height="220" ></rect>
                    </clipPath>
                    <clipPath id="clip-path-2">
                        <path id="Shape_2017" data-name="Shape 2017" d="M0,0H1440V420H0Z" ></path>
                    </clipPath>
                </defs>
                <g id="Group_mask_138" data-name="Group mask 138" clip-path="url(#clip-path)">
                    <g id="Group_830" data-name="Group 830" opacity="1" clip-path="url(#clip-path-2)">
                        <g id="Group_829" data-name="Group 829" transform="matrix(-0.788, -0.616, 0.616, -0.788, 485.405, 799.43)">
                            <path id="Shape_2005" data-name="Shape 2005" d="M810.184,192.146c-1.158-13.9,2.1-49.953-7.067-61.724-7.858-10.1-30-11.181-40.443-13.956-42.476-11.3-83-14.16-124.715-13.215-54.62,1.236-102.365,17.826-152.85,31.25-99.542,26.465-199.094,56.046-310.166,31.384-36.2-8.037-80.365-37.424-85.2-79.354-2.669-23.185,6.067-42.161,7.311-63.85C97.847,8.928,87.552-7.353,72.817-3.45,58.181.427,53.35,26.524,44.07,37.615,27.928,56.908,6.872,77.055-2.036,102c-16.243,45.489,9.179,102.534,56.6,125.169,32.937,15.721,73.315,12.714,105.77,10.63,76.26-4.9,149.284-19.537,221.61-37.716,93.232-23.435,192.64-76.778,296.523-60.25C725.816,147.367,765.685,171.8,810.184,192.146Z" transform="translate(56.69 -2.982)" fill-rule="evenodd"></path>
                            <path id="Shape_2006" data-name="Shape 2006" d="M880.779,282.054c-1.4-16.82,2.223-52.983-7.594-68.048-10.608-16.277-37.489-29.752-53.66-37.711-52.676-25.93-106.406-35.046-160.2-34.5-51.282.52-97.49,14.968-145.844,25.423-92.282,19.954-187.495,44.963-284.373,48.721C170.13,218.228,97.7,227.072,49.669,166.818c-26.7-33.494-32.755-71.7-23.344-107.552C29.848,45.84,52.285,19.255,42.616,4.783,36.995-3.63,26.476-3.149,21.5,2.722,10.968,15.138,5.549,36.959.756,53.135-20.639,125.342,21.485,218.348,103.511,237.1c39.148,8.95,81.766,3.27,120.018,1.8C324.385,235.032,420.85,216.59,518,198.981c84.246-15.271,171.531-26.722,261.155,9.809C819.21,225.118,846.528,255.527,880.779,282.054Z" transform="translate(-2.425 44.896)" fill-rule="evenodd"></path>
                            <path id="Shape_2007" data-name="Shape 2007" d="M807.3,583.094l-1.968-23.62C746.936,554.4,642.817,542.709,632.167,458.44c-6.458-51.129,21.236-90.667,45.49-126.972,17.785-26.62,34.962-53.455,53.591-79.369,25.623-35.646,48.365-85.238,32.154-135.948C739.634,41.8,666.711,7.74,602.421-10.125,515.158-34.375,432.06-23,349.212-14.478c-56.839,5.846-114.5,8.5-171.078,14.79A802.4,802.4,0,0,1,60.46,4.165c-15.231-.606-46-5.293-57.149,4.681C-13.487,23.881,25.677,27.314,32.4,27.108c40.945-1.265,82.626-2.373,123.14-5.686,109.9-8.992,224.52-21.564,338.269-8.794,23.581,2.646,47.024,9.747,70.442,13.73,59.518,10.118,141.088,39.05,157.022,113.49,9.405,43.93-18.285,89.8-38.584,120.085l-62.005,93.384c-31.128,47.608-69.67,106.008-41.96,174.734,10.4,25.79,39.774,39.538,63,46C696.865,589.406,753.265,582.845,807.3,583.094Z" transform="translate(116.81 293.033)" fill-rule="evenodd"></path>
                            <path id="Shape_2008" data-name="Shape 2008" d="M804.9,557.257c-44.591-3.749-87.949,7.836-132.479,6-18.294-.757-38.451-1.513-56.8-7.4-65.247-20.941-81.66-80.51-68.76-136.288C568.617,325.443,643.5,267.93,678.632,182.814c13.383-32.423,18.54-74.6-6.283-109.977-36.032-51.355-94.835-58.318-145.7-67.713C403.873-17.551,287.11-11.587,168.048-5.346,124.685-3.072,81.112-.536,37.38-.092,29.5-.01-6-5.245.41,10.241c5.393,13.029,24.5,3.962,32.5,3.436,32.409-2.139,67.83-7.538,100.7-5.262,92.127,6.372,180.088-12.241,273.47.251,43.236,5.783,93.374,18.141,131.369,48.128,48.543,38.312,58.265,96.813,45.85,147.132-7.08,28.692-25.08,54.047-39.972,77.77-27.037,43.069-57.005,84.553-76.8,132.719-14.813,36.048-30.659,87.97.773,128.964,22.226,28.989,50.2,26.11,79.362,28.646,62.286,5.414,122.947,13.409,182.121,5.357C747.64,574.952,806.1,580.581,804.9,557.257Z" transform="translate(120.032 328.713)" fill-rule="evenodd"></path>
                            <path id="Shape_2009" data-name="Shape 2009" d="M-.5,14.065c129.715,11.188,252.459-2.794,382.783,53.411,53.785,23.2,119.278,56.593,118.853,125.029-.236,37.718-26.331,69.689-43.512,98.164-41.574,68.908-95.825,154.26-64.167,248.126l37.732,3.28c-10-22.828-25.326-41.492-27.41-66.869-1.8-21.9,6.054-44.294,12.388-63.409,18.481-55.759,53.689-99.295,80.595-149.353,23.943-44.544,65.143-94.725,29.443-155.7C500.174,62.284,443.455,37.27,399.5,26.807,307.956,5.024,221.526,1.81,131.15-1.925c-33.914-1.4-67,3.382-100.9,2.854C15.139.695-2-6.789-.5,14.065Z" transform="translate(132.738 349.643)" fill-rule="evenodd"></path>
                            <path id="Shape_2010" data-name="Shape 2010" d="M0,0,.656,7.873c105.671,4.469,216.877,7.137,322.69,51.5C373.373,80.349,427.594,119.433,428.74,179.92c.851,44.8-21.493,81.9-39.747,117.7-31.455,61.7-68.512,132.02-62.051,209.559l41.505,3.608c-12.155-76.959,15.089-148.672,51.923-206.532,24.2-38.017,66.055-85.435,65.379-136.968-.78-59.356-67.239-96.533-114.39-116.111C252.279,1.731,117.71-5.691,0,0Z" transform="translate(125.679 374.862)" fill-rule="evenodd"></path>
                            <path id="Shape_2011" data-name="Shape 2011" d="M329.642,475.532c7.759.674,22.658,4.893,28.786.494,7.4-5.314,7.8-26.992,9.755-36.2,5.348-25.2,15.215-50.637,24.153-74.14,28.676-75.428,75.412-164.435,11.025-251.123-11.6-15.62-25.12-27.809-40-39.743-16.837-13.508-39.248-24.282-58.5-31.527C243.644,20.252,116.523,7.719,54.754,2.35,41.022,1.156-1.345-8.362-.548,11.231.565,38.6,62.55,33.932,80.29,39.089c142.591,12.042,233.943,38.665,286.992,115.33,55.115,79.651,12.687,186.866-13.25,256.792C346.554,431.378,330.657,452.82,329.642,475.532Z" transform="translate(55.062 400.606)" fill-rule="evenodd"></path>
                            <path id="Shape_2012" data-name="Shape 2012" d="M95.032-5,65.5,45.2,42.644,80.337C7.39,132.1-52.178,233.5,30,293.491a132.764,132.764,0,0,0,35.226,18.165c19.141,6.627,39.769,10.138,59.08,12.229l-2.3-27.557c-12.885-1.7-26.219-6.722-38.523-12.772a100.6,100.6,0,0,1-25.88-18.41c-66.39-64.59-7.954-147.988,21.5-199.225C90.871,45.462,108.569,23.856,95.032-5Z" transform="translate(796.687 514.844)" fill-rule="evenodd"></path>
                            <path id="Shape_2014" data-name="Shape 2014" d="M29.427-1.548,14.814,26.494c-21,40.6-43.489,131.569,31.424,151.245L35.906,53.731C34.549,37.45,36.729,14.014,29.427-1.548Z" transform="translate(869.671 599.97)" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </g>
            </svg>


            <div style={{ borderRadius: "0 0 0 100px ", background: data.bg }} className="max-lg:relative max-lg:overflow-hidden lg:flex pt-32 mx-auto   max-lg:h-auto h-[80vh]">
                <p className='flex relative z-10 lg:hidden font-sofia font-bold items-center gap-x-2 text-white text-[15px]  px-[30px]'><FaArrowLeftLong /><NavLink to={"/shop/"}> Back to the products</NavLink></p>

                <div className='lg:block hidden'>
                    <p className='flex items-center font-sofia font-bold gap-x-2 text-white relative text-[15px] px-[30px]'><FaArrowLeftLong /><NavLink to={"/shop/"}> Back to the products</NavLink></p>
                    <div className="w-[50%] rounded-tr-[200px] h-[700px] mt-10 px-[30px] bg-white absolute">
                        <div className="w-[74%] ">
                            <p className='mt-5 '><NavLink to="#write" className="underline text-[17px] font-sofia font-bold">No Reviews Yet</NavLink></p>
                            <h1 className='text-[#E22733] mb-0 text-[44px] max-[1200px]:text-[32px] leading-[1.2]'>{data.title}<span className='text-[#613223]'>.</span></h1>
                            <div className='mt-2 w-7 h-1 my-5 bg-[#E22733]'></div>
                            <p className="text-[19px] text-[#E22733] font-sofia font-bold">{data.pack}</p>
                            <div className="text-[#613223]">
                                <p className='text-[18px] pt-1 max-[1200px]:text-[17px] font-sofia'>{data.description}</p>
                                {data.flavor &&
                                    <p className='my-7 font-sofia'><strong>Flavors: </strong>{data.flavor}</p>
                                }
                                {data.nutritions && <strong className='mt-5 '><NavLink to={data.nutritions && `${data.nutritions}`} className="underline text-[17px] font-sofia">Nutrition Facts & Ingredients</NavLink></strong>}
                                {data.create == "no" ? "" :
                                    <div className="">
                                        <strong className='mt-5 '><NavLink to={data.nutrition && `${data.nutrition}`} className="underline text-[17px] font-sofia">Nutrition Facts & Ingredients</NavLink></strong>
                                        <hr className='border-[#f3d3c9] my-5' />
                                        <p className='text-[25px] max-[1200px]:text-[20px]'>Want to mix & match flavors?</p>
                                        <p className='text-[22px] max-[1200px]:text-[20px]'><NavLink to={"/create-your-own"} className="flex items-center gap-x-3 underline font-sofia font-bold hover:no-underline " ><span className='hover:mr-3 duration-300'>Create Your Own</span> <span className='inline-flex items-center '><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></NavLink></p>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>

                    <div style={{ background: data.bg, height: `${data.create == "no" ? "85vh" : "115vh"}` }} className='  overflow-hidden mb-[200px] rounded-bl-[200px] absolute right-0 w-[50%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ fill: data.fill }} className={`absolute ${data.create ? "bottom-[-350px]" : "bottom-[-100px]"} `} width="1178.155" height="1024" viewBox="0 0 1178.155 1024">
                            <defs>
                                <clipPath id="lclip-path">
                                    <path id="Rect_553" data-name="Rect 553" d="M0,0H1178.155a0,0,0,0,1,0,0V1024a0,0,0,0,1,0,0H221A221,221,0,0,1,0,803V0A0,0,0,0,1,0,0Z" className='absolute' transform="translate(0)" ></path>
                                </clipPath>
                            </defs>
                            <g id="Group_masks_68" data-name="Group masks 68" opacity="1" clip-path="url(#lclip-path)">
                                <g id="Group_828" data-name="Group 828" transform="translate(-304.259 435.452) rotate(-24)">
                                    <path id="Line_212" data-name="Line 212" d="M1411.984,224.376c-.073-19.761,10.84-62.889-3.506-79.76-15.5-18.228-58.524-31.567-84.425-39.418-84.37-25.578-172.763-31.164-262.563-25.315-85.606,5.576-164.622,27.136-246.682,44.18C658.2,156.593,496.023,195.387,333.93,209.2c-98.68,8.413-220.678,25.88-292.683-40.749C1.22,131.416-12.7,232.136,121.592,246.384c64.093,6.8,135.942-4.041,199.941-9.477C490.277,222.573,653.658,191.426,818.07,161.2c142.573-26.214,289.7-48.2,434.273-13.658C1316.955,162.982,1358.426,196.31,1411.984,224.376Z" transform="translate(136.529 9.21)" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Line_806" data-name="Line 806" d="M1475.632,878.717l-.12-32.431c-111.145-.409-308.908-4.786-316.293-120.075-4.474-69.951,54.721-127.743,106.824-180.675,38.206-38.813,75.279-77.853,114.992-115.785,54.624-52.177,105.883-123.308,82.65-191.575-34.061-100.095-168.572-138.929-289.039-156.351-163.512-23.648-324.55,1.477-484.67,22.636-109.851,14.513-220.781,24.706-330.2,39.805a2180.939,2180.939,0,0,1-226.149,18.642c-29.1.886-87.357-2.112-110.264,12.938-34.524,22.686,40.015,23,52.941,21.954,78.677-6.382,158.741-12.631,236.91-21.8C525.252,151.139,746.9,120.788,962.952,125.57c44.79.989,88.628,8.153,132.9,11.009,112.517,7.252,264.394,38.018,283.427,139.122,11.236,59.666-48.932,126.206-92.522,170.374L1153.47,582.186c-67.025,69.336-149.93,154.431-107.443,246.3,15.941,34.475,70.125,50.157,113.642,56.465C1262.98,899.94,1372.1,884.487,1475.632,878.717Z" transform="translate(75.187 141.77)" fill-rule="evenodd"></path>
                                    <path id="Line_1004" data-name="Line 1004" d="M1531.076,776.223c-88.541-.157-177.095,19.954-265.822,22.329-36.45.974-76.627,2.153-112.368-3.694-127.056-20.791-150.24-98.265-115.433-173.871,58.728-127.576,217.724-212.2,301.728-329.251,32-44.586,49.126-101.26,5.218-145.635-63.733-64.42-180.165-67.313-280.332-74.3C822.275,54.933,587.878,75.518,348.838,96.72c-87.06,7.723-174.582,15.818-262.082,21.147-15.773.963-85.9-2.157-75.582,17.753,8.676,16.75,48.348,2.616,64.417,1.05,65.137-6.357,136.825-17.378,202.171-17.911,183.151-1.5,362.013-35.8,546.682-29.293,85.5,3.01,183.741,14.019,254.854,49.8,90.854,45.712,100.833,122.49,67.877,190.781-18.792,38.939-58.878,74.623-92.485,107.8C993.675,498.07,927.055,556.509,879.7,622.734c-35.442,49.564-75.515,120.358-19.3,171.492,39.748,36.16,96.134,29.3,154.03,29.513,123.648.455,243.629,4.519,363.232-12.6C1413.748,805.969,1529.711,807.124,1531.076,776.223Z" transform="translate(19.793 257.773)" fill-rule="evenodd"></path>
                                    <path id="Line_1056" data-name="Line 1056" d="M6.17,80.357c246.9.792,484.341-31.145,725.444,29.474,99.5,25.017,219.869,62.335,208.461,153.432-6.291,50.208-61.259,95.578-98.6,135.329-90.355,96.2-207.555,215.646-161.4,337.089l71.816.264c-15.629-29.286-42.121-52.451-42.187-85.987-.063-28.942,18.46-59.589,33.561-85.708,44.055-76.192,118.28-137.939,177.6-207.463,52.789-61.865,139.529-133.1,80.538-210.343C958.383,90.115,853.536,63,770.905,53.853c-172.1-19.035-337.27-13.921-509.923-9.072C196.194,46.6,132.033,56.56,67.136,59.54,38.21,60.87,6.521,52.775,6.17,80.357Z" transform="translate(106.137 344.917)" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Line_1160" data-name="Line 1160" d="M3.812,39.737l.039,10.4C204.99,44.6,416.978,36.069,612.236,83.6c92.315,22.468,189.848,68.575,182.708,148.925-5.285,59.513-53.682,111.3-94.069,160.913-69.593,85.5-151.217,183.091-150.837,285.551l78.717.29c-11.346-101.07,51.75-199.44,131.025-280.422,52.087-53.209,139.341-120.845,146-189.333C913.442,130.634,792.241,88.394,705.2,67.47,485.39,14.626,229.513,19.373,3.812,39.737Z" transform="translate(97.405 401.103)" fill-rule="evenodd" opacity="0.95"></path>
                                    <path id="Line_1294" data-name="Line 1294" d="M435.305,615.241c14.767.054,42.673,4.049,55.1-2.47,15.007-7.874,19.128-36.759,24.3-49.218,14.151-34.105,37-69.024,57.773-101.264,66.643-103.468,170-226.965,60.007-335.3-19.821-19.522-43.845-34.27-70.514-48.53C531.791,62.312,490.5,50.413,454.729,42.865,340.942,18.859,227.473,13.652,109.905,13.219,83.769,13.123,4.033,5.062,2.528,31.044c-2.1,36.3,117.431,23.347,150.637,28.281,141.689,21.053,314.18,28.369,404,124.6,93.313,99.983-4.609,247.238-65.149,343.088C474.557,554.659,440.768,584.914,435.305,615.241Z" transform="translate(81.593 464.366)" fill-rule="evenodd"></path>
                                    <path id="Line_1392" data-name="Line 1392" d="M264.539,17.845,200.164,87.834l-49.253,49.237C75.325,209.763-54.549,351.142,93.68,422.034c19.924,9.531,41.712,16,64.709,20.341,35.663,6.738,74.659,9.167,111.35,9.851l-.135-36.414c-24.434-.864-49.216-6.1-71.863-12.808a169.535,169.535,0,0,1-46.756-21.682C33.729,302.6,158.648,185.3,223.04,113.928,248.752,85.432,286.018,54.764,264.539,17.845Z" transform="translate(1280.899 519.345)" fill-rule="evenodd"></path>
                                    <path id="Line_1531" data-name="Line 1531" d="M97.242,6.56l-32.352,38.9c-46.53,56.3-103.726,179.771,36.82,197.809L101.1,79.4C101.022,57.888,108.828,26.471,97.242,6.56Z" transform="translate(1448.6 639.511)" fill-rule="evenodd"></path>
                                </g>
                            </g>
                        </svg>

                        <div className="w-[60%] px-[30px] flex flex-col float-right text-white relative top-[10rem]">
                            <p className='text-[35px]'>${price} {data.lastprice && <span className='text-[#613223] text-[25px]  line-through'>${data.lastprice}</span>}</p>
                            <p className='py-2 font-sofia font-bold text-[18px]'>{data.pack}</p>
                            {data.save &&
                                <div className="font-sofia font-bold">
                                    <label className="container2 text-[19px]">One-time purchase
                                        <input onChange={(item) => { changePrice(item.target.parentNode.innerText) }} type="radio" name='check' checked={price == data?.price ? true : ""} />
                                        <span className="checkmark"></span>
                                    </label>

                                    <label className="container2 text-[19px]">Subscribe & Save 10%
                                        <input onChange={(item) => { changePrice(item.target.parentNode.innerText) }} type="radio" name='check' checked={price == data?.save ? true : ""} />
                                        <span className="checkmark "></span>
                                    </label>
                                </div>
                            }
                            <div className='flex font-sofia'>
                                <div className="min-[1200px]:py-4 py-2   my-5 relative px-2 bg-white w-[100%] max-[1200px]:w-[40%] max-[1200px]:px-5 rounded-full flex justify-between">
                                    <div className="w-max">
                                        <button onClick={() => setCount(count > 1 ? count - 1 : 1)} className='bg-[#613223] inline-flex items-center justify-center w-[20px] h-[20px] rounded-full'><span className='relative bottom-[2px]'>-</span></button>
                                        <input className='placeholder-[#613223] text-[#613223] text-center placeholder-shown:text-center w-[30%] relative bottom-[1px]' placeholder='1' value={count} onChange={handleInputChange} type="text" />
                                        <button onClick={() => setCount(count + 1)} className='bg-[#613223] inline-flex items-center justify-center w-[20px] h-[20px]   rounded-full'><span className='relative bottom-[2px]'>+</span></button>
                                    </div>
                                    {(data.savestock == "out" && price == data.save) &&
                                        <div className="absolute bottom-0 right-0 block max-[1200px]:hidden">
                                            <button className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#F2F4F9] py-[13px] px-12 max-[1400px]:px-5 duration-300 font-sofia font-bold'>Out of Stock <FaArrowRightLong /></button>
                                        </div>
                                    }
                                    {(
                                        data.stock == "out" &&
                                        <div className="absolute bottom-0 right-0 block max-[1200px]:hidden">
                                            <button className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#F2F4F9] py-[13px] px-12 max-[1400px]:px-5 duration-300 font-sofia font-bold'>Out of Stock <FaArrowRightLong /></button>
                                        </div>
                                    )}
                                    {(data.stock == "have" && price == data.price) &&
                                        <div className="absolute bottom-0 right-0 block max-[1200px]:hidden">
                                            <button onClick={openCart} className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#FED455] py-[13px] px-12 max-[1400px]:px-5 duration-300 font-sofia font-bold'>Add to Bag <FaArrowRightLong /></button>
                                        </div>
                                    }
                                    {data.cash == "have" &&
                                        <div className="absolute bottom-0 right-0 block max-[1200px]:hidden">
                                            <button onClick={openCart} className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#FED455] py-[13px] px-12 max-[1400px]:px-5 duration-300 font-sofia font-bold'>Add to Bag <FaArrowRightLong /></button>
                                        </div>
                                    }

                                </div>
                            </div>

                            {data.cash == "have" &&
                                <div className="relative bottom-0 right-0 hidden max-[1200px]:block">
                                    <button onClick={openCart} className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#FED455] py-[13px] px-12 max-[1400px]:px-5 duration-300'>Add to Bag <FaArrowRightLong /></button>
                                </div>
                            }
                            {(data.savestock == "out" && price == data.save) &&
                                <div className="relative bottom-0 right-0 hidden max-[1200px]:block">
                                    <button className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#F2F4F9] py-[13px] px-12 max-[1400px]:px-5 duration-300'>Out of Stock <FaArrowRightLong /></button>
                                </div>
                            }
                            {(
                                data.stock == "out" &&
                                <div className="relative bottom-0 right-0 hidden max-[1200px]:block">
                                    <button className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#F2F4F9] py-[13px] px-12 max-[1400px]:px-5 duration-300'>Out of Stock <FaArrowRightLong /></button>
                                </div>
                            )}
                            {(data.stock == "have" && price == data.price) &&
                                <div className="relative bottom-0 right-0 hidden max-[1200px]:block">
                                    <button onClick={openCart} className='flex items-center gap-4 rounded-full text-[20px] text-[#613223] bg-[#FED455] py-[13px] px-12 max-[1400px]:px-5 duration-300'>Add to Bag <FaArrowRightLong /></button>
                                </div>
                            }

                            <p className='text-[14px] max-[1200px]:text-[12px] min-[1200px]:text-center font-sofia font-bold'>Try risk-free, 100% happiness guaranteed.</p>
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='lg:hidden  top-[-500px] absolute  max-w-[full]' style={{ fill: data.fill }} width="1178.155" height="1024" viewBox="0 0 1178.155 1024">
                    <defs>
                        <clipPath id="lclip-path">
                            <path id="Rect_553" data-name="Rect 553" d="M0,0H1178.155a0,0,0,0,1,0,0V1024a0,0,0,0,1,0,0H221A221,221,0,0,1,0,803V0A0,0,0,0,1,0,0Z" transform="translate(0)" ></path>
                        </clipPath>
                    </defs>
                    <g id="Group_masks_68" data-name="Group masks 68" opacity="1" clip-path="url(#lclip-path)">
                        <g id="Group_828" data-name="Group 828" transform="translate(-304.259 435.452) rotate(-24)">
                            <path id="Line_212" data-name="Line 212" d="M1411.984,224.376c-.073-19.761,10.84-62.889-3.506-79.76-15.5-18.228-58.524-31.567-84.425-39.418-84.37-25.578-172.763-31.164-262.563-25.315-85.606,5.576-164.622,27.136-246.682,44.18C658.2,156.593,496.023,195.387,333.93,209.2c-98.68,8.413-220.678,25.88-292.683-40.749C1.22,131.416-12.7,232.136,121.592,246.384c64.093,6.8,135.942-4.041,199.941-9.477C490.277,222.573,653.658,191.426,818.07,161.2c142.573-26.214,289.7-48.2,434.273-13.658C1316.955,162.982,1358.426,196.31,1411.984,224.376Z" transform="translate(136.529 9.21)" fill-rule="evenodd" opacity="0.95"></path>
                            <path id="Line_806" data-name="Line 806" d="M1475.632,878.717l-.12-32.431c-111.145-.409-308.908-4.786-316.293-120.075-4.474-69.951,54.721-127.743,106.824-180.675,38.206-38.813,75.279-77.853,114.992-115.785,54.624-52.177,105.883-123.308,82.65-191.575-34.061-100.095-168.572-138.929-289.039-156.351-163.512-23.648-324.55,1.477-484.67,22.636-109.851,14.513-220.781,24.706-330.2,39.805a2180.939,2180.939,0,0,1-226.149,18.642c-29.1.886-87.357-2.112-110.264,12.938-34.524,22.686,40.015,23,52.941,21.954,78.677-6.382,158.741-12.631,236.91-21.8C525.252,151.139,746.9,120.788,962.952,125.57c44.79.989,88.628,8.153,132.9,11.009,112.517,7.252,264.394,38.018,283.427,139.122,11.236,59.666-48.932,126.206-92.522,170.374L1153.47,582.186c-67.025,69.336-149.93,154.431-107.443,246.3,15.941,34.475,70.125,50.157,113.642,56.465C1262.98,899.94,1372.1,884.487,1475.632,878.717Z" transform="translate(75.187 141.77)" fill-rule="evenodd"></path>
                            <path id="Line_1004" data-name="Line 1004" d="M1531.076,776.223c-88.541-.157-177.095,19.954-265.822,22.329-36.45.974-76.627,2.153-112.368-3.694-127.056-20.791-150.24-98.265-115.433-173.871,58.728-127.576,217.724-212.2,301.728-329.251,32-44.586,49.126-101.26,5.218-145.635-63.733-64.42-180.165-67.313-280.332-74.3C822.275,54.933,587.878,75.518,348.838,96.72c-87.06,7.723-174.582,15.818-262.082,21.147-15.773.963-85.9-2.157-75.582,17.753,8.676,16.75,48.348,2.616,64.417,1.05,65.137-6.357,136.825-17.378,202.171-17.911,183.151-1.5,362.013-35.8,546.682-29.293,85.5,3.01,183.741,14.019,254.854,49.8,90.854,45.712,100.833,122.49,67.877,190.781-18.792,38.939-58.878,74.623-92.485,107.8C993.675,498.07,927.055,556.509,879.7,622.734c-35.442,49.564-75.515,120.358-19.3,171.492,39.748,36.16,96.134,29.3,154.03,29.513,123.648.455,243.629,4.519,363.232-12.6C1413.748,805.969,1529.711,807.124,1531.076,776.223Z" transform="translate(19.793 257.773)" fill-rule="evenodd"></path>
                            <path id="Line_1056" data-name="Line 1056" d="M6.17,80.357c246.9.792,484.341-31.145,725.444,29.474,99.5,25.017,219.869,62.335,208.461,153.432-6.291,50.208-61.259,95.578-98.6,135.329-90.355,96.2-207.555,215.646-161.4,337.089l71.816.264c-15.629-29.286-42.121-52.451-42.187-85.987-.063-28.942,18.46-59.589,33.561-85.708,44.055-76.192,118.28-137.939,177.6-207.463,52.789-61.865,139.529-133.1,80.538-210.343C958.383,90.115,853.536,63,770.905,53.853c-172.1-19.035-337.27-13.921-509.923-9.072C196.194,46.6,132.033,56.56,67.136,59.54,38.21,60.87,6.521,52.775,6.17,80.357Z" transform="translate(106.137 344.917)" fill-rule="evenodd" opacity="0.95"></path>
                            <path id="Line_1160" data-name="Line 1160" d="M3.812,39.737l.039,10.4C204.99,44.6,416.978,36.069,612.236,83.6c92.315,22.468,189.848,68.575,182.708,148.925-5.285,59.513-53.682,111.3-94.069,160.913-69.593,85.5-151.217,183.091-150.837,285.551l78.717.29c-11.346-101.07,51.75-199.44,131.025-280.422,52.087-53.209,139.341-120.845,146-189.333C913.442,130.634,792.241,88.394,705.2,67.47,485.39,14.626,229.513,19.373,3.812,39.737Z" transform="translate(97.405 401.103)" fill-rule="evenodd" opacity="0.95"></path>
                            <path id="Line_1294" data-name="Line 1294" d="M435.305,615.241c14.767.054,42.673,4.049,55.1-2.47,15.007-7.874,19.128-36.759,24.3-49.218,14.151-34.105,37-69.024,57.773-101.264,66.643-103.468,170-226.965,60.007-335.3-19.821-19.522-43.845-34.27-70.514-48.53C531.791,62.312,490.5,50.413,454.729,42.865,340.942,18.859,227.473,13.652,109.905,13.219,83.769,13.123,4.033,5.062,2.528,31.044c-2.1,36.3,117.431,23.347,150.637,28.281,141.689,21.053,314.18,28.369,404,124.6,93.313,99.983-4.609,247.238-65.149,343.088C474.557,554.659,440.768,584.914,435.305,615.241Z" transform="translate(81.593 464.366)" fill-rule="evenodd"></path>
                            <path id="Line_1392" data-name="Line 1392" d="M264.539,17.845,200.164,87.834l-49.253,49.237C75.325,209.763-54.549,351.142,93.68,422.034c19.924,9.531,41.712,16,64.709,20.341,35.663,6.738,74.659,9.167,111.35,9.851l-.135-36.414c-24.434-.864-49.216-6.1-71.863-12.808a169.535,169.535,0,0,1-46.756-21.682C33.729,302.6,158.648,185.3,223.04,113.928,248.752,85.432,286.018,54.764,264.539,17.845Z" transform="translate(1280.899 519.345)" fill-rule="evenodd"></path>
                            <path id="Line_1531" data-name="Line 1531" d="M97.242,6.56l-32.352,38.9c-46.53,56.3-103.726,179.771,36.82,197.809L101.1,79.4C101.022,57.888,108.828,26.471,97.242,6.56Z" transform="translate(1448.6 639.511)" fill-rule="evenodd"></path>
                        </g>
                    </g>
                </svg>
                <img className='relative lg:w-[28%] max-lg:max-h-[322px] lg:right-24 lg:top-20  flex m-auto' src={`${data.img}`} alt="" />


            </div>

            <div className='relative lg:hidden'>
                <img src={`${data.subimg}`} className='absolute top-[-100px] left-1/2 transform duration-300 -translate-x-1/4 max-[350px]:-translate-x-1/2  max-lg:scale-75' alt="" />
            </div>
            <img src={`${data.subimg}`} className='absolute mx-auto max-lg:hidden  bottom-[-50px] max-[1492px]:bottom-[-80px] max-lg:bottom-[50px] max-lg:scale-75  lg:right-[30%] ' alt="" />
            <div className=''>

                <div className="px-[30px] hidden max-lg:block mt-20">
                    <p className='mt-5 '><NavLink to="#write" className="underline text-[17px] font-sofia ">No Reviews Yet</NavLink></p>
                    <h1 className='text-[#E22733] mb-0 text-[30px] max-[450px]:text-[25px] leading-[1.2]'>{data.title}<span className='text-[#613223]'>.</span></h1>
                    <p className="text-[17px] text-[#613223] font-sofia font-bold">{data.pack}</p>
                    <div className='mt-2 w-7 h-1 my-5 bg-[#E22733]'></div>
                    <div className="text-[#613223]">
                        <div className="">

                            <p className='text-[35px]'>${price}</p>
                            <div className="check2 font-sofia font-bold">
                                {data.save &&
                                    <div className="">

                                        <label className="container2 text-[17px]">One-time purchase
                                            <input onChange={(item) => { changePrice(item.target.parentNode.innerText) }} type="radio" name="purchaseOption" checked={price == data.price ? true : ""} />
                                            <span className="checkmark2"></span>
                                        </label>

                                        <label className="container2 text-[17px]">Subscribe & Save 10%
                                            <input onChange={(item) => { changePrice(item.target.parentNode.innerText) }} type="radio" name="purchaseOption" checked={price == data.save ? true : ""} />
                                            <span className="checkmark2"></span>
                                        </label>
                                    </div>
                                }
                            </div>
                            <p className='text-[#613223] ml-5 '>QTY</p>
                            <div className="flex  gap-x-20">
                                <div className="">

                                    <input onInput={(e) => { setCount(+e.target.value) }} className='max-w-[70px] absolute border-[#d1c4c0]  border-2 text-center placeholder-[#613233] py-3 rounded-full text-[#613223]  placeholder-shown:text-center' value={count} type="text" />
                                </div>
                                {(data.savestock == "out" && price == data.save) &&
                                    <div className="">
                                        <button className='flex max-w-[270px] items-center gap-4 rounded-full text-[17px] max-[450px]:text-[15px] text-[#fff] bg-[#E9646B] py-3 px-16 max-[450px]:px-10  duration-300'>Out of Stock <FaArrowRightLong /></button>
                                    </div>
                                }
                                {
                                    data.stock == "out" &&
                                    <button className='flex max-w-[270px] items-center gap-4 rounded-full text-[17px] max-[450px]:text-[15px] text-[#fff] bg-[#E9646B] py-3 px-16 max-[450px]:px-10  duration-300'>Out of Stock <FaArrowRightLong /></button>
                                }
                                {
                                    data.cash == "have" &&
                                    <div className="">
                                        <button onClick={openCart} className='flex max-w-[270px] items-center gap-4 rounded-full text-[17px] max-[450px]:text-[15px] text-[#fff] bg-[#E22733] py-3 px-16 max-[450px]:px-10  duration-300'>Add to Bag <FaArrowRightLong /></button>
                                    </div>
                                }
                                {
                                    (data.stock == "have" && price == data.price) &&
                                    <div className="">
                                        <button onClick={openCart} className='flex max-w-[270px] items-center gap-4 rounded-full text-[17px] max-[450px]:text-[15px] text-[#fff] bg-[#E22733] py-3 px-16 max-[450px]:px-10  duration-300'>Add to Bag <FaArrowRightLong /></button>
                                    </div>
                                }
                            </div>
                        </div>
                        <p className='text-[19px] max-lg:text-[14px] pt-1 font-sofia font-bold'>We’re adding some heat to the season. Introducing Popcornopolis® Takis Fuego® Popcorn, an intense flavor combination that brings spicy and tart together to wake-up the taste buds. Add the perfect crunch of our premium popcorn and you won’t be able to extinguish the heat between bites.</p>
                        <p className='my-7 max-lg:text-[14px] font-sofia' ><strong>Flavors: </strong>Hot Chili Pepper & Lime</p>
                        <p className='mt-5 '><NavLink to={data.nutrition && `${data.nutrition}`} className="underline text-[17px] max-lg:text-[14px] font-sofia font-bold">Nutrition Facts & Ingredients</NavLink></p>
                        <hr className='border-[#f3d3c9] my-5' />
                        <div className="mt-10 flex gap-2">
                            <div style={{ height: "20px" }} className="bg-[#E22733] min-w-[120px] min-h-[120px] rounded-full">
                                <img className='relative bottom-5' src="/assets/img/Shop popcorn/Cone-Group.png" alt="" />
                            </div>
                            <div className="">
                                <p className='lg:text-[25px] leading'>Want to mix & match flavors?</p>
                                <p className='text-[30px] max-[450px]:text-[25px] text-[#E22733] my-3 leading-none '>Create Your Own<strong className='text-[#613223]'>.</strong></p>
                                <p className='lg:text-[22px] text-[20px] leading-none block max-[400px]:hidden'><NavLink className="flex items-center gap-x-3 underline font-sofia font-bold" to={"/create-your-own"}>Create Your Own <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></NavLink></p>
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-[20px] leading-none hidden max-[400px]:block'><NavLink className="flex items-center gap-x-3 underline" to={"/create-your-own"}>Create Your Own <span className='inline-flex items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></NavLink></p>
                    </div>
                </div>
            </div >
            <div className={`bg-beige `}>
                <div className="  mt-[450px] max-lg:mt-20">

                    <div className="px-[30px]  max-w-[1240px] mx-auto ">
                        <div className='lg:flex gap-x-5 mb-[180px] items-center'>
                            <img className='rounded-bl-[150px] lg:rounded-tr-[150px] object-cover w-full' src={data.info1.map(item => item.img)} alt="" />

                            <div className="">
                                <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[33px] max-[450px]:text-[25px] text-[#E22733] my-3 leading-none '>{data.info1.map(item => item.title)}<strong className='text-[#613223]'>.</strong></p>
                                <div className='mt-2 w-7 h-1 my-5 bg-[#E22733]'></div>
                                <p className='text-[#613223] lg:text-[19px] font-sofia'>{data.info1.map(item => item.description)}</p>
                            </div>
                        </div>
                        <div className='lg:flex gap-x-5 items-center'>
                            <img className='rounded-br-[100px] order-1 lg:rounded-tl-[150px] w-full' src={data.info2.map(item => item.img)} alt="" />
                            <div className="">
                                <p className='text-[60px] max-[1200px]:text-[50px] max-lg:text-[33px] max-[450px]:text-[25px] text-[#E22733] my-3 leading-none '>{data.info2.map(item => item.title)}<strong className='text-[#613223]'>.</strong></p>
                                <div className='mt-2 w-7 h-1 my-5 bg-[#E22733]'></div>
                                <p className='text-[#613223] lg:text-[19px] font-sofia'>{data.info2.map(item => item.description)}</p>
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <p className='text-[35px] max-lg:text-[24px] text-[#E22733] my-3 leading-none '>Be the first to write a review<strong className='text-[#613223]'>.</strong></p>
                            <div className='mt-2 mx-auto w-7 h-1 my-5 bg-[#E22733]'></div>
                            <p className='text-[25px] max-lg:text-[22px] text-[#613223]'>Tell us what you think of our popcorn.</p>
                            <div id='write' className="group">
                                <button onClick={() => { setOpenReview(!review) }} className='flex mx-auto mt-10   items-center gap-4 rounded-full text-[#fff] bg-[#E22733] py-3 px-8   duration-300 font-sofia group-hover:opacity-90 font-bold'>Write a review<span className='relative right-0  group-hover:right-[-5px] duration-300'><FaArrowRightLong /></span> </button>
                            </div>
                        </div>
                    </div>

                    {review && (
                        <div className="fixed inset-0 bg-black bg-opacity-30  z-40"></div>
                    )}
                    <div className=" justify-center flex ">
                        <form onSubmit={(e) => sendReview(e)} style={{ zIndex: 90 }} className={`fixed ${!review ? 'hidden' : ""} max-w-[988px] p-[20px] pb-[50px] px-[50px] w-full max-md:overflow-y-scroll   max-[350px]:h-[90vh] max-[350px]:overflow-y-scroll bg-white top-[13%] `}>
                            <div className="flex items-center justify-between">
                                <h3 id='write' className='text-[35px] max-[1200px]:text-[29px] max-md:text-[33px] text-[#E22733]'>Write a review<span className='text-[#613223]'>.</span></h3>
                                <IoMdClose onClick={() => { setOpenReview(!review) }} size={25} className='cursor-pointer' />
                            </div>
                            <div className='mt-2  w-7 h-1 my-5 bg-[#E22733]'></div>
                            <div className='flex'>
                                <div className="flex font-sofia items-center text-[19px] max-md:text-[17px]">
                                    <p className='text-[#613223]'>Rating<span className='text-[#e22733]'>*</span></p>
                                    {stars.map((item, index) => (
                                        <FaStar style={{ color: colors[index] ? '#EC8622' : '#CFC1BC', cursor: "pointer" }} onClick={() => rateStar(item, index)} className='text-[#CFC1BC] ' size={18} />
                                    ))}
                                </div>
                                <div className="">
                                    <img className='absolute max-w-[300px] top-[-50px]  right-[100px] max-md:hidden' src={`${data.img}`} alt="" />
                                </div>
                            </div>
                            <label htmlFor="">
                                <p className='font-sofia font-bold text-[15px] mt-6 mb-2'>Your Name<span className='text-[#e22733]'>*</span></p>
                                <input name='name' onChange={handleError} className={`max-md:w-full font-sofia pl-2 w-[50%] bg-[#FAFBFD] border py-2 rounded-sm  ${errorNote['name'] ? " border-[#e22733]" : "border-[#c5cee0]"}`} type="text" />
                                <p className='font-sofia text-[#e22733] text-[13px]'>{errorNote["name"]}</p>
                            </label>

                            <label htmlFor="">
                                <p className='font-sofia font-bold text-[15px] mt-6 mb-2'>Review<span className='text-[#e22733]'>*</span></p>
                                <input name='note' onChange={handleError} className={`w-full font-sofia bg-[#FAFBFD] border pb-16 pt-2 pl-2 rounded-sm ${errorNote['note'] ? " border-[#e22733]" : "border-[#c5cee0]"}`} placeholder='How great was this product?' type="text" />
                                <p className='font-sofia text-[#e22733] text-[13px]'>{errorNote["note"]}</p>
                            </label>
                            <div className="flex justify-end">
                                <p className='text-[15px] text-[#613223] font-sofia mt-5'>* indicates a required field</p>
                            </div>
                            <button type='submit' className='py-3 px-6 rounded-full font-bold font-sofia bg-[#e22733] text-[17.5px] text-white md:mt-5'>Submit</button>
                            <hr className='my-5' />
                            <div className="text-[13px] max-md:text-[11.5px] font-sofia ">
                                <strong>By submitting a review</strong>, you are agreeing to our <NavLink className="text-[#5987e0] font-bold underline">Terms of Use</NavLink> and <NavLink className="text-[#5987e0] font-bold underline">Privacy Policy</NavLink>

                            </div>
                        </form>
                    </div>


                    <div className=" max-xl:px-[30px] lg:h-[100vh] max-w-[1240px] mx-auto">
                        <div className="lg:absolute z-30 lg:w-[40%] ">
                            <div className="">
                                <p className='text-[42px] max-[1200px]:text-[30px] max-md:text-[36px] text-[#E22733] my-3 leading-none '>Premium popcorn crafted to perfection<strong className='text-[#613223]'>.</strong></p>
                                <div className='my-7 w-7 h-1  bg-[#E22733]'></div>
                                <p className='lg:w-[250px] lg:text-[19px]  text-[#613223] lg:mb-10 font-sofia'>Popcornopolis is a reminder of simpler times. Made with love from our Los Angeles, California factory.</p>
                            </div>
                            <div className="bg-[#84C4EC]  px-[40px] rounded-tr-[100px] rounded-bl-[50px] py-[70px] lg:max-w-[460px] min-h-[600px] max-[1200px]:min-h-[500px] ">
                                <div>
                                    <div className="flex gap-4 px-[35px]  my-12">
                                        <img className="w-[80px] max-[450px]:max-w-[30%] h-auto" src="/assets/img/Shop popcorn/nongmo.webp" alt="" />
                                        <img className="w-[80px] max-[450px]:max-w-[30%] h-auto" src="/assets/img/Shop popcorn/real.png" alt="" />
                                        <img className="w-[80px] max-[450px]:max-w-[30%] h-auto" src="/assets/img/Shop popcorn/gluten.png" alt="" />
                                    </div>
                                    {
                                        change == "Premium Ingredients" ?
                                            <img style={{ borderRadius: "120px 0 120px 0" }} className=" hidden max-lg:block w-full scale-[1.1] max-[450px]:scale-[1] my-20" src="/assets/img/Shop popcorn/cinnamon.jpg" alt="" />
                                            : change == "Popped in Small Batches" ? <img style={{ borderRadius: "120px 0 120px 0" }} className=" hidden max-lg:block w-full scale-[1.1] max-[450px]:scale-[1] my-20" src="/assets/img/Shop popcorn/AssortedPopcorn.webp" alt="" />
                                                : change == "American Made" ? <img style={{ borderRadius: "120px 0 120px 0" }} className=" hidden max-lg:block w-full scale-[1.1] max-[450px]:scale-[1] my-20" src="/assets/img/Shop popcorn/FieldSign.webp" alt="" /> : ""
                                    }
                                    <div className="text-[20px] text-white md:px-[35px]">
                                        <p onClick={(e) => changeImage(e)} data-type="Premium Ingredients" className={`${change == "Premium Ingredients" ? "" : 'opacity-75'} flex items-center gap-x-2 mb-2 text-[28px] max-[1200px]:text-[23px] max-md:text-[20px] cursor-pointer`}><img className="max-w-[35px] max-md:max-w-[25px]  relative bottom-4" src="/assets/img/Shop popcorn/icon-check.svg" alt="" /> Premium <br /> Ingredients</p>
                                        <p onClick={(e) => changeImage(e)} data-type="Popped in Small Batches" className={`${change == "Popped in Small Batches" ? "" : 'opacity-75'} flex items-center gap-x-2 mb-2 text-[28px] max-[1200px]:text-[23px] max-md:text-[20px] cursor-pointer `}><img className="max-w-[35px] max-md:max-w-[25px] relative bottom-4 " src="/assets/img/Shop popcorn/icon-check.svg" alt="" />Popped in Small <br /> Batches</p>
                                        <p onClick={(e) => changeImage(e)} data-type="American Made" className={`${change == "American Made" ? "" : 'opacity-75'} flex items-center gap-x-2 text-[28px] max-[1200px]:text-[23px] max-md:text-[20px] cursor-pointer`}><img className="max-w-[35px] max-md:max-w-[25px]" src="/assets/img/Shop popcorn/icon-check.svg" alt="" />American Made</p>
                                        <button className="flex mt-10 items-center gap-4 rounded-full text-[#fff] max-lg:text-[14px] bg-[#E22733] py-3 px-10 duration-300 font-sofia"><NavLink to={"/faq/"}>Learn more</NavLink> <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            change == "Premium Ingredients" ?
                                <img style={{ borderRadius: "120px 0 120px 0" }} className=" lg:float-right w-[70%] relative top-[150px] block max-lg:hidden  my-10" src="/assets/img/Shop popcorn/cinnamon.jpg" alt="" />
                                : change == "Popped in Small Batches" ? <img style={{ borderRadius: "120px 0 120px 0" }} className=" lg:float-right w-[70%] relative top-[150px] block max-lg:hidden  my-10" src="/assets/img/Shop popcorn/AssortedPopcorn.webp" alt="" />
                                    : change == "American Made" ? <img style={{ borderRadius: "120px 0 120px 0" }} className=" lg:float-right w-[70%] relative top-[150px] block max-lg:hidden  my-10" src="/assets/img/Shop popcorn/FieldSign.webp" alt="" /> : ""
                        }
                    </div>
                    <div className="lg:mt-[350px] max-w-[1240px] mx-auto">
                        <h3 className='text-[42px] max-[1200px]:text-[34px] max-lg:text-[30px] max-md:text-[36px] text-[#e22733]'>Give these tasty options a try<span className='text-[#613223]'>.</span></h3>
                        <div className='my-7 w-7 h-1  bg-[#E22733]'></div>

                        <div className="cards  max-lg:hidden mt-[100px] text-[#613223] gap-x-3 grid grid-cols-4 ">

                            <div className="card1 flex flex-col items-center px-[40px]">
                                <NavLink to={"/shop/product/caramel-corn-tall-cone"}>
                                    <div className=" bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent  hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                        <img className='max-w-[212px]  relative bottom-12 mx-3' src="/assets/img/data/caramelcorn_long.webp" alt="" />
                                    </div>
                                    <div className="px-[20px]">
                                        {/* <p className='my-4 text-[25px] max-[1200px]:text-[18px] hovers'><span>Caramel Corn Tall Cone</span> <span className='inline-flex hover_right ml-2  items-center'><FaAngleRight size={20} className='p-1 rounded-full text-white bg-[#E40C13]' /></span></p> */}
                                        <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                            <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                Caramel Corn Tall
                                            </span>
                                            <span className='capitalize inline-flex items-center '>
                                                <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                            </span>
                                        </span>
                                        <p className='font-sofia'>Pack of 12</p>
                                        <strong className='font-sofia text-[19px]'>$71.99</strong>
                                    </div>

                                </NavLink>
                            </div>
                            <div className="card1 flex flex-col items-center px-[40px]">
                                <NavLink to={"/shop/product/cheddar-cheese-tall-cone"}>
                                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent  hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                        <img className='max-w-[212px]  mx-3 relative bottom-12' src="/assets/img/data/cheedarcheese_long.webp" alt="" />
                                    </div>
                                    <div className="px-[20px]">
                                        <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                            <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                Cheedar Cheese Tall
                                            </span>
                                            <span className='capitalize inline-flex items-center '>
                                                <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                            </span>
                                        </span>
                                        <p className='font-sofia'>Pack of 12</p>
                                        <strong className='font-sofia text-[19px]'>$59.99</strong>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="card1 flex flex-col items-center px-[40px]">
                                <NavLink to={"/shop/product/nearly-naked-perfectly-salted-popcorn-4.5-oz-bag"}>
                                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent  hover:border-[#A0847B] hover:bg-[#613223] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                        <img className='max-w-[212px]  mx-3 relative bottom-12' src="/assets/img/data/perfeclysalted.webp" alt="" />
                                    </div>
                                    <div className="px-[20px]">
                                        <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                            <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                Nearly Naked Perfectly Salted Popcorn 4.5 oz
                                            </span>
                                            <span className='capitalize inline-flex items-center '>
                                                <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Bag</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                            </span>
                                        </span>
                                        <p className='font-sofia'>Pack of 8</p>
                                        <strong className='font-sofia text-[19px]'>$27.99</strong>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="card1 flex flex-col items-center px-[40px]">
                                <NavLink to={"/shop/product/zebra®-popcorn-tall-cone"}>
                                    <div className="bg-[#FBF4EE] max-h-[212px] border-[12px] border-transparent  hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] rounded-bl-[90px]  duration-300">
                                        <img className='max-w-[212px]  mx-3 relative bottom-12' src="/assets/img/data/zebra_tall.webp" alt="" />
                                    </div>
                                    <div className="px-[20px]">
                                        <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                            <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                <span className='inline-block group text-[#613223] leading-[1.2] text-[24px] mt-5  max-lg:text-[18px] max-md:text-[14px] pb-10 capitalize'>
                                                    <span className=' max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2'>
                                                        Cheedar Cheese Tall
                                                    </span>
                                                    <span className='capitalize inline-flex items-center '>
                                                        <span className='group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline'> Cone</span> <FaAngleRight className='  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] ' />
                                                    </span>
                                                </span>
                                            </span>

                                        </span>
                                        <p className='font-sofia'>Pack of 12</p>
                                        <strong className='font-sofia text-[19px]'>$71.99</strong>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden  ">
                        <SpicySlider />
                    </div>

                </div>
                <Footer />

            </div>
        </div >
    )
}

export default Page2