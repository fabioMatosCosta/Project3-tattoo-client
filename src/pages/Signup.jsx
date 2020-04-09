import React, { Component } from 'react';
import {signup} from '../utils/auth';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        user: {
            firstName: "",
            email: "",
            passWord: ""
        },
        error: null,
        message: ""
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
        signup(this.state.user)
        .then((response) => {
            this.setState({
                error: null,
                message: response.data.message
            }, () =>{
                this.props.history.push(`/login`)
            })
        })
        .catch((err) => {
            console.log(err)
        })
        }

    render() {
        return (
            <div>
                <br />
                <h1>{this.state.message}</h1>
                <form onSubmit= {this.handleSubmit}>
                    <div className = "columns">
                        <div className = "column">
                        </div>
                        <div className = "column">
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-dark is-rounded" type="text" placeholder = "firstname" value={this.state.firstname} onChange = {this.handleChange} name = "firstName"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-dark is-rounded" type="email" placeholder = "email" value={this.state.email} onChange = {this.handleChange} name = "email"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-dark is-rounded" type="password" placeholder = "password" value={this.state.password} onChange = {this.handleChange} name = "passWord"/>
                                </div>
                            </div>
                            <button className= "button is-dark is-medium is-rounded" type= "submit">Sign Up</button>
                        </div>
                        <div className = "column">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;