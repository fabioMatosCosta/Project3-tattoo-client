import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getUser} from "../utils/auth";
import "./Nav.css"


function Nav() {

        let user = getUser()
            return (
             <nav className="navbar is-dark"  id="main-nav" role="navigation" aria-label="main navigation">
             <div id="navbarBasicExample" className="navbar-menu">
                         {user ?
                         <>
                             <div className="navbar-end">
                                
                                 <Link className="navbar-item" id="home" to="/">
                                       Home 
                                </Link>
                                <div className="navbar-item" id="welcome">
                                     <p>Welcome {user.firstName}</p>
                                 </div> 
                                 <Link className="navbar-item" id="profile" to="/profile">
                                     Profile
                                 </Link>
                                 <Link className="navbar-item" id="history" to="/history">
                                     Tattoo history and how to's
                                 </Link>
                             </div>
                             <div className="navbar-end ">
                             <Link className="navbar-item" id="logout" to="/logout">
                                 <i class="fas fa-sign-out-alt"></i>Logout                                   
                                 </Link>
                                 </div>
                             </>
                             :
                             <div className="navbar-start container">
                                 <Link className="navbar-item" to="/">
                                 <i className="fas fa-home"></i>    
                                </Link>
                                 <Link className="navbar-item" to="/signup">
                                     Signup
                                 </Link>
                                 <Link className="navbar-item" to="/login">
                                     Login
                                 </Link>
                                 
                             </div>
                         }
             </div>
         </nav>
        )
}

export default Nav
