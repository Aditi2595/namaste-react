import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name"
            }
        }
        console.log("Constructor" + this.props.name);
        //Cannot mutate
    }

    async componentDidMount(){
        //API calls
        
        const data = await fetch("https://api.github.com/users/Aditi2595")
        const json = await data.json();
        this.setState ({
            userInfo: json
        })
        console.log("Component Did Mount" + this.props.name);
        
    }

    componentDidUpdate() {
        console.log("Child component did update")
    }
    render(){
        console.log("render" + this.props.name);
        return (
            <div>
                <h1>This is a class base Profile page</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                {/* we donot mutate state directly */}
                <button onClick={() => {
                    this.setState({
                        count: 1
                    });
                }}>Count</button>
            </div>
        )
    }   
}

export default Profile;