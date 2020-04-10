import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from "../layout/Default";
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
            this.setState({name: response.data.name})
        })
    }

    render() {
        return (
            <DefaultLayout>
                <h1>{this.state.name}</h1>
            </DefaultLayout>
        )
    }
}

export default Home
