import RestaurantCard from "./RestaurantCard.js";
import { resObj } from "../utils/mockData.js";
import { useState } from "react";

// not using keys(not acceptable) <<<<< index as key(last option) <<<<<< unique id as key(best practice)

function filteredData(searchText, listOfRestaurants){
    const updatedList = listOfRestaurants.filter(
        (restaurant) => restaurant.data.name.includes(searchText));
    console.log(updatedList)
    return updatedList
}

const Body = () => {

    // Using useState 
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj)
    const [restaurantList, setRestaurantList] = useState(resObj)
    const [searchText, setSearchText] = useState("")
    //Normal JS Object
    let listOfRestaurants2 = [
    {
    "type": "restaurant",
    "data": {
    "id": "41099",
    "name": "Nagarjuna",
    "uuid": "23046fed-8697-4502-831a-9826d596cf07",
    "cloudinaryImageId": "q6iscdoqvjbsmugvo4tn",
    "avgRating": "4.4",
    "deliveryTime": 32,
    "costForTwo": 60000,
    "cuisines": [
    "Andhra",
    "South Indian",
    "Biryani",
    "Beverages",
    "Desserts"
    ]
    }},
    {
        "type": "restaurant",
        "data": {
        "id": "41100",
        "name": "KFC",
        "uuid": "23046fed-8697-4502-831a-9826d596cf07",
        "cloudinaryImageId": "q6iscdoqvjbsmugvo4tn",
        "avgRating": "3.8",
        "deliveryTime": 32,
        "costForTwo": 60000,
        "cuisines": [
        "Andhra",
        "South Indian",
        "Biryani",
        "Beverages",
        "Desserts"
        ]
    }},
    {
        "type": "restaurant",
        "data": {
        "id": "41101",
        "name": "MCD",
        "uuid": "23046fed-8697-4502-831a-9826d596cf07",
        "cloudinaryImageId": "q6iscdoqvjbsmugvo4tn",
        "avgRating": "4.3",
        "deliveryTime": 32,
        "costForTwo": 60000,
        "cuisines": [
        "Andhra",
        "South Indian",
        "Biryani",
        "Beverages",
        "Desserts"
        ]
    }}];
    return(
        <div className="body">
            <div className="filter">
                <input type="text" placeholder='Search' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                }}></input>
                <button className="search-btn" onClick={() => {
                    const updatedList = filteredData(searchText, listOfRestaurants)
                    setListOfRestaurants(updatedList)
                }}>Search</button> 
                <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                setListOfRestaurants(filteredList)
            }}
                >
                    Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
                {/* use map function to make it reusable component */}
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
                {/* {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                } */}
                {/* <RestaurantCard resName="Meghna Foods" cuisine="Biryani, Mughlai, North Indian" /> */}
            </div>
        </div>
    )
}
export default Body;