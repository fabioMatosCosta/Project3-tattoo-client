import React, { Component } from 'react';
import Nav from "../components/Nav";
import {Link} from "react-router-dom"
import "./Signup.scss"
import DefaultLayout from "../layout/Default"

class SignUp extends Component {
    constructor(props) {
        super(props)
      
    }

    state = {
       
    }

    render() {
        return (
        
                <DefaultLayout>
                <h1 className="mt">{this.state.message}</h1>
                <div className="columns is-centered"> 
                    <Link to="/artistlog">
                        <div className="column boxss">
                            <img className="bigger" src="https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
                            <div className = "text usr"><span>Artist Signup Page</span> </div> 
                        </div>
                    </Link>
                    <Link to="/userlog">
                        <div className="column boxss">
                            <img className="bigger" src="https://images.unsplash.com/photo-1506310033436-6c717a834498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/>
                            <div className = "text usr"><span>User Signup Page</span> </div> 
                        </div>
                    </Link>
                </div>
                </DefaultLayout>
           
        )
    }
}

export default SignUp;