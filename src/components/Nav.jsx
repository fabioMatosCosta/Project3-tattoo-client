import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <nav>
                <Link to="/"><span class="icon has-text-info">
                <i class="fab fa-fort-awesome"></i>
                    </span>Home</Link>


                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
               
            </nav>
        )
    }
}

export default Nav
