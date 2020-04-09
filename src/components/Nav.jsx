import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getUser} from "../utils/auth";


class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        let user = getUser()
            return (
             <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
             <div id="navbarBasicExample" className="navbar-menu">
                         {user ?
                             <div className="navbar-start container">
                                 <div className="navbar-item">
                                     <p>welcome {user.username}</p>
                                 </div>
                                 <Link className="navbar-item" to="/logout">
                                     logout
                                 </Link>
                                 <Link className="navbar-item" to="/profile">
                                     profile
                                 </Link>
                             </div>
                             :
                             <div className="navbar-start container">
                                 <Link className="navbar-item" to="/">
                                 <i class="fas fa-home"></i>    
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
}

export default Nav
