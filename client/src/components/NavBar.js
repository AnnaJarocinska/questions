import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Button from '../styles/Button';
import Container from '../styles/Container';

const Navbar = () => {
    return ( 
        <Container nav>
            <Navigation/>
            <Container buttons>
                <Link to="/login"> <Button login> Login </Button> </Link>
                <Link to="/newUser"> <Button login> Register </Button> </Link>
            </Container>      
         </Container>
     );
}
 
export default Navbar;