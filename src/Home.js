import React from 'react';
import sha256 from "sha256";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render(){
        return (
            <div>
                <h1>This calculates SHA256 Hash of all your messages!</h1>
                <input onChange={this.handleChange}></input>
                <h3> SHA256 Hash: {sha256(this.state.message)} </h3>
            </div>
        )
    }
}

export default Home;
