import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import {Menu} from '../../utils/constants'

function RestaurantMenu() {
    const [resInfo,setResInfo]=useState([])
    const {resId}=useParams()
     useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch(Menu+resId)
        const json=await data.json()
        setResInfo(json.data)
    }
    console.log(resInfo,"kaya");
    if (resInfo.length === 0 || !resInfo.cards || !resInfo.cards[0]?.card?.card?.info) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0]?.card?.card?.info || {}
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
    <div className='menu'> 
        <h1>{name}</h1>
        <p>{cuisines.join(",")}-{costForTwoMessage}</p>
        <h1>Menu</h1>
        <ul>
            {
                itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>)}   
        </ul>
    </div>
  )
}
export default RestaurantMenu

