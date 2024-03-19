import { useState, useEffect,useContext } from "react";
import  {withPromoted} from "./RestuarantCard";
import RestuarantCard from "./RestuarantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "./useContext";

const Body = () => {
  const [datas, setDatas] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchText,setSearchText]=useState("")
  const onlineStat=useOnlineStatus()
  // const {SetUserName}=useContext(userContext)

  const RestaurantCardPromoted=withPromoted(RestuarantCard)
  useEffect(() => {
    
    fetchData();
    
  },[]);

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(response?.data?.data?.cards);
    setDatas(ogData);
    setFilteredRestaurant(ogData)
};
if(onlineStat===false){
  return <p>The internet coonnection was lost</p>
}else{

return datas.length==0?<Shimmer/>: (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-auto p-4">
            <input type="text" className="border w-64 h-9 rounded-lg border-solid border-block" placeholder="Search" value={searchText}
             onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className=" px-4 py-2 bg-black   text-white m-3 rounded-lg hover:bg-slate-400 hover:text-black"
            onClick={()=>{
                let editData=datas.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                setFilteredRestaurant(editData)
            }}>Search</button>
          <button 
            className=" px-4 py-2 bg-black  text-white hover:bg-slate-400 rounded-lg "
            onClick={() => {
              let editData = filteredRestaurant.filter((res) => res.info.avgRating > 4.2);
              setFilteredRestaurant(editData);
            }}
          >
            MostRated
          </button>
        </div>
        {/* <div className=" m-4 p-4 flex items-center">
        <div className=" px-4 mx-4">
          <label htmlFor="" >userName : </label>
          <input type="text" className="border-black border" onChange={(e)=>SetUserName(e.target.value)}/>

        </div>
        </div> */}
      </div>
      <div className="flex flex-wrap ml-28">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant, ind) => (
           <Link key={restaurant.info.id}  to={'restaurants/'+restaurant.info.id}> 
          {restaurant.info.avgRating > 4.2?(<RestaurantCardPromoted resData={restaurant}/>):(
           <RestuarantCard resData={restaurant} />)}
           
           </Link> 
          ))}
      </div>
    </div>
  );
  }
};

export default Body;
