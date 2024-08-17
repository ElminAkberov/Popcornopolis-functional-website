import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainMenu from './MainMenu'
import { IoCheckmark } from 'react-icons/io5'
import { TbAlertCircleFilled } from 'react-icons/tb'
import { FiAlertCircle } from 'react-icons/fi'

function Login() {
    const navigate = useNavigate();

    let title = "#613223"
    let bgcolor = "#E22733"
    let color = "#fff"
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState('')
    let [change, setChange] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        try {
            fetch("https://mirafgan.me/popcornpolis/user/login",
                {
                    method: "POST",
                    body: JSON.stringify({
                        emailOrUsername: email,
                        password: password
                    })
                }).then(res => {
                    localStorage.setItem("password", res.ok)
                    return res.json()
                }).then(data => {
                    window.location.reload()
                    return localStorage.setItem("token", data.token)
                })
        } catch (error) {
            console.error('Xeta:', error);
        }
    }


    return (
        <div className='bg-beige'>
            <Header bgcolor={bgcolor} color={color} title={title} />
            <div className="pt-64 font-sofia font-bold max-w-[500px] mx-auto px-[30px]">
                {
                    !JSON.parse(localStorage.getItem("password")) &&
                    <>
                        <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#FFF0F0] border rounded-sm px-5 py-4 border-[#cc1818]">
                        <FiAlertCircle className='text-white bg-[#cc1818] p-[3px] rounded-full  text-[28px] min-w-[28px] min-h-[28px] ' />
                            <p className='text-[14px] max-md:text-[12px]'>The username or password you entered is incorrect.</p>
                        </div>
                    </>
                }
                <h3 className='text-[60px] font-faro text-[#e22733] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px]'>Login <span className='text-[#613223]'>.</span></h3>
                <div className=" ">
                    <form onSubmit={(e) => handleLogin(e)} className="input1 p-[50px] max-md:p-[30px] bg-white border-2 mb-10">
                        <div className="mb-5">
                            <div>
                                <p className='mb-2 max-md:text-[14px]'>Email Adress or Username</p>
                                <p></p>
                            </div>
                            <div>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-[10px] py-3 border  rounded-sm bg-[#FAFBFD]" type="text" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className='mb-2 max-md:text-[14px]'>Password</p>
                                <p></p>
                            </div>
                            <div>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-[10px] py-3 border  rounded-sm bg-[#FAFBFD]" type="text" required />
                            </div>
                        </div>
                        <button type='submit' className='bg-[#e22733] w-full text-[20px] max-md:text-[17px] text-[#fff] py-2 rounded-full mb-5'>Log in</button>
                        <p className='text-[#386cce] underline hover:no-underline text-[18px] text-center'><NavLink>Forgot Password?</NavLink></p>
                    </form>
                    <p className='text-[18px] text-center'>Don't have an account? <NavLink to={"/register/"} className='text-[#386cce] underline hover:no-underline text-[18px] text-center'>Sign up</NavLink></p>


                </div>

            </div>
            <Footer />
        </div>
    )
}


export default Login