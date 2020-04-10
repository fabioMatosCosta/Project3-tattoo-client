import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";

class Tattoos extends Component {
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
                    <div>
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div>
                        <p>Blackest Black Tattoo's</p>
                        <button>Find out more</button>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div>
                        <p>Black and grey oldschool</p>
                        <button>Find out more</button>
                    </div>
                </div>
                <div class="column">
                <div>
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div>
                        <p>Black and grey oldschool</p>
                        <button>Find out more</button>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div>
                        <p>Black and grey oldschool</p>
                        <button>Find out more</button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
        )
    }
}

export default Tattoos
