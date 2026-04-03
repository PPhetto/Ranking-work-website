"use client"
import './home.css';
import { Post } from '@/types/Post';
import { useEffect, useState } from 'react'
import Createbutton from '../component/createbutton';
import Deletebutton from '../component/deletebutton';
import Editbutton from '../component/editbutton';
import Moredetailbutton from '../component/moredetailbutton';
import Menubar from '../component/menubar';

export default function Rankinpage() {

  const [posts,setPosts] = useState<Post[]>([])

  useEffect (() => {
    const userId = localStorage.getItem("userId")
    const userRole = localStorage.getItem("role")
    async function fetchPost() {
      let url = ""
      if (userRole === "admin") {
        url = "/api/createPost"
      } else  {
        url = `/api/createPost?userId=${userId}`
      }
      // const res = await fetch(`/api/createPost?userId=${userId}`)
      const res = await fetch(url)
      const data: Post[] = await res.json()
      setPosts(data)
    }
    fetchPost()
  }, [])


  return (
    <div className='layout-page-home'>
      <Createbutton />
      <Menubar />

      <div className='box-content-home'>
        <h3>Your Working</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={post._id}>
              <div className='title-card-home'>
                <p>
                  {post.title}
                </p>
              </div>
              <div className='line-style'></div>
              <div className='description-card-home'>
                <p>
                  : Description :
                </p>
                <p>
                  {post.description}
                </p>
              </div>
              <div className='pic-card-home'>
                <div className='picture-info'>
                  <img src={post.image} alt="" />
                </div>
                <div className='btinfo-card-home'>
                  <Moredetailbutton title={post.title} description={post.description} image={post.image}/>
                  <Editbutton _id={post._id} title={post.title} description={post.description} image={post.image}/>
                  <Deletebutton _id={post._id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
