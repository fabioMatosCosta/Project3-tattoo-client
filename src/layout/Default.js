import React from 'react';
import Nav from "../components/Nav";
import ArtNav from "../components/ArtNav";
import {getUser} from '../utils/auth';
<<<<<<< HEAD

=======
>>>>>>> 4cdb7f0ac06436ce8abfcb5a66b00f582f9553eb
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
        </div>
    )
}

export default Default;