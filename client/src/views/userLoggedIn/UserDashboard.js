import React from 'react';
import { Link } from 'react-router-dom';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';

const UserDashboard = () => {
    return (
        <>
          <Container main>
            <QuestionContainer user>
                <CapitalLetterParagraph> Welcome to user </CapitalLetterParagraph>
                    <nav>
                        <ul>
                            <li>
                                <Paragraph>
                                    <Link to="/user/game">Play</Link>
                                </Paragraph>    
                            </li> 
                        </ul>
                    </nav>
                </QuestionContainer>
            </Container>
        </>
      );
}
 
export default UserDashboard;