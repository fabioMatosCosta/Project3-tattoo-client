import React, { Component } from 'react';
import DefaultLayout from "../layout/Default";
import { getTattoos } from '../utils/tattoos';
import TattooContainerHome from '../components/TattooContainerHome'
import "./Home.scss"

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            tattoos:getTattoos().slice(0,4)
        }
    }   


    render() {
        return (
            <DefaultLayout>
                <p className="mt">Want to do a tattoo and need inspiration? 
                Find awesome tattoo pics and their maker, just sign up or log in</p> 
                <div className="columns">
                    {this.state.tattoos.map((tattoo, index) => {
                            return (<TattooContainerHome key={index} id={tattoo._id} img={tattoo.imgPath} alt={tattoo.category} />)
                        })}
                        </div>
            </DefaultLayout>
        )
    }
}

export default Home
