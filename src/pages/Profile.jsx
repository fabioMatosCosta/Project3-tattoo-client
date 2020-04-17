import React, { Component } from 'react'
import { getUser, profile } from '../utils/auth';
import { Link } from "react-router-dom"
import DefaultLayout from "../layout/Default";
import "./Profile.scss"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            call: profile(),
            user: getUser()
        }
    }


    render() {
        return (
            <DefaultLayout>
                
                <div className="back">
                    <h1 className="title is-3 has-text-white">Yo {this.state.user.firstName.toUpperCase()}</h1>
                    <div className = "columns">
                        <div className = "column"></div>
                        <div className = "column">
                            <figure className = "image is-300x300">
                                <img className="is-rounded " src={this.state.user.image.imgPath} alt="pic"/>
                            </figure>
                        </div>
                        <div className = "column"></div>
                    </div>
                    <div id="container">
                        <p><Link to = "/edit-profile">Edit Profile Pic</Link>
                        </p>
                    </div>                
                </div>
            </DefaultLayout>
        )
    }
}

export default Profile
