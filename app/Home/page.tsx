"use client"
import './home.css';
import { Post } from '@/types/Post';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Createbutton from '../component/createbutton';
import Deletebutton from '../component/deletebutton';
import Editbutton from '../component/editbutton';
import Authcheck from '../component/authCheck'
import Moredetailbutton from '../component/moredetailbutton';
import Menubar from '../component/menubar';

export default function Homepage() {

  const [posts,setPosts] = useState<Post[]>([])



  useEffect (() => {
    const userId = localStorage.getItem("userId")
    async function fetchPost() {
      const res = await fetch(`/api/createPost?userId=${userId}`)
      const data: Post[] = await res.json()
      setPosts(data)
    }
    fetchPost()
  }, [])


  return (
    <div className='layout-page-home'>
      <Authcheck />
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
          {/* <li>
            <div className='title-card-home'>
              <p>
                Uma-musume JP website-practice
              </p>
            </div>
            <div className='line-style'></div>
            <div className='description-card-home'>
              <p>
                Description :
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum at cumque laboriosam. Voluptatibus expedita debitis libero aut labore ex tempore placeat iusto minima? Consectetur repudiandae veniam perferendis voluptas doloremque?
              </p>
            </div>
            <div className='pic-card-home'>
              <div className='picture-info'>
                <img src="" alt="" />
              </div>
              <div className='btinfo-card-home'>
                <button>
                  More...
                </button>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
