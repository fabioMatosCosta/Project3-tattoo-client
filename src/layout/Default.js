import React from 'react';
import Nav from "../components/Nav";

function Default(props) {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default Default;
