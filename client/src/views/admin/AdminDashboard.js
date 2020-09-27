import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Wrapper from '../../styles/Wrapper';
import Overlay from '../../styles/Overlay';
import QuestionParagraph from '../../styles/QuestionParagraph';
import AnswerParagraph from '../../styles/AnswerParagraph';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';

const AdminDashboard = () => {
    return (
        <>
            <NavBar admin logged/>
            <Wrapper>
                <Overlay>
                    <Container main>
                    <QuestionContainer admin>
                        <QuestionParagraph> Welcome to admin </QuestionParagraph>
                        <nav>
                            <ul>
                                <li>
                                    <AnswerParagraph>
                                        <Link to="/addingQuestion">Adding question</Link>
                                    </AnswerParagraph>    
                                </li> 
                                <li>
                                    <AnswerParagraph>
                                        <Link to="/users">Users</Link>
                                    </AnswerParagraph>
                                </li>
                            </ul>
                        </nav>
                        </QuestionContainer>
                    </Container>
                </Overlay>
            </Wrapper>
        </>
      );
}
 
export default AdminDashboard;