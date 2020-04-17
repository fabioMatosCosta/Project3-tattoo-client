import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from "../utils/auth";
import "./ArtNav.scss"

function Nav() {
    let user = getUser()
    return (
        <nav className="navbar whole" role="navigation" aria-label="main navigation">
            {user ?
                <>
                    <div className="navbar-end">
                    
                    <div className="logo">
                    
                        <div> <Link to="/tattoos" className="navbar-item"><b>T<span>at</span>t<span>o</span>o</b> </Link> </div>

                        <div>
                            <Link className="navbar-item " className="tattoo-artists" to="/tattoo-artists">
                                All Tattoo Artists
                            </Link>
                        </div>
                        <div>
                            <Link className="navbar-item" className="tattoos" to="/tattoos">
                                Tattoos
                            </Link>
                        </div>
                        <div >
                            <Link className="navbar-item " className="history" to="/history">
                                Guides And History
                            </Link>
                        </div>
                        <div>
                                <Link className="navbar-item " className="profile" to="/profile">
                                    {user.firstName}
                                </Link>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end ">
                        <Link className="navbar-item " className="logout" to="/logout">
                            <i className="fas fa-sign-out-alt"></i>Logout
                        </Link>
                    </div>
                </>
                :
                <div className="navbar-start container">
                    <Link className="navbar-item" to="/">
                        <i className="fas fa-home fas fa-2x	i has-text-black"></i>
                    </Link>
                    <Link className="navbar-item " className="signup" to="/signup">
                        Signup
                    </Link>
                    <Link className="navbar-item " className="login" to="/login">
                        Login
                    </Link>
                </div>
                
            }
        </nav>

    )
}

export default Nav
