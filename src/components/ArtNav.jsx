import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from "../utils/auth";
import { getArt } from "../utils/authArt";
import "./ArtNav.scss"

function ArtNav() {
    let art = getArt()
    return (
        <nav className="navbar whole" role="navigation" aria-label="main navigation">
            {art ?
                <>
                    <div className="navbar-end">
                    <div className="logo">
                        <div ><Link className="navbar-item"  to="/"><b>T<span>at</span>t<span>o</span>o</b></Link> </div>
                    <div >
                        <Link className="navbar-item tattoo-artists" className="tattoo-artists" to="/tattoo-artists">
                            All Tattoo Artists
                                </Link>
                                </div>
                                <div>
                        <Link className="navbar-item" className="tattoos" to="/tattoos">
                            Tattoos
                                 </Link>
                                 </div>
                                 <div>
                        <Link className="navbar-item" className="history" to="/history">
                            Tattoo Guides And History
                                 </Link>
                                 </div>
                                 <div>
                        <Link className="navbar-item" className="profile" to="/profile">
                            <p>{art.firstName}</p>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end ">
                        <Link className="navbar-item" className="logout" to="/logout">
                            <i className="fas fa-sign-out-alt"></i>Logout
                                 </Link>
                    </div>
                </>
                :
                <div className="navbar-start container">
                    <Link className="navbar-item" to="/">
                        <i className="fas fa-home fas fa-2x	i has-text-black"></i>
                    </Link>
                    <Link className="navbar-item" className="signup" to="/signup">
                        Signup
                                 </Link>
                    <Link className="navbar-item" className="login" to="/login">
                        Login
                                 </Link>

                </div>
                
            }
        </nav>

    )
}

export default ArtNav
