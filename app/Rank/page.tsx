"use client"
import './rank.css';
import Menubar from '../component/menubar';
import { Rank } from '@/types/Post';
import { useEffect, useState } from 'react';

export default function Rankpage() {
    
    const [datauser,setDatauser] = useState<Rank[]>([])

    useEffect(() => {
        async function apiRank() {
            const res = await fetch("/api/rank")
            const data = await res.json()        

            setDatauser(data)
        }
        apiRank()
    }, [])

  return (
    <div className="layout-rankpage">
        <Menubar />
        <div className='title-top-ranking'>
            <h3>Ranking</h3>
        </div>
        <div className='box-content-rankpage'>
            <ul>
                {datauser.map((user, index) => (
                    <li key={index}>
                        <div className='index'>
                            <p>{index + 1}</p>
                        </div>
                        <div className='username'>
                            <a href="">
                                <p>{user.username}</p>
                            </a>
                        </div>
                        <div className='cPost'>
                            <p>{user.postcount}</p>
                        </div>
                    </li>                   
                ))}
            </ul>
        </div>
    </div>
  )
}
