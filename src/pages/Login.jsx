import React, { Component } from 'react'
import {Link} from "react-router-dom"
import DefaultLayout from "../layout/Default"
import "./Signup.scss"

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <DefaultLayout>
                <div className= "columns is-centered">
                    <div className= "column boxss">
                        <Link to = "user-login">
                            <img className="bigger" src="https://images.unsplash.com/photo-1482329033286-79a3d24413b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                            <div className = "text usr"><span>User Login</span> </div> 
                        </Link>
                    </div>
                    <div className= "column boxss">
                        <Link to = "artist-login">
                            <img className="bigger" src="https://images.unsplash.com/photo-1485742032238-7543513eeba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 " alt=""/>
                            <div className = "text usr"><span>Artist Login</span> </div> 
                        </Link>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Login
