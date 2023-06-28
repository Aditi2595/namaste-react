export function filteredData(searchText, listOfRestaurants){
    const updatedList = listOfRestaurants.filter(
        (restaurant) => restaurant.data.name.includes(searchText));
    console.log(updatedList)
    return updatedList
}