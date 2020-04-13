import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from "../layout/Default";
import Tattoos from "./Tattoos"

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            tattoos:Tattoos
        }
    }   

    // componentDidMount(){
    //     axios.get("http://localhost:3001/")
    //     .then((response)=> {
    //         this.setState({name: response.data.name})
    //     })
    // }

    render() {
        return (
            <DefaultLayout>
                <h1>{this.state.tattoos}</h1>
            </DefaultLayout>
        )
    }
}

export default Home
