import React, { Component } from 'react'
import {getArt} from '../../utils/authArt';
import {Link} from "react-router-dom"
import DefaultLayout from "../../layout/Default";
import AddThing from '../../components/Addthing';


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
                    <AddThing />
                <h1>Yo {this.state.art.name}</h1>

                    <figure className = "image is-128x128">
                        <img className="is-rounded" src={this.state.art.image.imgPath} alt="pic"/>
                    </figure>

                <Link to = "/logout"><button>Logout</button></Link>
            </DefaultLayout>
        )
    }
}

export default Profile