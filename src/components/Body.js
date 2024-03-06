import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [datas, setDatas] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchText,setSearchText]=useState("")
  const onlineStat=useOnlineStatus()
  console.log(onlineStat)
  useEffect(() => {
    
    fetchData();
    
  }, []);

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setDatas(ogData);
    setFilteredRestaurant(ogData)
};
if(onlineStat===false){
  return <p>The internet coonnection was lost</p>
}else{

return datas.length==0?<Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText}
             onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={()=>{
                let editData=datas.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                setFilteredRestaurant(editData)
            }}>Search</button>
        </div>
        <button 
          className="filter-btn"
          onClick={() => {
            let editData = filteredRestaurant.filter((res) => res.info.avgRating > 4.5);
            setFilteredRestaurant(editData);
          }}
        >
          TAP HERE TO FILTER
        </button>
      </div>
      <div className="res-continer">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant, ind) => (
           <Link key={restaurant.info.id}  to={'restaurants/'+restaurant.info.id}> <RestuarantCard resData={restaurant} /></Link> 
          ))}
      </div>
    </div>
  );
  }
};

export default Body;



