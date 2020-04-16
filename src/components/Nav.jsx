import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from "../utils/auth";
import { getArt } from "../utils/authArt";
import "./Nav.scss"


function Nav() {

    let user = getUser()
    let art = getArt()
    return (
        <nav className="navbar is-dark" id="main-nav" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                {user ?
                    <>
                        <div className="navbar-end">

                            {/* <Link className="navbar-item" id="home" to="/">
                                Home
                                </Link> */}
                            <Link className="navbar-item" id="tattoo-artists" to="/tattoo-artists">
                                Tattoo Artists
                                </Link>
                            <Link className="navbar-item" id="tattoos" to="/tattoos">
                                Tattoos
                                 </Link>
                            <Link className="navbar-item" id="history" to="/history">
                                Tattoo Guides And History
                                 </Link>
                            <Link className="navbar-item" id="profile" to="/profile">
                                <p>{user.firstName}</p>
                            </Link>
                        </div>
                        <div className="navbar-end ">
                            <Link className="navbar-item" id="logout" to="/logout">
                                <i className="fas fa-sign-out-alt"></i>Logout
                                 </Link>
                        </div>
                    </>
                    :
                    <div className="navbar-start container">
                        <Link className="navbar-item"  to="/">
                            <i className="fas fa-home fas fa-2x	i has-text-black"></i>
                        </Link>
                        <Link className="navbar-item" id="signup" to="/signup">
                            Signup
                                 </Link>
                        <Link className="navbar-item" id="login" to="/login">
                            Login
                                 </Link>

                    </div>
                }
            </div>
        </nav>
    )
}

export default Nav
