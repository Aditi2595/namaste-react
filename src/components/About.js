import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js"
import ProfileFunctionalComponent from "./Profile.js";
import { Component } from "react/cjs/react.production.min.js";


class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount(){
        //API calls
        console.log("Parent ComponentDidMount");
    }

    render() {
        return (
            <div>
                <h1>This is about page.</h1>
                <Outlet/>
                {/* <ProfileFunctionalComponent name={"Aditi"}/> */}
                <Profile name={"Child One"}/>
                {/* <Profile name={"Second Child"}/> */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is about page.</h1>
//             <Outlet/>
//             {/* <ProfileFunctionalComponent name={"Aditi"}/> */}
//             <Profile name={"Child One"}/>
//             <Profile name={"Second Child"}/>
//         </div>
//     )
// }

export default About;