import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const {resData} = props
    return(
        <div className="w-56 m-2 p-2 shadow-lg" style={{backgroundColor: "#f0f0f0"}}>
            <img alt="res-logo" className="res-logo" src={CDN_URL + resData.data.cloudinaryImageId }/>
            <h3 className="text-xl">{resData.data.name}</h3>
            <h5>{resData.data.cuisines.join(', ')}</h5>
            <h5>₹{resData.data.costForTwo/100} FOR TWO</h5>
            <h5>{resData.data.avgRating} stars</h5>
            <h5>{resData.data.deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard;