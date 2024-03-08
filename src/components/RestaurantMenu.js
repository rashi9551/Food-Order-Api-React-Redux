import { useParams } from "react-router-dom";
import useRestaurantMennu from "../../utils/useRestaurantMennu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./ResCategory";
import { useState } from "react";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMennu(resId);

  const [showindex,setShowIndex]=useState(0) 
  if (
    resInfo.length === 0 ||
    !resInfo.cards ||
    !resInfo.cards[0]?.card?.card?.info
  ) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showindex ? true : false } 
          setShowIndex={(index)=>setShowIndex(index)}
          index={index}
          
        />
      ))}
    </div>
  );
}
export default RestaurantMenu;
