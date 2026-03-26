"use client"
import { EditPost } from "@/types/Post"
import '../Home/home.css';
import { useState } from "react"

export default function Editbutton({_id,title,description,image} : EditPost) {

    const [ntitle,setNtitle] = useState(title)
    const [ndescription,setNdescription] = useState(description)
    const [nimage,setNimage] = useState(image)

    const [cbutton,setCbutton] = useState(false)

    async function editBT() {
        const res = await fetch("/api/createPost", {
            method: "PUT",
            headers: {
                "Content-Type" :"application/json"
            },
            body: JSON.stringify ({
                _id: _id,
                title: ntitle,
                description: ndescription,
                image: nimage
            })
        })
    }
  return (
    <div>
        <button
            onClick={() => {
                setCbutton(true)
            }}
        >
            EDIT
        </button>
        {cbutton && (
          <div className='popup-createbt'>
          <div className='popup-content'>
            <h3>Create new post</h3>
            <div className='input-content'>
              <input
                value={ntitle}
                onChange={(t) => {
                  setNtitle(t.target.value)
                }}
                placeholder='Title Post'
              />
              <textarea
                value={ndescription}
                onChange={(d) => {
                  setNdescription(d.target.value)
                }}
                rows={10}
                placeholder="Description"
              />
              <input
                value={nimage}
                onChange={(u) => {
                  setNimage(u.target.value)
                }}
                placeholder='Please enter url image'
              />
            </div>
            <div className='image-content'>
              <img src={nimage} alt="" />
            </div>
            <button
              className='bt-save'
              onClick={() => {
                setCbutton(false)
                editBT()
              }}
            >
              Save
            </button>
          </div>
        </div>
        )}
    </div>
  )
}
