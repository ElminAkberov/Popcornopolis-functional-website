import React, { useContext, useEffect, useState } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5';
import { NavLink, useParams } from 'react-router-dom'
import { Context } from '../../context/ContextProvider';

function MainMenu() {
    let [data, setData] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    const handleDelete = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    const handleShow = () => {
        try {
            fetch("https://mirafgan.me/popcornpolis/user/get", {
                method: "GET",
                headers: {
                    "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {

                return res.json()
            }).then(data => {
                setData(data);
                return data
            })
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }
    useEffect(() => {
        handleShow()
    }, [])

    return (
        <div className='pt-[90px] max-[1200px]:pt-[75px] max-lg:pt-[90px] font-sofia '>
            <div className="bg-white border-[#F2DCCD] rounded-md border p-7 py-12 max-lg:pt-10">
                <div className='text-[19px] max-lg:text-[17.3px]   text-[#613223]  max-lg:p-3  rounded-md'>
                    <p className='my-5'>Hello <strong>{data.username}</strong> (not <strong>{data.username}</strong>? <NavLink onClick={handleDelete} className={"text-[#386cce] underline hover:no-underline inline-flex max-lg:text-[17.3px]"}>Log out</NavLink>)</p>
                    <p className='mb-10'>From your account dashboard you can view your <NavLink to={"/my-account/order"} className={"text-[#386cce] underline hover:no-underline inline-flex max-lg:text-[17.3px]"}>recent orders</NavLink>, manage your <NavLink to={"/my-account/edit-address"} className={"text-[#386cce] underline hover:no-underline inline-flex max-lg:text-[17.3px]"}>shipping and billing addresses</NavLink>, and <NavLink className={"text-[#386cce] underline hover:no-underline inline-flex max-lg:text-[17.3px]"}>edit your password and account details</NavLink>.</p>
                </div>
            </div>
        </div>
    )
}

export default MainMenu