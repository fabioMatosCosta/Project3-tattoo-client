import React, { Component } from 'react';
import {signup} from '../utils/auth';
import Nav from "../components/Nav";
import {Link} from "react-router-dom"

class SignUp extends Component {
    constructor(props) {
        super(props)
      
    }

    state = {
       
    }

    render() {
        return (
            <div>
                <Nav/>
                <br />
                <h1>{this.state.message}</h1>
               
                <div className="columns"> 
                <Link to="/artistlog">
                    <div className="column">
               <img src="https://i.pinimg.com/originals/db/e3/a9/dbe3a96828adfb312144b92560ba8701.jpg" alt=""/>
               Artist Login Page
            </div>
            </Link>
            <Link to="/userlog">
                    <div className="column">
               <img src="https://images.unsplash.com/photo-1526342344406-fce1a452c567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt=""/>
               User Login Page  
            </div>
           </Link>
            </div>
            </div>
        )
    }
}

export default SignUp;