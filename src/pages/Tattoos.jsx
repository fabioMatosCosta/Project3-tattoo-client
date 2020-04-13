import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { getTattoos } from '../utils/tattoos';
import TattooContainer from '../components/TattooContainer'
import { Link } from "react-router-dom"

class Tattoos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tattoos: getTattoos()
        }
    }

    render() {
        return (
            <DefaultLayout>
                    <div className="columns is-multiline">
                        {this.state.tattoos.map((tattoo, index) => {
                            return (<TattooContainer key={index} id={tattoo._id} img={tattoo.imgPath} alt={tattoo.category} />)
                        })}
                    </div>
            
            </DefaultLayout>
        )
    }
}

export default Tattoos