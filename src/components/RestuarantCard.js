import { PRO_LOGO } from '../../utils/constants'
const RestuarantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData.info
    return (
        <div className="res-card m-4 p-4 ml-24 bg-gray-100 rounded-lg w-[250px] h-[415px] shadow-lg  hover:bg-gray- 300 " >
            <img className="rounded-lg w-48 h-48 " alt='logo' src={PRO_LOGO + cloudinaryImageId} />
            <h4 className='font-bold py-4 text-lg'>{name}</h4>
            <h5>{cuisines.slice(0, 3).join(",")}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.slaString}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}
export const withPromoted = (RestuarantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 ml-24 p-2 rounded-lg">Promoted</label>
                <RestuarantCard {...props} />
            </div>
        );
    };
};
export default RestuarantCard;