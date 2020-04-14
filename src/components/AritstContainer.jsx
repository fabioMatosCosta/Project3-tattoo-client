import React, { Component } from 'react'
import {Link} from "react-router-dom"

class ArtistContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="column is-one-quarter-desktop is-half-tablet">
                <Link to= {`/artist-details/${this.props.id}`}>
                <div>
                    <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div>
                    <p>{this.props.alt}</p>
                    <button>Find out more</button>
                    <h1>{this.props.work}</h1>
                </div>
                </Link>
            </div>
            
        )
    }
}

export default ArtistContainer
