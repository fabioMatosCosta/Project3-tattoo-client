import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";

class TattooArtists extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <DefaultLayout>
                <div class="columns">
                    <div class="column">
                        First column
                        </div>
                    <div class="column">
                        Second column
                        </div>
                    <div class="column">
                        Third column
                        </div>
                    <div class="column">
                        Fourth column
                        </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default TattooArtists
