import React, { useEffect, useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'
import { useParams } from 'react-router-dom'

function Shipping() {


    let [data, setData] = useState("")
    let [number, setNumber] = useState("")
    let [info, setInfo] = useState({})
    let [update, setUpdate] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        fetch(`https://mirafgan.me/popcornpolis/address/get/${id}`, {
            method: "GET",
            headers: {
                "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                setInfo({
                    city: data?.city,
                    title: data?.title,
                    firstName: data?.firstName,
                    lastName: data?.lastName,
                    postalCode: data?.postalCode,
                    state: data?.state,
                    streetAdress1: data?.streetAdress1,
                    streetAdress2: data?.streetAdress2,
                });
                return data;
            });
    }, [number.id]);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://mirafgan.me/popcornpolis/address/update/${id}`,
            {
                method: "PUT",
                headers: {
                    "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    city: info.city,
                    title: info.title,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    postalCode: info.postalCode,
                    state: info.state,
                    streetAdress1: info.streetAdress1,
                    streetAdress2: info.streetAdress2,
                })
            }).then((res) => setUpdate(res))

    }
    const handleChange = (e) => {
        let { value, name } = e.target
        setInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div>
            <div className='pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px] font-sofia '>
                <div className="  border rounded-md border-[#F2DCCD] bg-white p-10">
                    {
                        update.ok &&
                    <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#f4fff7] border rounded-sm px-5 py-4 border-[#4ab866]">
                        <IoCheckmark className='text-white bg-[#4ab866]  rounded-full p-1 text-[28px] min-w-[28px] min-h-[28px] ' />
                        <p>Address changed successfully.</p>
                    </div>
                    }
                    <form onSubmit={(e) => handleSubmit(e)} className="inputlar max-md:hidden block">
                        <h3 className='text-[26px] max-lg:text-[23.5px] font-faro min-[500px]:flex'><label htmlFor="" className='mr-2'>Address:</label><input onChange={(e) => handleChange(e)} name='title' value={info.title} required className='py-[2px] w-full border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 ' type="text" /></h3>

                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>First Name<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} name='firstName' value={info.firstName} required className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your first name' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Last Name<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} name='lastName' value={info.lastName} required className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your last name' type="text" />
                            </div>
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Street Address<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress1} required name='streetAdress1' className='py-[10px] border-[#c5cee0] mb-5 border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Your address' type="text" />
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress2} name='streetAdress2' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' placeholder='Apt,Unit, or Suite #' type="text" />
                        </div>


                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>City<span className='text-[#ee2733]'>*</span></p>
                                <input onChange={(e) => handleChange(e)} required value={info.city} name='city' className='py-[10px]  border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='City' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>State/Province<span className='text-[#ee2733]'>*</span> </p>
                                <input onChange={(e) => handleChange(e)} required value={info.state} name='state' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='State' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Country<span className='text-[#ee2733]'>*</span></p>
                                <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' value={"US"} type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Postal Code<span className='text-[#ee2733]'>*</span> </p>
                                <input onChange={(e) => handleChange(e)} required value={info.postalCode} name='postalCode' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' placeholder='Postcode' type="text" />
                            </div>
                        </div>
                        <div className="flex ">
                            <button type='submit' className='bg-[#e22733] text-[20px] font-bold text-white w-[48.5%] py-2 rounded-full my-3 '>Update</button>
                        </div>

                    </form>
                    <form onSubmit={(e) => handleSubmit(e)} className="inputlar max-md:block hidden">
                        <h3 className='text-[23.5px] font-faro min-[500px]:flex'><label htmlFor="" className='mr-2'>Address:</label><input onChange={(e) => handleChange(e)} name='title' value={info.title} required className='py-[2px] w-full border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 ' type="text" /></h3>
                        <div className="input">
                            <p className=' font-bold my-3'>First Name<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} name='firstName' value={info.firstName} required className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your first name' type="text" />
                        </div>
                        <div className="input">
                            <p className=' font-bold my-3'>Last Name<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} name='lastName' value={info.lastName} required className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 text-[14.5px] w-full' placeholder='Your last name' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Street Address<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress1} required name='streetAdress1' className='py-[10px] border-[#c5cee0] mb-5 border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Your address' type="text" />
                            <input onChange={(e) => handleChange(e)} value={info.streetAdress2} name='streetAdress2' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Apt,Unit, or Suite #' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>City<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} required value={info.city} name='city' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='City' type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>State/Province<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} required value={info.state} name='state' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='State' type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>Country<span className='text-[#ee2733]'>*</span></p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' value={"US"} type="text" />
                        </div>

                        <div className="input ">
                            <p className=' font-bold my-3'>Postal Code<span className='text-[#ee2733]'>*</span></p>
                            <input onChange={(e) => handleChange(e)} required value={info.postalCode} name='postalCode' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 text-[14.5px] w-full' placeholder='Postcode' type="text" />
                        </div>
                        <div className="flex w-full">
                            <button type='submit' className='bg-[#e22733] text-[20px] font-bold text-white w-full py-1 rounded-full my-3 '>Update</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Shipping