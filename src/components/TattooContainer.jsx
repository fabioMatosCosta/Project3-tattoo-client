import React, { Component } from 'react'

class TattooContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="column is-one-quarter-desktop is-half-tablet">
                <div>
                    <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div>
                    <p>{this.props.alt}</p>
                    <button>Find out more</button>
                </div>
            </div>
        )
    }
}

export default TattooContainer
