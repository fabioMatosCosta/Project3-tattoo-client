import React, { Component } from 'react'
import {getTattoos} from "../utils/tattoos"

class TattooDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 tattoos:getTattoos()
        }
    }

    render() {
        return (
            <div>
             <h1>{this.state.tattoos.name}</h1>
             <h1>{this.state.tattoos.category}</h1>
             {/* <h1>{this.state.tattoos.first_brewed}</h1>
             <h1>{this.state.tattoos.description}</h1>
             <h1>{this.state.tattoos.attenuation_level}</h1> */}
            </div>
        )
    }
}

export default TattooDetails
