"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Authcheck() {
    const router = useRouter()

    useEffect(() => {
        async function CheckUser() {
            const res = await fetch("/api/login", {
                method: "GET",
                credentials: "include"
            })

            if (!res.ok) {
                alert("Login Failed")
                router.push("/")
            }
        }        
        CheckUser()
    }, [])
    
    return (
        null
    )
}