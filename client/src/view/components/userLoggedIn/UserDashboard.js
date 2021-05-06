import React from 'react';
import CapitalLetterParagraph from '../../../styles/CapitalLetterParagraph';
import Container from '../../../styles/Container';
import UserNav from './UserNav';

const UserDashboard = () => {

    return (
        <Container main>
            <Container separate user>
                <CapitalLetterParagraph> Welcome to user </CapitalLetterParagraph>
                <UserNav/>
            </Container>
        </Container>
      );
}
 
export default UserDashboard;