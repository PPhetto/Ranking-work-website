"use client"
import { useState } from "react"
import '../Home/home.css';
import { Moreinfo } from "@/types/Post";

export default function Moredetailbutton({title,description,image} : Moreinfo) {

    const [ititle,setItitle] = useState(title)
    const [idescription,setIdescription] = useState(description)
    const [iimage,setIimage] = useState(image)

    // checkbutton
    const [cmore,setCmore] = useState(false)
  return (
    <div>
        <button
            onClick={() => {
                setCmore(true)
            }}
        >
            More...
        </button>
        {cmore && (
          <div className='popup-createbt'>
            <div className='popup-content'>
              <h3>View information</h3>
              <div className='input-content'>
                <input
                  value={ititle}
                  disabled 
                  onChange={(t) => {
                    setItitle(t.target.value)
                  }}
                  placeholder='Title Post'
                />
                <textarea
                  value={idescription}
                  disabled 
                  onChange={(d) => {
                    setIdescription(d.target.value)
                  }}
                  rows={10}
                  placeholder="Description"
                />
                <input
                  value={iimage}
                  disabled 
                  onChange={(u) => {
                    setIimage(u.target.value)
                  }}
                  placeholder='Please enter url image'
                />
              </div>
              <div className='image-content'>
                <img src={image} alt="" />
              </div>
              <button
                className='bt-save'
                onClick={() => {
                  setCmore(false)
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  )
}
