import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../styles/Container';
import Subtitle from '../../styles/Subtitle';

const UserCreated = () => {
    return (
        <Container form="true">
          <Subtitle>Your account has been created</Subtitle>
          <Link to="/login">Log in</Link>
        </Container>
      );
}
 
export default UserCreated;