import React from 'react';
import { Link } from 'react-router-dom';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';

const AdminDashboard = () => {
    return (
        <>
            <Container main>
                <QuestionContainer admin>
                    <CapitalLetterParagraph> Welcome to admin </CapitalLetterParagraph>
                    <nav>
                        <ul>
                            <li>
                                <Paragraph>
                                    <Link to="/addingQuestion">Adding question</Link>
                                </Paragraph>    
                            </li> 
                            <li>
                                <Paragraph>
                                    <Link to="/users">Users</Link>
                                </Paragraph>
                            </li>
                        </ul>
                    </nav>
                </QuestionContainer>
            </Container>
        </>
      );
}
 
export default AdminDashboard;