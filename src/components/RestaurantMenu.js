import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [restaurantMenuData, setRestaurantMenuData] = useState(null)
    const {resID} = useParams()

    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch(MENU_URL + resID);
        const json = await data.json();
        console.log(json);
        setRestaurantMenuData(json.data)

    }
    if (restaurantMenuData === null) return <Shimmer/>;

    const {itemCards} = restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    

    console.log(resID)
    return (
        <div>
            <h1>Restaurant id: {resID}</h1>
            <h2>{restaurantMenuData?.cards[0]?.card?.card?.info?.name}</h2>
            <img alt="res-logo" src={CDN_URL + restaurantMenuData?.cards[0]?.card?.card?.info?.cloudinaryImageId }/>
            <h2>Menu Items</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
            

        </div>
    )
}

export default RestaurantMenu;