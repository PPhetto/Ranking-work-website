"use client"
import '../Register/register.css';
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from 'next/link'
export default function Registerpage() {

  const [nusername,seetNusername] = useState("")
  const [npassword,setNpassword] = useState("")
  const [naddress, setNaddress] = useState("")
  const router = useRouter()

  async function register() {
    if (!nusername || !npassword) {
      alert("Please")
      return
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: nusername,
        password: npassword,
        address: naddress

      })
    })
    if (res.ok) {
      alert("Register success fully")
      router.push("/Login")
      return
    }
  }

  return (
    <div className='layout-page-register'>
        <div className='box-register-page'>
            <Link href="/Login" className='bt-back-register'>Back</Link>
            <h3>Register</h3>
            <div className='ipuser'>
                <p>Username</p>
                <input
                    value={nusername}
                    onChange={(u) => {
                        seetNusername(u.target.value)
                    }}
                />
            </div>
            <div className='ippass'>
                <p>Password</p>
                <input
                    value={npassword}
                    onChange={(p) => {
                        setNpassword(p.target.value)
                    }}
                />
            </div>
            <div className='ipaddress'>
                <p>Address</p>
                <input
                    value={naddress}
                    onChange={(p) => {
                        setNaddress(p.target.value)
                    }}
                />
            </div>
            <button className='bt-register'
                onClick={() => {
                    register()
                }}
            >
                Register
            </button>
        </div>
    </div>
  )
}
