import React from 'react';
import { Link } from 'react-router-dom';
import CapitalLetterParagraph from '../../styles/CapitalLetterParagraph';
import Paragraph from '../../styles/Paragraph';
import Container from '../../styles/Container';

const AdminDashboard = () => {
    return (
        <>
            <Container main>
                <Container separate admin>
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
                </Container>
            </Container>
        </>
      );
}
 
export default AdminDashboard;