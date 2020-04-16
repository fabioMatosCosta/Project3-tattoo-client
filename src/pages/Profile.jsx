import React, { Component } from 'react'
import { getUser, profile } from '../utils/auth';
import { Link } from "react-router-dom"
import DefaultLayout from "../layout/Default";
<<<<<<< HEAD
import "./Profile.scss"
=======
import './Profile.scss'
>>>>>>> b4cac24fe57e2c2c9879d307325aba433368a9a4

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
<<<<<<< HEAD
                <h1 className="title is-3">Yo {this.state.user.firstName.toUpperCase()}</h1>
                <div className="back">
                <h1>Yo {this.state.user.firstName.toUpperCase()}</h1>
=======
                <div className="back">
                <h1>Yo {this.state.user.firstName}</h1>
>>>>>>> b4cac24fe57e2c2c9879d307325aba433368a9a4

                    <figure className = "image is-1by1">
                        <img className="is-rounded" src={this.state.user.image.imgPath} alt="pic"/>
                    </figure>
                    <div id="container">
                    <p><Link to = "/edit-profile">Edit Profile Pic</Link>

  </p>
</div>                </div>
            </DefaultLayout>
        )
    }
}

export default Profile
