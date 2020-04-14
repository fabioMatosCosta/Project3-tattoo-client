import React, { Component } from 'react'
import DefaultLayout from "../../layout/Default";
import {Link} from "react-router-dom"

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
                <Link to="/david">
                    <div class="column">
                        <div>
                            <img src="/images/David.jpg" alt="" />
                        </div>
                        <div>
                            <p>Blackest Black Tattoo's</p>
                            <button>Find out more</button>
                        </div>
                    </div>
                    </Link>
                    <Link to ="christian">
                    <div class="column">
                        <div>
                            <img src="/images/Christian.jpg" alt="" />
                        </div>
                        <div>
                            <p>Black and grey oldschool</p>
                            <button>Find out more</button>
                        </div>
                    </div>
                    </Link>
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
