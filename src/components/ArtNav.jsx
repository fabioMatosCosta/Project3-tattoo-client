import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from "../utils/auth";
import { getArt } from "../utils/authArt";


function ArtNav() {
    let art = getArt()
    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
{/* {art ?
                  
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io"/>
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"/>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item"/>
        Home


      <a class="navbar-item"/>
        Documentation


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"/>
          More


        <div class="navbar-dropdown">
          <a class="navbar-item"/>
            About
    
          <a class="navbar-item"/>
            Jobs
    
          <a class="navbar-item"/>
            Contact
    
          <hr class="navbar-divider"/>
          <a class="navbar-item"/>
            Report an issue
    
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary"/>
            <strong>Sign up</strong>
    
          <a class="button is-light"/>
            Log in

        </div>
        
      </div>
      
    </div>
    
  </div> */}
 {art ?
                    <>
                        <div className="navbar-end">
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
                                <p>{art.firstName}</p>
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
</nav>

)
}

export default ArtNav
