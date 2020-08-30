import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Span from '../styles/Span';

const Navbar = () => {
    return ( 
        <Container nav>
            <Link to="/moreInforations"> <Span> More informations </Span> </Link>
            <Container buttons>
                <Link to="/login"> <Button login> Login </Button> </Link>
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container>      
         </Container>
     );
}
 
export default Navbar;