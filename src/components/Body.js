import RestaurantCard from "./RestaurantCard.js";
import { resObj } from "../utils/mockData.js";
import { useState } from "react";
import { useEffect } from "react"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom"

// not using keys(not acceptable) <<<<< index as key(last option) <<<<<< unique id as key(best practice)

function filteredData(searchText, listOfRestaurants){
    const updatedList = listOfRestaurants.filter(
        (restaurant) => restaurant.data.name.includes(searchText));
    console.log(updatedList)
    return updatedList
}

const Body = () => {

    // Using useState 
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurantList, setfilteredRestaurantList] = useState([])
    const [searchText, setSearchText] = useState("")
    //Normal JS Object
    //if we make an API call
    useEffect(() => {
        //API call
        getRestaurants();
    }, []);

    // early Rendering(to avoid component loading)
    if(!listOfRestaurants) return null;

    // if (filteredRestaurantList?.length === 0){
    //     return <h1>No result found for your search!!</h1>
    // }
   

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.939247407822167&lng=77.62980792671442&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setfilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    }
    return listOfRestaurants?.length === 0 ? (<Shimmer/>) : 
     (
    <>
        <div className="body">
            <div className="filter">
                <input type="text" placeholder='Search' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                }}></input>
                <button className="search-btn" onClick={() => {
                    const updatedList = filteredData(searchText, listOfRestaurants)
                    setfilteredRestaurantList(updatedList)
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
                    filteredRestaurantList?.length === 0 ? <h1>No result found for your search!!</h1> : 
                    (filteredRestaurantList.map((restaurant) => (
                        <Link key={restaurant.data.id} to={"/restaurant/" + restaurant.data.id}><RestaurantCard resData={restaurant} /></Link>
                    )))
                }
            </div>
        </div>
    </>
)
}
export default Body;