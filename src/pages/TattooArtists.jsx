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
                <div class="columns ">
                    <div class="column">
                        <div>
                            <img src="/images/David.jpg" alt="" />
                        </div>
                        <div>
                            <p>Blackest Black Tattoo's</p>
                            <button>Find out more</button>
                        </div>
                    </div>
                    <div class="column">
                        <div>
                            <img src="/images/Christian.jpg" alt="" />
                        </div>
                        <div>
                            <p>Black and grey oldschool</p>
                            <button>Find out more</button>
                        </div>
                    </div>
                    <div class="column">
                        <div>
                            First column
                        </div>
                    </div>
                    <div class="column">
                        <div>
                            First column
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default TattooArtists
