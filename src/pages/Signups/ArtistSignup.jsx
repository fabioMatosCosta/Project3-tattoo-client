import React, { Component } from 'react'
import {signupArt} from '../../utils/authArt';
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
        signupArt(this.state.art)
            .then((response) => {
                this.setState({
                    error: null,
                    message: response.data.message
                }, () => {
                    this.props.history.push(`/artist-login`)
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
                                    <input className="input is-dark is-rounded" type="text" required placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label for = "work" className="label">Work:</label>
                                    <div className="select is-dark is-rounded">
                                        <select name = "work" onChange={this.handleChange}>
                                            <option value = "Black & gray">Black & gray</option>
                                            <option value = "Watercolor">Watercolor</option>
                                            <option value = "Old school">Old school</option>
                                            <option value = "Blackwork">Blackwork</option>
                                            <option value = "Japanese">Japanese</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="text" placeholder="Studio" value={this.state.studio} onChange={this.handleChange} name="studio" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="email" required placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-dark is-rounded" type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Password" value={this.state.passWord} onChange={this.handleChange} name="passWord" />
                                </div>
                                <small className = "is-centered" >At least 8 characters one uppercase one lowercase</small>
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
