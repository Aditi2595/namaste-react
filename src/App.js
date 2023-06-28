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
import {React, lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About.js"
import Error from "./components/Error.js"
import Contact from "./components/Contact.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import Profile from "./components/Profile.js"
import Shimmer from "./components/Shimmer.js"

const Instamart = lazy(() => import("./components/Instamart.js"))

const AppLayout = () => {
    return (
        <div className="main-app">
            <Header />
            <Outlet />
        </div>
    )
    
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile", // this indicates the path as /about/profile
                        element: <Profile/>
                    },

                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resID",
                element: <RestaurantMenu/>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
    



