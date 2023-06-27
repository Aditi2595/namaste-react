import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 0
        }
        console.log("Constructor" + this.props.name);
        //Cannot mutate
    }

    componentDidMount(){
        //API calls
        console.log("Component Did Mount" + this.props.name);
    }
    render(){
        console.log("render" + this.props.name);
        return (
            <div>
                <h1>This is a class base Profile page</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
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