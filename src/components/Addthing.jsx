import React, { Component } from "react";
import axios from "axios";

// import the service file since we need it to send (and get) the data to(from) server
import service from '../api/service';

class AddThing extends Component {
    constructor(props) {
        super(props)
        this.state = {
          error: ""

        };
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    // handleChange = e => {  
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }

    // // this method handles just the file upload
    // handleFileUpload = e => {
    //     console.log("The file to be uploaded is: ", e.target.files[0]);

    //     const uploadData = new FormData();
    //     // imageUrl => this name has to be the same as in the model since we pass
    //     // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    //     uploadData.append("imageUrl", e.target.files[0]);
        
    //     service.handleUpload(uploadData)
    //     .then(response => {
    //         // console.log('response is: ', response);
    //         // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
    //         this.setState({ imageUrl: response.secure_url });
    //       })
    //       .catch(err => {
    //         console.log("Error while uploading the file: ", err);
    //       });
    // }

    // // this method submits the form
    // handleSubmit = e => {
    //     e.preventDefault();
        
    //     service.saveNewThing(this.state)
    //     .then(res => {
    //         console.log('added: ', res);
    //         // here you would redirect to some other page 
    //     })
    //     .catch(err => {
    //         console.log("Error while adding the thing: ", err);
    //     });
    // }  
    handleSubmit(e) {
                e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route
        
                var formData = new FormData(this.formRef.current); // more info: https://developer.mozilla.org/en-US/docs/Web/API/FormData
        
                axios({
                    url: "http://localhost:5000/artist/addPic/",
                    data: formData,
                    headers: {
                        'content-type': 'multipart/form-data'
                    },           
                    method: "POST"
                })
                .then((response)=> {
                    this.props.history.push(`/profile`)
                })
                .catch((error)=> {
                    debugger
                    this.setState({error: error.response.data.message})
                })
            }   
        
    
    render() {
        return (
            <>
                           <div>
                               <form onSubmit={this.handleSubmit} ref={this.formRef}> {/* React equivalent of an id  */}
                                   <input placeholder="title" type="text" name="title"/>
                                   <input placeholder="description"  type="text" name="description"/>
                                   <label className="custom-file-upload">
                                       <input type="file" name="photo"/>
                                       Upload profile pic
                                   </label>
            
                                   <button type="submit">Submit </button>
                               </form>
                               {this.state.error ? 
                                   <p>{this.state.error}</p>:
                                   ""
                               }
                           </div>
                       </>
        //   <div>
        //     <h2>New Thing</h2>
        //     <form onSubmit={e => this.handleSubmit(e)}>
        //         <label>Name</label>
        //         <input 
        //             type="text" 
        //             name="name" 
        //             value={ this.state.name } 
        //             onChange={ e => this.handleChange(e)} />
        //         <label>Description</label>
        //         <textarea 
        //             type="text" 
        //             name="description" 
        //             value={ this.state.description } 
        //             onChange={ e => this.handleChange(e)} />
        //         <input 
        //             type="file" 
        //             onChange={(e) => this.handleFileUpload(e)} /> 
        //         <button type="submit">Save new thing</button>
        //     </form>
        //   </div>
        );
    }
}

export default AddThing;

////////////////////////////////////////

// import React, { Component } from 'react';
// import axios from "axios";
// import Nav from "../components/Nav";

// export default class NewBeerWithFile extends Component {

//     constructor(props){
//         super(props);
//         this.formRef = React.createRef();  {/* React equivalent of getting an element by id */}
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     state = {
//         error: ""
//     }

//     handleSubmit(e) {
//         e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route

//         var formData = new FormData(this.formRef.current); // more info: https://developer.mozilla.org/en-US/docs/Web/API/FormData

//         axios({
//             url: "https://ih-beers-api.herokuapp.com/beers/new",
//             data: formData,
//             headers: {
//                 'content-type': 'multipart/form-data'
//             },           
//             method: "POST"
//         })
//         .then((response)=> {
//             this.props.history.push(`/beer-detail/${response.data._id}`)
//         })
//         .catch((error)=> {
//             debugger
//             this.setState({error: error.response.data.message})
//         })
//     }   

//     render() {
//         return (
//             <>
//                 <Nav />
//                 <div>
//                     <form onSubmit={this.handleSubmit} ref={this.formRef}> {/* React equivalent of an id  */}
//                         <input placeholder="tagline" type="text" name="tagline"/>
//                         <input placeholder="description"  type="text" name="description"/>
//                         <input placeholder="first_brewed" type="date" name="first_brewed"/>
//                         <input placeholder="attenuation_level" type="number" name="attenuation_level"/>
//                         <input placeholder="brewers_tip" type="text" name="brewers_tips"/>
//                         <input placeholder="contributed_by" type="text" name="contributed_by"/>
//                         <input placeholder="name" type="text" name="name"/>
//                         <label className="custom-file-upload">
//                             <input type="file" name="picture"/>
//                             upload beer picture
//                         </label>

//                         <button type="submit">Submit </button>
//                     </form>
//                     {this.state.error ? 
//                         <p>{this.state.error}</p>:
//                         ""
//                     }
//                 </div>
//             </>
//         )
//     }
// }