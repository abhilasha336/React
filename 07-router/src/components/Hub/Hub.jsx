import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Hub() {

    // const [data,setData]=useState({})

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhilasha336')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    
    const data=useLoaderData()
  return (
    <div className='bg-violet-700 text-white text-3xl text-center'>Repositories Count:{data.public_repos}
    <img src={data.avatar_url}  className='align-center mx-auto' style={{width:"300px"}}></img>
    <div><a href={data.repos_url}>{data.repos_url}</a></div>
    </div>
  )
}

export default Hub

export const HubInfoLoader=async()=>{
  const response=  await fetch('https://api.github.com/users/abhilasha336')
  return response.json()
}