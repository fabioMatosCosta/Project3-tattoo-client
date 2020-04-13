import React, { Component } from 'react'
import {getTattoos} from "../utils/tattoos"
import axios from "axios"

class ArtistDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                artist:{}
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
              <h1>{this.state.tattoos.category}</h1>
             <img src={this.state.tattoos.imgPath} alt=""/> 
             {/* <h1>{this.state.tattoos.artist.name}</h1> */}
            </div>
        )
    }
}

export default ArtistDetails
