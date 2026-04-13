"use client"
import '../../Home/home.css';
import { useEffect, useState, use } from "react"
import { Post, Postsec } from "@/types/Post"
import Menubar from '@/app/component/menubar';
import Deletebutton from '@/app/component/deletebutton';
import Editbutton from '@/app/component/editbutton';
import Moredetailbutton from '@/app/component/moredetailbutton';

export default function Rankinpage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = use(params)
    const [crole,setCrole] = useState("")
    const  [posts,setPosts] = useState<Post[]>([])

    useEffect(() => {
      async function fetctPostin() {
        const res = await fetch(`/api/rankin?username=${username}`)
        const data: Postsec = await res.json()
        setPosts(data.post)
        setCrole(data.role)
        
      }
      fetctPostin()
    }, [username])
  return (
    <div className='layout-page-home'>
      <Menubar />แก

      <div className='box-content-home'>
        <h3>{username} Working</h3>
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
                {crole === "user" &&
                  <div className='btinfo-card-home'>
                    <Moredetailbutton title={post.title} description={post.description} image={post.image}/>
                  </div>
                }
                {crole === "admin" &&
                  <div className='btinfo-card-home'>
                    <Moredetailbutton title={post.title} description={post.description} image={post.image}/>
                    <Editbutton _id={post._id} title={post.title} description={post.description} image={post.image}/>
                    <Deletebutton _id={post._id} />
                  </div>
                }
                {/* <div className='btinfo-card-home'>
                  <Moredetailbutton title={post.title} description={post.description} image={post.image}/>
                  <Editbutton _id={post._id} title={post.title} description={post.description} image={post.image}/>
                  <Deletebutton _id={post._id} />
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
