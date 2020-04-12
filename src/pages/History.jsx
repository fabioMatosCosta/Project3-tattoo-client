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
                <br/>
                <div className="columns">
                    <Link to="/museum">
                            <div className="column">
                                <img src="https://thumbs-prod.si-cdn.com/956tJJkFZCxuNQHHfFqUPswliOk=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/1c/53/1c53c24e-ca22-4235-b7eb-79403ca22c8b/mummy_tattoo.jpg" alt="" />
                      <p className="text">Tattoo History Museum</p> 
                     </div>
                    </Link>
                    <Link to="/heal">
                            <div className="column is-centered">
                                <img src="https://www.inkedmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_596/MTYwNDg2NTcxMjczODg5MTQw/screen-shot-2018-12-11-at-101417-am.webp" alt="" />
                         <p className="text">Tattoo Healing</p> 
                        </div>
                    </Link>
                    </div>
                    <div className="columns">
                    <Link to="/remove">
                            <div className="column is-centered">
                                <img src="https://i.pinimg.com/originals/e5/5a/2d/e55a2d99b92c0bd8f99d9d745542d83f.jpg" alt="" />
                         <p className="text">Tattoo Removal</p> 
                        </div>
                    </Link>
                    <Link to="/pain">
                            <div className="column is-centered">
                                <img src="https://d3eh3svpl1busq.cloudfront.net/hKwyKHaPYdQPertjJeptpCwDngTecnnQ/assets/static/optimized/rev-d9bde98/wp-content/uploads/2016/10/ribtattoo2.jpg" alt="" />
                         <p className="text">Most Painful Tattoo Places</p> 
                        </div>
                    </Link>
                </div>
            </DefaultLayout>
        )
    }
}

export default History
