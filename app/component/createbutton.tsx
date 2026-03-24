"use client"
import { useState } from 'react'
import '../Home/home.css';
export default function Createbutton() {

  const [open,setOpen] = useState(false)
  const [url,setUlr] = useState("")
  
  return (
    <div className='bt-create-home'>
        <button
          onClick={() => {
            setOpen(true)
          }}
        >
            Create
        </button>
        {open && (
          <div className='popup-createbt'>
            <div className='popup-content'>
              <h3>Create new post</h3>
              <div className='input-content'>
                <input
                  placeholder='Title Post'
                />
                <textarea
                  rows={10}
                  placeholder="Description"
                />
                <input
                  onChange={(u) => {
                    setUlr(u.target.value)
                  }}
                  placeholder='Please enter url image'
                />
              </div>
              <div className='image-content'>
                <img src={url} alt="" />
              </div>
              <button
                className='bt-save'
                onClick={() => {
                  setOpen(false)
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
