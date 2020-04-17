import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { Link } from "react-router-dom"
import "./History.scss"

class History extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <DefaultLayout>
                <div className="every-background">
                <div className="columns mt">
                    <div className="boxs column ">
                        <Link to="/museum">
                            <img className="bigger" src="https://thumbs-prod.si-cdn.com/956tJJkFZCxuNQHHfFqUPswliOk=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/1c/53/1c53c24e-ca22-4235-b7eb-79403ca22c8b/mummy_tattoo.jpg" alt="" />
                            <div className="text">
                                Tattoo History Museum
                            </div>
                        </Link>
                    </div>
                    <div className="boxs column">
                        <Link to="/heal">
                            <img className="bigger" src="https://www.inkedmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_596/MTYwNDg2NTcxMjczODg5MTQw/screen-shot-2018-12-11-at-101417-am.webp" alt="" />
                            <div className="text">
                                Tattoo Healing
                            </div>
                        </Link>
                    </div>
                </div>
                <br /><div className="columns">
                    <div className="boxs column">
                        <Link to="/remove">
                            <img className="bigger" src="https://i.pinimg.com/originals/e5/5a/2d/e55a2d99b92c0bd8f99d9d745542d83f.jpg" alt="" />
                            <div className="text">
                                Tattoo Removal
                            </div>

                        </Link>
                    </div>
                    <div className="boxs column">
                        <Link to="/pain">
                            <img className="bigger" src="https://d3eh3svpl1busq.cloudfront.net/hKwyKHaPYdQPertjJeptpCwDngTecnnQ/assets/static/optimized/rev-d9bde98/wp-content/uploads/2016/10/ribtattoo2.jpg" alt="" />
                            <div className="text">
                                Most Painful Tattoo Places
                            </div>

                        </Link>
                    </div>
                </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default History
