import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../styles/Container';

const UserCreated = () => {
    return (
        <Container user>
        <p>Your account has been created</p>
        <Link to="/login">Log in</Link>
        </Container>
      );
}
 
export default UserCreated;