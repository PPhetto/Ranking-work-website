"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Authcheck from '../component/authCheck'
export default function Homepage() {
  const router = useRouter()
  async function logout() {
    localStorage.removeItem("userId")
    router.push("/")
  }
  return (
    <div>
      <Authcheck />
      Home page
      <button
        onClick={logout}
      >
        logout
      </button>
    </div>
  )
}
