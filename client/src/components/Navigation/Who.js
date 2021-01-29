import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Span from '../../styles/Span';

const Who = ({admin, user, unnamed}) => {

    const who = admin ? "admin" : "user";
    const icon = (
    !unnamed ? 
    <Span admin={admin ? admin.toString() : undefined} user={user ? user.toString() : undefined}>
        <FontAwesomeIcon icon={faUser}/> {who} </Span> : null
        )
    return ( 
        <div>
            {icon}
        </div>
     );
}
 
export default Who;