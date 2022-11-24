import React, { Component } from "react";
import './Wovqu.css'

class Oglan extends Component {
    state = {
        name: "Adalat",
        email: "mhgwvdwevgx@gmail.com",
        password: "wowqo"
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    deleteInput1=()=>{
        this.setState({name: ""})
    }
    deleteInput2=()=>{
        this.setState({email: ""})
    }
    deleteInput3=()=>{
        this.setState({password: ""})
    }
    render() {

        return (

            <div className="App">
                <label htmlFor="name">Name :    
                <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleInput} />
                </label> <button onClick={this.deleteInput1}>x</button>
                <br></br>
                <label htmlFor="email">Email :  
                <input type="text" value={this.state.email} id="email" name="email" onChange={this.handleInput} />
                </label><button onClick={this.deleteInput2}>x</button>
                <br></br>
                <label htmlFor="password">Pswrd : 
                <input type="password" value={this.state.password} id="password" name="password" onChange={this.handleInput} />
                </label><button onClick={this.deleteInput3}>x</button>
                <br></br>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}
export default Oglan