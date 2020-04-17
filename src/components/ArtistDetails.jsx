import React, { Component } from 'react'
import axios from "axios"
import DefaultLayout from "../layout/Default";
const URL = process.env.REACT_APP_DOMAIN


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
        axios.get(`${URL}artist/artist-detail/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ artist: response.data })
            })
    }
    render() {
        return (
            <DefaultLayout>
                <h1 className="title is-3">{this.state.artist.name}</h1>
                <h1 className="title is-5">{this.state.artist.work}</h1>
                <h1 className="title is-6">Studio : {this.state.artist.studio}</h1>
                <h1>Contact : {this.state.artist.email}</h1>
                <img className="bigger" src={this.state.artist.image} alt="" />
                <h1 className="title is-6">Work :</h1>
                <div className="columns">

                    {this.state.artist.tattoos.map((tat, index) => {
                        return (<div key = {index} className="column mt"><img className="bigger" src={tat.imgPath} alt="" /> </div>)
                    })}
                </div>
            </DefaultLayout>
        )
    }
}

export default ArtistDetails
