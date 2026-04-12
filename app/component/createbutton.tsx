"use client"
import { useEffect, useState } from 'react'
import '../Home/home.css';
export default function Createbutton() {

  const [ntitle,setNtitle] = useState("")
  const [ndescription,setNdescription] = useState("")
  const [url,setUlr] = useState("https://media.online-station.net/images/2021/09/e7b8bec8c42189db2e921fd106d3464a.webp")
  // const [uid,setUid] = useState<string | null>(null)

  const [open,setOpen] = useState(false)

  const hSave = async () => {
    if(!ntitle) {
      alert("Please your title ?")
      return
    }
    // const userId = localStorage.getItem("userId")
    try {
      const res = await fetch("/api/createPost",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          title: ntitle,
          description: ndescription,
          image: url,
          // user: userId
        })
      })
      location.reload()
      // const data = await res.json()
      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  
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
                  value={url}
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
                  hSave()
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
