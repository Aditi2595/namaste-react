/**
 <Header/>
  - Logo
  - Navigation bar
 <Body />
    - Search bar
    - RestaurantContainer
        - RestaurantCard
            - Img
            - Name of res, start rating, ETA, cuisine, price estimation,
 <Footer />
    - Copyright
    - links
    - address
    - contact
 */
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"


const AppLayout = () => {
    return (
        <div className="main-app">
            <Header />
            <Body />
        </div>
    )
    
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
    



