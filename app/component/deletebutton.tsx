"use client"
import React from 'react'
import { DeletePost } from '@/types/Post'

export default function Deletebutton({_id} : DeletePost) {
    async function deleteBT() {
        const res = await fetch("/api/createPost",{
            method: "DELETE",
            headers: {
                "Content-Type" :"application/json"
            },
            body: JSON.stringify ({
                _id: _id
            })
        })

        location.reload()
    }
  return (
    <div>
        <button
            onClick={() => {
                deleteBT()
            }}
        >
            DELETE
        </button>
    </div>
  )
}
