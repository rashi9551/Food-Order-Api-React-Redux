import {PRO_LOGO} from '../../utils/constants'
const RestuarantCard=(props)=>{
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData.info
    return (
        <div className="res-card">
            <img className="res-logo" alt='logo' src={PRO_LOGO+cloudinaryImageId} />
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating}</h5>
            <h5>{resData.info.sla.deliveryTime}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}
export default RestuarantCard