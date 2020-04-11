import React, { Component } from 'react'
import {getUser} from '../utils/auth';
import {Link} from "react-router-dom"
import DefaultLayout from "../layout/Default";
import AddThing from '../components/Addthing';


class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:getUser()
        }
    }

    render() {
        return (
            <DefaultLayout>
                      <AddThing />
                <h1>Yo {this.state.user.firstName}</h1>
                <Link to = "/logout"><button>Logout</button></Link>
            </DefaultLayout>
        )
    }
}

export default Profile
