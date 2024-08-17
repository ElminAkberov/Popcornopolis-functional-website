import React, { useEffect, useState } from 'react'
import Login from './Login';
import { ClipLoader } from 'react-spinners';
const LoginAuth = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch("https://mirafgan.me/popcornpolis/user/verify",
            {
                method: "GET",
                headers: {
                    "AUTHORIZATION": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                if (!res.ok) {
                    setAuth(false)
                    localStorage.removeItem("token")
                    return
                }
                return res.json();
            })
            .then(res => {
                if (res) {
                    setAuth(true)
                    localStorage.setItem("token", res.token)
                } else {
                    setAuth(false)
                    localStorage.removeItem("token")
                }
                setLoading(true)
            })
    }, [])
    if (!loading) {
        return <div className='flex justify-center items-center h-[90vh]'><ClipLoader
            color="#ff0000"
            speedMultiplier={0.5}
        /></div>;
    }
    return (
        <div>{(auth && loading) ? children : <Login />}</div>
    )
}

export default LoginAuth