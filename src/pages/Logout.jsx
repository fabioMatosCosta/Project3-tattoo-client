import React, {Component}from 'react'
import {logout} from '../utils/auth'
import {logoutArt} from '../utils/authArt'

class Logout extends Component {
    handleLogout(){
        logout()
        logoutArt()
        .then(() => {
            this.props.history.push(`/login`)
        })
        .catch((err) => {
            console.log(err)
        })
    
    }

    render(){
        return(
        <div>
            {this.handleLogout()}
            <img src="https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif" alt="loading"/>
        </div>)
    }
}

export default Logout