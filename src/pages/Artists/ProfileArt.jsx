import React, { Component } from 'react'
import {getArt,profileArt} from '../../utils/authArt';
import {Link} from "react-router-dom"
import DefaultLayout from "../../layout/Default";
import axios from "axios"
import "./ProfileArt.scss"


class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = React.createRef();

        this.state = {
            art: getArt(),
            error:"",
            
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        var formData = new FormData(this.formRef.current);

        axios({
            url: "http://localhost:5000/artist/addTattoo",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: "POST",
            withCredentials: true
        })
            .then((response) => {  
                this.props.history.push(`/artistProfile`)
                this.setState({
                    art:profileArt()
                })
            })
            .catch((error) => {
                this.setState({ error: error.response.data.message })
            })
    }

    render() {
        return (
            <DefaultLayout>
                <div className="roboto">
                <h1 className="title is-3">Yo {this.state.art.name}</h1>
                    <div className = "image is-128x128">
                        <img className="is-rounded" src={this.state.art.image.imgPath} alt="pic"/>
                        <Link to = "/edit-artist-profile"><button>Edit Profile Pic</button></Link>
                    </div>
                    <h3 className="mt">My Tattoos</h3>
                    <div className="columns is-multiline mt is-centered">
                    {this.state.art.tattoos.map((tat,index)=>{
                    return (<div key={index} className="column is-one-quarter-desktop"><img src={tat.imgPath} alt=""/> </div>)
                })}
                </div>
                <form onSubmit={this.handleSubmit} ref={this.formRef}> 
                        <input placeholder="category" type="text" name="category" />
                        <label className="custom-file-upload">
                            <input type="file" name="photo" />
                                       Upload more tattoos!
                                   </label>

                        <button type="submit">Submit </button>
                    </form>
                    </div>
            </DefaultLayout>
        )
    }
}

export default Profile