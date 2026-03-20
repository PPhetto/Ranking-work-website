"use client"
import './home.css';
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Authcheck from '../component/authCheck'
export default function Homepage() {
  const router = useRouter()
  async function logout() {
    localStorage.removeItem("userId")
    // console.log(localStorage.getItem("userId"))
    router.push("/")
  }
  return (
    <div className='layout-page-home'>
      <Authcheck />
      <nav className='navbar-content-top'>
        <ul>
          <li>
            <a href="">
              <p>Rank</p>
            </a>
          </li>
          <li>
            <Link 
              href="/"
              onClick={() => {logout()}}
            >
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='box-content-home'>
        <h3>Your Working</h3>
        <ul>
          <li>
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
                {/* <img src="" alt="" /> */}
              </div>
              <div className='btinfo-card-home'>
                <button>
                  More...
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
