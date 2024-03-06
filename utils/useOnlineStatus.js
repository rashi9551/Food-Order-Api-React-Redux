import React, { useEffect, useState } from 'react'

function useOnlineStatus() {

    const [onlineStat,setOnlineStat]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStat(false)
        })
        window.addEventListener("online",()=>{
            setOnlineStat(true)
        })
        
    },[])
  return onlineStat
}

export default useOnlineStatus
