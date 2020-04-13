import React, { Component } from 'react'
import {getTattoos} from "../utils/tattoos"
import axios from "axios"

class ArtistDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
<<<<<<< HEAD
                artist:{},
                
=======
                artist:{
                    name: "",
                    image: "",
                    tattoos: []
                }
>>>>>>> 8138e509d7be9e34bb4046b1fac50b787f325920
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
            <div>
                {this.state.artist.tattoos.map((tat,index)=>{
                    return <img src={tat.imgPath} alt=""/>
                })}
<<<<<<< HEAD
              <h1>{this.state.artist.category}</h1>
             <img src={this.state.artist.imgPath} alt=""/> 
             {/* <h1>{this.state.tattoos.artist.name}</h1> */}
=======
                <h1>{this.state.artist.name}</h1>
                <img src={this.state.artist.image} alt=""/>
>>>>>>> 8138e509d7be9e34bb4046b1fac50b787f325920
            </div>
        )
    }
}

export default ArtistDetails
