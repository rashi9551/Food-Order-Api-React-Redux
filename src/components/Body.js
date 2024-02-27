import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {
  const [datas, setDatas] = useState([]);
  const [searchText,setSearchText]=useState("")
  useEffect(() => {
    fetchData();
    
  }, []);

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setDatas(ogData);
};

return datas.length==0?<Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText}
             onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={()=>{
                let editData=datas.filter((res)=>res.info.name.includes(searchText) )
                setDatas(editData)
            }}>Search</button>
        </div>
        <button 
          className="filter-btn"
          onClick={() => {
            let editData = datas.filter((res) => res.info.avgRating > 4.4);
            setDatas(editData);
          }}
        >
          TAP HERE TO FILTER
        </button>
      </div>
      <div className="res-continer">
        {datas &&
          datas.map((restaurant, ind) => (
            <RestuarantCard key={ind} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};
export default Body;



