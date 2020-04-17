import React, { Component } from "react";
import axios from "axios";
import DefaultLayout from "../layout/Default";
const URLADDTHING = process.env.REACT_APP_ADDTHING

class AddThing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ""

        };
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        var formData = new FormData(this.formRef.current);

        axios({
            url: URLADDTHING,
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: "POST",
            withCredentials: true
        })
            .then((response) => {
                
                this.props.history.push(`/profile`)
            })
            .catch((error) => {
                this.setState({ error: error.response.data.message })
            })
    }


    render() {
        return (
            <DefaultLayout>
                <div>
                    <form onSubmit={this.handleSubmit} ref={this.formRef}> 
                        <div className = "field">
                            <label className="custom-file-upload">
                                <input type="file" name="photo" />
                                        Upload profile pic
                                </label>
                        </div>
                        <div className = "field">
                            <button type="submit" className="button is-black is-rounded">Submit </button>
                        </div>
                    </form>
                    {this.state.error ?
                        <p>{this.state.error}</p> :
                        ""
                    }
                </div>
            </DefaultLayout>

        );
    }
}

export default AddThing;

