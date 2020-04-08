import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: ""
        }
    }   

    componentDidMount(){
        axios.get("http://localhost:3001/")
        .then((response)=> {
            debugger
            this.setState({name: response.data.name})
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Home
