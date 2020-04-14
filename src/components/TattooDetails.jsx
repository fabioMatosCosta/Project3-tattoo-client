import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import DefaultLayout from "../layout/Default";

class TattooDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tattoos:{
                    category: "",
                    imgPath: "",
                    artist:{
                        name: "",
                        _id: ""
                    }
                }
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/tattoos/tattoo-detail/${this.props.match.params.id}`)
        .then(response => {
            this.setState({tattoos: response.data})
        })
    }
    
    render() {
        return (
            <DefaultLayout>
                <h1>{this.state.tattoos.category}</h1>
                <img src={this.state.tattoos.imgPath} alt=""/> 
                <Link to = {`/artist-details/${this.state.tattoos.artist._id}`}>
                    <h1>{this.state.tattoos.artist.name}</h1>
                </Link>
            </DefaultLayout>
        )
    }
}

export default TattooDetails
