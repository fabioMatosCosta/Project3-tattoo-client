import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { Link } from "react-router-dom"
import "./History.css"

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
                        <div className="box">
                            <img src="https://thumbs-prod.si-cdn.com/956tJJkFZCxuNQHHfFqUPswliOk=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/1c/53/1c53c24e-ca22-4235-b7eb-79403ca22c8b/mummy_tattoo.jpg" alt="" />
                            <div className="text">
                                Tattoo History Museum
                     </div>
                        </div>
                    </Link>
                    <Link to="/heal">
                        <img src="https://www.inkedmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_596/MTYwNDg2NTcxMjczODg5MTQw/screen-shot-2018-12-11-at-101417-am.webp" alt="" />                   
                        </Link>
                </div>
            </DefaultLayout>
        )
    }
}

export default History
