import { useDispatch } from "react-redux";
import { PRO_LOGO } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispach=useDispatch()
  const handleClick=((item)=>{
    dispach(addItem(item))
  })
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
            
            <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>- ₹{Math.floor(item.card.info.defaultPrice/100) || item.card.info.price / 100}</span>
          </div>
          <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
                <div className="absolute">
                <button className="p-2 bg-gray-500 text-white shadow-lg  rounded-lg m-auto"
                onClick={()=>handleClick(item)}
                >Add +</button>
                </div>
                <img src={PRO_LOGO+item.card.info.imageId} className="w-full rounded-lg shadow-lg " />
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
