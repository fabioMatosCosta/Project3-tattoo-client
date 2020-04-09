import React, { Component } from 'react'
import {getUser} from '../utils/auth';
import {Link} from "react-router-dom"
import ImageUpload from "../components/ImageUpload"
import Imageupload from '../components/ImageUpload';


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:getUser()
        }
    }

    render() {
        return (
            <div>
                <h1>Yo {this.state.user.firstName}</h1>
                <Link to = "/logout"><button>Logout</button></Link>
                <Imageupload id="image"/>
            </div>
        )
    }
}

export default Profile
