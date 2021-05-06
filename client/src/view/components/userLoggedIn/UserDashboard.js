import React from 'react';
import { useMediaQuery } from 'react-responsive';
import CapitalLetterParagraph from '../../../styles/CapitalLetterParagraph';
import Container from '../../../styles/Container';
import UserNav from './UserNav';

const UserDashboard = () => {

    const mobile = useMediaQuery({
        query: '(max-device-width: 600px)'
      })

    return (
        <Container main>
            <Container separate user>
                <CapitalLetterParagraph> Welcome to user </CapitalLetterParagraph>
                {!mobile ? <UserNav/> : null}
            </Container>
        </Container>
      );
}
 
export default UserDashboard;