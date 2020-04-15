import React, { Component } from 'react'
import DefaultLayout from "../../layout/Default";
import ArtistContainer from "../../components/AritstContainer"
import {getArtistList} from "../../utils/artistsList"

class TattooArtists extends Component {
    constructor(props) {
        super(props)

        this.state = {
         artists:getArtistList()
        }
    }

    render() {
        return (
            <DefaultLayout>
                <div className="columns is-multiline">
                  {this.state.artists.map((artist,index)=>{
                      return (<ArtistContainer key={index} img={artist.image.imgPath} id={artist._id} alt={artist.name} work={artist.work} />)
                  })}
                </div>
            </DefaultLayout>
        )
    }
}

export default TattooArtists
