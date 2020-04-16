import React, { Component } from 'react'
import {getUser, profile} from '../utils/auth';
import {Link} from "react-router-dom"
import DefaultLayout from "../layout/Default";
<<<<<<< HEAD
import './Profile.scss'
=======
import "./Profile.scss"
>>>>>>> 4cdb7f0ac06436ce8abfcb5a66b00f582f9553eb

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
                <h1 className="title is-3">Yo {this.state.user.firstName}</h1>
=======
                <div className="back">
                <h1>Yo {this.state.user.firstName}</h1>
>>>>>>> 4cdb7f0ac06436ce8abfcb5a66b00f582f9553eb

                    <figure className = "image is-1by1">
                        <img className="is-rounded" src={this.state.user.image.imgPath} alt="pic"/>
                    </figure>
                    <div id="container">
  <p><Link to = "/edit-profile">Edit Profile Pic</Link>

<<<<<<< HEAD
                <Link to = "/edit-profile">
                    <button className = "button is-black is-rounded">Edit Profile Pic</button>
                </Link>
=======
  </p>
</div>                </div>
>>>>>>> 4cdb7f0ac06436ce8abfcb5a66b00f582f9553eb
            </DefaultLayout>
        )
    }
}

export default Profile
