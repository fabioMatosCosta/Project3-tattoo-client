import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { getArt } from '../utils/authArt';
import ArtistContainer from '../components/ArtistContainer'
import { Link } from "react-router-dom"

class Artists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: getArt()
        }
    }

    render() {
        return (
            <DefaultLayout>
                    <div className="columns is-multiline">
                        {this.state.artists.map((artist, index) => {
                            return (<ArtistContainer key={index} id={artist._id} img={artist.imgPath} alt={artist.category} />)
                        })}
                    </div>
            
            </DefaultLayout>
        )
    }
}

export default Artists