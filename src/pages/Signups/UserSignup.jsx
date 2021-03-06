import React, { Component } from 'react'
import {signup} from '../../utils/auth';
import DefaultLayout from "../../layout/Default";

class UserSignup extends Component {
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
                this.props.history.push(`/user-login`)
            })
        })
        .catch((err)=>{
            let msg = err.response.data.message;
            this.setState({message: msg})
        })
        }

    render() {
        return (
            <DefaultLayout>
            <div>
                <br/>
                <form onSubmit= {this.handleSubmit}>
<div className = "columns">
    <div className = "column">
    </div>
    <div className = "column">
        <div className = "field">
            <div className = "control">
                <input className ="input is-dark is-rounded" type="text" required placeholder = "Name" value={this.state.firstname} onChange = {this.handleChange} name = "firstName"/>
            </div>
        </div>
        <div className = "field">
            <div className = "control">
                <input className ="input is-dark is-rounded" type="email" required placeholder = "Email" value={this.state.email} onChange = {this.handleChange} name = "email"/>
            </div>
        </div>
        <div className = "field">
            <div className = "control">
                <input className ="input is-dark is-rounded" type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder = "Password" value={this.state.password} onChange = {this.handleChange} name = "passWord"/>
            </div>
                <small className = "is-centered" >At least 8 characters one uppercase one lowercase</small>
        </div>
        <button className= "button is-dark is-medium is-rounded" type= "submit">Sign Up</button>
        <p>{this.state.message}</p>
    </div>
    <div className = "column">
    </div>
</div>
</form>
            </div>
            </DefaultLayout>
        )
    }
}

export default UserSignup


