import React, { Component } from 'react'
import {getTat} from "../utils/tattoos"
import axios from "axios"

class TattooDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tattoos: getTat(this.props.match.params.id)
        }
    }
    // componentDidMount() {
    //     axios.get(`http://localhost:5000/tattoos/tattoo-detail/${this.props.match.params.id}`)
    //     .then(response => {
    //       this.setState({tattoos: response.data})
    //   })
    // }
    render() {
        return (
            <div>
             {/* <h1>{this.state.tattoos._id}</h1> */}
             <h1>{this.state.tattoos.category}</h1>
             <img src={this.state.tattoos.imgPath} alt=""/> 
             {/* <h1>{this.state.tattoos.artist.name}</h1> */}
            </div>
        )
    }
}

export default TattooDetails
