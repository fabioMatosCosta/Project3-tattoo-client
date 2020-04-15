import React, { Component } from 'react'
import { getTattoos } from "../utils/tattoos"
import axios from "axios"
import DefaultLayout from "../layout/Default";

class ArtistDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: {
                name: "",
                image: "",
                tattoos: []
            }
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/artist/artist-detail/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ artist: response.data })
            })
    }
    render() {
        return (
            <DefaultLayout>
                <h1 className="title is-3">{this.state.artist.name}</h1>
                <h1 className="title is-5">{this.state.artist.work}</h1>
                <h1 className="title is-6">{this.state.artist.studio}</h1>
                <h1>{this.state.artist.email}</h1>
                <img src={this.state.artist.image} alt="" />
                <div className="columns">

                    {this.state.artist.tattoos.map((tat, index) => {
                        return (<div className="column mt"><img src={tat.imgPath} alt="" /> </div>)
                    })}
                </div>
            </DefaultLayout>
        )
    }
}

export default ArtistDetails
