import { useState } from "react"
import ItemList from "./itemList"

const RestaurantCategory=({data,showItems,setShowIndex,index})=>{
    const [upState,setUpState]=useState(true)
    const handleClick=()=>{
        setUpState(!upState)
        if(upState)
        {
            setShowIndex(index)
            console.log(index,upState);
        }else{
            setShowIndex(null)
        }

        
    }
    return ( 
        <div>
            <div className="w-6/12  mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
                <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()}>
                    <span className="font-bold text-lg" >
                        {data.title}({data.itemCards.length})
                        </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory
// ru r- u r u2 r-
// u r u- l- u r- u- l 
// r- d- r d