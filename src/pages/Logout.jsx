import React, {Component}from 'react'
import {logout, remUser} from '../utils/auth'

class Logout extends Component {
    handleLogout(){
        logout()
        .then((response) => {
            remUser();
            this.props.history.push(`/login`)
        })
        .catch((err) => {
            debugger
        })
    
    }

    render(){
        return(<div>{this.handleLogout()}
            <h6>LogOut</h6>
        </div>)
    }
}

export default Logout