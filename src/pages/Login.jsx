import React, { Component } from 'react'
import {Link} from "react-router-dom"
import DefaultLayout from "../layout/Default"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <DefaultLayout>
                <div className= "columns">
                <div className= "column">
                <Link to = "user-login">
                    <img src="https://i.pinimg.com/originals/7b/da/f6/7bdaf659df9247047cfd891f43425768.jpg" alt=""/>
                    User Login
                </Link>
                </div>
                <div className= "column">

                <Link to = "artist-login">
                    <img src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/92623713_876682219514037_3058835782195216384_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=lETpBe130x8AX9SvxL9&_nc_ht=scontent-ams4-1.xx&_nc_tp=7&oh=975888867b0f10cb0dda094041d0be53&oe=5EB993AB" alt=""/>
                    Artist Login
                </Link>
                </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Login
