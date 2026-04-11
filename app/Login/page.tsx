"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import  Link  from 'next/link'
import './login.css';
export default function Loginpage() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()

    // console.log(localStorage.getItem("userId"))

    async function login() {
        // if (!username || !password) {
        //     alert("Please")
        //     return
        // }

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        })

        // const res = await fetch("/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // })

        const data = await res.json()
        
        if (!res.ok) {
            alert(data.message)
            return
        }

        alert(data.message)
        router.push("/Home")

        // localStorage.setItem("userN",data.username)
        // localStorage.setItem("userId", data.userId)
        // localStorage.setItem("role", data.role)

        // console.log("data:", data)
        // console.log("username:", data.username)

        // if (data.role === "admin") {
        //     alert(data.message)
        //     router.push("/Home")
        // } else if (data.role === "user") {
        //     alert(data.message)
        //     router.push("/Home")
        // }
    }

  return (
    <div className='layout-page'>
        <div className='box-login-page'>
            <h3>Login</h3>
            <div className='ipuser'>
                <p>Username</p>
                <input
                    value={username}
                    onChange={(u) => {
                        setUsername(u.target.value)
                    }}
                />
            </div>
            <div className='ippass'>
                <p>Password</p>
                <input
                    value={password}
                    onChange={(p) => {
                        setPassword(p.target.value)
                    }}
                />
            </div>
            <div className='forgot-donthave'>
                <a href="">Forgot Password</a>
                <Link href="/Register">{"Don't have account?"}</Link>
            </div>
            {/* <div className='social-md'>
                <a href="">
                    <img src="/image/Google__G__logo.svg.png" alt="" />
                </a>
                <a href="">
                    <img src="/image/Steam_icon_logo.svg.png" alt="" />
                </a>
            </div> */}
            <button className='bt-login'
                onClick={() => {
                    login()
                }}
            >
                Login
            </button>
        </div>
    </div>
  )
}
