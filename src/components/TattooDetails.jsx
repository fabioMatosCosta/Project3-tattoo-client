
import React, { Component } from 'react'
<<<<<<< HEAD
import axios from "axios"
=======
import axios from "axios";
import {Link} from "react-router-dom";
>>>>>>> 8138e509d7be9e34bb4046b1fac50b787f325920

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
            <div>
                <h1>{this.state.tattoos.category}</h1>
                <img src={this.state.tattoos.imgPath} alt=""/> 
                <Link to = {`/artist-details/${this.state.tattoos.artist._id}`}>
                    <h1>{this.state.tattoos.artist.name}</h1>
                </Link>
            </div>
        )
    }
}

export default TattooDetails
