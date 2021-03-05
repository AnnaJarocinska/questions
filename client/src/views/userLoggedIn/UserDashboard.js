import React from 'react';
import { Link } from 'react-router-dom';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';
import Container from '../../styles/Container';

const UserDashboard = () => {
    return (
        <>
          <Container main>
            <Container separate user>
                <CapitalLetterParagraph> Welcome to user </CapitalLetterParagraph>
                    <nav>
                        <ul>
                            <li>
                                <Paragraph>
                                    <Link to="/user/game">Play</Link>
                                </Paragraph>    
                            </li> 
                            <li>
                                <Paragraph>
                                    <Link to="/user/game">Gaming history</Link>
                                </Paragraph>    
                            </li> 
                            <li>
                                <Paragraph>
                                    <Link to="/user/game">User details</Link>
                                </Paragraph>    
                            </li> 
                            <li>
                                <Paragraph>
                                    <Link to="/user/game">Capitals list</Link>
                                </Paragraph>    
                            </li> 
                        </ul>
                    </nav>
                </Container>
            </Container>
        </>
      );
}
 
export default UserDashboard;