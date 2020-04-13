import React, { Component } from 'react'
import {signup} from '../../utils/auth';
import DefaultLayout from "../../layout/Default";

class ArtistSignup extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        art: {
            firstName: "",
            email: "",
            passWord: "",
            name:"",
            work:"",
            studio:""
        },
        error: null,
        message: ""
    }
    handleChange(event) {
        let artCp = { ...this.state.art };
        artCp[event.target.name] = event.target.value;
        this.setState({
            art: artCp
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        signup(this.state.user)
            .then((response) => {
                this.setState({
                    error: null,
                    message: response.data.message
                }, () => {
                    this.props.history.push(`/loginArtist`)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <DefaultLayout>
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="columns">
                        <div className="column">
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="text" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} name="firstName" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="passWord" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="passWord" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="work" placeholder="Work" value={this.state.work} onChange={this.handleChange} name="passWord" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="studio" placeholder="Studio" value={this.state.studio} onChange={this.handleChange} name="passWord" />
                                </div>
                            </div>
                            <button className="button is-dark is-medium is-rounded" type="submit">Sign Up</button>
                        </div>
                        <div className="column">
                        </div>
                    </div>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

export default ArtistSignup


