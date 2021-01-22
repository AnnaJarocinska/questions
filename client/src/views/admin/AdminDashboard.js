import React from 'react';
import { Link } from 'react-router-dom';
import QuestionParagraph from '../../styles/QuestionParagraph';
import AnswerParagraph from '../../styles/AnswerParagraph';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';

const AdminDashboard = () => {
    return (
        <>
            <Container main>
                <QuestionContainer admin>
                    <QuestionParagraph> Welcome to admin </QuestionParagraph>
                    <nav>
                        <ul>
                            <li>
                                <AnswerParagraph>
                                    <Link to="/admin/addingQuestion">Adding question</Link>
                                </AnswerParagraph>    
                            </li> 
                            <li>
                                <AnswerParagraph>
                                    <Link to="/admin/users">Users</Link>
                                </AnswerParagraph>
                            </li>
                        </ul>
                    </nav>
                </QuestionContainer>
            </Container>
        </>
      );
}
 
export default AdminDashboard;