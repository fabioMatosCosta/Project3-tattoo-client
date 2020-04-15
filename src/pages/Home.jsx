import React, { Component } from 'react';
import DefaultLayout from "../layout/Default";
import { getTattoos } from '../utils/tattoos';
import TattooContainerHome from '../components/TattooContainerHome'


class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            tattoos:getTattoos()
        }
    }   


    render() {
        return (
            <DefaultLayout>
                
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
