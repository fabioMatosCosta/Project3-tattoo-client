import React, { Component } from 'react';
import {login} from '../utils/auth'
import DefaultLayout from "../layout/Default";

class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        user: {
            email: "",
            passWord: ""
        },
        error: null,
        message: "",
    }
    
    handleChange(event){
        let userCp = {...this.state.user};
        userCp[event.target.name] = event.target.value;
        this.setState({
            user : userCp
        })
    } 

    handleSubmit(event){
        event.preventDefault();
        login(this.state.user)
        .then(() => {
            this.props.history.push(`/profile`);
        })
        .catch((err)=>{
            let msg = err.response.data.message;
            this.setState({message: msg})
        })
    }

    render() {
        return (
            <DefaultLayout>
            
                <form  className="mt" onSubmit= {this.handleSubmit}>
                    <div className = "columns">
                        <div className = "column">
                        </div>
                        <div className = "column">
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-black is-rounded" type="text" placeholder = "Email" value={this.state.email} onChange={this.handleChange} name = "email"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-black is-rounded" type="password" placeholder = "Password" value={this.state.password} onChange={this.handleChange} name = "passWord"/>
                                </div>
                            </div>
                            <button className= "button is-black is-medium is-rounded" type= "submit"><i className="fas fa-door-open"></i>Login</button>
                        </div>
                        <div className = "column">
                        </div>
                    </div>
                        <h1>{this.state.message}</h1>
                </form>
            </DefaultLayout>
        )
    }
}

export default UserLogin;