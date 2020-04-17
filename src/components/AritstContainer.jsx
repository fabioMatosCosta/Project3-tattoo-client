import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./ArtistContainer.scss"

class ArtistContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="column is-one-quarter-desktop is-half-tablet mt">
                <Link to={`/artist-details/${this.props.id}`}>
                    <div>
                        <img className="bigger" src={this.props.img} alt={this.props.alt} />
                    </div>
                    <div>
                        <p>{this.props.alt}</p>
                        <h1>{this.props.work}</h1>
                        <button className="button is-black is-rounded" >Find out more</button>
                    </div>
                </Link>
            </div>

        )
    }
}

export default ArtistContainer
