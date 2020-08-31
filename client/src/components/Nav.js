import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import Button from '../styles/Button';
import Container from '../styles/Container';
import Span from '../styles/Span';

const Nav = ({home}) => {
   
    return ( 
        <>
         <Link to="/moreInforations"> 
            <Span> <FontAwesomeIcon icon={faBinoculars}/> </Span>
            <Span> More informations </Span> 
        </Link>
            {!home && <Link to="/"> <Span> <FontAwesomeIcon icon={faCampground} /> Home </Span> </Link>}
            <Container buttons>
                <Link to="/login"> <Button login> Login </Button> </Link>
                <Link to="/newUser"> <Button login> Register </Button> </Link>
                <Link to="/quiz"> <Button login yellow> Quick game </Button> </Link>
            </Container> 
        </>
     );
}
 
export default Nav;