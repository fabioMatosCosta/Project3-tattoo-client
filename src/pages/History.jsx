import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import {Link} from "react-router-dom"

class History extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <DefaultLayout>
                <div>
                    <Link to="/museum">
                     Tattoo History Museum
                    </Link>
                </div>
            </DefaultLayout>
        )
    }
}

export default History
