import React, { Component } from 'react'
import {getArt} from '../../utils/authArt';
import {Link} from "react-router-dom"
import DefaultLayout from "../../layout/Default";


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            art: getArt()
        }
    }
    
    render() {
        return (
            <DefaultLayout>
                <h1>Yo {this.state.art.name}</h1>
                    <figure className = "image is-128x128">
                        <img className="is-rounded" src={this.state.art.image.imgPath} alt="pic"/>
                    </figure>

                <Link to = "/edit-artist-profile"><button>Edit Profile Pic</button></Link>
            </DefaultLayout>
        )
    }
}

export default Profile