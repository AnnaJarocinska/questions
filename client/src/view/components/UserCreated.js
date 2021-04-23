import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../styles/Container';
import Paragraph from '../../styles/Paragraph';

const UserCreated = () => {
    return (
        <Container main>
          <Paragraph>Your account has been created</Paragraph>
          <Link to="/login">Log in</Link>
        </Container>
      );
}
 
export default UserCreated;