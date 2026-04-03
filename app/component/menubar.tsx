"use client"
import '../Home/home.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Menubar() {

  const router = useRouter()
  const user = localStorage.getItem("userN")

  async function logout() {
    localStorage.removeItem("userId")
    // console.log(localStorage.getItem("userId"))
    router.push("/")
  }

  return (
  <nav className='navbar-content-top'>
    <ul>
      <li>
        <Link href="/Home">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link href="/Rank">
          <p>Rank</p>
        </Link>
      </li>
      <li>
        <Link href="/Home"
          className='UID-username'
        >
          <p>UID : {user}</p>
        </Link>
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
  )
}
