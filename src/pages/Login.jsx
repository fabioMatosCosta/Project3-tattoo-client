import React, { Component } from 'react';
import {login, verifyRes} from '../utils/auth'

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
            let res = verifyRes(response);
            this.setState({
                error: null,
                message: res.message
            })
        })
        .then(()=>{
            if(this.state.message === ""){
                this.props.history.push(`/profile`)
            }
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <br/>
                
                <form onSubmit= {this.handleSubmit}>
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
            </div>
        )
    }
}

export default Login;