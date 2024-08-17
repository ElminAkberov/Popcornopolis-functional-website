import React, { useEffect, useState } from 'react'

function Billing() {
    let [data, setData] = useState("")
    let [number, setNumber] = useState("")
    let [info, setInfo] = useState({})
    
    useEffect(() => {
        const handleShow = () => {
            try {
                fetch("https://mirafgan.me/popcornpolis/user/profile/get", {
                    method: "GET",
                    headers: {
                        "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                    }
                }).then(res => {

                    return res.json()
                }).then(data => {
                    setNumber(data);
                    return data
                })
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        handleShow()
    }, [])
    
    useEffect(() => {
        fetch(`https://mirafgan.me/popcornpolis/address/getAll`,
            {
                method: "GET",
                headers: {
                    "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                },
            })
            .then(res => res.json())
            .then(data => {
                setData(data)

                data.map(datas => (
                    setInfo({
                        city: datas?.city,
                        firstName: datas?.firstName,
                        lastName: datas?.lastName,
                        postalCode: datas?.postalCode,
                        phone: datas?.phone,
                        title: datas?.title,
                        state: datas?.state,
                        streetAdress1: datas?.streetAdress1,
                        streetAdress2: datas?.streetAdress2,
                    })
                ))
                return data
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://mirafgan.me/popcornpolis/address/update/${number.id}`,
            {
                method: "PUT",
                headers: {
                    "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    city: info.city,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    postalCode: info.postalCode,
                    phone: info.phone,
                    title: info.title,
                    state: info.state,
                    streetAdress1: info.streetAdress1,
                    streetAdress2: info.streetAdress2,
                })
            })

    }
    const handleChange = (e) => {
        let { value, name } = e.target
        setInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }
    console.log(data);

    
    return (
        <div>
            <div className='pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px] font-sofia '>
                <div className="  border rounded-md border-[#F2DCCD] bg-white p-10">
                    <form onSubmit={(e) => handleSubmit(e)} className="inputlar max-md:hidden block">
                        <h3 className='text-[26px] max-lg:text-[23.5px] font-faro '>Address - <input onChange={(e) => handleChange(e)} value={info.title} name='title' className='py-[2px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 ' type="text" /></h3>
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>First Name<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} name='firstName' value={info.firstName} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your first name' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Last Name<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} name='lastName' value={info.lastName} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your last name' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Email address<span className='text-[#ee2733]'>*</span></p>
                                <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='Your email' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Phone<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} name='phone' value={info.phone} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='Your phone' type="text" />
                            </div>
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Street Address<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress1} name='streetAdress1' className='py-[10px] border-[#c5cee0] mb-5 border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your address' type="text" />
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress2} name='streetAdress2' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Apt,Unit, or Suite #' type="text" />
                        </div>


                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>City<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} value={info.city} name='city' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='City' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>State/Province<span className='text-[#ee2733]'>*</span> </p>
                                <input onChange={(e) => handleChange(e)} value={info.state} name='state' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='State' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Country<span className='text-[#ee2733]'>*</span></p>
                                <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' value={"US"} type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Postal Code<span className='text-[#ee2733]'>*</span> </p>
                                <input onChange={(e) => handleChange(e)} value={info.postalCode} name='postalCode' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='Postcode' type="text" />
                            </div>
                        </div>
                        <div className="flex ">
                            <button type='submit' className='bg-[#e22733] text-[20px] font-bold text-white w-[48.5%] py-2 rounded-full my-3 '>Update</button>
                        </div>

                    </form>
                    <div className="inputlar max-md:block hidden">
                        <div className="input">
                            <p className=' font-bold my-3'>First Name<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your first name' type="text" />
                        </div>
                        <div className="input">
                            <p className=' font-bold my-3'>Last Name<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your last name' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Email address<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your email' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Phone<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your phone' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Street Address<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] mb-5 border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Your address' type="text" />
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Apt,Unit, or Suite #' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>City<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='City' type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>State/Province<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='State' type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>Country<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' value={"US"} type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>Postal Code<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Postcode' type="text" />
                        </div>
                        <div className="flex w-full">
                            <button className='bg-[#e22733] text-[20px] font-bold text-white w-full py-1 rounded-full my-3 '>Update</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Billing