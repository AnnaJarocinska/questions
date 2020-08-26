import React from 'react';
import Navigation from './Navigation';
import Button from '../styles/Button';
import Container from '../styles/Container';


const Navbar = () => {
    return ( 
        <Container>
            <Navigation/>
            <Container>
                <Button login> Login </Button>
                <Button login> Register </Button>
            </Container>      
         </Container>
     );
}
 
export default Navbar;