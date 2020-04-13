import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from "../layout/Default";
import Tattoos from "./Tattoos"
import { getTattoos } from '../utils/tattoos';
import TattooContainer from '../components/TattooContainer'
import TattooContainerHome from '../components/TattooContainerHome'


class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            tattoos:getTattoos()
        }
    }   

    // componentDidMount(){
    //     axios.get("http://localhost:3001/")
    //     .then((response)=> {
    //         this.setState({name: response.data.name})
    //     })
    // }

    render() {
        return (
            <DefaultLayout>
                    {this.state.tattoos.map((tattoo, index) => {
                            return (<TattooContainerHome key={index} id={tattoo._id} img={tattoo.imgPath} alt={tattoo.category} />)
                        })}
            </DefaultLayout>
        )
    }
}

export default Home
