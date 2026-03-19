"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Authcheck() {
    const router = useRouter()

    useEffect(() => {
        const userId = localStorage.getItem("userId")
        
        if (!userId) {
            router.push("/")
        }
    }, [])
    return (
        null
    )
}