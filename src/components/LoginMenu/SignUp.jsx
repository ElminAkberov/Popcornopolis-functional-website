import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { FiAlertCircle } from 'react-icons/fi';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [check, setCheck] = useState(true)
    let navigate = useNavigate()

    let title = "#613223"
    let bgcolor = "#E22733"
    let color = "#fff"

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://mirafgan.me/popcornpolis/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {
                const data = await response.json();
                setCheck(data.ok);

                if (data.ok) {
                    navigate("/my-account")
                }

            } else {
                const errorText = await response.text();
                console.error('Qeydiyyat uğursuzdur:', response.status, errorText)  ;
            }
        } catch (error) {
            console.error('Xeta:', error);
        }
    };
    return (
        <div className='bg-beige '>
            <Header bgcolor={bgcolor} color={color} title={title} />
            <div className="pt-64 font-sofia font-bold max-w-[500px] mx-auto px-[30px]">
                <>
                    {
                        !check &&
                        <div className="font-sofia flex items-center mb-5 gap-x-3 bg-[#FFF0F0] border rounded-sm px-5 py-4 border-[#cc1818]">
                            <FiAlertCircle className='text-white bg-[#cc1818] p-[3px] rounded-full  text-[28px] min-w-[28px] min-h-[28px] ' />
                            <p className='text-[14px] max-md:text-[12px]'>An account is already registered with your email address.<NavLink to={"/my-account"} className={"text-[#0000EE]"}>Please Log in</NavLink></p>
                        </div>
                    }
                </>
                <h3 className='font-faro text-[60px] text-[#e22733] max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[32px]'>Sign up <span className='text-[#613223]'>.</span></h3>
                <div className=" ">
                    <form onSubmit={handleRegister} className="input1 p-[50px] max-md:p-[30px]  bg-white border-2 mb-10">
                        <div className="mb-5">
                            <div>
                                <p className='mb-2 max-md:text-[14px]'>Email Address</p>
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
                        <button type='submit' className='bg-[#e22733] w-full text-[20px] max-md:text-[17px] text-[#fff] py-2 rounded-full mb-5'>Create your account</button>
                        <p className=' font-normal text-[14.3px] text-center text-[#613233]'>By clicking the “Create an Account” button, you are  creating<br />
                            a Popcornopolis account, and you agree to<br /> <NavLink to={"/terms-of-use/"} className="underline hover:no-underline">Terms of Use</NavLink> and <NavLink to={"/privacy-policy/"} className="underline hover:no-underline">Privacy Policy</NavLink>
                        </p>
                    </form>
                    <p className='text-[18px] text-center'>Already have an account? <NavLink to={"/my-account"} className='text-[#386cce] underline hover:no-underline text-[18px] text-center'>Log in</NavLink></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp