import React from 'react';
import ArtNav from "../components/ArtNav";

function Default(props) {
    return (
        <div>
            <ArtNav />
            {props.children}
        </div>
    )
}

export default Default;
