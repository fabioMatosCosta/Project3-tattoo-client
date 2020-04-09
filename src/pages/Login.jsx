import React, { Component } from 'react';
import {login} from '../utils/auth'

class Login extends Component {
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
        .then((response) => {
            debugger
            this.setState({
                error: null,
                message: response.data.message
            } 
            // () => {
            //     this.props.history.push(`/profile`)
            )
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <form onSubmit= {this.handleSubmit}>
                    <div className = "columns">
                        <div className = "column">
                        </div>
                        <div className = "column">
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-info is-rounded" type="text" placeholder = "email" value={this.state.email} onChange={this.handleChange} name = "email"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-info is-rounded" type="password" placeholder = "password" value={this.state.password} onChange={this.handleChange} name = "passWord"/>
                                </div>
                            </div>
                            <button className= "button is-primary is-medium is-rounded" type= "submit">Login</button>
                        </div>
                        <div className = "column">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;