import React, { Component } from 'react'
import {Link} from "react-router-dom"

class TattooContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="column is-one-quarter-desktop is-half-tablet">
                <Link to= {`/tattoo-details/${this.props.id}`}>
                <div>
                    <img className="bigger" src={this.props.img} alt={this.props.alt} />
                </div>
                <div>
                    <p>{this.props.alt}</p>
                    <button  className="button is-black is-rounded" >Find out more</button>
                </div>
                </Link>
            </div>
            
        )
    }
}

export default TattooContainer
