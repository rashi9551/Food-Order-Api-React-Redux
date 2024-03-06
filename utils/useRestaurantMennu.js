import { useState,useEffect } from 'react'
import { Menu } from './constants'

function useRestaurantMennu(resId) {
    const [resInfo,setResInfo]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch(Menu+resId)
        const json=await data.json()
        setResInfo(json.data)
    }
    return resInfo
}

export default useRestaurantMennu
