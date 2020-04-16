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
        const divStyle1 = {
            backgroundImage: 'url("https://images.unsplash.com/photo-1482329033286-79a3d24413b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")',
        };
        const divStyle2 = {
            backgroundImage: 'url("https://images.unsplash.com/photo-1485742032238-7543513eeba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
        };
        return (
            <DefaultLayout>
                <h1 className="mt">{this.state.message}</h1>
                <div className="columns is-centered">
                    <Link to="/artist-login">
                        <div className="column boxss">
                            <main>
                                <div className="c-glitch bigger" style={divStyle1}>
                                    <div className="c-glitch__img bigger" style={divStyle1}></div>
                                    <div className="c-glitch__img bigger" style={divStyle1}></div>
                                    <div className="c-glitch__img bigger" style={divStyle1}></div>
                                    <div className="c-glitch__img bigger" style={divStyle1}></div>
                                    <div className="c-glitch__img bigger" style={divStyle1}></div>
                                </div>

                                <div className="c-intro">
                                        <div className="c-ryanyu__front">
                                        </div>
                                        <div className="c-ryanyu__back"></div>
                                </div>
                            </main>
                            <div className="text usr">Artist Login Page</div>
                        </div>
                    </Link>
                    <Link to="/user-login">
                        <div className="column boxss">
                        <main>
                                <div className="c-glitch bigger" style={divStyle2}>
                                    <div className="c-glitch__img bigger" style={divStyle2}></div>
                                    <div className="c-glitch__img bigger" style={divStyle2}></div>
                                    <div className="c-glitch__img bigger" style={divStyle2}></div>
                                    <div className="c-glitch__img bigger" style={divStyle2}></div>
                                    <div className="c-glitch__img bigger" style={divStyle2}></div>
                                </div>

                                <div className="c-intro">
                                    {/* <a className="c-ryanyu" href="https://frontend30.com/?utm_source=codepen&utm_medium=logo&utm_campaign=glitch" target="_blank"> */}
                                        <div className="c-ryanyu__front">
                                        </div>
                                        <div className="c-ryanyu__back"></div>
                                    {/* </a> */}
                                </div>
                            </main>
                            {/* <img className="bigger" src="https://images.unsplash.com/photo-1506310033436-6c717a834498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt="" /> */}
                            <div className="text usr">User Login Page </div>
                        </div>
                    </Link>
                </div>
            </DefaultLayout>
        )
    }
}

export default Login
{/* <img className="bigger" src="https://images.unsplash.com/photo-1482329033286-79a3d24413b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                            <img className="bigger" src="https://images.unsplash.com/photo-1485742032238-7543513eeba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 " alt=""/> */}
