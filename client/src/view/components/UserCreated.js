import React from 'react';
import { Link } from 'react-router-dom';

const UserCreated = () => {
    return (
        <>
        <p>Your account has been created</p>
        <Link to="/login">Log in</Link>
        </>
      );
}
 
export default UserCreated;