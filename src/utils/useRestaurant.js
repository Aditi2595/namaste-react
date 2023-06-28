import { useState, useEffect } from "react"
import { MENU_URL } from "./constants";

const useRestaurant = (resID) => {

    const [restaurantMenuData, setRestaurantMenuData] = useState(null)


    useEffect(() => {
        getRestaurantData();
    }, []);
    // Get API data
    async function getRestaurantData() {
        const data = await fetch(MENU_URL + resID);
        const json = await data.json();
        console.log(json);
        setRestaurantMenuData(json.data)

    }
    //return restaurant data
    return restaurantMenuData
}

export default useRestaurant;