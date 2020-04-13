import React, { Component } from 'react'
import {Link} from "react-router-dom"

class TattooContainerHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="column is-one-quarter-desktop is-half-tablet">
                <Link to= {`/signup`}>
                <div>
                    <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div>
                    <p>{this.props.alt}</p>
                    <button>Find out more</button>
                </div>
                </Link>
            </div>
            
        )
    }
}

export default TattooContainerHome
