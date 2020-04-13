import React, { Component } from 'react'
import {getTattoos} from "../utils/tattoos"
import axios from "axios"

class TattooDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 tattoos:{}
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/tattoos/tattoo-detail/${this.props.match.params.id}`)
        .then(response => {
            debugger
          this.setState({tattoos: response.data})
      })
    }
    render() {
        return (
            <div>
             <h1>{this.state.tattoos._id}</h1>
             <h1>{this.state.tattoos.category}</h1>
             <h1>{this.state.tattoos.imgPath}</h1>
             <h1>{this.state.tattoos.artist.name}</h1>
            </div>
        )
    }
}

export default TattooDetails
