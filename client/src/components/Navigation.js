    import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../styles/Container';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <Container>
                    <li>
                        <Link to="/">More informations</Link>
                    </li>   
                </Container>    
            </ul>  
        </nav>
     );
}
 
export default Navigation;