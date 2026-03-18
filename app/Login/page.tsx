"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import  Link  from 'next/link'
import './login.css';
export default function Loginpage() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()

    async function login() {
        if (!username || !password) {
            alert("Please")
            return
        }
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await res.json()
        
        if (!res.ok) {
            alert("Please")
            return
        }

        localStorage.setItem("userId", data.userId)

        if (res.ok) {
            router.push("/Home")
            alert("Login Success")
            return
        }
        // router.push("/")
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
            <div className='social-md'>
                <a href="">
                    <img src="/image/Google__G__logo.svg.png" alt="" />
                </a>
                <a href="">
                    <img src="/image/Steam_icon_logo.svg.png" alt="" />
                </a>
            </div>
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
