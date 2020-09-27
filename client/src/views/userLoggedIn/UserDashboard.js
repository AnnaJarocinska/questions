import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Wrapper from '../../styles/Wrapper';
import Overlay from '../../styles/Overlay';
import QuestionParagraph from '../../styles/QuestionParagraph';
import AnswerParagraph from '../../styles/AnswerParagraph';
import Container from '../../styles/Container';
import QuestionContainer from '../../styles/QuestionContainer';

const UserDashboard = () => {
    return (
        <>
            <NavBar user logged/>
            <Wrapper>
                <Overlay>
                    <Container main>
                    <QuestionContainer user>
                        <QuestionParagraph> Welcome to user </QuestionParagraph>
                        <nav>
                            <ul>
                                <li>
                                    <AnswerParagraph>
                                        <Link to="/addingQuestion">Adding question</Link>
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
 
export default UserDashboard;