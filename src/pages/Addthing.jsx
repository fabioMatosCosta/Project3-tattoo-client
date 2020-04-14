import React, { Component } from "react";
import axios from "axios";
import DefaultLayout from "../layout/Default"

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
            url: "http://localhost:5000/user/addPic",
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
                        <input placeholder="title" type="text" name="title" />
                        <input placeholder="description" type="text" name="description" />
                        <label className="custom-file-upload">
                            <input type="file" name="photo" />
                                       Upload profile pic
                                   </label>

                        <button type="submit">Submit </button>
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

