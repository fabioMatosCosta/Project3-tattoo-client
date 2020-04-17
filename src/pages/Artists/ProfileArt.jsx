import React, { Component } from 'react'
import { getArt, profileArt } from '../../utils/authArt';
import { Link } from "react-router-dom"
import ArtDefault from "../../layout/ArtDefault";
import axios from "axios"
import "./ProfileArt.scss"
const URLADDTATTOO = process.env.REACT_APP_ADDTATTOO;
const URLDLTTATTOO = process.env.REACT_APP_DELETETATTOO;



class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = React.createRef();

        this.state = {
            call: profileArt(),
            art: getArt(),
            error: "",

        }
    }
    handleSubmit(e) {
        e.preventDefault();

        var formData = new FormData(this.formRef.current);

        axios({
            url: URLADDTATTOO,
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: "POST",
            withCredentials: true
        })
        .then(() => {
            this.setState({
                call: profileArt(),
                art: getArt()
            })
        })
        .catch((error) => {
            this.setState({ error:error.data})
        })
    }

    handledelete(e) {

        axios({
            url: `${URLDLTTATTOO}/${e}`,
            withCredentials: true,
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            method: "GET",
        })
        .then(() => {
            this.setState({
                call: profileArt(),
                art: getArt()
            })
        })
        .catch((error) => {
            this.setState({ error:error.data})
        })
    }


    render() {
        return (
            <ArtDefault>
                <div className="roboto">
                    <h1 className="title is-3">Yo {this.state.art.name}</h1>
                    <div className = "columns">
                        <div className = "column"></div>
                        <div className = "column">
                            <div className="image is-128x128">
                                <img className="is-rounded" src={this.state.art.image.imgPath} alt="pic" />
                                <Link to="/edit-artist-profile"><button className="button is-black is-rounded">Edit Profile Pic</button></Link>
                            </div>
                        </div>
                        <div className = "column"></div>
                    </div>
        
                    <h3 className="mt">My Tattoos</h3>
                    <div className="columns is-multiline mt is-centered">
                        {this.state.art.tattoos.map((tat, index) => {
                            return (
                                <div key={index} className="column is-one-quarter-desktop">
                                    <img src={tat.imgPath} alt="" />
                                    <button  onClick={this.handledelete.bind(this, tat._id)} className="button is-black is-rounded">Delete pic</button>
                                </div>)
                        })}
                    </div>
                    <form onSubmit={this.handleSubmit} ref={this.formRef}>
                        <select id="work" name="category">
                            <option value="Blackwork">Blackwork</option>
                            <option value="Black & gray">Black & Gray</option>
                            <option value="Watercolor">Watercolor</option>
                            <option value="Old school">Old school</option>
                            <option value="Japanese">Japanese</option>
                        </select>
                        <label className="custom-file-upload">
                            <input type="file" name="photo" />
                            Upload more tattoos!
                        </label>

                        <button className="button is-black is-rounded" type="submit">Submit </button>
                    </form>
                </div>
            </ArtDefault>
        )
    }
}

export default Profile