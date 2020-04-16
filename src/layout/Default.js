import React from 'react';
import Nav from "../components/Nav";
import ArtNav from "../components/ArtNav";
import Footer from "../components/Footer";
import {getUser} from '../utils/auth';

function Default(props) {
    const user = getUser();
    return (
        <div>
            {user?
                <Nav />
            :
                <ArtNav />
            }
            {props.children}
            <Footer/>
        </div>
    )
}

export default Default;