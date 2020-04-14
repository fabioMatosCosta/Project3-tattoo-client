import React, { Component } from 'react'
import {getTattoos} from "../utils/tattoos"
import axios from "axios"

class ArtistDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                artist:{
                    name: "",
                    image: "",
                    tattoos: []
                }
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/artist/artist-detail/${this.props.match.params.id}`)
        .then(response => {
            this.setState({artist: response.data})
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.artist.name}</h1>
                <img src={this.state.artist.image} alt=""/>
                <div className="columns">
               
                {this.state.artist.tattoos.map((tat,index)=>{
                    return (<div className="column"><img src={tat.imgPath} alt=""/> </div>)
                })}
            </div>
            </>
        )
    }
}

export default ArtistDetails
