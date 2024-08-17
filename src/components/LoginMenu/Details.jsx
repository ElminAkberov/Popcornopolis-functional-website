import React, { useEffect, useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { IoCheckmark } from 'react-icons/io5'

function Details() {
    let [data, setData] = useState("")
    let [info, setInfo] = useState({
        firstName: "",
        lastName: "",
    })
    let [update, setUpdate] = useState("")
    useEffect(() => {
        fetch("https://mirafgan.me/popcornpolis/user/profile/get", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                setInfo({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email:data.email
                })
            })
            .catch(error => console.error(error));
    }, [])
    const handleChange = (e) => {
        let { name, value } = e.target
        setInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://mirafgan.me/popcornpolis/user/profile/update", {
            method: "PUT",
            headers: {
                "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                currentPassword: info.currentPassword,
                newPassword: info.newPassword
            })
        }).then(res => setUpdate(res.ok))
    }
    return (
        <div>
            <div className='pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px] font-sofia '>
                <div className="  border rounded-md border-[#F2DCCD] bg-white p-10">
                    {
                        update &&
                        <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#f4fff7] border rounded-sm px-5 py-4 border-[#4ab866]">
                            <IoCheckmark className='text-white bg-[#4ab866]  rounded-full p-1 text-[28px] min-w-[28px] min-h-[28px] ' />
                            <p>Password changed successfully.</p>
                        </div>
                    }
                    {
                        update === false &&
                        <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#FFF0F0] border rounded-sm px-5 py-4 border-[#cc1818]">
                            <FiAlertCircle className='text-white bg-[#cc1818] p-[3px] rounded-full  text-[28px] min-w-[28px] min-h-[28px] ' />
                            <p className='text-[14px] max-md:text-[12px]'>The password you entered is incorrect.</p>
                        </div>
                    }
                    <h3 className='text-[26px] max-lg:text-[23.5px] font-faro '>Account Details</h3>
                    <form onSubmit={(e) => handleSubmit(e)} className="inputlar max-md:hidden block">
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>First Name</p>
                                <input onChange={handleChange} name='firstName' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' value={info.firstName} type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Last Name</p>
                                <input onChange={handleChange} name='lastName' className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' value={info.lastName} type="text" />
                            </div>
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Email Address</p>
                            <input onChange={handleChange} name='email' value={info.email} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Current Password</p>
                            <input onChange={handleChange} name='currentPassword' value={info.currentPassword} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="flex gap-x-5">
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>New Password</p>
                                <input onChange={handleChange} name='newPassword' value={info.newPassword} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' type="text" />
                            </div>
                            <div className="input w-[50%]">
                                <p className=' font-bold my-3'>Confirm new password </p>
                                <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' type="text" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type='submit' className='bg-[#e22733] text-[20px] font-bold text-white w-[48.5%] py-1 rounded-full my-3 '>Update</button>
                        </div>
                    </form>
                    <form onSubmit={(e) => handleSubmit(e)} className="inputlar max-md:block hidden">
                        <div className="input">
                            <p className=' font-bold my-3'>First Name</p>
                            <input onChange={handleChange} name='firstName' value={info.firstName} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="input">
                            <p className=' font-bold my-3'>Last Name</p>
                            <input onChange={handleChange} name='lastName' value={info.lastName} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Email Address</p>
                            <input onChange={handleChange} name='email' value={info.email} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Current Password</p>
                            <input onChange={handleChange} name='currentPassword' value={info.currentPassword} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD] px-2 w-full' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>New Password</p>
                            <input onChange={handleChange} name='newPassword' value={info.newPassword} className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' type="text" />
                        </div>
                        <div className="input ">
                            <p className=' font-bold my-3'>Confirm new password </p>
                            <input className='py-[10px] border-[#c5cee0] border rounded-sm bg-[#FAFBFD]  px-2 w-full' type="text" />
                        </div>
                        <div className="flex w-full">
                            <button type='submit' className='bg-[#e22733] text-[20px] font-bold text-white w-full py-1 rounded-full my-3 '>Update</button>
                        </div>

                    </form>
                </div>
            </div>

        </div >
    )
}

export default Details