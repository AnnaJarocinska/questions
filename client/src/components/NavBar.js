import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Span from '../styles/Span';

const Navbar = () => {
    return ( 
        <Container nav>
            <Link to="/moreInforations"> <Span> <FontAwesomeIcon icon={faBinoculars} /> More informations </Span> </Link>
            <Link to="/"> <Span> <FontAwesomeIcon icon={faCampground} /> Home </Span> </Link>
            <Container buttons>
                <Link to="/login"> <Button login> Login </Button> </Link>
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container>      
         </Container>
     );
}
 
export default Navbar;